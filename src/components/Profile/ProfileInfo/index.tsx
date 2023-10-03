import { Image, Space, Typography } from 'antd'
import styles from './index.module.scss'
import { AccountType } from 'src/contents/register/enum'

interface Props {
  user: IUserInfo
}

export interface IUserInfo {
  prefix: string
  firstName: string
  lastName: string
  firstNameEng: string
  lastNameEng: string
  phone: string
  accountType: AccountType
  educationLevel?: string
  schoolName?: string
  email: string
  profileUrl: string
}

const ProfileInfo: React.FC<Props> = ({ user }: Props): JSX.Element => {
  const { Title, Text } = Typography

  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <Image src={user.profileUrl} alt="avatar" width={150} height={150} preview={false} />
      </div>
      <div className={styles.content}>
        <Space direction="vertical" align="center" style={{ width: '100%' }}>
          <Title level={2}>
            {user.firstName} {user.lastName}
          </Title>
          <Title level={3}>
            {user.firstNameEng} {user.lastNameEng}
          </Title>
          {user.accountType === AccountType.student && <Text className={styles.schoolName}>{user.schoolName}</Text>}
        </Space>
        <Space direction="vertical" align="center" style={{ width: '100%', marginTop: '20px' }}>
          <Text>อีเมล: {user.email}</Text>
          <Text>เบอร์โทรศัพท์: {user.phone}</Text>
        </Space>
      </div>
    </div>
  )
}

export default ProfileInfo
