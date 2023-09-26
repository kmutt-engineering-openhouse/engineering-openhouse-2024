import { Navigate, useParams } from 'react-router-dom'
import { Typography } from 'antd'
import { BASE_PATH } from 'src/configs/routes'
import ImageHeader from 'src/components/ImageHeader'
import { IEvent, events } from 'src/contents/event/events'
import styles from './inedx.module.scss'
import EventSchedule from 'src/components/Event/EventSchedule'

const Event: React.FC = (): JSX.Element => {
  const { event } = useParams()

  const { Paragraph, Title } = Typography

  const eventInfo = events.filter((info: IEvent) => info.link === event)[0]

  if (!event || !eventInfo) return <Navigate to={BASE_PATH} />

  return (
    <div className={styles.eventPage}>
      <ImageHeader title={eventInfo.title} image={eventInfo.image} />
      <div className={styles.content}>
        <div className={styles.description}>
          <Title level={3} style={{ textAlign: 'center' }}>
            รายละเอียด
          </Title>
          <Paragraph style={{ color: '#FFFFFF' }}>{eventInfo.description}</Paragraph>
        </div>
        {eventInfo.rounds && eventInfo.lowerDescription && (
          <EventSchedule rounds={eventInfo.rounds} description={eventInfo.lowerDescription} />
        )}
      </div>
    </div>
  )
}

export default Event
