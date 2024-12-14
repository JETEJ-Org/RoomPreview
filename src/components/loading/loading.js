import React from "react";

import "./loading.css";

const Loading = () => {
    return (
        <div className="splashscreen">
            <svg width="220" height="125" viewBox="0 0 220 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M23.9576 93.3102V95.6384C23.5141 95.3613 23.0152 95.1326 22.4609 94.9524C21.9204 94.7723 21.3314 94.6822 20.6939 94.6822V92.5826C22.0243 92.6104 23.1122 92.8529 23.9576 93.3102ZM16.9937 98.4656C16.9937 98.9506 17.0491 99.3941 17.16 99.796C17.2847 100.184 17.4441 100.53 17.6381 100.835L15.8712 102.935C15.3307 102.45 14.9149 101.847 14.6239 101.126C14.3329 100.392 14.1874 99.5812 14.1874 98.6942C14.1874 96.9758 14.6724 95.5761 15.6425 94.4951C16.6265 93.4142 18.0054 92.7905 19.7793 92.6242V94.7446C18.92 94.8831 18.241 95.2712 17.7421 95.9087C17.2432 96.5323 16.9937 97.3846 16.9937 98.4656ZM24.311 97.8004V103.579C23.0083 104.106 21.567 104.369 19.9871 104.369C18.6429 104.369 17.4995 104.071 16.5572 103.475L18.2202 101.501C18.5389 101.764 18.8993 101.958 19.3011 102.083C19.703 102.207 20.1396 102.27 20.6108 102.27C20.8186 102.27 21.0127 102.256 21.1928 102.228C21.3868 102.2 21.5739 102.166 21.7541 102.124V99.7544H19.9248V97.8004H24.311Z"
                    fill="#127F87" />
                <path
                    d="M26.3684 92.832H33.9143V94.9524H26.3684V92.832ZM29.0916 95.7839V101.999H34.1222V104.12H26.3684V95.7839H29.0916ZM33.3323 97.3845V99.4217H29.9647V97.3845H33.3323Z"
                    fill="#127F87" />
                <path
                    d="M39.7968 100.232H39.4642V98.1953H39.7968C40.4066 98.1953 40.8847 98.0497 41.2311 97.7587C41.5915 97.4677 41.7716 97.0589 41.7716 96.5322C41.7716 95.479 41.1411 94.9524 39.8799 94.9524H35.8679V92.832H39.8799C41.3905 92.832 42.5477 93.13 43.3515 93.7259C44.1553 94.3218 44.5572 95.1949 44.5572 96.3452C44.5572 97.1212 44.3562 97.8072 43.9543 98.4031C43.5663 98.9852 43.012 99.4356 42.2913 99.7543C41.5845 100.073 40.753 100.232 39.7968 100.232ZM38.5911 104.12H35.8679V95.7839H38.5911V104.12ZM45.1808 104.12H42.0627L40.4828 101.022C41.4806 100.939 42.3467 100.662 43.0812 100.191L45.1808 104.12Z"
                    fill="#127F87" />
                <path
                    d="M46.4067 92.832H53.9527V94.9524H46.4067V92.832ZM49.1299 95.7839V101.999H54.1605V104.12H46.4067V95.7839H49.1299ZM53.3706 97.3845V99.4217H50.003V97.3845H53.3706Z"
                    fill="#127F87" />
                <path
                    d="M65.9052 104.12H62.8287L55.9687 92.9152V92.832H58.9829L65.9052 104.037V104.12ZM65.9052 102.249H65.8013L63.4523 98.3823V92.832H65.9052V102.249ZM58.3593 104.12H55.9064V94.6406H55.9895L58.3593 98.5279V104.12Z"
                    fill="#127F87" />
                <path
                    d="M76.2569 93.1439V95.4929C75.8828 95.2573 75.4947 95.0772 75.0928 94.9524C74.6909 94.8139 74.2613 94.7376 73.804 94.7238V92.5826C74.3029 92.5965 74.7602 92.6589 75.176 92.7697C75.5917 92.8667 75.952 92.9915 76.2569 93.1439ZM71.06 100.815L69.2307 102.997C68.7179 102.512 68.316 101.909 68.025 101.189C67.7478 100.454 67.6093 99.6227 67.6093 98.6942C67.6093 97.5163 67.831 96.4977 68.2745 95.6384C68.7179 94.7654 69.3346 94.0724 70.1246 93.5597C70.9145 93.033 71.8361 92.7212 72.8893 92.6242V94.8069C72.1687 94.9732 71.5728 95.3751 71.1016 96.0126C70.6443 96.6362 70.4156 97.44 70.4156 98.424C70.4156 98.909 70.471 99.3525 70.5819 99.7544C70.7066 100.156 70.866 100.51 71.06 100.815ZM73.1388 104.369C72.5013 104.369 71.9123 104.293 71.3718 104.141C70.8313 103.988 70.3394 103.78 69.8959 103.517L71.6213 101.48C72.2172 101.965 72.9863 102.207 73.9287 102.207C74.3999 102.207 74.8364 102.152 75.2383 102.041C75.6541 101.916 76.0491 101.757 76.4232 101.563L76.0698 103.766C75.7095 103.947 75.2799 104.092 74.781 104.203C74.2821 104.314 73.7347 104.369 73.1388 104.369Z"
                    fill="#127F87" />
                <path d="M80.705 104.12H77.9818V92.832H80.705V104.12Z" fill="#127F87" />
                <path
                    d="M86.5254 92.832H89.1446L92.928 104.12H90.0593L86.5254 92.832ZM85.9433 99.7751H87.835L88.417 101.729H85.3197L84.5505 104.12H81.9937L85.6731 93.0815H85.7562L86.8788 96.8025L85.9433 99.7751Z"
                    fill="#127F87" />
                <path
                    d="M98.644 104.12H97.7917V101.999H98.644C99.5725 101.999 100.314 101.674 100.868 101.022C101.436 100.357 101.721 99.491 101.721 98.4239C101.721 97.3568 101.45 96.5115 100.91 95.8878C100.383 95.2642 99.6556 94.9524 98.7271 94.9524H94.2162V92.832H98.7271C100.57 92.832 101.991 93.3102 102.989 94.2664C104 95.2088 104.506 96.5322 104.506 98.2368C104.506 99.4009 104.264 100.426 103.779 101.313C103.293 102.2 102.607 102.893 101.721 103.392C100.847 103.877 99.8219 104.12 98.644 104.12ZM96.9186 104.12H94.2162V95.7839H96.9186V104.12Z"
                    fill="#127F87" />
                <path
                    d="M111.012 102.207V104.348C109.363 104.265 108.053 103.718 107.083 102.706C106.127 101.694 105.649 100.343 105.649 98.6524C105.649 97.5022 105.871 96.4836 106.314 95.5967C106.758 94.7097 107.381 94.0099 108.185 93.4971C109.003 92.9705 109.945 92.6725 111.012 92.6032V94.7444C110.208 94.8552 109.578 95.2433 109.12 95.9085C108.677 96.5737 108.455 97.426 108.455 98.4654C108.455 99.5186 108.677 100.378 109.12 101.043C109.578 101.708 110.208 102.096 111.012 102.207ZM111.927 104.348V102.207C112.744 102.096 113.375 101.708 113.818 101.043C114.262 100.364 114.484 99.5047 114.484 98.4654C114.484 97.4121 114.262 96.5529 113.818 95.8877C113.375 95.2225 112.744 94.8414 111.927 94.7444V92.6032C113.59 92.6864 114.899 93.2338 115.856 94.2455C116.812 95.2433 117.29 96.5875 117.29 98.2783C117.29 99.4285 117.068 100.447 116.625 101.334C116.181 102.221 115.558 102.928 114.754 103.454C113.95 103.981 113.008 104.279 111.927 104.348Z"
                    fill="#127F87" />
                <path
                    d="M122.923 100.232H122.59V98.1953H122.923C123.533 98.1953 124.011 98.0497 124.357 97.7587C124.718 97.4677 124.898 97.0589 124.898 96.5322C124.898 95.479 124.267 94.9524 123.006 94.9524H118.994V92.832H123.006C124.517 92.832 125.674 93.13 126.478 93.7259C127.281 94.3218 127.683 95.1949 127.683 96.3452C127.683 97.1212 127.482 97.8072 127.08 98.4031C126.692 98.9852 126.138 99.4356 125.417 99.7543C124.711 100.073 123.879 100.232 122.923 100.232ZM121.717 104.12H118.994V95.7839H121.717V104.12ZM128.307 104.12H125.189L123.609 101.022C124.607 100.939 125.473 100.662 126.207 100.191L128.307 104.12Z"
                    fill="#127F87" />
                <path
                    d="M137.287 104.12H136.434V101.999H137.287C138.215 101.999 138.956 101.674 139.511 101.022C140.079 100.357 140.363 99.491 140.363 98.4239C140.363 97.3568 140.093 96.5115 139.552 95.8878C139.026 95.2642 138.298 94.9524 137.37 94.9524H132.859V92.832H137.37C139.213 92.832 140.633 93.3102 141.631 94.2664C142.643 95.2088 143.149 96.5322 143.149 98.2368C143.149 99.4009 142.906 100.426 142.421 101.313C141.936 102.2 141.25 102.893 140.363 103.392C139.49 103.877 138.465 104.12 137.287 104.12ZM135.561 104.12H132.859V95.7839H135.561V104.12Z"
                    fill="#127F87" />
                <path
                    d="M144.873 92.832H152.419V94.9524H144.873V92.832ZM147.597 95.7839V101.999H152.627V104.12H144.873V95.7839H147.597ZM151.837 97.3845V99.4217H148.47V97.3845H151.837Z"
                    fill="#127F87" />
                <path
                    d="M161.316 104.348V102.228C162.217 102.145 162.667 101.784 162.667 101.147C162.667 100.856 162.563 100.613 162.355 100.419C162.147 100.212 161.787 100.017 161.274 99.8373L160.193 99.4424C159.279 99.1236 158.551 98.7009 158.011 98.1743C157.484 97.6477 157.221 96.9201 157.221 95.9916C157.221 94.9799 157.574 94.1762 158.281 93.5802C159.002 92.9843 159.985 92.6587 161.233 92.6032V94.7444C160.263 94.7998 159.778 95.1116 159.778 95.6798C159.778 95.9154 159.888 96.1441 160.11 96.3658C160.332 96.5875 160.81 96.8301 161.545 97.0934L162.501 97.426C163.388 97.7309 164.06 98.1535 164.517 98.694C164.988 99.2206 165.224 99.9551 165.224 100.898C165.224 101.895 164.871 102.699 164.164 103.309C163.471 103.919 162.522 104.265 161.316 104.348ZM164.372 93.019V95.3472C164.053 95.1948 163.7 95.0631 163.312 94.9522C162.937 94.8414 162.549 94.7721 162.147 94.7444V92.6032C162.591 92.6171 162.993 92.6656 163.353 92.7487C163.727 92.818 164.067 92.9081 164.372 93.019ZM160.401 102.207V104.348C159.722 104.321 159.119 104.244 158.593 104.12C158.066 103.981 157.56 103.766 157.075 103.475L157.616 101.126C157.948 101.389 158.35 101.625 158.821 101.833C159.306 102.027 159.833 102.152 160.401 102.207Z"
                    fill="#127F87" />
                <path
                    d="M170.441 92.832H173.061L176.844 104.12H173.975L170.441 92.832ZM169.859 99.7751H171.751L172.333 101.729H169.236L168.466 104.12H165.91L169.589 93.0815H169.672L170.795 96.8025L169.859 99.7751Z"
                    fill="#127F87" />
                <path d="M180.855 101.168H178.132V92.832H180.855V101.168ZM185.2 104.12H178.132V101.999H185.2V104.12Z"
                    fill="#127F87" />
                <path
                    d="M190.147 92.832H192.766L196.55 104.12H193.681L190.147 92.832ZM189.565 99.7751H191.457L192.039 101.729H188.941L188.172 104.12H185.615L189.295 93.0815H189.378L190.5 96.8025L189.565 99.7751Z"
                    fill="#127F87" />
                <path
                    d="M201.455 104.348V102.228C202.356 102.145 202.806 101.784 202.806 101.147C202.806 100.856 202.702 100.613 202.494 100.419C202.287 100.212 201.926 100.017 201.413 99.8373L200.333 99.4424C199.418 99.1236 198.69 98.7009 198.15 98.1743C197.623 97.6477 197.36 96.9201 197.36 95.9916C197.36 94.9799 197.713 94.1762 198.42 93.5802C199.141 92.9843 200.125 92.6587 201.372 92.6032V94.7444C200.402 94.7998 199.917 95.1116 199.917 95.6798C199.917 95.9154 200.028 96.1441 200.249 96.3658C200.471 96.5875 200.949 96.8301 201.684 97.0934L202.64 97.426C203.527 97.7309 204.199 98.1535 204.656 98.694C205.128 99.2206 205.363 99.9551 205.363 100.898C205.363 101.895 205.01 102.699 204.303 103.309C203.61 103.919 202.661 104.265 201.455 104.348ZM204.511 93.019V95.3472C204.192 95.1948 203.839 95.0631 203.451 94.9522C203.076 94.8414 202.688 94.7721 202.287 94.7444V92.6032C202.73 92.6171 203.132 92.6656 203.492 92.7487C203.866 92.818 204.206 92.9081 204.511 93.019ZM200.54 102.207V104.348C199.861 104.321 199.258 104.244 198.732 104.12C198.205 103.981 197.699 103.766 197.214 103.475L197.755 101.126C198.087 101.389 198.489 101.625 198.961 101.833C199.446 102.027 199.972 102.152 200.54 102.207Z"
                    fill="#127F87" />
                <path
                    d="M55.6542 86.8238L25.9009 60.3203L25.9731 59.3092C28.8136 58.7315 31.3653 57.7205 33.6281 56.2761C35.939 54.7836 37.8648 53.0986 39.4054 51.221C40.9942 49.2952 42.1015 47.3935 42.7274 45.5158C43.1607 44.2641 43.3773 43.0845 43.3773 41.9772C43.3773 40.0996 42.7274 38.5589 41.4275 37.3553C40.1276 36.1517 38.1296 35.5499 35.4335 35.5499C32.1115 35.5499 28.621 36.0073 24.962 36.922L23.8788 85.885H14.635L11.963 29.5559H25.1065L25.0343 33.5278C27.297 32.2761 29.5839 31.3132 31.8949 30.6392C34.2539 29.917 36.5167 29.5559 38.6832 29.5559C42.7274 29.5559 45.9531 30.2299 48.3603 31.578C50.7675 32.8779 52.5007 34.5389 53.5599 36.5609C54.6672 38.5349 55.2209 40.581 55.2209 42.6994C55.2209 44.1437 55.0042 45.4918 54.5709 46.7435C53.8969 48.8137 52.7174 50.6914 51.0323 52.3764C49.3954 54.0133 47.4937 55.3855 45.3272 56.4928C43.2088 57.6001 41.1145 58.4186 39.0443 58.9481L56.593 86.8961L55.6542 86.8238Z"
                    fill="#127F87" />
                <path
                    d="M198.107 85.885L196.013 43.6382L179.908 80.3965H179.403L163.226 43.6382L156.655 86.8961H155.571L151.599 29.5559H164.887L182.436 58.7315L195.868 29.5559H207.64L206.556 85.885H198.107Z"
                    fill="#127F87" />
                <path
                    d="M65.7422 58.8605C65.6999 58.8605 65.6572 58.8546 65.6154 58.8428C65.4365 58.7927 65.3037 58.6419 65.2772 58.4585L64.4106 52.518C64.3731 52.2609 64.5511 52.0222 64.8077 51.9849C65.067 51.9415 65.3034 52.1255 65.3405 52.3821L66.0547 57.2758L69.2454 53.4215C69.412 53.222 69.7081 53.1943 69.9073 53.3593C70.1074 53.5249 70.1349 53.821 69.9696 54.0211L66.1043 58.6899C66.0134 58.7996 65.8798 58.8605 65.7422 58.8605Z"
                    fill="#545454" />
                <path
                    d="M93.9696 67.8854C93.7416 67.8854 93.5414 67.7198 93.5058 67.4874L92.7479 62.5977L89.5922 66.4836C89.4284 66.6844 89.1334 66.7164 88.9307 66.5522C88.7292 66.3884 88.6989 66.0921 88.8624 65.8907L92.6855 61.1836C92.8029 61.039 92.9929 60.9781 93.1728 61.0266C93.3523 61.0749 93.4864 61.2247 93.5147 61.4079L94.4343 67.3432C94.4744 67.5998 94.2986 67.8399 94.0421 67.88C94.0177 67.8835 93.9937 67.8854 93.9696 67.8854Z"
                    fill="#545454" />
                <path
                    d="M79.3826 74.1455C72.3994 74.1455 66.3773 68.9419 65.3744 62.0417C65.3368 61.7849 65.515 61.5462 65.7719 61.5089C66.0271 61.4642 66.2667 61.6497 66.3043 61.9064C67.2407 68.3479 72.8628 73.2056 79.3826 73.2056C85.8453 73.2056 91.4616 68.3963 92.4446 62.018C92.4839 61.7618 92.7259 61.5855 92.9805 61.6251C93.237 61.6645 93.4127 61.9046 93.3734 62.1613C92.3199 68.9934 86.3053 74.1455 79.3826 74.1455Z"
                    fill="#545454" />
                <path
                    d="M92.9893 58.9742C92.752 58.9742 92.5482 58.7957 92.5228 58.5547C91.7996 51.8362 86.1509 46.7698 79.3825 46.7698C72.8698 46.7698 67.248 51.6211 66.3053 58.0546C66.268 58.3113 66.0272 58.4913 65.7724 58.4512C65.5154 58.4139 65.3378 58.1751 65.3754 57.9186C66.3851 51.0268 72.4067 45.83 79.3825 45.83C86.6324 45.83 92.6827 51.2572 93.4572 58.4539C93.4851 58.7122 93.2982 58.9438 93.0402 58.9714C93.0229 58.9733 93.0059 58.9742 92.9893 58.9742Z"
                    fill="#545454" />
                <path
                    d="M84.1233 61.4014C84.1838 61.263 84.2359 61.1152 84.2667 60.9947C84.2908 60.9001 84.3245 60.7064 84.3245 60.6621V60.6296H78.9438V60.2569H84.3245V60.2244C84.3245 60.1801 84.2908 59.9864 84.2667 59.8918C84.2359 59.7713 84.1838 59.6235 84.1233 59.4852C84.0928 59.4155 84.0687 59.3585 84.0696 59.3585C84.082 59.3585 86.5807 60.4361 86.5824 60.4421C86.5841 60.4481 84.0853 61.528 84.0697 61.528C84.0687 61.528 84.0929 61.471 84.1233 61.4014L84.1233 61.4014Z"
                    fill="#545454" />
                <path
                    d="M80.4531 53.7385C80.2687 53.6579 80.0715 53.5884 79.9108 53.5473C79.7847 53.5151 79.5264 53.4702 79.4673 53.4702H79.424V60.6453H78.927V53.4702H78.8836C78.8246 53.4702 78.5663 53.5151 78.4402 53.5473C78.2795 53.5884 78.0823 53.6579 77.8979 53.7385C77.805 53.7792 77.729 53.8114 77.729 53.8101C77.729 53.7936 79.1659 50.4617 79.174 50.4594C79.1819 50.4571 80.622 53.7892 80.622 53.81C80.622 53.8113 80.546 53.7791 80.4531 53.7385L80.4531 53.7385Z"
                    fill="#545454" />
                <path
                    d="M126.587 56.4862H124.204C123.771 56.4862 123.42 56.0853 123.42 55.5907V53.4316C123.42 52.937 123.771 52.5361 124.204 52.5361H126.587C127.02 52.5361 127.37 52.937 127.37 53.4316V55.5907C127.37 56.0853 127.02 56.4862 126.587 56.4862Z"
                    fill="#545454" />
                <path
                    d="M126.587 56.7661H124.204C123.771 56.7661 123.42 57.167 123.42 57.6616V59.8207C123.42 60.3153 123.771 60.7162 124.204 60.7162H126.587C127.02 60.7162 127.37 60.3153 127.37 59.8207V57.6616C127.37 57.167 127.02 56.7661 126.587 56.7661Z"
                    fill="#545454" />
                <path
                    d="M126.587 61.0461H124.204C123.771 61.0461 123.42 61.447 123.42 61.9416V64.1007C123.42 64.5953 123.771 64.9962 124.204 64.9962H126.587C127.02 64.9962 127.37 64.5953 127.37 64.1007V61.9416C127.37 61.447 127.02 61.0461 126.587 61.0461Z"
                    fill="#545454" />
                <path
                    d="M126.587 65.3162H124.204C123.771 65.3162 123.42 65.7171 123.42 66.2116V68.3708C123.42 68.8653 123.771 69.2662 124.204 69.2662H126.587C127.02 69.2662 127.37 68.8653 127.37 68.3708V66.2116C127.37 65.7171 127.02 65.3162 126.587 65.3162Z"
                    fill="#545454" />
                <path
                    d="M130.857 52.5562H128.474C128.041 52.5562 127.69 52.9571 127.69 53.4516V55.6107C127.69 56.1053 128.041 56.5062 128.474 56.5062H130.857C131.289 56.5062 131.64 56.1053 131.64 55.6107V53.4516C131.64 52.9571 131.289 52.5562 130.857 52.5562Z"
                    fill="#545454" />
                <path
                    d="M122.317 56.7661H119.934C119.501 56.7661 119.15 57.167 119.15 57.6616V59.8207C119.15 60.3153 119.501 60.7162 119.934 60.7162H122.317C122.75 60.7162 123.1 60.3153 123.1 59.8207V57.6616C123.1 57.167 122.75 56.7661 122.317 56.7661Z"
                    fill="#545454" />
                <path
                    d="M122.317 61.0461H119.934C119.501 61.0461 119.15 61.447 119.15 61.9416V64.1007C119.15 64.5953 119.501 64.9962 119.934 64.9962H122.317C122.75 64.9962 123.1 64.5953 123.1 64.1007V61.9416C123.1 61.447 122.75 61.0461 122.317 61.0461Z"
                    fill="#545454" />
                <path
                    d="M122.317 65.3162H119.934C119.501 65.3162 119.15 65.7171 119.15 66.2116V68.3708C119.15 68.8653 119.501 69.2662 119.934 69.2662H122.317C122.75 69.2662 123.1 68.8653 123.1 68.3708V66.2116C123.1 65.7171 122.75 65.3162 122.317 65.3162Z"
                    fill="#545454" />
                <path
                    d="M130.857 61.0461H128.474C128.041 61.0461 127.69 61.447 127.69 61.9416V64.1007C127.69 64.5953 128.041 64.9962 128.474 64.9962H130.857C131.289 64.9962 131.64 64.5953 131.64 64.1007V61.9416C131.64 61.447 131.289 61.0461 130.857 61.0461Z"
                    fill="#545454" />
                <path
                    d="M122.956 54.487C122.956 55.5533 122.104 56.4178 121.053 56.4178C120.002 56.4178 119.15 55.5533 119.15 54.487C119.15 53.4206 120.002 52.5562 121.053 52.5562C122.104 52.5562 122.956 53.4206 122.956 54.487Z"
                    fill="#545454" />

                {/* Engrenagens */}
                <path
                    d="M137.608 73.6331C137.775 73.4762 138.09 73.407 138.308 73.4795L142.729 74.9503C142.947 75.0226 143.235 74.9299 143.37 74.744L145.821 70.9344C145.934 70.7346 145.902 70.4302 145.751 70.2578L142.617 66.6908C142.466 66.5184 142.4 66.199 142.471 65.981L142.854 64.6878C142.912 64.466 143.142 64.238 143.364 64.1813L147.908 63.0206C148.131 62.9639 148.325 62.7301 148.34 62.5012L148.385 57.8973C148.374 57.6681 148.185 57.4289 147.965 57.3659L143.432 56.0684C143.211 56.0053 142.986 55.7713 142.931 55.5486L142.591 54.3134C142.524 54.0941 142.597 53.7772 142.753 53.6093L145.975 50.1474C146.131 49.9795 146.17 49.6767 146.062 49.4746L143.66 45.562C143.529 45.3734 143.243 45.2732 143.023 45.3394L138.537 46.6899C138.317 46.7561 138.072 46.7419 137.991 46.6583L137.916 46.5835C137.461 46.1285 136.818 45.575 136.818 45.575C136.644 45.4255 136.535 45.1184 136.576 44.8926L137.418 40.2168C137.459 39.991 137.329 39.7139 137.129 39.6009L133.096 37.6025C132.885 37.5125 132.591 37.5816 132.442 37.756L129.419 41.2928C129.27 41.4672 128.965 41.5704 128.74 41.5221L127.118 41.2272C126.891 41.1936 126.633 40.9928 126.545 40.7809L124.726 36.3905C124.638 36.1786 124.379 36.0151 124.15 36.0271L119.815 36.4916C119.589 36.5282 119.378 36.7441 119.347 36.9714L118.719 41.5591C118.688 41.7863 118.486 42.0369 118.271 42.1161L116.443 42.8667C116.235 42.9616 115.91 42.9322 115.721 42.8014L111.832 40.1022C111.644 39.9714 111.338 39.9746 111.152 40.1093C111.152 40.1093 108.804 41.8127 107.595 43.0219L107.588 43.0284C107.581 43.0356 107.655 43.2118 107.751 43.4197L109.703 47.6165C109.799 47.8245 109.766 48.1448 109.628 48.3283L108.345 50.1876C108.223 50.3817 107.935 50.5338 107.706 50.5257L103.004 50.3585C102.775 50.3504 102.521 50.5193 102.44 50.734L101.194 54.6364C101.135 54.8583 101.246 55.1402 101.44 55.2629L105.367 57.7491C105.561 57.8718 105.708 58.1594 105.694 58.3884L105.647 60.7996C105.652 61.029 105.495 61.3124 105.298 61.4295L101.282 63.813C101.084 63.9301 100.964 64.2091 101.014 64.433L102.107 68.347C102.18 68.5646 102.427 68.7412 102.656 68.7397L107.332 68.7079C107.562 68.7063 107.843 68.8677 107.958 69.0664L109.242 71.0845C109.373 71.2727 109.396 71.5945 109.293 71.7997L107.218 75.9471C107.116 76.1522 107.16 76.4564 107.318 76.6233C107.318 76.6233 107.403 76.7126 107.595 76.9047C108.591 77.9007 110.436 79.3193 110.436 79.3193C110.618 79.4591 110.924 79.471 111.116 79.3455L115.061 76.772C115.253 76.6467 115.578 76.6279 115.783 76.7303L117.787 77.6322C118 77.7177 118.194 77.9742 118.218 78.2023L118.714 82.8032C118.738 83.0313 118.943 83.2532 119.168 83.2962L123.374 83.8743C123.603 83.8933 123.867 83.7377 123.96 83.5284L125.9 79.2028C125.994 78.9935 126.257 78.8004 126.485 78.7738L128.351 78.487C128.577 78.4441 128.879 78.555 129.023 78.7337L131.933 82.3439C132.077 82.5225 132.369 82.5992 132.582 82.5145L136.571 80.6621C136.773 80.5543 136.911 80.2806 136.877 80.0538L136.168 75.3515C136.134 75.1246 136.25 74.8195 136.427 74.6734L137.608 73.6331ZM114.557 69.8562C109.104 64.4036 109.104 55.5629 114.557 50.1101C120.009 44.6573 128.85 44.6572 134.303 50.1101C139.756 55.5629 139.756 64.4034 134.303 69.8562C128.85 75.3091 120.009 75.3091 114.557 69.8562Z"
                    fill="#545454" className="engrenagemDireita" />
                <path
                    d="M78.9014 36.1697L78.7194 36.1981H78.5374H78.3554H78.1734L77.9915 36.2322H77.8095L77.6275 36.2607H77.4455L77.2635 36.2948L77.0474 36.3232H76.8654L76.6834 36.3517L76.5015 36.3858L76.291 36.4142L76.655 38.9677L76.4389 38.9961L76.2569 39.0245L76.0749 39.053L75.893 39.0871L75.7394 39.1155L75.5574 39.144L75.3811 39.1781L75.2276 39.2065L75.0456 39.235L74.892 39.2975L74.7101 39.326L74.5565 39.3544L74.3745 39.3885L74.221 39.4169L74.0731 39.4795L73.8911 39.5079L73.7376 39.5705L73.584 39.5989L73.402 39.6615L73.2485 39.6899L73.1006 39.7525L72.913 39.7809L72.7651 39.8435L72.6172 39.906L72.4296 39.9629L72.2817 40.0255L72.094 40.088L71.9462 40.1506L71.7642 40.2074L71.5822 40.2984L71.4002 40.361L71.2467 40.452L70.2116 38.0521L70.0297 38.1431L69.8477 38.234L69.6657 38.2909L69.4837 38.3876L69.3017 38.4786L69.1197 38.5696L68.9378 38.6606L68.7558 38.7516L68.5738 38.8426L68.3918 38.9335L68.2382 39.0245L68.0563 39.144L67.8743 39.235L67.6923 39.326L67.5387 39.4169L67.3568 39.5421L67.1748 39.633L67.0269 39.7525L66.8449 39.8435L66.663 39.9629L66.5094 40.088L66.3274 40.179L66.1454 40.2984L65.9919 40.4235L65.8099 40.543L65.6564 40.6624L65.4744 40.7818L65.3208 40.9069L65.1388 41.0605L64.9569 41.1799L64.809 41.3335L64.627 41.4529L66.2364 43.4263L66.1113 43.5173L65.9919 43.6083L65.9009 43.6993L65.7758 43.8187L65.6564 43.9154L65.5369 44.0007L65.4118 44.1258L65.3208 44.2168L65.2014 44.3362L65.082 44.4272L64.9569 44.5523L64.8374 44.6433L64.7464 44.7627L64.627 44.8821L64.5019 45.0073L64.3825 45.0983L64.2574 45.2177L64.172 45.3371L64.0469 45.4622L63.9275 45.6101L63.8024 45.7352L63.683 45.8546L63.5635 46.0082L63.4725 46.1276L63.3474 46.2811L63.228 46.4006L63.1086 46.5541L62.9835 46.702L62.864 46.8555L62.773 47.0091L62.6479 47.1626L62.5285 47.3162L60.4926 45.8262L60.4016 45.9797L60.3106 46.0992L60.1911 46.2527L60.1002 46.4006L60.0092 46.52L59.9125 46.6736L59.8272 46.8271L59.7021 46.9806L59.6111 47.1285L59.5201 47.2821L59.4291 47.4356L59.3381 47.5835L59.2471 47.737L59.1561 47.8849L59.0651 48.0726L58.9741 48.2204L58.8831 48.4081L58.7921 48.5559L58.7012 48.7379L58.6102 48.8915L58.5192 49.0735L58.4282 49.2554L58.3372 49.4374L58.2746 49.6194L58.1836 49.8014L58.0926 49.9834L58.0017 50.1654L57.9107 50.3474L57.8481 50.5635L57.7628 50.7454L57.6718 50.9559L57.5751 51.1663L59.9125 52.0762L59.8556 52.2298L59.7931 52.3833L59.7305 52.5368L59.6736 52.6847L59.6111 52.8383L59.5826 52.9918L59.5201 53.1397L59.4632 53.2932L59.4007 53.4468L59.3665 53.6288L59.3097 53.7766L59.2755 53.9302L59.2187 54.1121L59.1902 54.2657L59.1277 54.4192L59.0936 54.5955L59.0651 54.7491L59.0367 54.9368L58.9741 55.0846L58.9457 55.2666L58.9173 55.4486L58.8831 55.6306L58.8547 55.8126L58.7921 55.9945L58.7637 56.1765L58.7296 56.3585L58.7012 56.5405L58.6727 56.7225L58.6386 56.9045L58.6102 57.1206L58.5817 57.3026V57.513L56.1818 57.24L56.1477 57.422V57.604L56.1193 57.7859V57.9679V58.1215L56.0908 58.3035V58.4854V58.6333V58.821V58.9688V59.1508V59.3044V59.4864V59.6399V59.8162V59.8219V59.9697V60.0039V60.1517V60.1574V60.3337V60.4873V60.6692V60.8228V61.0048V61.1526V61.3403V61.4882V61.6702L56.1193 61.8521V62.0057V62.1877L56.1477 62.3697V62.5516L56.1818 62.7336L58.5817 62.4606V62.6711L58.6102 62.853L58.6386 63.0692L58.6727 63.2511L58.7012 63.4331L58.7296 63.6151L58.7637 63.7971L58.7921 63.9791L58.8547 64.1611L58.8831 64.343L58.9173 64.525L58.9457 64.707L58.9741 64.889L59.0367 65.0369L59.0651 65.2245L59.0936 65.3781L59.1277 65.5544L59.1902 65.7079L59.2187 65.8615L59.2755 66.0435L59.3097 66.197L59.3665 66.3449L59.4007 66.5268L59.4632 66.6804L59.5201 66.8339L59.5826 66.9818L59.6111 67.1354L59.6736 67.2889L59.7305 67.4368L59.7931 67.5903L59.8556 67.7439L59.9125 67.8974L57.5751 68.8073L57.6718 69.0178L57.7628 69.2282L57.8481 69.4102L57.9107 69.6263L58.0017 69.8082L58.0926 69.9902L58.1836 70.1722L58.2746 70.3542L58.3372 70.5362L58.4282 70.7182L58.5192 70.9001L58.6102 71.0821L58.7012 71.2357L58.7921 71.4177L58.8831 71.5655L58.9741 71.7532L59.0651 71.9011L59.1561 72.0887L59.2471 72.2366L59.3381 72.3901L59.4291 72.538L59.5201 72.6916L59.6111 72.8451L59.7021 72.993L59.8272 73.1465L59.9125 73.3001L60.0092 73.4536L60.1002 73.573L60.1911 73.7209L60.3106 73.8744L60.4016 73.9939L60.4926 74.1474L62.5285 72.6574L62.6479 72.811L62.773 72.9645L62.864 73.1181L62.9835 73.2716L63.1086 73.4195L63.228 73.573L63.3474 73.6925L63.4725 73.846L63.5635 73.9654L63.683 74.119L63.8024 74.2384L63.9275 74.3635L64.0469 74.5114L64.172 74.6365L64.2574 74.7559L64.3825 74.8754L64.5019 74.9664L64.627 75.0915L64.7464 75.2109L64.8374 75.3303L64.9569 75.4213L65.082 75.5464L65.2014 75.6374L65.3208 75.7568L65.4118 75.8478L65.5369 75.9729L65.6564 76.0583L65.7758 76.1549L65.9009 76.2744L65.9919 76.3654L66.1113 76.4563L66.2364 76.5473L64.627 78.5207L64.809 78.6402L64.9569 78.7937L65.1388 78.9131L65.3208 79.0667L65.4744 79.1918L65.6564 79.3112L65.8099 79.4306L65.9919 79.5501L66.1454 79.6752L66.3274 79.7946L66.5094 79.8856L66.663 80.0107L66.8449 80.1301L67.0269 80.2211L67.1748 80.3406L67.3568 80.4316L67.5387 80.5567L67.6923 80.6477L67.8743 80.7387L68.0563 80.8296L68.2382 80.9491L68.3918 81.0401L68.5738 81.1311L68.7558 81.222L68.9378 81.313L69.1197 81.404L69.3017 81.495L69.4837 81.586L69.6657 81.6827L69.8477 81.7396L70.0297 81.8306L70.2116 81.9215L71.2467 79.5216L71.4002 79.6126L71.5822 79.6752L71.7642 79.7662L71.9462 79.823L72.094 79.8856L72.2817 79.9482L72.4296 80.0107L72.6172 80.0676L72.7651 80.1301L72.913 80.1927L73.1006 80.2211L73.2485 80.2837L73.402 80.3121L73.584 80.3747L73.7376 80.4031L73.8911 80.4657L74.0731 80.4941L74.221 80.5567L74.3745 80.5851L74.5565 80.6192L74.7101 80.6477L74.892 80.6761L75.0456 80.7387L75.2276 80.7671L75.3811 80.7955L75.5574 80.8296L75.7394 80.8581L75.893 80.8865L76.0749 80.9206L76.2569 80.9491L76.4389 80.9775L76.655 81.0059L76.291 83.5594L76.5015 83.5878L76.6834 83.622L76.8654 83.6504H77.0474L77.2635 83.6788L77.4455 83.713H77.6275L77.8095 83.7414H77.9915L78.1734 83.7755H78.3554H78.5374H78.7194L78.9014 83.8039H79.0834H79.2369H79.4189H79.6009H79.7829H79.9648H80.1468H80.3288L80.4824 83.7755H80.6587H80.8463L81.0283 83.7414H81.2103L81.3923 83.713H81.5743L81.7562 83.6788L81.9382 83.6504H82.1202L81.8472 81.0059L82.0292 80.9775L82.2453 80.9491L82.4273 80.9206H82.6093L82.8197 80.8865L83.0017 80.8296L83.2121 80.7955L83.3941 80.7671L83.6102 80.7387L83.7922 80.7102L83.9742 80.6477L84.1846 80.6192L84.3666 80.5567L84.5486 80.5225L84.7305 80.4657L84.9467 80.4031L85.1286 80.3747L85.3106 80.3121L85.4926 80.2496L85.6746 80.1927L85.8566 80.1301L86.0386 80.0676L86.2262 80.0107L86.4025 79.9482L86.5845 79.8856L86.7665 79.7946L86.9485 79.7321L87.102 79.6752L87.284 79.5842L87.466 79.5216L87.6195 79.4306L87.8015 79.3738L88.8366 81.8021L89.0185 81.7396L89.2005 81.6486L89.3484 81.5576L89.5304 81.495L89.6839 81.404L89.8659 81.313L90.0195 81.2562L90.1673 81.1652L90.3493 81.0685L90.5029 80.9775L90.6564 80.9206L90.8043 80.8296L90.9635 80.7387L91.1114 80.6477L91.2933 80.5567L91.4469 80.4657L91.5663 80.3747L91.7199 80.2837L91.8677 80.1927L92.0213 80.096L92.1748 80.0107L92.3284 79.9197L92.4478 79.823L92.6014 79.7321L92.7208 79.6126L92.8743 79.5216L92.9938 79.4306L93.1473 79.3396L93.2724 79.2202L93.4203 79.1292L93.5454 79.0382L93.6648 78.9131L92.0554 76.7919L92.209 76.7009L92.3284 76.5758L92.4762 76.4563L92.6298 76.3653L92.7833 76.2459L92.9085 76.1208L93.0563 75.9729L93.2099 75.8478L93.3577 75.7284L93.4772 75.609L93.6307 75.4554L93.7842 75.3303L93.9321 75.1825L94.0572 75.0289L94.2108 74.9095L94.3643 74.7559L94.4837 74.6024L94.6373 74.4488L94.7567 74.3294L94.8762 74.1759L95.0297 74.028L95.1548 73.8744L95.2742 73.7209L95.3937 73.6015L95.5131 73.4536L95.6382 73.3001L95.7292 73.1465L95.8486 73.0271L95.9453 72.8735L96.0647 72.7484L96.1557 72.6006L96.2467 72.4811L98.3737 74.0564L98.4931 73.9086L98.5841 73.755L98.7092 73.6299L98.7945 73.482L98.8912 73.3285L99.0106 73.1806L99.1016 73.0271L99.1926 72.8735L99.312 72.6916L99.403 72.538L99.494 72.3901L99.585 72.2082L99.676 72.0546L99.767 71.9011L99.858 71.7191L99.949 71.5655L100.046 71.3835L100.131 71.2357L100.228 71.0537L100.319 70.9001L100.404 70.7182L100.466 70.5646L100.557 70.3826L100.62 70.2348L100.711 70.0528L100.774 69.8992L100.865 69.7457L100.921 69.5637L100.984 69.4102L101.041 69.2623L101.109 69.1087L101.166 68.9552L98.7092 67.96L98.7945 67.7723L98.8571 67.5903L98.9196 67.4083L98.9822 67.2263L99.039 67.0444L99.1016 66.8339L99.1642 66.652L99.221 66.47L99.2836 66.288L99.3461 66.106L99.403 65.924L99.4371 65.7079L99.494 65.5259L99.5566 65.3439L99.585 65.162L99.6475 64.98L99.676 64.798L99.7044 64.616L99.767 64.434L99.8011 64.252L99.8295 64.0701L99.858 63.8881L99.8921 63.7061L99.9148 63.5241L99.949 63.3421V63.1545L99.9831 63.0066L100.012 62.8246V62.6426L100.046 62.4606V62.3071V62.1251L102.656 62.3696L102.684 62.1877V62.0341L102.719 61.8521V61.6701L102.747 61.4882V61.3062V61.1242V60.9422V60.7602V60.5782V60.3963V60.2143V60.0323L102.741 59.9868L102.747 59.9413V59.7593V59.5773V59.3953V59.2134V59.0314V58.8494V58.6674V58.4854L102.719 58.3034V58.1215L102.684 57.9395V57.7859L102.656 57.6039L100.046 57.8485V57.6665V57.513L100.012 57.331V57.149L99.9831 56.967L99.949 56.8191V56.6315L99.9148 56.4495L99.8921 56.2675L99.858 56.0855L99.8295 55.9035L99.8011 55.7215L99.767 55.5396L99.7044 55.3576L99.676 55.1756L99.6475 54.9936L99.585 54.8116L99.5566 54.6296L99.494 54.4477L99.4371 54.2657L99.403 54.0496L99.3461 53.8676L99.2836 53.6856L99.221 53.5036L99.1642 53.3216L99.1016 53.1397L99.039 52.9292L98.9822 52.7472L98.9196 52.5653L98.8571 52.3833L98.7945 52.2013L98.7092 52.0136L101.166 51.0184L101.109 50.8649L101.041 50.7113L100.984 50.5634L100.921 50.4099L100.865 50.2279L100.774 50.0744L100.711 49.9208L100.62 49.7388L100.557 49.591L100.466 49.409L100.404 49.2554L100.319 49.0734L100.228 48.9199L100.131 48.7379L100.046 48.5901L99.949 48.4081L99.858 48.2545L99.767 48.0725L99.676 47.919L99.585 47.7654L99.494 47.5835L99.403 47.4356L99.312 47.282L99.1926 47.1001L99.1016 46.9465L99.0106 46.793L98.8912 46.6451L98.7945 46.4915L98.7092 46.3437L98.5841 46.2186L98.4931 46.065L98.3737 45.9172L96.2467 47.4925L96.1557 47.373L96.0647 47.2252L95.9453 47.1001L95.8486 46.9465L95.7292 46.8271L95.6382 46.6735L95.5131 46.52L95.3937 46.3721L95.2742 46.2527L95.1548 46.0991L95.0297 45.9456L94.8762 45.7977L94.7567 45.6442L94.6373 45.5248L94.4837 45.3712L94.3643 45.2177L94.2108 45.0641L94.0572 44.9447L93.9321 44.7911L93.7842 44.6433L93.6307 44.5182L93.4772 44.3646L93.3577 44.2452L93.2099 44.1258L93.0563 44.0006L92.9085 43.8528L92.7833 43.7277L92.6298 43.6082L92.4762 43.5172L92.3284 43.3978L92.209 43.2727L92.0554 43.1817L93.6648 41.0605L93.5454 40.9354L93.4203 40.8444L93.2724 40.7534L93.1473 40.6339L92.9938 40.5429L92.8743 40.452L92.7208 40.361L92.6014 40.2415L92.4478 40.1505L92.3284 40.0539L92.1748 39.9629L92.0213 39.8776L91.8677 39.7809L91.7199 39.6899L91.5663 39.5989L91.4469 39.5079L91.2933 39.4169L91.1114 39.3259L90.9635 39.2349L90.8043 39.1439L90.6564 39.053L90.5029 38.9961L90.3493 38.9051L90.1673 38.8084L90.0195 38.7174L89.8659 38.6606L89.6839 38.5696L89.5304 38.4786L89.3484 38.416L89.2005 38.325L89.0185 38.234L88.8366 38.1715L87.8015 40.5998L87.6195 40.5429L87.466 40.452L87.284 40.3894L87.102 40.2984L86.9485 40.2415L86.7665 40.179L86.5845 40.088L86.4025 40.0254L86.2262 39.9629L86.0386 39.906L85.8566 39.8434L85.6746 39.7809L85.4926 39.724L85.3106 39.6615L85.1286 39.5989L84.9467 39.5705L84.7305 39.5079L84.5486 39.451L84.3666 39.4169L84.1846 39.3544L83.9742 39.3259L83.7922 39.2634L83.6102 39.2349L83.3941 39.2065L83.2121 39.1781L83.0017 39.1439L82.8197 39.0871L82.6093 39.053H82.4273L82.2453 39.0245L82.0292 38.9961L81.8472 38.9677L82.1202 36.3232H81.9382L81.7562 36.2948L81.5743 36.2606H81.3923L81.2103 36.2322H81.0283L80.8463 36.1981H80.6587H80.4824L80.3288 36.1696H80.1468H79.9648H79.7829H79.6009H79.4189H79.2369H79.0834L78.9014 36.1697ZM79.3905 42.4254L80.3629 42.4538L81.2956 42.5164L82.2453 42.6699L83.1837 42.8519L84.1277 43.0964L85.0376 43.3978L85.9476 43.7277L86.8575 44.1258L87.7105 44.5807L88.592 45.0983L89.4109 45.6442L90.2014 46.2811L90.9919 46.9181L91.7483 47.646L92.4478 48.4365L93.1473 49.2554H93.0848C93.7153 50.0701 94.2771 50.9392 94.7567 51.8601V51.8373L94.8534 52.0535C95.9979 54.3196 96.6567 56.8706 96.7017 59.5717H96.696C96.7001 59.7092 96.7055 59.8481 96.7074 59.9868C96.7055 60.1255 96.7001 60.2644 96.696 60.402H96.7017C96.6567 63.103 95.9979 65.6541 94.8534 67.9202L94.7567 68.1363V68.1135C94.2771 69.0344 93.7153 69.9035 93.0848 70.7182H93.1473L92.4478 71.5371L91.7483 72.3276L90.9919 73.0555L90.2014 73.6925L89.4109 74.3294L88.592 74.8754L87.7105 75.3929L86.8575 75.8479L85.9476 76.2459L85.0376 76.5758L84.1277 76.8772L83.1837 77.1217L82.2453 77.3037L81.2956 77.4573L80.3629 77.5198L79.3905 77.5483L78.4464 77.5198L77.4739 77.4573L76.5299 77.3037L75.5915 77.1217L74.6475 76.8772L73.7376 76.5758L72.8277 76.2459L71.9121 75.8479L71.0647 75.3645L70.1832 74.8754L69.3643 74.301L68.5453 73.6925L67.7833 72.993L67.0269 72.265L66.2933 71.4802L65.6279 70.6556H65.662C65.0271 69.8275 64.4696 68.9419 63.9901 68.0055L63.9844 68.0453L63.9105 67.8462C62.7884 65.5981 62.1356 63.0743 62.0906 60.402H62.0963C62.0921 60.2644 62.0868 60.1255 62.0849 59.9868C62.0868 59.8481 62.0921 59.7092 62.0963 59.5717H62.0906C62.136 56.9005 62.7888 54.3746 63.9105 52.1274L63.9844 51.9283L63.9901 51.9681C64.4696 51.0317 65.0271 50.1461 65.662 49.318H65.6279L66.2933 48.4934L67.0269 47.7086L67.7833 46.9807L68.5453 46.2811L69.3643 45.6726L70.1832 45.0983L71.0647 44.6092L71.9121 44.1258L72.8277 43.7277L73.7376 43.3978L74.6475 43.0964L75.5915 42.8519L76.5299 42.6699L77.4739 42.5164L78.4464 42.4538L79.3905 42.4254Z"
                    fill="#545454" className="engrenagemEsquerda" />
            </svg>
        </div>
    );
};

export default Loading;
