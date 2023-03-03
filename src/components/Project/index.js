import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {
  Home,
  CoursesList,
  HomeOption,
  HomeSelect,
  HeaderLogo,
  Navbar,
  MainContainer,
  CourseItem,
  CourseItemImg,
  CourseName,
  Failure,
  FailureImg,
  FailureHeading,
  FailurePara,
  RetryButton,
} from './styledComponents'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

class Project extends Component {
  state = {isLoading: '', dataList: '', category: categoriesList[0].id}

  componentDidMount() {
    this.getData()
  }

  changeCategory = event =>
    this.setState({category: event.target.value}, this.getData)

  getData = async () => {
    this.setState({isLoading: 'loading'})

    const {category} = this.state

    const response = await fetch(
      `https://apis.ccbp.in/ps/projects?category=${category}`,
    )

    const data = await response.json()

    if (response.ok) {
      const projects = data.projects.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
      }))

      this.setState({
        isLoading: 'success',
        dataList: {projects, total: data.total},
      })
    } else {
      this.setState({isLoading: 'failure'})
    }
  }

  renderLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#1e293b" height="50" width="50" />
    </div>
  )

  renderFailure = () => (
    <Failure>
      <FailureImg
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailurePara>
        We cannot seem to find the page you are looking for.
      </FailurePara>
      <RetryButton onClick={this.getData} type="button">
        Retry
      </RetryButton>
    </Failure>
  )

  renderSuccess = () => {
    const {dataList} = this.state

    return (
      <CoursesList>
        {dataList.projects.map(each => (
          <CourseItem key={each.id}>
            <CourseItemImg src={each.imageUrl} alt={each.name} />
            <CourseName>{each.name}</CourseName>
          </CourseItem>
        ))}
      </CoursesList>
    )
  }

  renderPage = () => {
    const {isLoading} = this.state

    switch (isLoading) {
      case 'success':
        return this.renderSuccess()
      case 'failure':
        return this.renderFailure()
      case 'loading':
        return this.renderLoading()
      default:
        return null
    }
  }

  render() {
    const {category} = this.state
    return (
      <MainContainer>
        <Navbar>
          <HeaderLogo
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
          />
        </Navbar>
        <Home>
          <HomeSelect onChange={this.changeCategory} value={category}>
            {categoriesList.map(each => (
              <HomeOption value={each.id} key={each.id}>
                {each.displayText}
              </HomeOption>
            ))}
          </HomeSelect>
          {this.renderPage()}
        </Home>
      </MainContainer>
    )
  }
}

export default Project
