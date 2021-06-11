import Header from './Header'
import Content from './Content'

const Course = (props) => {

    console.log(props)
    const {course, proto}= props

    // console.log("COurse:", course)
    // console.log("Proto:", proto)

    return(
        <div>
            <Header course={course} />
            <Content course={course} />
            
        </div> 
    )
}

export default Course