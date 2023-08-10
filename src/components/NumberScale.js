import {useState,React} from 'react'


export default function NumberScale({row,emoji,btnbg,btncolr, customize,setCustomize,setScale}) {
 

  const [isHovered, setIsHovered] = useState(false);
 
  // Event handlers for hover
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleCustomize = () => {
     !customize && setCustomize(true);
     setScale({row,emoji,btnbg,btncolr});
  };



  const buttonStyle = {
    background: btnbg ? btnbg :  'rgb(142, 216, 142)',
    color:btncolr ?btncolr: 'white',
    transform:row ? '' : `rotate(270deg)`
    
    // Add other styles here as needed
  };
  const buttonStylecond=!emoji?buttonStyle:{transform:row ? '' : `rotate(270deg)`};
  return (
    <div  className={`frame `}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave} style={{background:`${row ? '#E8D6F1':'#F2D5DD'}` }}>
        <div className={`frame__scale ${isHovered ? 'hovered' : ''}`} style={{transform:`${row ? '':'rotate(90deg)'}`}}>
          <label className='scale_typo'>How would you rate it?</label>
          <div className='scale__buttons'>
            <button className={`${emoji ? 'emoji':'btn'}`} style={buttonStylecond}>{emoji ? <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <path d="M23.6561 29.5167H14.2629C13.8996 29.5152 13.5426 29.4224 13.2246 29.2467C12.9067 29.071 12.638 28.8182 12.4434 28.5114C12.2511 28.2115 12.1376 27.868 12.1133 27.5125C12.0891 27.1571 12.1549 26.8013 12.3047 26.4781C13.4419 24.0559 16.046 22.4911 18.9686 22.4911C21.8912 22.4911 24.509 24.0559 25.6349 26.4781C25.7849 26.8014 25.8507 27.1574 25.8261 27.5129C25.8014 27.8684 25.6871 28.212 25.4939 28.5114C25.2981 28.8212 25.0266 29.076 24.7051 29.2519C24.3836 29.4278 24.0226 29.5189 23.6561 29.5167ZM18.9595 23.5601C16.4577 23.5601 14.2151 24.8815 13.2736 26.9284C13.1978 27.0887 13.1646 27.2657 13.1769 27.4426C13.1892 27.6194 13.2468 27.7901 13.3441 27.9383C13.4433 28.0945 13.5804 28.2231 13.7426 28.3121C13.9048 28.4012 14.0869 28.4478 14.272 28.4477H23.6561C23.8412 28.4479 24.0232 28.401 24.1851 28.3114C24.347 28.2219 24.4835 28.0927 24.5818 27.936C24.6795 27.7884 24.7374 27.6182 24.7502 27.4417C24.7629 27.2653 24.73 27.0885 24.6546 26.9284C23.7039 24.8815 21.4682 23.5601 18.9595 23.5601Z" fill="black"/>
  <path d="M18.9593 37.9187C15.2095 37.9187 11.5439 36.8067 8.4261 34.7234C5.30825 32.6402 2.87819 29.6791 1.4432 26.2148C0.00821476 22.7504 -0.367243 18.9383 0.364307 15.2606C1.09586 11.5828 2.90156 8.20458 5.55307 5.55307C8.20458 2.90156 11.5828 1.09586 15.2606 0.364307C18.9383 -0.367243 22.7504 0.00821476 26.2148 1.4432C29.6791 2.87819 32.6402 5.30825 34.7234 8.4261C36.8067 11.5439 37.9187 15.2095 37.9187 18.9593C37.9133 23.986 35.914 28.8052 32.3596 32.3596C28.8052 35.914 23.986 37.9133 18.9593 37.9187ZM18.9593 1.10536C15.4282 1.10536 11.9763 2.15248 9.0402 4.1143C6.10413 6.07612 3.81574 8.86453 2.46442 12.1269C1.11309 15.3893 0.759523 18.9791 1.44842 22.4425C2.13732 25.9058 3.83775 29.0871 6.33467 31.584C8.8316 34.0809 12.0129 35.7814 15.4762 36.4703C18.9395 37.1592 22.5294 36.8056 25.7918 35.4543C29.0541 34.1029 31.8426 31.8146 33.8044 28.8785C35.7662 25.9424 36.8133 22.4905 36.8133 18.9593C36.8073 14.226 34.9243 9.68829 31.5774 6.34132C28.2304 2.99435 23.6927 1.11138 18.9593 1.10536Z" fill="black"/>
  <path d="M9.87996 24.1107C9.76229 24.1103 9.64786 24.0722 9.55331 24.0022C9.45876 23.9322 9.38902 23.8338 9.35426 23.7214C9.3195 23.609 9.32152 23.4884 9.36002 23.3772C9.39853 23.266 9.47152 23.17 9.56837 23.1032L14.572 19.6916C14.8488 19.5302 15.0921 19.3171 15.2885 19.0639C15.3392 18.9967 15.371 18.9172 15.3806 18.8336C15.3902 18.75 15.3773 18.6654 15.343 18.5885C15.2524 18.5047 15.1496 18.4349 15.0383 18.3816L9.05435 15.1224C8.93237 15.0487 8.84355 14.9308 8.80644 14.7932C8.76932 14.6556 8.78677 14.509 8.85514 14.384C8.92352 14.259 9.03754 14.1652 9.1734 14.1223C9.30926 14.0793 9.45646 14.0905 9.58429 14.1535L15.5591 17.4127C15.8083 17.5314 16.0293 17.702 16.2073 17.913C16.3854 18.1686 16.4808 18.4726 16.4808 18.7841C16.4808 19.0956 16.3854 19.3996 16.2073 19.6552C15.9338 20.0381 15.5847 20.3609 15.1816 20.6036L10.1779 24.0152C10.0899 24.0752 9.98642 24.1084 9.87996 24.1107Z" fill="black"/>
  <path d="M28.041 24.1109C27.93 24.1104 27.8216 24.0772 27.7294 24.0154L22.7258 20.6038C22.3226 20.361 21.9735 20.0383 21.7 19.6554C21.5226 19.3995 21.4275 19.0956 21.4275 18.7843C21.4275 18.4729 21.5226 18.169 21.7 17.9132C21.8785 17.7027 22.0994 17.5322 22.3482 17.4128L28.3253 14.1536C28.3892 14.1135 28.4607 14.0869 28.5353 14.0755C28.6098 14.064 28.686 14.068 28.7589 14.0871C28.8319 14.1062 28.9002 14.14 28.9597 14.1865C29.0191 14.233 29.0683 14.2912 29.1044 14.3574C29.1405 14.4237 29.1626 14.4966 29.1695 14.5718C29.1763 14.6469 29.1677 14.7226 29.1441 14.7943C29.1205 14.866 29.0826 14.9321 29.0325 14.9885C28.9824 15.045 28.9213 15.0906 28.853 15.1225L22.8895 18.3817C22.7775 18.4339 22.6746 18.5038 22.5848 18.5887C22.5505 18.6655 22.5376 18.7502 22.5472 18.8338C22.5568 18.9174 22.5886 18.9969 22.6393 19.064C22.8351 19.3178 23.0785 19.531 23.3558 19.6917L28.3594 23.1033C28.4563 23.1702 28.5293 23.2662 28.5678 23.3773C28.6063 23.4885 28.6083 23.6091 28.5735 23.7215C28.5388 23.8339 28.4691 23.9323 28.3745 24.0023C28.2799 24.0724 28.1655 24.1104 28.0479 24.1109H28.041Z" fill="black"/>
  <path d="M7.86274 13.8759C7.47189 13.8764 7.08192 13.8391 6.69825 13.7645C6.62331 13.7548 6.55116 13.7298 6.48625 13.6911C6.42134 13.6524 6.36506 13.6008 6.32088 13.5395C6.27669 13.4782 6.24555 13.4085 6.22937 13.3347C6.21319 13.2609 6.21232 13.1846 6.22681 13.1104C6.2413 13.0362 6.27084 12.9658 6.31361 12.9036C6.35638 12.8413 6.41148 12.7884 6.47548 12.7482C6.53949 12.7081 6.61105 12.6815 6.68575 12.6701C6.76044 12.6586 6.83669 12.6627 6.90977 12.6819C10.1417 13.3142 13.8762 10.5144 15.9596 7.65092C16.0004 7.58781 16.0537 7.5337 16.1162 7.49189C16.1787 7.45009 16.249 7.42147 16.323 7.40779C16.3969 7.39411 16.4728 7.39565 16.5461 7.41232C16.6194 7.429 16.6886 7.46045 16.7493 7.50476C16.81 7.54907 16.8611 7.6053 16.8993 7.67002C16.9376 7.73474 16.9622 7.80658 16.9718 7.88115C16.9813 7.95572 16.9755 8.03145 16.9548 8.10371C16.934 8.17597 16.8988 8.24324 16.8511 8.3014C14.7269 11.2081 11.2448 13.8759 7.86274 13.8759Z" fill="black"/>
  <path d="M30.0584 13.8759C26.6764 13.8759 23.2011 11.2103 21.07 8.3014C21.0224 8.24324 20.9871 8.17597 20.9664 8.10371C20.9457 8.03145 20.9399 7.95572 20.9494 7.88115C20.9589 7.80658 20.9836 7.73474 21.0218 7.67002C21.0601 7.6053 21.1111 7.54907 21.1719 7.50476C21.2326 7.46045 21.3017 7.429 21.375 7.41232C21.4483 7.39565 21.5243 7.39411 21.5982 7.40779C21.6721 7.42147 21.7425 7.45009 21.805 7.49189C21.8674 7.5337 21.9207 7.58781 21.9616 7.65092C24.054 10.5144 27.7795 13.3142 31.0114 12.6864C31.0825 12.6727 31.1556 12.6731 31.2265 12.6876C31.2974 12.7021 31.3648 12.7304 31.4248 12.771C31.4848 12.8115 31.5362 12.8635 31.5761 12.9239C31.616 12.9843 31.6436 13.052 31.6573 13.1231C31.6711 13.1942 31.6707 13.2673 31.6562 13.3382C31.6416 13.4092 31.6133 13.4765 31.5728 13.5365C31.5322 13.5965 31.4802 13.6479 31.4198 13.6878C31.3594 13.7277 31.2917 13.7553 31.2206 13.769C30.8376 13.842 30.4484 13.8778 30.0584 13.8759Z" fill="black"/>
</svg>:0}</button>

<button className={`${emoji ? 'emoji':'btn'}`} style={buttonStylecond}>{emoji ? <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
  <g clip-path="url(#clip0_143_299)">
    <path d="M19.4784 37.9188C15.7284 37.9188 12.0626 36.8067 8.94455 34.7233C5.82652 32.6399 3.39631 29.6787 1.96123 26.2141C0.52616 22.7496 0.150679 18.9373 0.882273 15.2593C1.61387 11.5813 3.41968 8.20288 6.07135 5.55121C8.72302 2.89954 12.1015 1.09373 15.7794 0.362131C19.4574 -0.369463 23.2697 0.00601799 26.7343 1.44109C30.1989 2.87616 33.1601 5.30638 35.2435 8.42441C37.3269 11.5424 38.4389 15.2083 38.4389 18.9583C38.4335 23.9853 36.4341 28.8048 32.8795 32.3594C29.3249 35.914 24.5054 37.9133 19.4784 37.9188ZM19.4784 1.10323C15.947 1.10323 12.4949 2.15041 9.55869 4.11235C6.62244 6.07429 4.33392 8.86287 2.98251 12.1255C1.6311 15.388 1.27751 18.9781 1.96645 22.4416C2.6554 25.9052 4.35592 29.0866 6.853 31.5837C9.35007 34.0808 12.5315 35.7813 15.9951 36.4703C19.4586 37.1592 23.0487 36.8056 26.3113 35.4542C29.5738 34.1028 32.3624 31.8143 34.3244 28.878C36.2863 25.9418 37.3335 22.4897 37.3335 18.9583C37.3275 14.2247 35.4444 9.68667 32.0972 6.3395C28.75 2.99234 24.212 1.10925 19.4784 1.10323Z" fill="black"/>
    <path d="M11.363 19.752C10.7953 19.752 10.2403 19.5837 9.76827 19.2683C9.29623 18.9529 8.92831 18.5045 8.71106 17.98C8.4938 17.4555 8.43695 16.8784 8.54771 16.3216C8.65847 15.7648 8.93185 15.2533 9.33329 14.8518C9.73473 14.4504 10.2462 14.177 10.803 14.0663C11.3598 13.9555 11.937 14.0124 12.4615 14.2296C12.986 14.4469 13.4343 14.8148 13.7497 15.2868C14.0651 15.7589 14.2335 16.3138 14.2335 16.8816C14.2329 17.6427 13.9302 18.3724 13.3921 18.9106C12.8539 19.4488 12.1241 19.7514 11.363 19.752ZM11.363 15.1165C11.0134 15.1165 10.6716 15.2202 10.3809 15.4145C10.0902 15.6088 9.86371 15.885 9.73001 16.208C9.59632 16.5311 9.56145 16.8866 9.62983 17.2295C9.6982 17.5723 9.86675 17.8872 10.1141 18.1343C10.3615 18.3814 10.6766 18.5495 11.0196 18.6175C11.3626 18.6854 11.718 18.6501 12.0409 18.516C12.3638 18.3819 12.6397 18.155 12.8336 17.864C13.0275 17.5731 13.1308 17.2312 13.1303 16.8816C13.1291 16.4134 12.9425 15.9648 12.6112 15.634C12.28 15.3032 11.8312 15.1171 11.363 15.1165Z" fill="black"/>
    <path d="M27.5873 19.752C27.0195 19.752 26.4646 19.5837 25.9925 19.2683C25.5205 18.9529 25.1526 18.5045 24.9353 17.98C24.718 17.4555 24.6612 16.8784 24.772 16.3216C24.8827 15.7648 25.1561 15.2533 25.5575 14.8518C25.959 14.4504 26.4704 14.177 27.0273 14.0663C27.5841 13.9555 28.1612 14.0124 28.6857 14.2296C29.2102 14.4469 29.6585 14.8148 29.974 15.2868C30.2894 15.7589 30.4577 16.3138 30.4577 16.8816C30.4571 17.6427 30.1545 18.3724 29.6163 18.9106C29.0781 19.4488 28.3484 19.7514 27.5873 19.752ZM27.5873 15.1165C27.2375 15.1161 26.8955 15.2194 26.6045 15.4134C26.3136 15.6074 26.0867 15.8834 25.9526 16.2065C25.8186 16.5295 25.7834 16.885 25.8515 17.2281C25.9196 17.5711 26.088 17.8862 26.3353 18.1335C26.5826 18.3808 26.8977 18.5492 27.2408 18.6173C27.5838 18.6854 27.9393 18.6502 28.2624 18.5162C28.5854 18.3821 28.8614 18.1553 29.0554 17.8643C29.2494 17.5733 29.3527 17.2313 29.3523 16.8816C29.3517 16.4136 29.1655 15.965 28.8347 15.6342C28.5038 15.3033 28.0552 15.1171 27.5873 15.1165Z" fill="black"/>
    <path d="M4.63962 15.4099C4.51576 15.4098 4.39553 15.368 4.29825 15.2913C4.20096 15.2146 4.13225 15.1075 4.10313 14.9871C4.07402 14.8667 4.08619 14.74 4.13769 14.6274C4.18919 14.5147 4.27705 14.4227 4.38715 14.3659C7.57956 12.7589 10.9346 11.4977 14.3951 10.6038C14.5338 10.5758 14.678 10.6021 14.798 10.6773C14.9179 10.7524 15.0045 10.8707 15.0398 11.0078C15.075 11.1449 15.0564 11.2903 14.9877 11.414C14.9189 11.5378 14.8053 11.6304 14.6703 11.6729C11.2885 12.5472 8.00976 13.7801 4.88982 15.3508C4.81235 15.3902 4.72655 15.4105 4.63962 15.4099Z" fill="black"/>
    <path d="M34.3198 15.41C34.2336 15.4105 34.1486 15.3902 34.0719 15.3509C30.952 13.7802 27.6732 12.5473 24.2914 11.673C24.2179 11.6581 24.1481 11.6284 24.0864 11.5858C24.0247 11.5431 23.9723 11.4883 23.9325 11.4247C23.8927 11.3611 23.8662 11.2901 23.8547 11.2159C23.8432 11.1418 23.8469 11.0661 23.8656 10.9934C23.8843 10.9207 23.9176 10.8526 23.9635 10.7933C24.0094 10.7339 24.0669 10.6845 24.1324 10.648C24.198 10.6116 24.2704 10.5889 24.345 10.5813C24.4197 10.5737 24.4951 10.5814 24.5667 10.6039C28.0217 11.4987 31.3714 12.7599 34.5587 14.366C34.6704 14.4212 34.7601 14.5126 34.8131 14.6254C34.8662 14.7381 34.8794 14.8655 34.8506 14.9868C34.8218 15.108 34.7527 15.2159 34.6547 15.2928C34.5566 15.3697 34.4353 15.411 34.3107 15.41H34.3198Z" fill="black"/>
    <path d="M32.041 27.3307C31.9686 27.3313 31.8969 27.3173 31.8301 27.2895C31.7632 27.2618 31.7027 27.2209 31.652 27.1692C30.8102 26.3707 29.8297 25.7325 28.7588 25.2859C26.0658 24.085 22.8655 23.5459 18.9783 23.6346C14.2314 23.7438 10.2737 24.7719 7.21448 26.7075C7.09063 26.7807 6.94314 26.8027 6.80333 26.7688C6.66352 26.735 6.54241 26.648 6.46572 26.5263C6.38903 26.4046 6.36281 26.2578 6.39262 26.1171C6.42243 25.9764 6.50593 25.8528 6.62537 25.7727C9.84611 23.7347 14.0017 22.6452 18.9442 22.5315C23.002 22.4359 26.3546 23.0091 29.2001 24.2783C30.3979 24.7754 31.4937 25.4895 32.4322 26.3845C32.4836 26.4357 32.5243 26.4965 32.5521 26.5634C32.5799 26.6303 32.5943 26.7021 32.5943 26.7746C32.5943 26.8471 32.5799 26.9189 32.5521 26.9858C32.5243 27.0527 32.4836 27.1135 32.4322 27.1647C32.3815 27.2173 32.3208 27.2592 32.2535 27.2877C32.1863 27.3162 32.114 27.3309 32.041 27.3307Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_143_299">
      <rect width="37.9187" height="37.9187" fill="white" transform="translate(0.520264)"/>
    </clipPath>
  </defs>
</svg>:1}</button>
<button className={`${emoji ? 'emoji':'btn'}`} style={buttonStylecond}>{emoji ? <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <g clip-path="url(#clip0_143_308)">
    <path d="M10.8833 19.1789C10.3156 19.1789 9.76058 19.0106 9.28853 18.6951C8.81649 18.3797 8.44858 17.9314 8.23132 17.4069C8.01406 16.8824 7.95722 16.3053 8.06797 15.7484C8.17873 15.1916 8.45212 14.6802 8.85356 14.2787C9.255 13.8773 9.76646 13.6039 10.3233 13.4931C10.8801 13.3824 11.4572 13.4392 11.9818 13.6565C12.5063 13.8737 12.9546 14.2417 13.27 14.7137C13.5854 15.1857 13.7537 15.7407 13.7537 16.3084C13.7531 17.0696 13.4505 17.7993 12.9123 18.3375C12.3741 18.8757 11.6444 19.1783 10.8833 19.1789ZM10.8833 14.5434C10.5336 14.5434 10.1919 14.6471 9.90117 14.8414C9.61049 15.0357 9.38397 15.3119 9.25028 15.6349C9.11658 15.958 9.08172 16.3135 9.15009 16.6563C9.21847 16.9992 9.38701 17.3141 9.6344 17.5612C9.88179 17.8083 10.1969 17.9764 10.5399 18.0443C10.8829 18.1123 11.2383 18.077 11.5612 17.9428C11.8841 17.8087 12.1599 17.5819 12.3538 17.2909C12.5478 17 12.651 16.6581 12.6506 16.3084C12.6494 15.8403 12.4627 15.3917 12.1315 15.0609C11.8002 14.7301 11.3514 14.544 10.8833 14.5434Z" fill="black"/>
    <path d="M27.1074 19.1789C26.54 19.1775 25.9857 19.008 25.5145 18.6918C25.0434 18.3756 24.6765 17.9268 24.4603 17.4022C24.2441 16.8776 24.1882 16.3006 24.2998 15.7443C24.4113 15.1879 24.6852 14.6771 25.0869 14.2763C25.4886 13.8756 26.0001 13.6029 26.5567 13.4926C27.1134 13.3824 27.6902 13.4397 28.2143 13.6571C28.7384 13.8746 29.1863 14.2425 29.5014 14.7144C29.8165 15.1863 29.9847 15.741 29.9847 16.3084C29.9844 16.6859 29.9097 17.0596 29.7649 17.4081C29.6201 17.7567 29.4081 18.0733 29.1409 18.3399C28.8737 18.6065 28.5565 18.8178 28.2076 18.9617C27.8587 19.1057 27.4849 19.1795 27.1074 19.1789ZM27.1074 14.5434C26.7577 14.543 26.4157 14.6463 26.1247 14.8403C25.8337 15.0343 25.6068 15.3103 25.4728 15.6333C25.3387 15.9564 25.3036 16.3119 25.3717 16.6549C25.4398 16.998 25.6082 17.3131 25.8555 17.5604C26.1028 17.8077 26.4179 17.9761 26.7609 18.0442C27.1039 18.1123 27.4595 18.0771 27.7825 17.9431C28.1055 17.809 28.3815 17.5821 28.5755 17.2912C28.7696 17.0002 28.8729 16.6582 28.8724 16.3084C28.8718 15.8405 28.6857 15.3919 28.3548 15.061C28.0239 14.7302 27.5753 14.544 27.1074 14.5434Z" fill="black"/>
    <path d="M32.0819 24.4784H5.92482C5.84941 24.4833 5.7738 24.4726 5.70268 24.4471C5.63155 24.4216 5.56641 24.3817 5.51129 24.33C5.45617 24.2783 5.41224 24.2159 5.3822 24.1465C5.35217 24.0772 5.33667 24.0024 5.33667 23.9269C5.33667 23.8513 5.35217 23.7765 5.3822 23.7072C5.41224 23.6378 5.45617 23.5754 5.51129 23.5237C5.56641 23.472 5.63155 23.4322 5.70268 23.4066C5.7738 23.3811 5.84941 23.3704 5.92482 23.3753H32.0819C32.1573 23.3704 32.2329 23.3811 32.304 23.4066C32.3752 23.4322 32.4403 23.472 32.4954 23.5237C32.5506 23.5754 32.5945 23.6378 32.6245 23.7072C32.6546 23.7765 32.6701 23.8513 32.6701 23.9269C32.6701 24.0024 32.6546 24.0772 32.6245 24.1465C32.5945 24.2159 32.5506 24.2783 32.4954 24.33C32.4403 24.3817 32.3752 24.4216 32.304 24.4471C32.2329 24.4726 32.1573 24.4833 32.0819 24.4784Z" fill="black"/>
    <path d="M18.9987 37.9188C15.2487 37.9188 11.5828 36.8067 8.46482 34.7233C5.34678 32.6399 2.91657 29.6787 1.4815 26.2141C0.0464233 22.7496 -0.329057 18.9373 0.402537 15.2593C1.13413 11.5813 2.93994 8.20288 5.59161 5.55121C8.24328 2.89954 11.6217 1.09373 15.2997 0.362131C18.9777 -0.369463 22.79 0.00601799 26.2545 1.44109C29.7191 2.87616 32.6803 5.30638 34.7637 8.42441C36.8472 11.5424 37.9592 15.2083 37.9592 18.9583C37.9537 23.9853 35.9544 28.8048 32.3998 32.3594C28.8452 35.914 24.0257 37.9133 18.9987 37.9188ZM18.9987 1.10323C15.4673 1.10323 12.0152 2.15041 9.07895 4.11235C6.14271 6.07429 3.85418 8.86287 2.50277 12.1255C1.15137 15.388 0.797776 18.9781 1.48672 22.4416C2.17566 25.9052 3.87619 29.0866 6.37326 31.5837C8.87034 34.0808 12.0518 35.7813 15.5153 36.4703C18.9789 37.1592 22.5689 36.8056 25.8315 35.4542C29.0941 34.1028 31.8827 31.8143 33.8446 28.878C35.8066 25.9418 36.8537 22.4897 36.8537 18.9583C36.8477 14.2247 34.9646 9.68667 31.6175 6.3395C28.2703 2.99234 23.7323 1.10925 18.9987 1.10323Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_143_308">
      <rect width="37.9187" height="37.9187" fill="white" transform="translate(0.0406494)"/>
    </clipPath>
  </defs>
</svg>:3}</button>
<button className={`${emoji ? 'emoji':'btn'}`} style={buttonStylecond}>{emoji ? <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
  <g clip-path="url(#clip0_143_315)">
    <path d="M19.519 37.9188C15.7689 37.9188 12.1031 36.8067 8.98508 34.7233C5.86705 32.6399 3.43683 29.6787 2.00176 26.2141C0.566687 22.7496 0.191206 18.9373 0.9228 15.2593C1.65439 11.5813 3.4602 8.20288 6.11187 5.55121C8.76354 2.89954 12.142 1.09373 15.82 0.362131C19.4979 -0.369463 23.3102 0.00601799 26.7748 1.44109C30.2394 2.87616 33.2006 5.30638 35.284 8.42441C37.3674 11.5424 38.4794 15.2083 38.4794 18.9583C38.474 23.9853 36.4747 28.8048 32.9201 32.3594C29.3654 35.914 24.5459 37.9133 19.519 37.9188ZM19.519 1.10323C15.9876 1.10323 12.5355 2.15041 9.59922 4.11235C6.66297 6.07429 4.37444 8.86287 3.02304 12.1255C1.67163 15.388 1.31804 18.9781 2.00698 22.4416C2.69592 25.9052 4.39645 29.0866 6.89353 31.5837C9.3906 34.0808 12.5721 35.7813 16.0356 36.4703C19.4991 37.1592 23.0892 36.8056 26.3518 35.4542C29.6144 34.1028 32.403 31.8143 34.3649 28.878C36.3268 25.9418 37.374 22.4897 37.374 18.9583C37.368 14.2247 35.4849 9.68667 32.1377 6.3395C28.7906 2.99234 24.2526 1.10925 19.519 1.10323Z" fill="black"/>
    <path d="M15.102 16.2106C14.9615 16.211 14.8263 16.1572 14.7245 16.0605C11.6971 13.2173 8.44448 15.9581 8.30801 16.0764C8.19702 16.1726 8.05234 16.2208 7.90582 16.2104C7.7593 16.1999 7.62293 16.1317 7.52671 16.0207C7.43049 15.9097 7.38231 15.765 7.39276 15.6185C7.40321 15.472 7.47144 15.3356 7.58244 15.2394C7.62338 15.2053 11.7198 11.723 15.4796 15.2553C15.5862 15.3555 15.6487 15.494 15.6534 15.6402C15.6581 15.7865 15.6046 15.9286 15.5046 16.0355C15.4528 16.0903 15.3904 16.1341 15.3212 16.1642C15.252 16.1943 15.1775 16.2101 15.102 16.2106Z" fill="#231F20"/>
    <path d="M31.0942 16.2106C30.9531 16.2107 30.8173 16.157 30.7144 16.0605C27.6893 13.2173 24.4367 15.9581 24.3002 16.0764C24.1892 16.1726 24.0445 16.2208 23.898 16.2104C23.7515 16.1999 23.6151 16.1317 23.5189 16.0207C23.4227 15.9097 23.3745 15.765 23.3849 15.6185C23.3954 15.472 23.4636 15.3356 23.5746 15.2394C23.6156 15.2053 27.712 11.723 31.4718 15.2553C31.5784 15.3555 31.6409 15.494 31.6456 15.6402C31.6503 15.7865 31.5968 15.9286 31.4968 16.0355C31.445 16.0903 31.3826 16.1341 31.3134 16.1642C31.2442 16.1943 31.1697 16.2101 31.0942 16.2106Z" fill="#231F20"/>
    <path d="M19.8603 30.5036C18.437 30.5042 17.0157 30.3947 15.6093 30.176C12.4931 29.6825 9.88654 28.6703 8.04189 27.2487C6.16541 25.793 5.08501 23.9279 4.85755 21.708C4.84217 21.5626 4.88517 21.4171 4.97709 21.3034C5.06902 21.1897 5.20233 21.1172 5.34772 21.1018C5.4931 21.0864 5.63863 21.1294 5.75231 21.2213C5.86599 21.3133 5.93849 21.4466 5.95388 21.592C6.15631 23.5026 7.09114 25.1107 8.71743 26.3685C12.6273 29.4027 19.4532 29.7075 23.0879 29.173C28.0214 28.4451 31.7652 25.47 33.0958 21.2121C33.1141 21.1391 33.1471 21.0705 33.1928 21.0107C33.2385 20.9509 33.296 20.901 33.3617 20.8642C33.4274 20.8274 33.4999 20.8044 33.5748 20.7966C33.6496 20.7888 33.7253 20.7963 33.7972 20.8188C33.869 20.8413 33.9355 20.8783 33.9926 20.9274C34.0497 20.9765 34.0961 21.0368 34.129 21.1045C34.162 21.1722 34.1807 21.2459 34.1841 21.3212C34.1876 21.3964 34.1756 21.4715 34.1489 21.5419C32.6819 26.2138 28.6036 29.4732 23.2312 30.2625C22.1148 30.4233 20.9883 30.5039 19.8603 30.5036Z" fill="#231F20"/>
  </g>
  <defs>
    <clipPath id="clip0_143_315">
      <rect width="37.9187" height="37.9187" fill="white" transform="translate(0.560791)"/>
    </clipPath>
  </defs>
</svg>:4}</button>

<button className={`${emoji ? 'emoji':'btn'}`} style={buttonStylecond}>{emoji ? <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <g clip-path="url(#clip0_143_322)">
    <path d="M19.0392 29.2412C15.8913 29.2412 13.0277 27.574 11.7448 24.9924C11.562 24.626 11.4757 24.2189 11.4943 23.8099C11.5129 23.4008 11.6356 23.0032 11.8509 22.6548C12.0662 22.3065 12.3669 22.0189 12.7245 21.8194C13.0821 21.6198 13.4848 21.5149 13.8943 21.5146H24.1911C24.6003 21.5156 25.0026 21.6209 25.3599 21.8206C25.7171 22.0203 26.0175 22.3078 26.2327 22.6559C26.4479 23.0041 26.5707 23.4013 26.5895 23.8102C26.6084 24.219 26.5227 24.6259 26.3405 24.9924C25.0531 27.574 22.1872 29.2412 19.0392 29.2412ZM13.8943 22.6201C13.6729 22.6205 13.4552 22.6773 13.262 22.7853C13.0687 22.8933 12.9062 23.0489 12.7898 23.2372C12.6734 23.4256 12.607 23.6405 12.5969 23.8617C12.5868 24.0828 12.6333 24.3029 12.732 24.5011C13.8306 26.7097 16.3075 28.1404 19.0392 28.1404C21.771 28.1404 24.2479 26.7119 25.3465 24.5011C25.4458 24.3032 25.4928 24.0831 25.4831 23.8619C25.4734 23.6407 25.4073 23.4256 25.2911 23.2371C25.1748 23.0486 25.0123 22.893 24.819 22.785C24.6257 22.677 24.408 22.6202 24.1865 22.6201H13.8943Z" fill="black"/>
    <path d="M12.2634 18.9833C11.7694 18.9697 11.284 18.8511 10.8395 18.6353C9.86046 18.2075 8.94261 17.6514 8.11009 16.9817C7.88264 16.7838 7.65519 16.5768 7.43911 16.3676C6.60891 15.526 5.29878 13.8656 5.83557 12.2052C6.25863 10.8928 7.7166 10.5152 8.83794 10.5925C9.42215 10.6354 9.99273 10.7898 10.5188 11.0474L10.562 11.0679L10.744 11.1566C10.8918 10.1308 11.3695 9.35747 12.1087 8.95488C13.1141 8.41127 14.3173 8.65919 15.1748 9.58947C16.1506 10.6471 16.3575 12.1824 15.7775 14.0294C15.478 14.985 15.0976 15.9133 14.6403 16.8043C14.588 16.9044 14.5379 17.0067 14.4879 17.1091C14.2985 17.5396 14.0522 17.9428 13.7555 18.3077C13.5716 18.5229 13.3426 18.695 13.0847 18.8118C12.8268 18.9285 12.5464 18.9871 12.2634 18.9833ZM8.55818 11.6866C7.87582 11.6866 7.1002 11.914 6.89322 12.5464C6.5111 13.7246 7.81441 15.1757 8.23292 15.592C8.41937 15.7814 8.61523 15.9613 8.81975 16.131C9.57421 16.7368 10.4056 17.2401 11.2922 17.6277C12.4431 18.1463 12.8161 17.7209 12.9389 17.5822C13.1662 17.2899 13.3551 16.9696 13.5007 16.6291C13.553 16.5177 13.6076 16.4017 13.6622 16.3016C14.0931 15.4683 14.4507 14.5992 14.7312 13.7041C15.1862 12.2348 15.0702 11.1043 14.3696 10.3423C13.9693 9.90791 13.3051 9.57128 12.641 9.93065C11.9768 10.29 11.8289 11.168 11.8062 11.657C11.7987 11.8005 11.7537 11.9395 11.6758 12.0603C11.5979 12.181 11.4898 12.2793 11.3622 12.3453C11.2345 12.4113 11.0918 12.4428 10.9483 12.4365C10.8047 12.4303 10.6653 12.3866 10.5438 12.3098C10.3976 12.2196 10.2457 12.139 10.0889 12.0687L10.0503 12.0551C9.64978 11.8566 9.2152 11.7362 8.76971 11.7002C8.70147 11.6889 8.62869 11.6866 8.55818 11.6866Z" fill="black"/>
    <path d="M25.815 18.9832C25.5305 18.989 25.2482 18.9318 24.9883 18.8158C24.7284 18.6998 24.4973 18.5279 24.3115 18.3123C24.0154 17.9473 23.7698 17.5441 23.5814 17.1136C23.5314 17.0112 23.4813 16.9089 23.429 16.8088C22.9712 15.9181 22.5907 14.9897 22.2918 14.0339C21.7118 12.187 21.921 10.6516 22.8968 9.59399C23.752 8.66371 24.9439 8.41579 25.9606 8.9594C26.7089 9.36199 27.1865 10.1353 27.3253 11.1611L27.5073 11.0747L27.5505 11.052C28.0773 10.7941 28.6486 10.6397 29.2336 10.5971C30.355 10.5197 31.8107 10.8973 32.236 12.2097C32.7728 13.8701 31.4604 15.5305 30.6438 16.3721C30.4368 16.5813 30.2094 16.7883 29.9615 16.9862C29.1289 17.6558 28.211 18.2118 27.232 18.6398C26.7891 18.8526 26.3062 18.9696 25.815 18.9832ZM24.8483 9.7805C24.6305 9.79282 24.4174 9.84916 24.2219 9.94611C24.0265 10.0431 23.8527 10.1786 23.7111 10.3446C23.0082 11.1066 22.8854 12.237 23.3471 13.7063C23.6299 14.6003 23.9883 15.4685 24.4184 16.3016C24.4753 16.4085 24.5276 16.529 24.5822 16.6291C24.7302 16.9693 24.9205 17.2895 25.1486 17.5821C25.2714 17.7209 25.6444 18.1462 26.7976 17.6276C27.6837 17.2406 28.5144 16.7373 29.2677 16.131C29.477 15.9558 29.6749 15.7762 29.8568 15.5919C30.2663 15.1757 31.5787 13.7245 31.1965 12.5463C30.9509 11.7889 29.9001 11.6524 29.3201 11.6934C28.8709 11.7301 28.4331 11.8529 28.0304 12.055L27.9849 12.0778C27.8281 12.1427 27.6761 12.2187 27.53 12.3052C27.4085 12.3826 27.2689 12.4268 27.125 12.4333C26.9811 12.4398 26.838 12.4085 26.71 12.3424C26.582 12.2763 26.4736 12.1778 26.3956 12.0568C26.3176 11.9357 26.2727 11.7963 26.2654 11.6524C26.2403 11.1634 26.0993 10.2877 25.4306 9.92607C25.2518 9.82951 25.0516 9.77945 24.8483 9.7805Z" fill="black"/>
    <path d="M19.0391 37.9188C15.2891 37.9188 11.6233 36.8067 8.50522 34.7233C5.38719 32.6399 2.95698 29.6787 1.5219 26.2141C0.0868285 22.7496 -0.288652 18.9373 0.442942 15.2593C1.17454 11.5813 2.98035 8.20288 5.63202 5.55121C8.28369 2.89954 11.6621 1.09373 15.3401 0.362131C19.0181 -0.369463 22.8304 0.00601799 26.295 1.44109C29.7595 2.87616 32.7207 5.30638 34.8042 8.42441C36.8876 11.5424 37.9996 15.2083 37.9996 18.9583C37.9942 23.9853 35.9948 28.8048 32.4402 32.3594C28.8856 35.914 24.0661 37.9133 19.0391 37.9188ZM19.0391 1.10323C15.5077 1.10323 12.0556 2.15041 9.11936 4.11235C6.18311 6.07429 3.89458 8.86287 2.54318 12.1255C1.19177 15.388 0.838182 18.9781 1.52712 22.4416C2.21606 25.9052 3.91659 29.0866 6.41367 31.5837C8.91074 34.0808 12.0922 35.7813 15.5557 36.4703C19.0193 37.1592 22.6093 36.8056 25.8719 35.4542C29.1345 34.1028 31.9231 31.8143 33.885 28.878C35.847 25.9418 36.8941 22.4897 36.8941 18.9583C36.8881 14.2247 35.005 9.68667 31.6579 6.3395C28.3107 2.99234 23.7727 1.10925 19.0391 1.10323Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_143_322">
      <rect width="37.9187" height="37.9187" fill="white" transform="translate(0.0812988)"/>
    </clipPath>
  </defs>
</svg>:5}</button>
          {!emoji && <button className='btn' style={buttonStylecond}>6</button> }  
          {!emoji && <button className='btn' style={buttonStylecond}>7</button> }
          {!emoji && <button className='btn' style={buttonStylecond}>8</button> }
          {!emoji && <button className='btn' style={buttonStylecond}>9</button> }
          {!emoji && <button className='btn' style={buttonStylecond}>10</button> }

          </div>
          <div className='scale_rate'>
            <label className='rate__typo'>unlikely</label>
            <label className='rate__typo'>likely</label>
            <label className='rate__typo'>most likely</label>
          </div>
         
        
        {!customize && isHovered && <div className="diplay_hover" style={{transform:row ? '' : `rotate(270deg)`}}>
            <button onClick={handleCustomize}>Customize</button>         
          </div>}
          </div>
        {!customize && <div className='scale_use'> 
          <label>Scale Template</label>
          <div>
            <button>use</button>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4.0625C10.5178 4.0625 10.9375 3.64277 10.9375 3.125C10.9375 2.60723 10.5178 2.1875 10 2.1875C9.48223 2.1875 9.0625 2.60723 9.0625 3.125C9.0625 3.64277 9.48223 4.0625 10 4.0625Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 10.9375C10.5178 10.9375 10.9375 10.5178 10.9375 10C10.9375 9.48223 10.5178 9.0625 10 9.0625C9.48223 9.0625 9.0625 9.48223 9.0625 10C9.0625 10.5178 9.48223 10.9375 10 10.9375Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 17.8125C10.5178 17.8125 10.9375 17.3928 10.9375 16.875C10.9375 16.3572 10.5178 15.9375 10 15.9375C9.48223 15.9375 9.0625 16.3572 9.0625 16.875C9.0625 17.3928 9.48223 17.8125 10 17.8125Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
         </div>
         
        }
      
    </div>
  )
}