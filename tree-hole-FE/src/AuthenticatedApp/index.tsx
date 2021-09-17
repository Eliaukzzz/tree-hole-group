import React from "react";
import { Route, Switch } from "react-router";
import { Header } from "../components/Header";
import { Account } from "../pages/Account";
import { Home } from "../pages/Home";

// 状态为已经登录的界面
export const AuthenticatedApp = () => {
  return (
    <>
      <div className="relative max-w-screen-xl mx-auto min-h-main-h bg-white rounded-lg shadow-2xl">
        {/* 导航栏 */}
        <Header />
        {/* Routes */}
        <Switch>
          {/* 树洞主页 */}
          <Route path="/" exact component={Home} />
          {/* 用户信息页面 */}
          <Route path="/account/:id" component={Account} />
        </Switch>
      </div>
    </>
  );
};
