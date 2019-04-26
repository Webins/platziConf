import React from 'react';
import header from '../images/badge-header.svg';
import headerCenter from '../images/platziconf-logo.svg';
import './styles/BadgeEdit.css'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import PageLoading from '../components/PageLoading';
import '../components/styles/PageLoading.css';



class BadgeEdit extends React.Component{
    constructor(props){
        super(props)
        this.state={
    loading:true,
    error:null,        
    form:{
    firstName:'',
    lastName:'',
    email:'',
    jobTitle:'',
    twitter:'',
    avatar:''
  }
  }
}

fetchData= async (e)=>{
this.setState({loading:true, error:null})
try{
    const data = await api.badges.read(this.props.match.params.badgeId)
    //Match son los props que los route le pasan a los componentes todas las variables que insertamos en la ruta se acceden gracias a params
    this.setState({loading:false, form:data})
}catch(error){
this.setState({loading: false, error: error})
}
}
componentDidMount(){
    this.fetchData()
}



  handleChange= (e)=>{
      this.setState({
      form:{
          ...this.state.form,
          [e.target.name]: e.target.value,
      }
      })
  }
  handleSubmit= async (e)=>{
      e.preventDefault()
      // if(this.state.form === Badges.state.data){
      //     this.setState({loading:false})
      //     console.log('error')
      // }
      this.setState({loading:true, error:true })
      try{
          await api.badges.update(this.props.match.params.badgeId, this.state.form)
          this.setState({loading:false})
          this.props.history.push('/badges') //Queremos redirigir al usuario a badges cuando llege a esta linea
      }catch(error){
          this.setState({loading:false, error: error})
      }
  }
    render(){
        if(this.state.loading){
            return (
            <div className="PageLoading">
            <PageLoading/>
            </div>  )  
        }
        return(
            <React.Fragment>
                <div className='BadgeEdit__hero'>
                <img className='img-fluid' src={header} alt=""></img>
                <img className ='imgHero img-fluid' src={headerCenter} alt=""></img>
                </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                    
                    <Badge 
                    firstName={this.state.form.firstName || 'First name'}
                    lastName={this.state.form.lastName || 'Last name'}
                    title={this.state.form.jobTitle || 'Job title'}
                    socialMedia={this.state.form.twitter ||'Twitter'}
                    email={this.state.form.email || '@Mail.com'}
                    avatar={this.state.form.avatar || 'Avatar'}
                    />
                    </div>
                    <div className="col-6">
                    <h1>
                    Edit your Badge
                    </h1>
                        <BadgeForm 
                        onChange={this.handleChange} 
                        formValue={this.state.form}
                        onSubmit={this.handleSubmit}
                        error={this.state.error}
                        />
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default BadgeEdit;