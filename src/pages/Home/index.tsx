import { Button, Typography } from 'antd'
import styles from './index.module.scss'
import { imageSlideDesktop, imageSlideMobile } from 'src/contents/imageSlide'
import ImageSlide from 'src/components/Home/ImageSlide'
import DepartmentsWorkshop from 'src/components/Home/Departments'
import EventActivities from 'src/components/Home/EventActivities'
import Sponsors from 'src/components/Sponsors'
import EventSchedules from 'src/components/Home/EventSchedules'
import { useContext } from 'react'
import { AuthContext } from 'src/utils/Context/AuthContext'
import { Link } from 'react-router-dom'
import { EVENTS_PATH } from 'src/configs/routes'
import { handleSignInWithGoogle } from 'src/utils/axios'

const Home: React.FC = (): JSX.Element => {
  const auth = useContext(AuthContext)

  const { Title } = Typography

  return (
    <>
      <div className={styles.homePage}>
        <div className={styles.imageSlideDesktop}>
          <ImageSlide images={imageSlideDesktop} />
        </div>
        <div className={styles.imageSlideMobile}>
          <ImageSlide images={imageSlideMobile} />
        </div>
        {!auth?.authContext.isAuthenticated && (
          <div style={{ textAlign: 'center' }} onClick={handleSignInWithGoogle}>
            <button className={styles.registerButton}>ลงทะเบียน</button>
          </div>
        )}
        <div className={styles.content}>
          <div className={styles.eventSchedules}>
            <Title level={2} style={{ textAlign: 'center' }}>
              กิจกรรม
            </Title>
            <EventSchedules showAll={false} />
            <div className={styles.button}>
              <Link to={EVENTS_PATH}>
                <Button type="default">ดูทั้งหมด</Button>
              </Link>
            </div>
          </div>
          <div className={styles.departmentActivities}>
            <Title level={2} style={{ textAlign: 'center' }}>
              กิจกรรมส่วนภาควิชา
            </Title>
            <DepartmentsWorkshop />
          </div>
          <div className={styles.collegeActivities}>
            <Title level={2} style={{ textAlign: 'center' }}>
              กิจกรรมส่วนกลาง
            </Title>
            <EventActivities />
          </div>
        </div>
        <Sponsors />
      </div>
    </>
  )
}

export default Home
