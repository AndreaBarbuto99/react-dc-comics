


export default function MyCard(props) {

    const { thumb, title, series } = props.comic

    return (
        <div className="comic-card">
            <img src={thumb} alt={title} />
            <h4>{series.toUpperCase()}</h4>
        </div>
    )
} 