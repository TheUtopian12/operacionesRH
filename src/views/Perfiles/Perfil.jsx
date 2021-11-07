import React from 'react'

import { Card } from 'antd';

const { Meta } = Card;

export const Perfil = () => {
    return (
        <div className="content">
            <Card
    hoverable
    style={{ width: 600 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>

        </div>
    )
}
