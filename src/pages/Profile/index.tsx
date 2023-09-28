import { Button, Typography } from 'antd'
import styles from './index.module.scss'
import { useContext } from 'react'
import { AuthContext } from 'src/utils/Context/AuthContext'
import { LoadingPage } from '../Loading'
import ProfileInfo from 'src/components/Profile/ProfileInfo'
import { axiosInstance } from 'src/utils/axios'
import { useNavigate } from 'react-router-dom'

const Profile: React.FC = (): JSX.Element => {
  const { Title } = Typography

  const user = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = async () => {
    const res = await axiosInstance.post('/api/auth/logout')
    if (res.status === 200) {
      navigate(0)
    }
  }

  // TODO : E-stamp handler

  // useEffect(() => {

  // }, [])

  if (!user) return <LoadingPage />

  return (
    <div className={styles.profilePage}>
      <ProfileInfo auth={user.authContext} />
      <div className={styles.eStamp}>
        <Title level={3}>E-Stamp</Title>
      </div>
      <div className={styles.logout}>
        <Button onClick={handleLogout} type="primary">
          ออกจากระบบ
        </Button>
      </div>
    </div>
  )
}

export default Profile
