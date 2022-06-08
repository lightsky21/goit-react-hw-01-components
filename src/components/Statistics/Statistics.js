import PropTypes from 'prop-types';
// import s from './Statistics.module.css'

function Statistics({ title, stats }) {
    
    return (
    <section class="statistics">
            {title ? <h2 class="title">Upload stats</h2> : null}

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>
)
}

export default Statistics;