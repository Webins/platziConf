import React from 'react';
import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgeList'
import '../components/styles/BadgeList.css'
import {Link} from 'react-router-dom'
import api from '../api';
import NotFound from '../components/NotFound';
import PageLoading from '../components/PageLoading';
import '../components/styles/PageLoading.css';
// import MiniLoader from '../components/MiniLoader';

class Badges extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loading: true,
            error: null,
            data:[]
            }
        }
        
        
        fetchData = async ()=>{
              this.setState({loading: true, error: null});
              try{
                  const data = await api.badges.list(); 
                  this.setState({loading:false, data:data });
              }catch(error){
                  this.setState({loading:false, error: error});
                }
            }
        componentDidMount(){
            console.log(this.fetchData())
            this.fetchData()
            // this.IntervalId= setInterval(this.fetchData, 5000) //Polling 
             
        }
            

            render(){
            // if(this.state.loading === true && !this.state.data){ //POLLING
                if(this.state.loading){
                return (
                <div className="PageLoading">
                <PageLoading/>
                </div>       
            )}
            if(this.state.error){
                return (<React.Fragment>
                <NotFound/>
                </React.Fragment>
                )
                    
                    
            }
            return(
                <React.Fragment>
                        <div className="Badges">
                            <div className="Badges__hero">
                            <img className="Badges_conf-logo" src={confLogo} alt=""/>
                            </div>
                            
                        
                    </div>
                <div className="Badges__container"></div>
                    <div className=" Badges__buttons"> 
                        <Link to="/badges/new" className="btn btn-primary buttonC">Create your new badge</Link>
                    </div>
                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList badges={this.state.data}
                        />
                            {/* {this.state.loading &&  <Polling
                            <MiniLoader /> */}
                            }
                    </div>
                </div>
                </React.Fragment>
    
                
                )}

                

        componentDidUpdate(prevProps, prevState){
            console.log({
                prevProps: prevProps,
                prevState: prevState
            })
        
            
        }

        // componentWillUnmount(){
        //     clearTimeout(this.setTimeoutId);  
        //     clearInterval(this.setIntervalId);  //Polling
        // }
    }      


    

export default Badges;