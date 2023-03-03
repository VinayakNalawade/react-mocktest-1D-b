import styled from 'styled-components'

export const Navbar = styled.nav`
  width: 100vw;
  background-color: #f1f5f9;
`

export const HeaderLogo = styled.img`
  width: 240px;
  padding: 2%;
  padding-left: 5%;
`

export const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

export const Home = styled.div`
  flex-grow: 1;
  padding: 5%;
  padding-top: 2%;
  background-color: #e6e9ec;
`
export const HomeHeading = styled.h1`
  font-size: 28px;
  color: #1e293b;
`

export const CoursesList = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`

export const CourseItem = styled.li`
  list-style-type: none;
  width: 240px;
  margin-right: 12px;
  background-color: #ffffff;
  margin-bottom: 30px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`

export const CourseItemImg = styled.img`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
`

export const CourseName = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: #1e293b;
  margin: 15px;
`

export const Failure = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`

export const FailureImg = styled.img`
  width: 55%;
`

export const FailureHeading = styled.h1`
  font-size: 38px;
  color: #1e293b;
`

export const FailurePara = styled.p`
  font-size: 18px;
  color: #64748b;
`
export const RetryButton = styled.button`
  outline: none;
  border: none;
  background-color: #4656a1;
  color: #ffffff;
  border-radius: 7px;
  padding: 8px;
  width: 80px;
  text-align: center;
`
export const HomeSelect = styled.select`
  border: 1px solid #cbd5e1;
  padding: 8px;
  width: 250px;
  outline: none;
  border-radius: 5px;
`

export const HomeOption = styled.option``
