import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome'
import Greet from './components/Greet'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import InlineStyle from './components/InlineStyle'
import './appStyle.css'
import styles from './appStyle.module.css'
import Form from './form/Form'
import LifecycleA from './LifecycleComponents/LifecycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import Purecom from './components/Purecom'
import ParentComponentForRegular from './components/ParentComponentForRegular'

import PortalDemo from './components/PortalDemo'
import ClickCounterHOC from './components/ClickCounterHOC'
import User from './components/User'
import { UserProvider } from './components/userContext'
import ComponentC from './components/ComponentC'
import HookCounter from './hooks/HookCounter'
import HookCounter2 from './hooks/HookCounter2'
import UseEffectCounter from './hooks/UseEffectCounter'
import Toastr from './poc/Toastr'
import MyLoader from './poc/MyLoader'
import MyFont from './designs/MyFont'
import MyTable from './poc/MyTable';
import ExampleCounter from './hooks/ExampleCounter';

class App extends React.Component

{

  render(){
    return (
      <div className="App">
        {/* <ClickCounterHOC/>
        <User render= { (isLoggedIn) => isLoggedIn ? "Amit Singh":"Guest"}/>
        <UserProvider value="AmitSingh">
          <ComponentC/>
        </UserProvider> */}
        <HookCounter2/>
        <Toastr/>  
        <MyLoader/>  
        <MyFont/>
        <MyTable/>
        <UseEffectCounter/>
        <ExampleCounter/>
        {/* <PortalDemo/> */}
        {/* <ParentComponentForRegular/> */}
        {/* <LifecycleA /> */}
        {/* <FragmentDemo/> */}
        {/* <Table/> */}

        {/* <Form /> */}
        {/* <h1 className = {styles.success}>Success</h1>
        <h1 className = "error" >Error</h1>
        <Stylesheet primary={true} />
        <InlineStyle/> */}
        {/* <NameList/> */}

        {/* <UserGreeting />
        <ParentComponent /> */}
        {/* <FunctionClick/>
          <ClassClick/>
        
          <Message/>
          <Counter/>
          <Welcome name="Amit" heroName="Batman"><p> This is child element </p></Welcome>
          {/* <Welcome name="Kumar" heroName="Wonderman"/>
          <Welcome name="Singh" heroName="Aquaman"/> }
          { <Greet name="Amit" heroName="Batman"><p> This is children of child</p></Greet> } }
          { <Greet name="Kumar" heroName="Wonderman"/> */}
    </div>

    );
  }

}

export default App;
