import Statistic from "./Statistic"

const Statistics = (props) => {
    

    return(
        <div>
            <Statistic text={'Good'} value={props.good} />
            <Statistic text={'Neutral'} value={props.neutral}/>
            <Statistic text={'Bad'} value={props.bad}  />
            <Statistic text={'All'} value={props.all} />
            <Statistic text={'Avg'} value={props.avg} />
        </div>
    )
}

export default Statistics