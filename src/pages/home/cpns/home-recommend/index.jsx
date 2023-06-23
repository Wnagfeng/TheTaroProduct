import { memo } from "react";
import { View, Image } from "@tarojs/components";
import PropTypes from "proptypes";
import Taro from "@tarojs/taro";
import styles from "./index.module.scss";

const HomeRecommend = memo(function(props) {
  const { recommendData } = props;
  if (!recommendData) return;
  return (
    <View className={styles["Wrapper"]}>
      {/* {recommendData} */}
      {/* 上面的图片 */}
      <Image
        className={styles["ad_big_top"]}
        src={recommendData.ad_big_top.pic}
      ></Image>
      {/* 中间的图片 */}
      <View className={styles["inner"]}>
        <View className={styles["left"]}>
          <Image
            className={styles["leftImage"]}
            src={recommendData.ad_left.pic}
            mode="widthFix"
          ></Image>
        </View>
        <View className={styles["right"]}>
          <View className={styles["one"]}>
            <Image
              className={styles["rightImage"]}
              src={recommendData.ad_right1.pic}
              mode="widthFix"
            ></Image>
          </View>
          <View className={styles["two"]}>
            <Image
              className={styles["right1Image"]}
              src={recommendData.ad_right2.pic}
              mode="widthFix"
            ></Image>
          </View>
        </View>
      </View>
      <Image
        className={styles["bottom"]}
        src={recommendData.ad_big_bottom.pic}
        mode="widthFix"
      ></Image>
    </View>
  );
});
export default HomeRecommend;
HomeRecommend.propTypes = {
  recommendData: PropTypes.object
};
