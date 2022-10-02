import React from "react";
import Notification from "./Notification";

const reservedNotifications =[
    {
        id:1,
        message:"첫번째 메세지입니다",
    },
    {
        id:2,
        message:"두 번째 메세지다.",
    },
    {
        id:3,
        message:"세 번째 메세지입니다.",
    },
]

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state={
            notifications:[],
        };

    }
    //1초마다 수행하는 함수
    componentDidMount()
    {
        const {notifications} = this.state;
        timer = setInterval(()=> {
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({//state는 함부로 수정 못함, setstate를 사용한다.
                    notifications:notifications,
                });
            }
            else{
                this.setState({
                    notifications:[],//배열을 비우는 작업
                });
                clearInterval(timer);
            }
        },1000);
    }

    render(){
        return (
            <div>
                {this.state.notifications.map((notifications)=> {
                    return(
                        <Notification
                            key = {notifications.id}
                            id = {notifications.id}
                            message={notifications.message}/>
                    );
                })}
            </div>
        )
    }
}

export default NotificationList;