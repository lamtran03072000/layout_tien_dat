import React, { useEffect, useRef } from 'react';

export default function CustomCountUp({ numberCounter }) {
  const countupRef = useRef(null);
  let countUpAnim = useRef(null); // Sử dụng useRef để giữ tham chiếu đến animation

  useEffect(() => {
    // Định nghĩa hàm async bên trong useEffect
    async function initCountUp() {
      const countUpModule = await import('countup.js');
      countUpAnim.current = new countUpModule.CountUp(
        countupRef.current,
        numberCounter,
        {
          enableScrollSpy: true,
          duration: 3,
          scrollSpyOnce: true,
          formattingFn: (value) => {
            // Chuyển giá trị số thành chuỗi và loại bỏ dấu phân cách
            return value.toFixed(0);
          },
        },
      );
      if (!countUpAnim.current.error) {
        countUpAnim.current.start();
      } else {
        console.error(countUpAnim.current.error);
      }
    }
    initCountUp();

    // Hàm dọn dẹp
    return () => {
      if (countUpAnim.current) {
        countUpAnim.current.pauseResume(); // Hoặc phương thức phù hợp để dừng animation
      }
    };
  }, [numberCounter]); // Thêm numberCounter vào dependency array

  return <span ref={countupRef}>0</span>;
}
