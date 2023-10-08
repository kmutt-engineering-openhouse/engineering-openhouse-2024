import { Collapse, CollapseProps, Image } from 'antd'
import styles from './index.module.scss'
import { stampImages, IStampImage, StampEnum } from 'src/contents/stamps'
import React, { useEffect } from 'react'
import { cacheImage } from 'src/utils/cacheImage'
import { filterStampVariant } from 'src/utils/stamp'

interface Props {
  stamps: IStampEvent
}

export interface IStampEvent {
  carnival: IStamp[]
  central: IStamp[]
  tour: IStamp[]
  workshop: IStamp[]
}

export interface IStamp {
  department: string
  status: boolean
}
const EStampComponent: React.FC<Props> = ({ stamps }: Props): JSX.Element => {
  const renderStamp = (event: StampEnum) => {
    return stamps[event].map((stamp: IStamp, i: number) => {
      const { style: stampStyle, stampImage } = filterStampVariant(stamp, event)
      return <Image className={styles.image} style={stampStyle} preview={false} key={i} src={stampImage} alt="stamp" />
    })
  }

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'นิทรรศการ',
      style: {
        border: 0,
        fontWeight: 'bold',
        fontSize: '16px',
      },
      children: (
        <div className={styles.stamps}>
          <div className={styles.stampImages}>{renderStamp(StampEnum.carnival)}</div>
        </div>
      ),
    },
    {
      key: '2',
      label: 'Workshop',
      style: {
        border: 0,
        fontWeight: 'bold',
        fontSize: '16px',
      },
      children: (
        <div className={styles.stamps}>
          <div className={styles.stampImages}>{renderStamp(StampEnum.workshop)}</div>
        </div>
      ),
    },
    {
      key: '3',
      label: 'พี่พาน้องทัวร์',
      style: {
        border: 0,
        fontWeight: 'bold',
        fontSize: '16px',
      },
      children: (
        <div className={styles.stamps}>
          <div className={styles.stampImages}>{renderStamp(StampEnum.tour)}</div>
        </div>
      ),
    },
    {
      key: '4',
      label: 'ส่วนกลาง',
      style: {
        border: 0,
        fontWeight: 'bold',
        fontSize: '16px',
      },
      children: (
        <div className={styles.stamps}>
          <div className={styles.stampImages}>{renderStamp(StampEnum.central)}</div>
        </div>
      ),
    },
  ]

  useEffect(() => {
    stampImages.map((stamp: IStampImage) => cacheImage(stamp.image))
  }, [])

  return (
    <div className={styles.eStamp}>
      <Collapse bordered={false} items={items} defaultActiveKey={['1']} style={{ marginBottom: '20px' }} />
    </div>
  )
}

export default EStampComponent
