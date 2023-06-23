import { memo, useState } from "react";
import { View } from "@tarojs/components";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./index.module.scss";


const HomeSelect = memo(function(props) {
  const { selectKey ,onTabClick} = props;
  // 定义一个状态 保存当前的index
  const [currentIndex, setcurrentIndex] = useState(0);
  function handelItemClick(index) {
    setcurrentIndex(index);
    // 将当前的状态带出去
    onTabClick && onTabClick(index)
  }
  return (
    <View className={styles["HomeSelect"]}>
      {selectKey.map((item, index) => {
        return (
          // 添加多个类利用classnames
          <View
            className={classNames(
              styles["text"],
              currentIndex === index ? styles["active"] : ""
            )}
            key={item}
            onClick={() => {
              handelItemClick(index);
            }}
          >
            {item}
          </View>
        );
      })}
    </View>
  );
});

export default HomeSelect;
HomeSelect.propTypes = {
  selectKey: PropTypes.array,
  onTabClick:PropTypes.func
};
