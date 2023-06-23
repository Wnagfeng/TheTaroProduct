import { memo, useEffect } from "react";
import { View } from "@tarojs/components";
import { useSelector, useDispatch } from "react-redux";
import { useReachBottom, useLoad } from "@tarojs/taro";
import {
  getHomeInfoThunkAction,
  getRecommendThunkAction,
  getGoodsThunkAction,
  setCurrentTab,
  tabs
} from "@/store/modules/home";

import HomeSearch from "./cpns/home-search/index";
import HomeBanner from "./cpns/home-banner/index";
import HomePopular from "./cpns/home-popular/index";
import HomeRecommend from "./cpns/home-recommend";
import HomeSelect from "./cpns/home-select";
import HomeGridView from "./cpns/home-grid-view";

import styles from "./index.module.scss";

const Home = memo(function() {
  // 从 redux store 中读取数据
  const { banners, populars, recommend, goodsList, currentTab } = useSelector(
    state => {
      return {
        banners: state.home.banners,
        populars: state.home.populars,
        recommend: state.home.recommend,
        goodsList: state.home.goodsList,
        currentTab: state.home.currentTab
      };
    }
  );

  const dispath = useDispatch();

  // 页面加载时开发发起网络请求
  useLoad(() => {
    dispath(getHomeInfoThunkAction());
    dispath(getRecommendThunkAction());
    // type:0  page: 1---获取商品列表数据
    // 一上来我们把两种数据的初始化数据都给获取一下后面通过切换tabNames来切换数据的展示
    dispath(getGoodsThunkAction({ type: 0, page: 1 }));
    dispath(getGoodsThunkAction({ type: 1, page: 1 }));
  });

  function handelTabItemClick(index) {
    dispath(setCurrentTab(tabs[index]));
  }
  useEffect(() => {});
  useReachBottom(() => {
    // 如果触发多次就节流一下
    // 获取到当前的类型 并且发请求获取数据
    const newPAge = goodsList[currentTab].page + 1;
    const type = tabs[0] === currentTab ? 0 : 1;
    dispath(getGoodsThunkAction({ type: type, page: newPAge }));
  });

  return (
    <View className={styles["home"]}>
      <HomeSearch></HomeSearch>
      <HomeBanner banners={banners}></HomeBanner>
      <HomePopular populars={populars}></HomePopular>
      <HomeRecommend recommendData={recommend}></HomeRecommend>
      <HomeSelect
        selectKey={["精选专场", "精选单品"]}
        onTabClick={handelTabItemClick}
      ></HomeSelect>
      <HomeGridView GridData={goodsList[currentTab].list}></HomeGridView>
    </View>
  );
});

export default Home;
