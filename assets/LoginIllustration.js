import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={"100%"}
      height={"100%"}
      viewBox="0 0 500 372"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.28 8.33l5.378-5.49c.125-.124.313-.311.5-.436.876-.624 3.816-2.558 5.692-2.246 2.001.312 4.316.063 4.878 0h.25c.751-.062 4.504-.187 6.568 0 2.251.25 185.316 15.16 193.071 15.784h.375c.438 0 1.627 0 1.627 1.122 0 1.248-1.376 306.93-1.439 324.896 0 .749-.25 1.498-.688 2.059-.25.312-.625.624-1.001.749-1.125.187-190.507 20.711-197.074 21.46-.125 0-.188 0-.313.062-.813.187-4.815.811-8.443-1.684-4.065-2.87-9.507-8.36-9.507-8.36s-1.563-1.31-1.688-6.363c-.063-4.803 0-306.43 0-337.185a6.13 6.13 0 011.813-4.367z"
        fill="#D08D25"
      />
      <Path
        opacity={0.46}
        d="M30.107.27l-6.255.033 2.012 364.011 6.254-.034L30.106.27z"
        fill="#884405"
      />
      <Path
        opacity={0.36}
        d="M23.044.283h-6.255v366.07h6.255V.283z"
        fill="#884405"
      />
      <Path
        d="M13.35.034C11.41-.278 8.534 1.656 7.658 2.28c-.188.124-.313.25-.5.436l-5.379 5.49C.653 9.391.028 10.89.028 12.511c0 30.755-.063 332.382 0 337.185.062 5.053 1.688 6.363 1.688 6.363s5.442 5.49 9.507 8.297c2.314 1.622 4.816 1.934 6.505 1.872V.096c-1.064.125-2.815.187-4.379-.062z"
        fill="url(#prefix__a)"
      />
      <Path
        d="M118.673 167.66c-.313-7.736 5.066-14.411 12.071-14.848 7.004-.436 12.946 5.49 13.259 13.226.187 4.866-1.877 9.295-5.129 12.04l1.126 3.244c4.503-3.307 7.38-9.108 7.067-15.471-.437-9.608-7.818-17.031-16.511-16.47-8.694.562-15.448 8.796-15.01 18.466.25 6.363 3.627 11.79 8.38 14.535l.876-3.431c-3.502-2.308-5.942-6.488-6.129-11.291z"
        fill="#fff"
      />
      <Path
        d="M151.07 212.763l-12.196-34.685a17.776 17.776 0 01-2.752 1.622l11.258 32.127-28.145 1.747 8.444-33.375a13.227 13.227 0 01-2.877-1.31l-9.132 36.058c-.125.561-.062 1.122.25 1.497.313.436.814.686 1.314.624l32.46-2.059c.5-.062.938-.312 1.251-.811.25-.374.313-.936.125-1.435z"
        fill="#fff"
      />
      <Path
        d="M335.198 157.678l-203.016-8.047c-2.126-.063-3.878 1.559-3.94 3.618l-.563 20.961c-.063 2.183 1.626 3.993 3.815 4.117l15.699.749-1.627 19.963c-.25 2.994 1.939 5.614 4.879 5.864l40.903 4.18c2.94.312 5.504-1.997 5.504-4.929v-22.77l125.274 5.552 13.072-29.258z"
        fill="#FFCF19"
      />
      <Path
        d="M325.191 92.799c17.686 0 32.022-14.3 32.022-31.94 0-17.641-14.336-31.942-32.022-31.942-17.685 0-32.022 14.3-32.022 31.941 0 17.64 14.337 31.94 32.022 31.94z"
        fill="#8FD9FF"
      />
      <Path
        d="M306.428 75.144l33.774-26.45s5.628-2.31 8.631 0c2.939 2.307 2.439 22.52-10.07 32.626-12.509 10.044-24.517 4.99-31.209 0-1.939-1.872-2.064-4.305-1.126-6.176z"
        fill="#2355B6"
      />
      <Path
        d="M334.26 81.757s-.626-11.23 4.19-17.53c4.816-6.3 8.944-10.044 8.944-10.044s.876 10.855-3.878 17.655c-4.753 6.8-9.256 9.919-9.256 9.919z"
        fill="#84D6FF"
      />
      <Path
        d="M326.692 52.748c1.278 0 2.314-1.62 2.314-3.618 0-1.998-1.036-3.618-2.314-3.618s-2.314 1.62-2.314 3.618c0 1.998 1.036 3.618 2.314 3.618zm-15.698 6.551c1.278 0 2.314-1.62 2.314-3.619 0-1.998-1.036-3.618-2.314-3.618s-2.314 1.62-2.314 3.618c0 1.999 1.036 3.619 2.314 3.619zm-5.441-7.112l-1.502-.437-1.501-.499c.438-1.372.813-2.682 3.378-5.24 1.751-1.747 3.064-2.246 4.128-2.62l.563-.188c.813-.312 1.688.063 2.063.874.376.81-.062 1.684-.875 2.059-.188.062-.438.187-.626.249-.938.312-1.751.624-3.002 1.872-2.001 1.996-2.251 2.745-2.626 3.93zm28.644-12.727c-.25 0-.5-.062-.688-.187a9.053 9.053 0 01-1-.561c-1.126-.686-2.877-1.747-4.503-1.81-3.628-.249-5.442.438-5.942.687-.813.374-1.689 0-2.064-.811-.375-.81 0-1.684.813-2.059 1.001-.436 3.315-1.185 7.443-.935 2.376.124 4.503 1.434 5.941 2.245.313.188.563.375.813.437.751.374 1.064 1.31.688 2.121-.375.562-.875.874-1.501.874z"
        fill="#2355B6"
      />
      <Path
        d="M326.192 103.342s45.344-19.09 78.992.561c33.649 19.651 27.332 38.803 27.332 38.803s-7.38 31.442-16.95 36.807c-9.569 5.365-4.378 33.937-6.817 39.863-2.439 5.927-19.576 47.661-19.576 47.661l60.667 96.82s3.065 5.553-8.443 5.553-80.494 1.996-80.494 1.996-2.626-1.185-.25-3.681c2.377-2.495 12.634-13.787 12.634-13.787l-38.214-52.028-28.332 64.817s-.876 3.244-3.002 3.618c-2.127.312-85.372.687-85.372.687s-3.69 0-.625-3.057c3.064-3.057 22.703-13.288 23.266-14.349.563-1.06 44.03-79.29 44.03-79.29l36.901-74.736-1.626-10.605s-10.445 23.332-26.268 23.394c-15.824.062-38.965-8.172-43.656-17.842-4.691-9.669-5.879-31.129-1.188-35.746 4.691-4.616 7.88-9.295 16.199-5.989 8.318 3.307 12.571 12.103 12.571 12.103l8.193 9.732 8.131-11.167 12.508-41.797c.063-.063 2.627-11.417 19.389-18.341z"
        fill="#8FD9FF"
      />
      <Path
        d="M373.349 355.435c-.5 0-.938-.249-1.25-.624l-39.09-53.151c-1.439-1.372-13.885-13.662-8.131-26.014 5.504-11.791 22.641-54.96 22.829-55.397.312-.811 1.251-1.185 2.001-.873.813.311 1.188 1.247.876 1.996-.188.437-17.387 43.669-22.891 55.584-5.004 10.855 7.442 22.396 7.568 22.521l.187.249 39.215 53.276c.5.686.375 1.684-.313 2.184-.375.124-.688.249-1.001.249zm3.753-145.728c-1.313 0-2.689-.063-4.065-.25-6.129-.749-17.262-3.556-23.204-13.849-3.315-5.74-6.504-16.283-1.438-21.897 3.002-3.306 7.13-2.62 11.508-1.872 4.753.749 10.069 1.622 16.261-1.31 11.133-5.365 17.637-12.726 18.325-20.774.626-6.737-3.002-12.164-6.192-16.906-6.567-9.794-15.76-15.097-22.265-17.841a1.51 1.51 0 01-.813-2.059c.313-.811 1.251-1.185 2.064-.811 9.944 4.18 18.137 10.73 23.641 19.027 3.315 4.928 7.443 11.042 6.692 18.902-.813 9.108-7.943 17.406-20.076 23.27-7.067 3.431-13.197 2.433-18.138 1.622-4.378-.687-6.942-.999-8.693.873-3.69 4.055-1.188 13.101 1.814 18.216 5.316 9.108 15.385 11.604 20.889 12.29 15.386 1.934 26.706-8.796 28.833-10.98a1.57 1.57 0 012.189-.062c.625.624.625 1.559.062 2.183-2.126 2.246-12.634 12.228-27.394 12.228zm-54.1-23.083c-.813 0-1.438-.623-1.563-1.372l-5.942-56.083c-.063-.874.563-1.622 1.376-1.685.875-.062 1.626.562 1.689 1.373l5.941 56.083c.063.873-.563 1.622-1.376 1.684h-.125z"
        fill="#F4F8FB"
      />
      <Path
        d="M432.516 142.644s-2.877 12.102-7.318 22.583c4.378-3.369 9.819-5.365 15.824-5.365 14.322 0 25.955 11.603 25.955 25.889s-11.633 25.889-25.955 25.889c-14.323 0-25.956-11.603-25.956-25.889 0-2.246.313-4.429.813-6.488l-.375.187c-9.569 5.365-4.378 33.937-6.817 39.864-.688 1.684-2.627 6.3-5.004 12.102a58.994 58.994 0 0037.276 13.226c32.585 0 59.041-26.326 59.041-58.891 0-32.564-26.393-58.89-59.041-58.89-3.628 0-7.255.312-10.695.998 4.253 8.733 2.252 14.785 2.252 14.785zm-146.289 34.872l2.001 6.488c.25.936 1.126 1.56 2.064 1.56l64.17 2.558 38.964-28.136-123.21-4.866 11.633 14.162a23.303 23.303 0 014.378 8.234z"
        fill="#FFCF19"
      />
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={-0.035}
          y1={183.189}
          x2={17.639}
          y2={183.189}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F7C94F" />
          <Stop offset={1} stopColor="#884405" stopOpacity={0.36} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;