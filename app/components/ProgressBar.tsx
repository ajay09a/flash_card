export default function ProgressBar ({current, total}:any){
    const percentage = ((current+1)/total)*100;
    return (
        <div className="progress-bar">
            <div
            className="progress-percentage"
            style={{width: `${percentage}`}}/>
        </div>
    )
}