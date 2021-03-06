import React,{ Component } from 'react'
import { Alert } from 'antd'
import { Link } from 'react-router-dom'

import './index.css'

class Err extends Component{
    render(){
        return (
            <div className='Err'>
                    <Alert
                      message="页面不存在"
                      description="您访问的页面走丢了,请确认页面地址是否正确"
                      type="error"
                      showIcon
                    />
                    <Link to="/" >回到首页</Link>
            </div>
        )
    }
}

export default Err