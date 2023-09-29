import { Button, Space, Typography } from 'antd'
import { IDepartmentInfo } from 'src/contents/department/departmentInfo'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { ABOUT_PATH } from 'src/configs/routes'
interface Props {
  department: IDepartmentInfo
}

const DepartmentLocation: React.FC<Props> = ({ department }: Props): JSX.Element => {
  const { Title } = Typography

  return (
    <div>
      <Title level={3} style={{ textAlign: 'center' }}>
        สถานที่
      </Title>
      <Title level={4} style={{ textAlign: 'center' }}>
        {department.location}
      </Title>
      <Space direction="vertical" align="center" style={{ width: '100%' }}>
        <div className={styles.map}>
          <iframe
            src={department.gmap}
            style={{ border: 0 }}
            allowFullScreen={false}
            className={styles.googleMap}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <Link to={ABOUT_PATH}>
          <Button type="default" style={{ border: 'none' }}>
            ดูแผนที่ภายในงาน
          </Button>
        </Link>
      </Space>
    </div>
  )
}

export default DepartmentLocation
