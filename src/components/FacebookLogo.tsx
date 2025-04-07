
import React from 'react';

interface FacebookLogoProps {
  size?: 'small' | 'large';
}

const FacebookLogo: React.FC<FacebookLogoProps> = ({ size = 'large' }) => {
  const logoClasses = size === 'small' ? 'w-10 h-10' : 'w-72';
  
  if (size === 'small') {
    return (
      <div className={`${logoClasses}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
          <path fill="#1877f2" d="M24,4C12.954,4,4,12.954,4,24c0,10.028,7.379,18.331,17.004,19.777v-14.006h-5.116v-5.771h5.116v-4.4c0-5.052,3.006-7.836,7.611-7.836c2.205,0,4.502,0.394,4.502,0.394v4.942h-2.539c-2.491,0-3.275,1.548-3.275,3.134v3.766h5.57l-0.891,5.771h-4.679v14.006C36.621,42.331,44,34.028,44,24C44,12.954,35.046,4,24,4z"/>
        </svg>
      </div>
    );
  }
  
  return (
    <div className={`${logoClasses}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 60">
        <path d="M 22.092 21.091 L 17.194 21.091 L 17.194 15.095 L 22.092 15.095 L 22.092 10.479 C 22.092 6.172 24.800 4 28.500 4 C 30.300 4 31.879 4.145 32.400 4.213 L 32.400 9.514 L 29.600 9.514 C 27.400 9.514 27.000 10.556 27.000 12.047 L 27.000 15.095 L 32.185 15.095 L 31.485 21.091 L 27.000 21.091 L 27.000 35 L 22.092 35 L 22.092 21.091 Z" fill="#1877f2"></path>
        <path d="M 56.621 19.573 C 56.450 19.498 56.264 19.498 56.094 19.573 C 56.020 19.646 55.951 19.722 55.890 19.805 L 55.889 19.804 C 54.471 21.566 53.766 24.065 53.766 27.300 C 53.766 30.535 54.467 33.042 55.883 34.817 L 55.890 34.815 C 56.085 35.044 56.315 35.166 56.580 35.180 C 56.846 35.192 57.087 35.094 57.303 34.884 C 57.517 34.673 57.635 34.436 57.656 34.172 C 57.677 33.909 57.594 33.656 57.407 33.413 C 56.237 31.998 55.680 30.005 55.668 27.436 L 55.668 27.174 C 55.690 24.632 56.245 22.646 57.407 21.207 C 57.596 20.962 57.681 20.709 57.661 20.446 C 57.638 20.183 57.520 19.946 57.304 19.734 C 57.091 19.523 56.848 19.424 56.580 19.438 C 56.580 19.438 56.623 19.573 56.621 19.573 Z" fill="#1877f2"></path>
        <path d="M 41.000 20.091 C 36.400 20.091 33.593 23.700 33.593 29.113 C 33.593 33.608 36.100 37.529 41.493 37.529 C 45.014 37.529 48.600 35.200 48.600 29.113 C 48.600 23.500 45.300 20.091 41.000 20.091 M 41.265 23.800 C 43.400 23.800 43.700 26.527 43.700 29.114 C 43.700 32.600 43.024 33.852 41.264 33.852 C 39.500 33.852 38.526 31.827 38.526 29.071 C 38.527 25.912 39.464 23.800 41.265 23.800" fill="#1877f2"></path>
        <path d="M 74.000 20.091 C 69.400 20.091 66.593 23.700 66.593 29.113 C 66.593 33.608 69.100 37.529 74.493 37.529 C 78.014 37.529 81.600 35.200 81.600 29.113 C 81.600 23.500 78.300 20.091 74.000 20.091 M 74.265 23.800 C 76.400 23.800 76.700 26.527 76.700 29.114 C 76.700 32.600 76.024 33.852 74.264 33.852 C 72.500 33.852 71.526 31.827 71.526 29.071 C 71.526 25.912 72.464 23.800 74.265 23.800" fill="#1877f2"></path>
        <path d="M 89.158 23.883 C 90.667 23.883 91.945 24.898 92.417 26.700 L 95.900 25.700 C 94.800 22.091 92.267 20.091 89.236 20.091 C 84.791 20.091 81.313 23.800 81.313 28.853 C 81.313 34.000 84.707 37.600 89.017 37.600 C 92.255 37.600 94.900 35.553 95.900 31.900 L 92.200 30.900 C 91.714 32.700 90.560 33.800 89.096 33.800 C 87.222 33.800 86.108 31.919 86.108 28.898 C 86.108 25.783 87.081 23.883 89.158 23.883" fill="#1877f2"></path>
        <path d="M 65.000 34.700 C 64.702 35.017 64.418 35.294 64.148 35.530 C 62.986 36.508 61.564 37.000 59.889 37.000 C 57.889 37.000 56.400 36.510 55.400 35.534 C 54.400 34.558 53.900 33.271 53.900 31.672 C 53.900 30.407 54.303 29.323 55.106 28.419 C 55.709 27.716 56.838 27.000 58.491 26.269 C 60.144 25.538 62.705 24.760 66.173 23.933 L 66.200 23.532 L 66.193 23.212 C 66.186 22.954 66.156 22.723 66.104 22.523 C 65.898 21.711 65.404 21.091 64.621 20.661 C 63.839 20.231 62.896 20.016 61.793 20.016 C 60.664 20.016 59.764 20.173 59.094 20.485 C 58.424 20.798 57.835 21.140 57.324 21.512 C 56.814 21.884 56.347 22.312 55.924 22.798 C 55.924 22.798 55.395 23.491 54.793 23.053 C 54.274 22.684 52.194 21.225 52.194 21.225 C 52.471 20.793 52.971 20.289 53.694 19.714 C 54.417 19.138 55.264 18.622 56.236 18.166 C 57.207 17.709 58.350 17.337 59.664 17.051 C 60.978 16.765 62.340 16.622 63.750 16.622 C 65.207 16.622 66.571 16.779 67.843 17.091 C 69.115 17.403 70.236 17.894 71.207 18.564 C 72.179 19.234 72.940 20.091 73.491 21.134 C 74.042 22.177 74.317 23.407 74.317 24.826 L 74.317 36.622 C 74.317 36.622 70.500 36.622 69.350 36.622 C 68.200 36.622 68.100 35.700 68.100 35.700 L 68.050 34.700 C 67.529 35.034 67.023 35.334 66.529 35.600 C 66.036 35.867 65.515 34.700 65.000 34.700 Z M 65.400 27.400 C 62.943 28.134 61.343 28.767 60.600 29.300 C 60.071 29.660 59.684 30.032 59.441 30.417 C 59.197 30.802 59.077 31.235 59.077 31.717 C 59.077 32.453 59.328 33.091 59.829 33.566 C 60.330 34.042 60.930 34.278 61.774 34.278 C 63.000 34.278 64.159 33.748 65.250 32.689 C 66.341 31.629 66.886 30.396 66.886 28.992 L 66.886 26.800 L 65.400 27.400 Z" fill="#1877f2"></path>
        <path d="M 114.751 22.834 C 113.793 21.043 112.301 20.125 110.275 20.081 C 109.452 20.081 108.686 20.214 107.979 20.478 C 107.271 20.743 106.695 21.027 106.248 21.331 L 106.087 21.282 L 106.087 21.106 L 106.087 10.507 L 100.537 10.507 L 100.537 36.756 L 106.087 36.756 L 106.087 26.208 C 106.087 25.113 106.329 24.209 106.813 23.499 C 107.298 22.788 107.950 22.433 108.772 22.433 C 109.626 22.433 110.249 22.705 110.641 23.248 C 111.034 23.792 111.230 24.593 111.230 25.654 L 111.230 36.756 L 116.802 36.756 L 116.802 24.697 C 116.802 24.165 116.779 23.448 116.732 22.548 C 116.685 21.647 116.595 20.831 116.458 20.101 C 116.010 20.101 115.709 21.626 114.751 22.834 Z" fill="#1877f2"></path>
        <path d="M 92.917 25.118 L 97.379 36.756 L 103.142 36.756 L 94.432 16.470 L 90.089 16.470 L 81.402 36.756 L 87.165 36.756 L 91.720 25.114 C 91.786 24.948 91.890 24.834 92.032 24.771 C 92.174 24.709 92.319 24.683 92.466 24.693 C 92.613 24.704 92.749 24.752 92.875 24.836 C 92.911 24.859 92.889 25.023 92.917 25.118 Z" fill="#1877f2"></path>
        <path d="M 141.138 20.774 C 140.331 20.266 139.382 19.882 138.291 19.622 C 137.200 19.362 136.075 19.232 134.916 19.232 C 132.566 19.232 130.449 19.740 128.566 20.758 C 126.683 21.774 125.189 23.215 124.083 25.078 C 122.978 26.941 122.425 29.071 122.425 31.469 C 122.425 33.867 122.978 36.001 124.083 37.865 C 125.189 39.728 126.683 41.168 128.566 42.185 C 130.449 43.202 132.566 43.711 134.916 43.711 C 136.075 43.711 137.200 43.581 138.291 43.321 C 139.382 43.062 140.331 42.677 141.138 42.169 L 141.180 42.146 C 142.922 41.131 143.964 39.080 144.304 37.993 L 144.349 37.862 L 144.360 37.862 L 142.917 36.925 L 137.166 36.925 L 137.166 30.483 L 144.360 30.483 L 144.360 25.078 L 144.349 25.078 L 144.304 24.947 C 143.964 23.860 142.922 21.809 141.180 20.794 L 141.138 20.774 Z M 133.751 36.883 C 131.582 36.883 129.827 35.124 129.827 32.950 C 129.827 30.777 131.582 29.018 133.751 29.018 C 135.919 29.018 137.673 30.777 137.673 32.950 C 137.673 35.124 135.919 36.883 133.751 36.883 Z" fill="#1877f2"></path>
        <path d="M 120.989 20.081 L 120.989 25.330 L 118.954 25.330 L 118.954 30.483 L 120.989 30.483 L 120.989 36.756 L 126.539 36.756 L 126.539 30.483 L 129.472 30.483 L 129.472 25.330 L 126.539 25.330 L 126.539 20.081 L 120.989 20.081 Z" fill="#1877f2"></path>
        <path d="M 172.814 25.516 C 171.881 23.827 170.526 22.491 168.747 21.508 C 166.968 20.524 164.962 20.033 162.727 20.033 C 160.410 20.033 158.323 20.557 156.469 21.606 C 154.614 22.656 153.147 24.087 152.065 25.898 C 150.984 27.711 150.444 29.798 150.444 32.161 C 150.444 34.526 150.984 36.613 152.065 38.426 C 153.147 40.239 154.614 41.669 156.469 42.719 C 158.323 43.769 160.410 44.293 162.727 44.293 C 164.962 44.293 166.968 43.801 168.747 42.817 C 170.526 41.834 171.881 40.497 172.814 38.810 C 173.747 37.121 174.214 34.945 174.214 32.281 L 174.214 32.032 C 174.214 29.370 173.747 27.204 172.814 25.516 Z M 167.843 36.285 C 167.211 37.154 166.349 37.823 165.252 38.290 C 164.156 38.757 163.030 38.993 161.874 39 C 160.662 38.993 159.497 38.757 158.376 38.290 C 157.256 37.823 156.365 37.154 155.702 36.285 C 155.040 35.415 154.710 34.375 154.710 33.165 L 154.710 31.172 C 154.710 29.961 155.040 28.921 155.702 28.052 C 156.365 27.183 157.256 26.514 158.376 26.047 C 159.497 25.580 160.662 25.344 161.874 25.337 C 163.030 25.344 164.156 25.580 165.252 26.047 C 166.349 26.514 167.211 27.183 167.843 28.052 C 168.475 28.921 168.791 29.961 168.791 31.172 L 168.791 33.165 C 168.791 34.375 168.475 35.415 167.843 36.285 Z" fill="#1877f2"></path>
        <path d="M 149.175 21.439 C 148.159 20.531 146.727 20.073 144.878 20.066 L 137 20.066 L 137 44.016 L 142.764 44.016 L 142.764 35.102 L 144.878 35.102 C 146.727 35.096 148.159 34.652 149.175 33.772 C 150.190 32.891 150.851 31.831 151.155 30.591 C 151.460 29.352 151.612 28.156 151.612 27.004 C 151.612 25.845 151.460 24.644 151.155 23.398 C 150.851 22.152 150.190 21.692 149.175 21.439 Z M 147.153 28.485 C 147.153 29.594 146.894 30.481 146.373 31.147 C 145.853 31.815 145.101 32.149 144.115 32.149 L 142.764 32.149 L 142.764 23.019 L 144.115 23.019 C 145.101 23.019 145.853 23.355 146.373 24.023 C 146.894 24.689 147.153 25.578 147.153 26.688 L 147.153 28.485 Z" fill="#1877f2"></path>
        <path d="M 177.552 25.118 L 182.014 36.756 L 187.778 36.756 L 179.068 16.470 L 174.724 16.470 L 166.036 36.756 L 171.800 36.756 L 176.355 25.114 C 176.421 24.948 176.525 24.834 176.667 24.771 C 176.809 24.709 176.954 24.683 177.102 24.693 C 177.248 24.704 177.384 24.752 177.510 24.836 C 177.547 24.859 177.524 25.023 177.552 25.118 Z" fill="#1877f2"></path>
        <path d="M 188.847 26.391 C 189.073 25.169 189.558 24.100 190.301 23.184 C 191.045 22.267 192.069 21.529 193.376 20.967 C 194.684 20.406 196.264 20.125 198.117 20.125 C 199.600 20.125 200.907 20.334 202.037 20.753 C 203.166 21.171 204.101 21.669 204.844 22.247 C 205.588 22.826 206.113 23.329 206.420 23.757 L 206.920 24.569 L 201.585 27.031 L 200.919 25.947 C 200.694 25.624 200.341 25.295 199.860 24.959 C 199.380 24.624 198.784 24.457 198.073 24.457 C 197.062 24.457 196.227 24.720 195.567 25.245 C 194.908 25.769 194.434 26.453 194.145 27.295 C 193.857 28.138 193.713 29.013 193.713 29.922 L 193.713 32.233 C 193.713 33.045 193.822 33.818 194.041 34.550 C 194.259 35.282 194.574 35.919 194.984 36.460 C 195.395 37.001 195.889 37.425 196.465 37.730 C 197.042 38.035 197.678 38.187 198.372 38.187 C 199.657 38.187 200.622 37.833 201.268 37.126 C 201.914 36.418 202.238 35.416 202.238 34.119 L 202.238 33.781 L 195.200 33.781 L 195.200 29.698 L 207.665 29.698 L 207.655 32.814 C 207.645 35.168 207.071 37.168 205.933 38.815 C 204.794 40.461 203.262 41.696 201.337 42.519 C 199.412 43.342 197.299 43.754 195.000 43.754 C 192.685 43.754 190.671 43.211 188.959 42.126 C 187.247 41.041 185.950 39.574 185.068 37.724 C 184.186 35.875 183.745 33.846 183.745 31.639 L 183.745 29.698 C 183.745 27.616 184.112 25.768 184.846 24.156 C 185.579 22.544 186.630 21.242 188.000 20.248 C 189.371 19.254 190.981 18.646 192.833 18.422 C 194.685 18.198 196.588 18.304 198.542 18.740 L 198.696 18.771 L 198.696 22.935 L 198.293 22.831 C 196.652 22.356 194.992 22.272 193.313 22.579 C 191.635 22.886 190.387 23.538 189.571 24.535 C 188.754 25.531 188.347 26.842 188.347 28.468 L 183.745 28.468 L 183.745 27.022 C 183.745 26.848 184.108 26.551 188.847 26.391 Z" fill="#1877f2"></path>
      </svg>
    </div>
  );
};

export default FacebookLogo;
