import InstallOption from './InstallOption';

export const installations = [
  {
    name: 'With CDN',
    icon: "<svg width='25' height='25' viewBox='-8.5 0 273 273' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' preserveAspectRatio='xMidYMid'><g><path d='M126.517,0 L256,45.398 L236.333,212.796 L126.517,272.817 L17.706,212.715 L0,45.422 L126.517,0' fill='#E14337'></path><path d='M174.235,140.62 C174.235,144.743 170.892,148.086 166.768,148.086 C162.644,148.086 159.301,144.743 159.301,140.62 C159.301,136.496 162.644,133.153 166.768,133.153 C170.892,133.153 174.235,136.496 174.235,140.62 Z M129.68,93.85 C129.68,97.973 126.337,101.316 122.214,101.316 C118.09,101.316 114.747,97.973 114.747,93.85 C114.747,89.726 118.09,86.383 122.214,86.383 C126.337,86.383 129.68,89.726 129.68,93.85 Z M127.711,81.211 C136.815,72.209 146.855,64.452 157.09,58.741 C147.783,54.752 137.535,52.536 126.767,52.536 C121.728,52.536 116.806,53.036 112.036,53.96 C112.899,61.568 115.736,70.674 120.234,80.223 C120.882,80.13 121.54,80.065 122.214,80.065 C124.169,80.065 126.026,80.477 127.711,81.211 Z M88.907,151.76 C89.618,146.104 90.951,140.299 92.956,134.378 C96.755,123.164 102.904,111.824 110.574,101.213 C109.223,99.081 108.429,96.56 108.429,93.85 C108.429,90.128 109.91,86.757 112.307,84.277 C107.619,74.396 104.505,64.726 103.371,56.164 C72.26,66.071 49.72,95.19 49.72,129.583 C49.72,131.837 49.838,134.062 50.027,136.267 C59.569,147.831 70.361,154.375 81.032,157.767 C82.805,154.894 85.594,152.723 88.907,151.76 Z M131.924,115.168 C129.792,112.545 127.766,109.859 125.828,107.139 C124.674,107.453 123.466,107.634 122.214,107.634 C120.525,107.634 118.914,107.316 117.418,106.76 C110.438,116.52 104.837,126.926 101.349,137.221 C99.862,141.612 98.54,146.694 97.794,152.167 C101.632,153.677 104.631,156.848 105.891,160.804 C108.723,160.665 111.447,160.383 114.026,160.003 C127.727,157.986 141.398,152.634 153.711,145.015 C153.246,143.633 152.983,142.158 152.983,140.619 C152.983,139.325 153.175,138.077 153.508,136.889 C146.408,131.151 139.13,124.03 131.924,115.168 Z M133.169,102.192 C140.211,112.083 148.774,121.592 158.533,129.584 C160.832,127.865 163.676,126.835 166.768,126.835 C169.497,126.835 172.034,127.638 174.174,129.006 C183.987,119.398 191.79,108.273 196.389,96.56 C189.913,82.932 179.561,71.503 166.749,63.71 C155.474,69.063 144.259,77.271 134.234,87.113 C135.353,89.106 135.998,91.401 135.998,93.85 C135.998,96.989 134.937,99.874 133.169,102.192 Z M180.239,143.53 C186.836,146.673 193.762,149.03 200.961,150.348 C202.806,143.739 203.815,136.781 203.815,129.583 C203.815,122.162 202.744,114.994 200.786,108.203 C195.577,118.16 188.322,127.552 179.694,135.867 C180.24,137.35 180.553,138.946 180.553,140.619 C180.553,141.619 180.441,142.591 180.239,143.53 Z M79.041,166.35 C69.529,163.404 60.781,158.568 53.026,151.937 C60.552,176.797 80.302,196.33 105.285,203.573 C101.823,200.171 99.035,196.712 96.91,193.164 C94.16,188.574 92.078,183.7 90.644,178.595 C84.477,177.644 79.656,172.622 79.041,166.35 Z M159.04,152.034 C145.504,160.558 130.424,166.546 115.316,168.77 C112.068,169.248 108.863,169.546 105.706,169.677 C104.564,172.83 102.317,175.451 99.418,177.055 C100.579,180.932 102.234,184.808 104.512,188.61 C108.149,194.681 114.267,200.588 123.08,206.537 C124.302,206.595 125.531,206.631 126.767,206.631 C158.979,206.631 186.56,186.856 198.069,158.79 C191.79,157.51 184.141,155.199 175.701,151.107 C173.295,153.159 170.179,154.404 166.768,154.404 C163.904,154.404 161.244,153.53 159.04,152.034 Z M100.224,164.989 C100.224,169.113 96.881,172.456 92.757,172.456 C88.633,172.456 85.29,169.113 85.29,164.989 C85.29,160.865 88.633,157.522 92.757,157.522 C96.881,157.522 100.224,160.865 100.224,164.989 Z' fill='#F9BD3E'></path><path d='M256,45.398 L126.517,0 L126.517,272.817 L236.333,212.796 L256,45.398 Z' fill-opacity='0.3' fill='#440401'></path></g></svg>",
  },
  {
    name: 'With NPM',
    icon: "<svg width='25' height='25' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 10V20H9V22H16V20H32V10H0Z' fill='#CB3837'/><path d='M5.46205 12H2V18H5.46205V13.6111H7.22344V18H8.98482V12H5.46205ZM10.7462 12V20H14.269V18H17.731V12H10.7462ZM15.9696 16.3889H14.269V13.6111H15.9696V16.3889ZM22.9545 12H19.4924V18H22.9545V13.6111H24.7158V18H26.4772V13.6111H28.2386V18H30V12H22.9545Z' fill='white'/></svg>",
  },
  {
    name: 'With Yarn',
    icon: "<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='lightblue' viewBox='0 0 496 512'><path d='M393.9 345.2c-39 9.3-48.4 32.1-104 47.4 0 0-2.7 4-10.4 5.8-13.4 3.3-63.9 6-68.5 6.1-12.4.1-19.9-3.2-22-8.2-6.4-15.3 9.2-22 9.2-22-8.1-5-9-9.9-9.8-8.1-2.4 5.8-3.6 20.1-10.1 26.5-8.8 8.9-25.5 5.9-35.3.8-10.8-5.7.8-19.2.8-19.2s-5.8 3.4-10.5-3.6c-6-9.3-17.1-37.3 11.5-62-1.3-10.1-4.6-53.7 40.6-85.6 0 0-20.6-22.8-12.9-43.3 5-13.4 7-13.3 8.6-13.9 5.7-2.2 11.3-4.6 15.4-9.1 20.6-22.2 46.8-18 46.8-18s12.4-37.8 23.9-30.4c3.5 2.3 16.3 30.6 16.3 30.6s13.6-7.9 15.1-5c8.2 16 9.2 46.5 5.6 65.1-6.1 30.6-21.4 47.1-27.6 57.5-1.4 2.4 16.5 10 27.8 41.3 10.4 28.6 1.1 52.7 2.8 55.3.8 1.4 13.7.8 36.4-13.2 12.8-7.9 28.1-16.9 45.4-17 16.7-.5 17.6 19.2 4.9 22.2zM496 256c0 136.9-111.1 248-248 248S0 392.9 0 256 111.1 8 248 8s248 111.1 248 248zm-79.3 75.2c-1.7-13.6-13.2-23-28-22.8-22 .3-40.5 11.7-52.8 19.2-4.8 3-8.9 5.2-12.4 6.8 3.1-44.5-22.5-73.1-28.7-79.4 7.8-11.3 18.4-27.8 23.4-53.2 4.3-21.7 3-55.5-6.9-74.5-1.6-3.1-7.4-11.2-21-7.4-9.7-20-13-22.1-15.6-23.8-1.1-.7-23.6-16.4-41.4 28-12.2.9-31.3 5.3-47.5 22.8-2 2.2-5.9 3.8-10.1 5.4h.1c-8.4 3-12.3 9.9-16.9 22.3-6.5 17.4.2 34.6 6.8 45.7-17.8 15.9-37 39.8-35.7 82.5-34 36-11.8 73-5.6 79.6-1.6 11.1 3.7 19.4 12 23.8 12.6 6.7 30.3 9.6 43.9 2.8 4.9 5.2 13.8 10.1 30 10.1 6.8 0 58-2.9 72.6-6.5 6.8-1.6 11.5-4.5 14.6-7.1 9.8-3.1 36.8-12.3 62.2-28.7 18-11.7 24.2-14.2 37.6-17.4 12.9-3.2 21-15.1 19.4-28.2z'/></svg>",
  }
];

const InstallationsList = () => (
  <div className="install-options my-6 gap-x-4 gap-y-4 flex md:flex-row flex-col">

    {installations.map((option, index) => (
      <InstallOption key={index} name={option.name} icon={option.icon} />
    ))}
  </div>
);

export default InstallationsList;