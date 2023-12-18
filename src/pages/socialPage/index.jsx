import s from './styles.module.scss'
import images from 'images'

const linkData = [
  {
    field: 'REVIEWS',
    link: 'https://g.co/kgs/3GRSXu',
    image: images.review
  },
  {
    field: 'INSTAGRAM',
    link: 'https://instagram.com/preka_ent_clinic?igshid=MzRlODBiNWFlZA==',
    image: images.instagram
  },
  {
    field: 'FACEBOOK',
    link: 'https://www.facebook.com/profile.php?id=100077365521089&mibextid=ZbWKwL',
    image: images.facebook
  },
  {
    field: 'YOUTUBE',
    link: 'https://youtube.com/@PrekaENT?si=qPfnDiDOhYAdl3e3',
    image: images.youtube
  }
]

export default function Main() {
  return (
    <div className={s.main}>
      <div className={s.inner}>
        <div className={s.logo}>
          <img src={images.logo1} alt='' />
        </div>
        <div className={s.title}>Click Here For</div>
        <div className={s.links}>
          {linkData.map(({ field, link, image }, i) => (
            <a href={link} key={i} className={s.link} target='_blank' rel='noreferrer'>
              <div>
                <img src={image} alt='' />
              </div>
              <div>{field}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
