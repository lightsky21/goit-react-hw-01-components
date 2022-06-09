import PropTypes from 'prop-types';
// import s from './Statistics.module.css'

function Statistics({ title, stats }) {
    
    return (
    <section className="statistics">
            {title ? <h2 className="title">Upload stats</h2> : null}

        <ul className="stat-list">

          {stats.map(({ id, label, percentage }) => (
            <li key={id} className="item">
              <span className="label">{label }</span>
              <span className="percentage">{ percentage}%</span>
            </li>))}
           
        </ul>
</section>
)
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Statistics;