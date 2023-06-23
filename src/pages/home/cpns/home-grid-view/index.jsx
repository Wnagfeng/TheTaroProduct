import { memo } from "react";
import { View, Image, Text } from "@tarojs/components";
import PropTypes from "proptypes";
import styles from "./index.module.scss";

const HomeGridView = memo(function(props) {
  const { GridData } = props;
  return (
    <View className={styles["wrapper"]}>
      {GridData.map(item => {
        return (
          <View key={item.goods_id} className={styles["inner"]}>

              <Image className={styles["image"]} src={item.pic_url} mode="widthFix"></Image>
              <Image className={styles["logo"]} src={item.logo_url} mode="widthFix"></Image>

            <Text className={styles["coupon_tips"]}>{item.coupon_tips}</Text>
            <View className={styles["bottominfo"]}>
              <Text className={styles["title_long"]}>{item.title_long}</Text>
              <Text className={styles["time_left"]}>{item.time_left}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
});

export default HomeGridView;
HomeGridView.propTypes = {
  GridData: PropTypes.array
};
