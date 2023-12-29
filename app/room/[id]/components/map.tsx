import React from "react";
import waypoints from "./waypoints.json";
import { PlayerIndicator } from "./player-indicator";

type Props = {
  playerPositions: number[];
  playerColors: string[];
  candidates: number[];
  highlightColor?: string;
  selectedNode: number;
  selectedNodeColor?: string;
  onClickNode: (nodeId: number) => void;
};

export const Map = ({
  playerPositions,
  playerColors,
  candidates,
  highlightColor,
  selectedNode,
  selectedNodeColor,
  onClickNode,
}: Props) => {
  const candidateTable = new Array(200).fill(false);
  for (const candidate of candidates) {
    candidateTable[candidate] = true;
  }

  const playerPosTable = new Array(200).fill(-1);
  playerPositions.forEach((pos, player) => {
    playerPosTable[pos] = player;
  });

  highlightColor = highlightColor || "#ff5c61";

  const simpleStroke = "gray";
  const comboStroke = "url(#__map_node_combo)";
  const busStroke = "url(#__map_node_bus)";

  const nodes = waypoints.map((wp) => {
    let strokeStyle = simpleStroke;
    if (wp.bus && wp.ug) {
      strokeStyle = comboStroke;
    } else if (wp.bus) {
      strokeStyle = busStroke;
    }
    let fillColor =
      selectedNode == wp.id ? selectedNodeColor || "red" : "white";

    const playerIndicator = playerPosTable[wp.id] >= 0 && (
      <g transform={`translate(${wp.x - 12}, ${wp.y - 32})`}>
        <PlayerIndicator color={playerColors[playerPosTable[wp.id]]} raw />
      </g>
    );

    return (
      <React.Fragment key={`${wp.id}`}>
        <circle cx={wp.x} cy={wp.y} r="12" stroke="#707070" strokeWidth="4" />
        <circle
          id={`mapnode-${wp.id}`}
          cx={wp.x}
          cy={wp.y}
          r="12"
          fill={fillColor}
          stroke={strokeStyle}
          strokeWidth="3"
          onClick={(event) => {
            const target = event.target as HTMLInputElement;
            onClickNode(parseInt(target.id.substring(8)));
          }}
          style={{ cursor: "pointer" }}
        >
          {candidateTable[wp.id] && (
            <animate
              attributeName="fill"
              values={`${fillColor};${highlightColor};${fillColor}`}
              dur="1s"
              repeatCount="indefinite"
            />
          )}
        </circle>
        <text
          x={wp.x}
          y={wp.y + 4}
          fontFamily="sans-serif"
          fontSize="12"
          style={{ pointerEvents: "none" }}
          textAnchor="middle"
        >
          {wp.id}
        </text>
        {playerIndicator}
      </React.Fragment>
    );
  });

  return (
    <svg
      width="1024"
      height="1024"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="__map_node_combo" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="red" />
          <stop offset="50%" stopColor="red" />
          <stop offset="50%" stopColor="cyan" />
          <stop offset="100%" stopColor="cyan" />
        </linearGradient>

        <linearGradient id="__map_node_bus" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="gray" />
          <stop offset="50%" stopColor="gray" />
          <stop offset="50%" stopColor="cyan" />
          <stop offset="100%" stopColor="cyan" />
        </linearGradient>
      </defs>
      <rect width="1024" height="1024" fill="#d3d3d3" />
      <path
        stroke="none"
        fill="#a3c1aa"
        d="m 735.78324,685.29205 -40.46664,28.34436 22.74213,33.9685 59.2504,-11.56327 z"
      />
      <path
        stroke="none"
        fill="#a3c1aa"
        d="m 277.26375,878.78858 -75.81901,92.17618 108.43033,-45.26214 z"
      />
      <path
        stroke="none"
        fill="#a3c1aa"
        d="m 632.05455,650.23622 c 0,0 -5.15701,22.68027 -8.1674,41.27419 -3.0104,18.59393 -12.39042,54.10406 -12.39042,54.10406 0,0 21.99022,-10.8066 39.94528,-21.90703 10.57315,-6.53668 21.75053,-11.47954 20.83118,-18.93377 -4.58846,-37.20371 -40.21864,-54.53745 -40.21864,-54.53745 z"
      />
      <path
        stroke="none"
        fill="#a3c1aa"
        d="m 321.19808,610.85211 104.11319,-89.89322 38.15376,68.06727 51.01014,-62.16871 c 0,0 12.70476,13.48425 13.85158,44.6866 1.14682,31.20235 -11.20342,68.95995 -11.20342,68.95995 0,0 -77.11878,3.15162 -100.33102,15.66151 -7.60601,4.09915 -14.83085,22.6288 -20.01499,31.30204 -11.12511,18.6127 -15.84726,30.67767 -15.84726,30.67767 z"
      />
      <path
        stroke="none"
        fill="#009bff"
        d="m 501.46971,605.88669 c 0,0 30.6793,-22.03546 4.15732,-13.76008 -9.24815,2.88561 -10.51431,15.4812 -20.00169,20.39193 -17.72066,9.17234 -45.06526,19.65952 -45.03477,22.16359 0.0468,3.84473 52.56904,-12.72264 66.44312,-22.28236 3.85604,-2.65694 7.74603,-3.89039 4.67019,-5.4958 -2.05198,-1.07102 -10.23417,-1.01728 -10.23417,-1.01728 z"
      />
      <path
        stroke="none"
        fill="#a3c1aa"
        d="m 743.56525,887.94415 c 0,0 4.65263,8.77673 12.63203,13.09186 7.9794,4.31512 14.95533,8.7352 14.95533,8.7352 l -7.39725,95.46439 c 0,0 -25.90057,2.2025 -39.7203,0 -13.24919,-2.1072 -25.14702,-6.0095 -25.14702,-6.0095 z"
      />
      <path
        stroke="none"
        fill="#a3c1aa"
        d="m 256.55633,18.284036 c 0,0 -65.96797,-0.545648 -73.19701,20.226375 -7.22905,20.772024 55.71382,137.264279 66.58942,148.153759 10.8756,10.88949 71.63229,34.81273 88.73893,47.43728 C 368.23065,255.9039 378.567,226.72397 376.126,182.60331 373.685,138.48265 376.47432,65.401141 365.67859,41.295248 349.29312,4.7079551 256.55633,18.284036 256.55633,18.284036 Z"
      />
      <path
        stroke="none"
        fill="#a3c1aa"
        d="M 0.0543635,506.28242 C 2.9975589,505.76596 209.31401,445.64844 244.23687,430.86776 c 24.97989,-10.57244 21.40794,47.49725 40.57939,62.17478 36.03682,27.58953 36.78484,84.21433 25.40315,101.74866 -17.43719,26.86326 -99.3906,24.8533 -152.14159,29.47574 -42.44202,3.71909 -158.1321835,-6.26241 -158.1321835,-6.26241 z"
      />
      <path
        stroke="none"
        fill="#009bff"
        d="m 32.72096,567.60779 c 0,0 -0.916633,26.12029 14.712956,29.51199 15.629589,3.39169 36.953785,1.28359 34.018141,-17.83435 C 78.516412,560.1675 32.72096,567.60779 32.72096,567.60779 Z"
      />
      <path
        stroke="none"
        fill="#009bff"
        d="m 225.90646,100.16755 c 6.89198,-6.138023 14.68191,29.36104 23.86797,30.25042 15.14386,1.46622 20.90376,-33.222253 36.02733,-31.559685 4.39234,0.482859 -18.37812,14.661875 -23.86872,47.214195 -4.64018,27.51042 42.13073,35.94526 14.46152,39.5187 -15.14036,1.95535 -14.64444,-16.58354 -26.32898,-33.70164 -13.63162,-19.97059 -37.45914,-39.87695 -24.15912,-51.72199 z"
      />
      <path
        stroke="none"
        fill="#009bff"
        d="m 104.45927,494.36089 c -6.938959,-0.7118 -10.584524,8.26664 -8.705007,14.98402 15.150007,54.14601 89.256697,94.10527 145.028247,86.97451 11.32703,-1.44824 26.30616,-12.65036 24.5158,-23.92837 -2.99794,-18.88491 -68.88534,-1.95199 -100.80774,-16.35326 -31.91249,-14.3968 -51.96576,-60.84954 -60.0313,-61.6769 z"
      />
      <path
        stroke="none"
        fill="#009bff"
        d="m 135.78338,1024 c 0,0 135.71013,-56.29923 178.98597,-68.87915 57.14455,-16.61144 96.50303,11.67696 143.48845,12.70909 34.39968,0.75566 94.24247,-87.84336 100.93175,-151.55667 14.11634,-134.4537 10.7081,-146.01552 21.58414,-206.15195 10.12794,-56 1.15627,-101.73066 40.76676,-142.59122 26.98303,-27.83458 75.27001,-22.00158 111.55221,-24.1995 34.61538,-2.09695 112.09827,28.1758 153.99211,35.21607 C 969.53041,492.40168 1024,500.27806 1024,500.27806 v 48.53544 c 0,0 -91.6228,-22.38716 -142.12571,-35.93217 -57.18906,-15.33825 -94.8981,-26.58847 -155.08654,-34.13509 -87.12674,-10.92423 -88.5644,18.45899 -110.88981,132.61383 -7.85277,40.15295 -12.81935,93.59867 -19.35343,134.36872 -9.61381,59.98636 -13.68761,138.12598 -29.21483,170.3184 -18.45652,38.26572 -52.78226,84.01011 -94.70683,90.88321 -28.64719,4.6964 -69.51296,-3.7092 -100.28437,-7.7832 C 318.166,991.97503 270.81246,1024 270.81246,1024 Z"
      />
      <path
        d="m 148.04468,66.228575 c 0,0 49.03204,76.412475 76.29037,117.432015 15.95331,24.00724 50.83911,73.33471 50.83911,73.33471"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
        strokeDasharray="20 10"
      />
      <path
        d="m 552.15863,87.482088 -62.93682,56.688262 -52.48701,40.09987 -53.8883,30.56994 -61.24079,17.83101 -46.73801,19.11857"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
        strokeDasharray="20 10"
      />
      <path
        d="m 556.24951,90.440384 c 0,0 -10.32948,33.641736 -9.80358,50.918196 0.67949,22.32219 27.38248,35.03632 34.23786,63.99871 4.72293,19.95323 -28.45327,20.74582 -22.19395,39.40859 3.91149,11.66249 11.92601,22.67985 20.68204,38.67543 8.19239,14.96592 17.2816,35.32981 17.2816,35.32981"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
        strokeDasharray="20 10"
      />
      <path
        d="m 555.24378,85.523481 84.67902,-22.297466 82.95135,-9.504834 84.62495,41.049654 c 0,0 46.68003,14.876775 60.06986,35.281035 4.85849,7.40367 6.80926,24.48231 6.80926,24.48231 l 2.99706,103.81375 1.75831,6.36739 c 0,0 -5.57377,35.25412 -7.22892,53.01103 -1.78786,19.18074 -2.90891,57.7184 -2.90891,57.7184"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
        strokeDasharray="20 10"
      />
      <path
        d="m 272.69151,254.60555 c 0,0 -31.58339,10.90386 -56.42755,23.49201 -19.51116,9.886 -42.60343,23.60667 -41.32469,32.6993 0.9375,6.66617 -61.01724,82.95117 -61.70239,83.73434"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
        strokeDasharray="20 10"
      />
      <path
        d="m 280.57732,255.39006 15.11786,73.82717 29.44241,-14.40635 17.46377,79.14701"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
        strokeDasharray="20 10"
      />
      <path
        d="M 593.0824,327.48316 409.59142,377.22958 340.4241,397.20814"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
        strokeDasharray="20 10"
      />
      <path
        d="m 591.94379,324.85029 -6.10858,63.13865 -51.11414,57.23408 -69.13548,35.40464 -35.22273,29.1593 -21.28908,18.68362"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
        strokeDasharray="20 10"
      />
      <path
        d="m 594.70577,326.87232 67.4528,-21.96344 c 0,0 62.64489,12.64197 92.74095,23.08736 13.58203,4.71389 24.38086,16.02857 41.736,23.98177 28.64019,13.1247 62.44187,23.05901 62.44187,23.05901"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
        strokeDasharray="20 10"
      />
      <path
        d="m 335.16036,397.39501 c 0,0 17.77304,46.756 29.59572,72.23206 4.60333,9.91948 17.03332,10.53473 17.03332,10.53473 l 26.35769,42.28938"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
        strokeDasharray="20 10"
      />
      <path
        d="M 339.31613,398.53124 252.4567,420.92045 56.686298,482.3699"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
        strokeDasharray="20 10"
      />
      <path
        d="m 862.84435,377.72274 -25.4472,33.0558 c 0,0 -30.44155,4.91491 -45.78835,6.23906 -19.24514,1.66051 -57.91088,2.12704 -57.91088,2.12704 0,0 -11.90846,9.12704 -18.65513,12.27016 -13.16565,6.13358 -38.34251,5.52564 -56.4195,10.48192 -21.55245,5.90917 -35.11043,16.84801 -35.11043,16.84801 0,0 -18.65659,21.12093 -26.39643,32.84042 -6.77847,10.26381 -17.37595,32.5533 -17.37595,32.5533 0,0 -9.82586,29.8403 -14.30407,44.89436 -3.62593,12.189 1.64419,38.3184 -2.55024,53.71 -4.2701,15.66932 -19.24732,13.2801 -19.24732,13.2801"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
        strokeDasharray="20 10"
      />
      <path
        d="m 864.16871,375.01512 28.28226,59.6401 -6.07416,84.10382 c 0,0 -21.68768,37.23558 -28.64308,57.4818 -4.50635,13.11734 -8.24748,40.78389 -8.24748,40.78389 l -26.02693,50.27806 -28.64054,65.42306"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
        strokeDasharray="20 10"
      />
      <path
        d="m 408.21378,528.46152 -91.09788,84.65706 -69.3809,23.53904 -46.49983,54.68865 -35.47495,47.62818 -48.76198,46.96818"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
        strokeDasharray="20 10"
      />
      <path
        d="m 405.28644,524.77686 23.97105,95.54364 -6.43304,40.26163 -39.01331,72.49889"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
        strokeDasharray="20 10"
      />
      <path
        d="m 785.24622,738.24453 -47.11403,-57.75194 -85.94587,-19.6499 -23.35078,-23.08923 -86.00988,8.94513"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
        strokeDasharray="20 10"
      />
      <path
        d="m 784.61726,735.75512 -26.74752,74.43953 -24.21068,65.69694 -48.88894,124.80471 c 0,0 -15.96882,8.7701 -24.78981,10.1777 -29.37034,4.6866 -72.09673,4.6291 -88.9874,-6.517 -20.97896,-13.84404 7.04493,-75.07551 7.04493,-75.07551"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
        strokeDasharray="20 10"
      />
      <path
        d="m 532.79478,643.2027 c 0,0 -42.99865,44.30289 -68.57449,56.98156 -28.14551,13.95253 -83.71322,27.42237 -83.71322,27.42237"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
        strokeDasharray="20 10"
      />
      <path
        d="m 378.04257,730.47659 c 0,0 -61.68139,74.8341 -106.05662,79.75286 -31.74432,3.51869 -55.94707,-30.58124 -87.71601,-33.87026 -22.64571,-2.3445 -67.2717,9.58344 -67.2717,9.58344"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
        strokeDasharray="20 10"
      />
      <path
        d="m 377.90191,737.38374 64.29067,64.22138 33.25547,31.8635 46.75764,45.98692 51.68106,51.26802"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
        strokeDasharray="20 10"
      />
      <path
        d="m 877.52924,524.39978 c 0,0 -30.53992,-46.98837 -61.74925,-57.4646 -11.90169,-3.99512 -71.57145,5.3175 -89.06822,3.50818 -64.61954,-6.68225 -108.51273,-12.95602 -108.51273,-12.95602"
        fill="none"
        stroke="#000000"
        strokeWidth="3"
      />
      <path
        d="m 618.19904,457.48734 c 0,0 -2.29036,38.61103 -12.03865,87.15793 -5.13528,25.57391 -17.99207,60.40637 -21.39314,79.67778 -17.79651,100.83986 20.05691,136.51533 20.05691,136.51533"
        fill="none"
        stroke="#000000"
        strokeWidth="3"
      />
      <path
        d="m 604.82416,760.83838 c 0,0 -18.45887,-0.31126 -35.04189,49.18143 -18.55373,55.37434 -34.84265,169.79205 -78.69695,180.10139 -102.06867,23.9945 -156.88229,-46.25767 -156.88229,-46.25767"
        fill="none"
        stroke="#000000"
        strokeWidth="3"
      />
      <path
        d="m 140.39831,57.300994 c 0,0 -22.32702,35.683805 -34.78571,51.624936 -13.600764,17.40244 -41.191715,48.0596 -41.191715,48.0596 0,0 37.389085,60.1209 57.598995,89.16512 15.04651,21.62374 47.34259,63.28136 47.34259,63.28136"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="M146.95363 61.076096,108.56148 117.09702"
        fill="none"
        stroke="gray"
        strokeWidth="5"
        id="path1"
      />
      <path
        d="m 149.55327,59.347026 35.25037,55.288414"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="m 321.50552,36.924683 c 0,0 42.75886,-3.829166 47.90769,1.466648 17.12473,17.6136 9.5852,62.304179 9.5852,62.304179"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="m 321.50552,36.924683 c 0,0 -84.349,-7.884031 -110.99314,13.564799 -44.71454,35.99571 6.00482,86.365528 6.00482,86.365528"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="m 434.79761,34.459274 c 0,0 -2.6808,27.496312 -3.21936,41.291361 -0.43884,11.240559 -0.008,33.747365 -0.008,33.747365"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M434.79761 34.459274,475.96646 96.624352"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 442.56056,30.381324 c 0,0 9.94478,18.840854 17.14272,16.105783 16.14844,-6.136072 45.24899,-22.682301 45.24899,-22.682301"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="m 504.95227,23.804806 c 0,0 4.23384,14.152921 8.14323,20.31102 11.31061,17.816546 43.15401,46.324558 43.15401,46.324558"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="m 782.21185,34.223984 c 0,0 -23.60713,-6.286918 -34.32417,-2.213238 -11.52703,4.38157 -26.01561,26.302532 -26.01561,26.302532"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="m 782.21185,34.223984 c 0,0 22.90534,23.011572 25.75381,38.063603 1.64716,8.704043 -5.82003,25.930461 -5.82003,25.930461"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="m 869.35254,33.290138 c 0,0 2.38701,27.312314 0.30637,48.028822 -1.14372,11.387801 -7.5818,17.783449 -7.27044,23.57804 0.9844,18.32043 11.04618,53.92075 11.04618,53.92075"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M869.35254 33.290138,952.27789 43.453575"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M952.27789 43.453575,946.83337 130.9677"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M108.56148 117.09702,71.859413 159.61589"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 108.56148,117.09702 c 0,0 3.83866,21.41664 8.70686,30.51901 4.11212,7.6887 18.15985,19.88493 18.15985,19.88493"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M178.98067 115.86467,135.42819 167.50096"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 178.98067,115.86467 c 0,0 15.31988,13.73016 20.62752,15.51636 6.24852,2.10284 11.40468,2.9185 11.40468,2.9185"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="m 378.99841,100.69551 c 0,0 2.39595,19.66474 -17.43888,30.99682 -14.24131,8.13639 -50.77542,6.70397 -57.44836,15.1654 -8.72577,11.06447 -4.1426,33.8172 -4.1426,33.8172"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="m 378.99841,100.69551 c 0,0 3.99677,48.84819 4.55064,68.62235 0.55388,19.77417 -0.50977,49.91587 -0.50977,49.91587"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M378.99841 100.69551,431.57043 109.498"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 431.57043,109.498 c 0,0 -1.28974,25.43658 -0.84623,38.14795 0.50222,14.39425 3.96672,43.02657 3.96672,43.02657"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M475.96646 96.624352,499.80444 141.53888"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M556.24951 90.440384,499.80444 141.53888"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M556.24951 90.440384,603.79456 147.62567"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 639.16016,67.927223 c 0,0 -13.8103,48.744437 -7.22573,71.921937 2.67472,9.41491 17.85683,23.30848 17.85683,23.30848"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M639.16016 67.927223,721.87207 58.313278"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M721.87207 58.313278,716.15356 94.843628"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M721.87207 58.313278,757.1076 129.02621"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M721.87207 58.313278,802.14563 98.218048"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M802.14563 98.218048,757.1076 129.02621"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 802.14563,98.218048 c 0,0 44.53801,17.258912 57.58319,29.440212 11.67006,10.89724 9.93359,30.03295 9.93359,30.03295"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M946.83337 130.9677,869.66241 157.69121"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M946.83337 130.9677,975.65985 152.17581"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 71.859413,159.61589 c 0,0 -22.017927,31.19434 -24.949923,49.4108 -2.03511,12.64412 5.681841,37.99809 5.681841,37.99809"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M71.859413 159.61589,97.253754 199.17503"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M135.42819 167.50096,192.19846 225.69246"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 216.5172,136.85501 c 0,0 21.85687,19.08438 29.76076,31.13408 7.55383,11.51601 16.45663,38.89568 16.45663,38.89568"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="m 299.96857,180.67493 c 0,0 21.04827,37.94055 6.20528,45.00443 -12.17874,5.79595 -43.43926,-18.79459 -43.43926,-18.79459"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M434.69092 190.67252,383.03928 219.23373"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M434.69092 190.67252,455.81717 239.55623"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M434.69092 190.67252,499.80444 141.53888"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M499.80444 141.53888,528.96265 191.85478"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M603.79456 147.62567,528.96265 191.85478"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M603.79456 147.62567,625.68079 195.43672"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M649.79126 163.15764,625.68079 195.43672"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M649.79126 163.15764,669.30627 186.48553"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M716.15356 94.843628,669.30627 186.48553"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M716.15356 94.843628,726.44342 147.89021"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M726.44342 147.89021,757.1076 129.02621"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M726.44342 147.89021,745.3125 229.47316"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M757.1076 129.02621,779.17072 209.88429"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M869.66241 157.69121,779.17072 209.88429"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M869.66241 157.69121,950.45471 210.63693"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 975.65985,152.17581 c 0,0 -0.2439,23.67599 -1.34291,35.20451 -1.05404,11.05681 -23.86223,23.25661 -23.86223,23.25661"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M97.253754 199.17503,52.591331 247.02478"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M97.253754 199.17503,145.70999 271.10458"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 192.19846,225.69246 c 0,0 -14.9549,6.11172 -20.96866,11.29465 -10.75791,9.27164 -25.51981,34.11747 -25.51981,34.11747"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M192.19846 225.69246,214.79053 283.10504"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 192.19846,225.69246 c 0,0 22.65205,-11.74382 34.89231,-14.95156 11.56022,-3.02953 35.64382,-3.85613 35.64382,-3.85613"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M262.73459 206.88477,275.17416 256.9953"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M383.03928 219.23373,320.05286 238.58875"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M383.03928 219.23373,396.33963 283.30963"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M455.81717 239.55623,396.33963 283.30963"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M455.81717 239.55623,504.41446 345.90948"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M455.81717 239.55623,486.21323 244.57619"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M486.21323 244.57619,510.01608 280.93188"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M486.21323 244.57619,528.96265 191.85478"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M528.96265 191.85478,558.06464 241.32014"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M625.68079 195.43672,558.06464 241.32014"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M625.68079 195.43672,654.62201 252.35388"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M669.30627 186.48553,654.62201 252.35388"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M669.30627 186.48553,700.75604 235.87636"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M745.3125 229.47316,700.75604 235.87636"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M745.3125 229.47316,753.57025 276.11069"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M745.3125 229.47316,779.17072 209.88429"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M779.17072 209.88429,789.13385 259.43298"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M950.45471 210.63693,932.05475 321.97729"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M950.45471 210.63693,982.45325 271.28653"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M52.591331 247.02478,82.286629 293.68863"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M145.70999 271.10458,174.43199 308.45334"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M214.79053 283.10504,174.43199 308.45334"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 214.79053,283.10504 c 0,0 -4.86382,17.80762 -8.91828,26.03709 -4.44234,9.01676 -16.66531,25.13155 -16.66531,25.13155"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M214.79053 283.10504,226.73618 327.16241"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M214.79053 283.10504,275.17416 256.9953"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M275.17416 256.9953,288.41095 337.3938"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M275.17416 256.9953,320.05286 238.58875"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M320.05286 238.58875,321.95636 321.54617"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M396.33963 283.30963,321.95636 321.54617"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 396.33963,283.30963 c 0,0 8.75795,35.35898 9.66303,53.43783 0.62091,12.40287 -2.93464,37.13944 -2.93464,37.13944"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M510.01608 280.93188,535.83643 336.37375"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M510.01608 280.93188,558.06464 241.32014"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 654.62201,252.35388 c 0,0 -41.42601,21.76632 -53.93695,40.43028 -5.72746,8.54427 -2.20025,30.54243 -2.20025,30.54243"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M654.62201 252.35388,659.23279 302.97595"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M654.62201 252.35388,700.75604 235.87636"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M700.75604 235.87636,719.7384 297.16681"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M753.57025 276.11069,719.7384 297.16681"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M753.57025 276.11069,789.13385 259.43298"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M789.13385 259.43298,794.14508 313.46014"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 789.13385,259.43298 c 0,0 27.90152,-8.48577 42.28945,-8.65949 14.20178,-0.17147 41.9365,7.53712 41.9365,7.53712"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M873.3598 258.31061,862.23547 313.48062"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M982.45325 271.28653,973.00665 379.27951"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 82.286629,293.68863 c 0,0 14.964208,7.72416 16.109966,15.64475 1.806085,12.48541 -16.812908,35.42742 -16.812908,35.42742"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M82.286629 293.68863,174.43199 308.45334"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M174.43199 308.45334,109.72914 391.94711"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M174.43199 308.45334,189.20694 334.27368"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 173.91624,308.93492 -31.5506,41.57907 13.77962,25.48027"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M189.20694 334.27368,156.14526 375.99426"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M189.20694 334.27368,215.93044 373.16641"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 226.73618,327.16241 c -0.22411,14.16077 2.17261,15.85609 17.74808,31.39222"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="m 226.73618,327.16241 c 0,0 21.3174,-11.94049 28.53505,-6.77532 6.38631,4.57025 9.3767,28.22226 9.3767,28.22226"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M288.41095 337.3938,215.93044 373.16641"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M288.41095 337.3938,302.80154 402.12589"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M288.41095 337.3938,321.95636 321.54617"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M321.95636 321.54617,338.80798 394.52795"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M403.06802 373.8869,338.80798 394.52795"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M403.06802 373.8869,418.71542 414.64731"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M403.06802 373.8869,454.00867 361.67966"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M454.00867 361.67966,488.83429 428.3905"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M454.00867 361.67966,504.41446 345.90948"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M504.41446 345.90948,516.06781 403.37393"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 504.76254,343.19809 31.22415,-8.26876"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="m 535.83643,336.37375 c 0,0 -1.41733,23.87928 -4.78428,35.2484 -3.32325,11.22156 -14.98434,31.75178 -14.98434,31.75178"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="m 535.65975,334.32831 56.34897,-13.56588"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="m 592.94574,322.65686 c 0,0 13.96228,5.13041 19.1385,10.16991 7.57931,7.37911 15.63597,27.61506 15.63597,27.61506"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M592.94574 322.65686,659.23279 302.97595"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M659.23279 302.97595,664.59619 342.46494"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M659.23279 302.97595,719.7384 297.16681"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M719.7384 297.16681,732.93207 376.95294"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M794.14508 313.46014,798.22974 398.96921"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M794.14508 313.46014,862.23547 313.48062"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M862.23547 313.48062,859.07739 375.03702"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M862.23547 313.48062,932.05475 321.97729"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M932.05475 321.97729,904.9104 376.68112"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M932.05475 321.97729,973.00665 379.27951"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 81.583687,344.7608 c 0,0 -29.90254,28.71709 -35.159469,47.77939 -4.376236,15.86879 4.74443,49.15506 4.74443,49.15506"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M81.583687 344.7608,109.72914 391.94711"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M109.72914 391.94711,51.168648 441.69525"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M109.72914 391.94711,156.14526 375.99426"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 156.14526,375.99426 c 0,0 -27.698,28.07556 -34.81584,45.91564 -4.49657,11.27015 -4.0139,36.1802 -4.0139,36.1802"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M215.93044 373.16641,251.6972 416.23441"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M251.6972 416.23441,146.08047 449.94495"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 251.6972,416.23441 c 0,0 13.17048,9.25757 17.91992,15.59313 9.16164,12.22129 19.1782,41.61558 19.1782,41.61558"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M251.6972 416.23441,302.80154 402.12589"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M302.80154 402.12589,312.03918 464.45685"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M302.80154 402.12589,338.80798 394.52795"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M338.80798 394.52795,355.72827 440.56119"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M418.71542 414.64731,396.6553 446.04736"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M418.71542 414.64731,462.49658 476.01227"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 488.83429,428.3905 c 0,0 -14.58611,12.8072 -19.14969,21.15163 -4.38704,8.02164 -7.18802,26.47014 -7.18802,26.47014"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M488.83429 428.3905,516.06781 403.37393"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M516.06781 403.37393,531.83655 441.68503"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M580.67566 386.85696,531.83655 441.68503"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M580.67566 386.85696,619.50409 395.871"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M627.72021 360.44183,664.59619 342.46494"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M664.59619 342.46494,675.08331 383.37003"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 732.93207,376.95294 c 0,0 -17.61499,-2.29828 -26.21587,-1.23504 -10.772,1.33163 -31.63289,7.65213 -31.63289,7.65213"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M732.93207 376.95294,732.0874 418.34909"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M 799.38648,394.26901 833.466,407.1897"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M833.466 407.1897,816.93591 551.87891"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M833.466 407.1897,859.07739 375.03702"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M859.07739 375.03702,887.28424 435.17877"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M904.9104 376.68112,887.28424 435.17877"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M904.9104 376.68112,973.00665 379.27951"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M973.00665 379.27951,887.28424 435.17877"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M973.00665 379.27951,987.10205 446.44778"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M51.168648 441.69525,54.893803 476.39517"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M54.893803 476.39517,113.24825 458.66672"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M113.24825 458.66672,146.08047 449.94495"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 146.08047,449.94495 c 0,0 19.33531,7.99527 14.79641,28.90385 -13.45738,61.99177 -32.38298,36.82426 -39.24707,59.59946 -9.66418,32.06593 -0.31307,100.4713 -0.31307,100.4713"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="m 288.79532,473.44312 c 0,0 11.77878,14.81946 16.66253,22.89734 8.91501,14.74574 22.87906,46.35491 22.87906,46.35491"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M288.79532 473.44312,312.03918 464.45685"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M312.03918 464.45685,328.33691 542.69537"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M312.03918 464.45685,355.72827 440.56119"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 355.72827,440.56119 c 0,0 -3.55198,21.05684 1.57213,29.44413 4.27755,7.00164 21.27132,12.38604 21.27132,12.38604"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="m 355.72827,440.56119 c 0,0 16.89551,-16.078 26.64184,-13.82037 7.79911,1.80658 14.28519,19.30654 14.28519,19.30654"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M396.6553 446.04736,378.57172 482.39136"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M396.6553 446.04736,424.6561 508.62238"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M462.49658 476.01227,424.6561 508.62238"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M462.49658 476.01227,493.03732 512.60327"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M462.49658 476.01227,531.83655 441.68503"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 531.83655,441.68503 c 0,0 -1.9699,16.17462 -0.4558,24.04769 1.61047,8.37422 9.93749,23.57407 9.93749,23.57407"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M619.50409 395.871,618.19904 457.48734"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 619.50409,395.871 c 0,0 19.98375,-1.63286 29.7206,-3.86976 8.85632,-2.0346 25.85862,-8.63121 25.85862,-8.63121"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M732.0874 418.34909,735.98645 511.41077"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 884.17569,432.85396 -6.78915,87.9865"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M887.28424 435.17877,943.91125 446.78683"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M943.91125 446.78683,987.10205 446.44778"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 992.56561,446.43872 c 0,0 6.19887,48.80855 5.49705,73.30066 -0.70584,24.6323 -9.74087,73.28268 -9.74087,73.28268"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="m 877.52924,524.39978 c 0,0 -17.60292,14.10128 -27.76305,18.72389 -10.30904,4.69035 -32.83028,8.75524 -32.83028,8.75524"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M877.52924 524.39978,985.07355 592.52826"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M328.33691 542.69537,314.38766 609.36237"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M328.33691 542.69537,378.57172 482.39136"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M378.57172 482.39136,405.28644 524.77686"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 403.75878,520.87475 17.24683,-16.38609"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M405.28644 524.77686,314.38766 609.36237"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M424.6561 508.62238,446.45462 551.26221"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M493.03732 512.60327,446.45462 551.26221"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M493.03732 512.60327,541.31824 489.30679"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M541.31824 489.30679,463.5108 580.00537"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 542.42439,488.96249 c 0,0 -4.55937,24.22997 -4.74534,39.0761 -0.18597,14.84612 4.7557,49.4926 4.7557,49.4926"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="m 541.31824,489.30679 c 0,0 7.05121,11.66353 11.70914,16.5653 6.245,6.57193 21.38027,16.81059 21.38027,16.81059"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M541.31824 489.30679,618.19904 457.48734"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 618.19904,457.48734 c 0,0 -17.09622,19.63774 -24.34675,30.4102 -7.41717,11.02003 -19.44464,34.78514 -19.44464,34.78514"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M618.19904 457.48734,667.72656 550.26697"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M735.98645 511.41077,667.72656 550.26697"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M735.98645 511.41077,737.55017 575.46326"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 735.98645,511.41077 c 0,0 25.2254,24.07251 40.73369,31.36223 12.43893,5.84696 40.21577,9.10591 40.21577,9.10591"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M816.93591 551.87891,811.63531 585.98547"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M737.55017 575.46326,695.6908 604.98688"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M737.55017 575.46326,739.24103 675.49884"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 737.55017,575.46326 c 0,-0.14908 33.48492,-0.0421 33.44804,8.44594 -0.0589,13.56324 40.6371,2.07627 40.6371,2.07627"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M985.07355 592.52826,964.74084 685.43793"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M37.149261 638.71637,72.201385 641.7854"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 37.149261,638.71637 c 0,0 -8.505175,45.34205 -7.569329,68.19375 0.716081,17.48545 10.039121,51.53153 10.039121,51.53153"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M72.201385 641.7854,76.220284 754.14948"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M72.201385 641.7854,121.31674 638.91956"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M121.31674 638.91956,124.55231 748.44995"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M121.31674 638.91956,244.60786 631.60223"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 244.95367,632.39655 -47.21058,55.53314"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M244.60786 631.60223,212.61447 725.10229"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M244.60786 631.60223,254.65511 717.22382"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M244.60786 631.60223,314.38766 609.36237"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M314.38766 609.36237,336.6597 650.0979"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M314.38766 609.36237,423.67401 616.98218"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M446.45462 551.26221,463.5108 580.00537"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 574.40765,522.68268 c 0,0 -10.54587,34.22928 -15.41782,51.46067 -2.55786,9.04678 2.06325,33.7351 -1.11382,45.74353 -4.82875,18.25131 -15.49734,12.55406 -15.49734,12.55406"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M574.40765 522.68268,667.72656 550.26697"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M667.72656 550.26697,630.56555 633.24048"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M667.72656 550.26697,695.6908 604.98688"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M788.69983 735.85101,739.24103 675.49884"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M788.69983 735.85101,764.10999 810.76776"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M788.69983 735.85101,834.70679 879.44421"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M788.69983 735.85101,850.59967 755.49396"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 785.79061,733.16302 29.00431,-72.10736"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="m 811.63531,585.98547 c 0,0 -17.09359,23.46676 -21.92263,36.9491 -5.06164,14.13177 -6.83577,44.51088 -6.83577,44.51088"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M811.63531 585.98547,842.16437 623.88446"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M423.67401 616.98218,417.88681 656.82776"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M423.67401 616.98218,463.5108 580.00537"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M542.43475 577.53119,540.71906 642.82593"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M630.56555 633.24048,540.71906 642.82593"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M630.56555 633.24048,655.06775 656.14966"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M695.6908 604.98688,655.06775 656.14966"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M695.6908 604.98688,739.24103 675.49884"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 837.9021,621.59741 -23.10718,39.45825"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M842.16437 623.88446,918.35254 744.84167"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M842.16437 623.88446,964.74084 685.43793"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M964.74084 685.43793,1007.2585 746.57202"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M197.74309 687.92969,161.73372 736.7323"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M336.6597 650.0979,304.5611 691.8302"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M336.6597 650.0979,360.59189 692.97302"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M417.88681 656.82776,380.49347 731.70355"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M417.88681 656.82776,466.74203 705.06042"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M417.88681 656.82776,540.71906 642.82593"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 540.71906,642.82593 c 0,0 -24.36857,21.45702 -36.79172,31.90584 -12.24099,10.29562 -37.18531,30.32865 -37.18531,30.32865"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M540.71906 642.82593,553.00958 756.79169"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 655.06775,656.14966 c 0,0 11.45363,13.90274 15.43023,21.89776 6.05763,12.17899 12.41999,38.87091 12.41999,38.87091"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M655.06775 656.14966,739.24103 675.49884"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M739.24103 675.49884,682.91797 716.91833"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M739.24103 675.49884,814.79492 661.05566"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M814.79492 661.05566,850.59967 755.49396"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 39.619053,758.44165 c 0,0 3.824598,30.42964 7.211182,45.36038 3.012219,13.28025 11.620655,39.16513 11.620655,39.16513"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M39.619053 758.44165,76.220284 754.14948"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M76.220284 754.14948,124.55231 748.44995"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M124.55231 748.44995,116.99824 785.94263"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M124.55231 748.44995,161.73372 736.7323"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M161.73372 736.7323,168.04266 783.63507"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M212.61447 725.10229,168.04266 783.63507"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M212.61447 725.10229,254.65511 717.22382"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M254.65511 717.22382,263.70715 806.45947"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M254.65511 717.22382,304.5611 691.8302"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M304.5611 691.8302,326.36984 725.93677"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M326.36984 725.93677,360.59189 692.97302"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M326.36984 725.93677,263.70715 806.45947"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M326.36984 725.93677,365.57532 775.31812"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M360.59189 692.97302,380.49347 731.70355"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M380.49347 731.70355,365.57532 775.31812"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M380.49347 731.70355,443.37247 796.46484"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M380.49347 731.70355,466.74203 705.06042"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M466.74203 705.06042,495.43552 755.71906"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 490.9518,754.95771 c 0,0 -5.5062,20.4181 -10.71773,24.5029 -7.16248,5.61395 -16.80494,-13.75545 -25.25364,-10.37358 -6.08308,2.43495 -11.60796,27.37781 -11.60796,27.37781"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M495.43552 755.71906,472.81421 824.14117"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M495.43552 755.71906,553.00958 756.79169"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M553.00958 756.79169,549.88507 810.38483"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M553.00958 756.79169,604.82416 760.83838"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M604.82416 760.83838,595.78821 819.11096"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M604.82416 760.83838,682.91797 716.91833"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 682.91797,716.91833 c 0,0 4.20533,46.85903 4.97303,70.35751 0.89065,27.26209 -0.42945,81.82877 -0.42945,81.82877"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M687.46155 869.10461,595.78821 819.11096"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M687.46155 869.10461,644.1568 909.62103"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 687.46155,869.10461 c 0,0 2.96203,36.04184 0.67164,53.84476 -1.02581,7.97348 -5.82138,15.23557 -6.39509,23.25428 -1.32159,18.47176 6.95538,55.11985 6.95538,55.11985"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="m 687.46155,869.10461 c 0,0 26.1863,-32.08628 43.02488,-43.65949 10.07826,-6.92681 33.62356,-14.67736 33.62356,-14.67736"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M850.59967 755.49396,871.43805 855.27234"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M850.59967 755.49396,918.35254 744.84167"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M918.35254 744.84167,959.10712 818.52643"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M1007.2585 746.57202,1007.7679 869.93182"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M116.99824 785.94263,58.45089 842.96716"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M168.04266 783.63507,134.41104 834.16797"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M168.04266 783.63507,224.90062 845.04382"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M263.70715 806.45947,224.90062 845.04382"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M263.70715 806.45947,280.97235 861.73907"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M365.57532 775.31812,340.18024 838.90002"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M365.57532 775.31812,419.6098 818.3642"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M443.37247 796.46484,419.6098 818.3642"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M443.37247 796.46484,472.81421 824.14117"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M472.81421 824.14117,521.92517 872.38556"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M549.88507 810.38483,521.92517 872.38556"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M595.78821 819.11096,578.03784 929.28149"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M907.69147 969.67072,847.70312 991.42535"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M907.69147 969.67072,871.43805 855.27234"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 907.69147,969.67072 c 0,0 59.12555,-21.33599 78.81414,-44.11217 12.98164,-15.01743 21.26229,-55.62673 21.26229,-55.62673"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M764.10999 810.76776,739.19427 875.14471"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M871.43805 855.27234,834.70679 879.44421"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 871.43805,855.27234 c 0,0 37.76185,-8.8004 55.32144,-16.72445 11.55843,-5.21593 32.34763,-20.02146 32.34763,-20.02146"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M959.10712 818.52643,1007.7679 869.93182"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M16.796076 855.58215,58.45089 842.96716"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 16.796076,855.58215 c 0,0 17.882642,11.68737 23.209941,20.53874 4.415382,7.33621 0.658772,18.95931 3.055779,30.07367 3.692298,17.12031 12.277735,33.35482 12.277735,33.35482"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M134.41104 834.16797,55.339531 939.54938"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M134.41104 834.16797,161.90471 909.13287"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M224.90062 845.04382,161.90471 909.13287"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M280.97235 861.73907,318.33496 913.7627"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 280.97235,861.73907 c 0,0 18.22096,-12.01369 28.33051,-15.89136 9.85006,-3.77814 30.87738,-6.94769 30.87738,-6.94769"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M340.18024 838.90002,318.33496 913.7627"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M340.18024 838.90002,367.06012 851.3075"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M367.06012 851.3075,378.74857 939.42517"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M367.06012 851.3075,419.6098 818.3642"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M419.6098 818.3642,441.6217 891.90863"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M521.92517 872.38556,441.6217 891.90863"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M521.92517 872.38556,451.03909 952.07227"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M521.92517 872.38556,578.03784 929.28149"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M578.03784 929.28149,644.1568 909.62103"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 644.1568,909.62103 c 0,0 -4.4319,29.20341 3.34982,40.14826 3.69808,5.20129 13.5144,2.78444 17.49815,7.77032 3.61263,4.52141 0.99781,11.75333 3.37071,17.03193 4.59116,10.21317 20.318,26.75196 20.318,26.75196"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M739.19427 875.14471,688.69348 1001.3235"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 739.19427,875.14471 c 0,0 24.93273,36.55335 41.95039,30.5902 8.51697,-2.98442 53.56213,-26.2907 53.56213,-26.2907"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M834.70679 879.44421,847.70312 991.42535"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 55.339531,939.54938 c 0,0 -14.005894,14.79499 -10.663897,22.33922 3.873595,8.74426 16.576882,31.92512 29.198232,33.61217 11.220688,1.49984 22.715665,-18.04069 22.715665,-18.04069"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M96.589531 977.46008,161.90471 909.13287"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 96.589531,977.46008 c 0,0 10.368159,32.12002 24.281309,37.13892 16.75987,6.0458 51.07382,-15.76282 51.07382,-15.76282"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="m 161.90471,909.13287 c 0,0 -7.02125,17.71761 -6.96245,27.01749 0.1369,21.6498 17.0024,62.68582 17.0024,62.68582"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="M171.94466 998.83618,334.20303 943.86353"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M318.33496 913.7627,334.20303 943.86353"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M334.20303 943.86353,378.74857 939.42517"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M378.74857 939.42517,451.03909 952.07227"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="M441.6217 891.90863,451.03909 952.07227"
        fill="none"
        stroke="gray"
        strokeWidth="5"
      />
      <path
        d="m 688.69348,1001.3235 c 0,0 41.91502,8.4905 63.10268,7.8638 32.4984,-0.9614 95.90696,-17.76195 95.90696,-17.76195"
        fill="none"
        stroke="#808080"
        strokeWidth="5"
      />
      <path
        d="m 145.06374,70.139747 c 32.10202,52.044213 51.71688,76.584233 76.79794,116.906523 16.73565,26.26576 51.96154,77.36333 51.96154,77.36333"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 430.23488,31.31779 c 0,0 -3.43409,19.449955 -4.62568,41.351908 -0.76309,14.02602 0.47878,29.787672 0.57042,39.695432 0.0914,9.88245 -1.74701,22.94984 -1.00866,35.16773 1.33634,22.11314 5.5584,42.35482 5.5584,42.35482"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 440.16333,32.038559 38.75985,59.956709 25.63193,46.492892"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 957.38205,43.617421 -5.73294,92.438579 -1.1944,74.58093"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="M 560.03534,93.882669 508.94888,140.37346"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 561.54469,91.286043 c 0,0 41.9441,9.162397 57.58762,22.597427 5.85145,5.02537 2.43563,18.05064 7.28875,27.54199 7.61154,14.88601 22.16768,26.50883 22.16768,26.50883 l 19.39674,23.30391 27.31681,46.49483"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="M556.24951 90.440384,639.16016 67.927223"
        fill="none"
        stroke="cyan"
        strokeWidth="5"
      />
      <path
        d="M 641.36869,72.894714 722.84458,62.762803"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 720.51298,62.034177 c 0,0 24.41783,49.725743 34.47629,77.662303 7.61949,21.16256 19.50314,69.08845 19.50314,69.08845"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 720.91013,61.584166 c 0,0 32.19732,18.6265 66.5844,35.249095 24.96059,12.065869 54.86525,20.328869 70.13504,34.820379 7.45064,7.0709 12.03284,26.03757 12.03284,26.03757"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 437.89272,194.15482 -51.0072,28.17463"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 438.47638,189.67132 69.04286,153.31573"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 440.38666,193.56135 63.59586,-49.07701"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 497.93493,146.70419 31.16082,54.50554 25.8268,42.25951 38.02319,79.18762"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 869.66241,163.69121 -90.49169,52.19308"
        fill="none"
        stroke="cyan"
        strokeWidth="5"
      />
      <path
        d="m 869.66241,157.69121 3.89521,96.75957"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="M869.66241 157.69121,950.45471 210.63693"
        fill="none"
        stroke="cyan"
        strokeWidth="5"
      />
      <path
        d="m 384.19785,221.85573 -50.26145,16.5873 -57.01104,20.75569"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 383.03928,219.23373 c 0,0 -2.25281,12.32291 -8.74388,20.54259 -3.53921,4.48172 -12.34758,4.11561 -13.48677,8.2385 -1.73718,6.2871 11.81458,34.87601 22.66824,64.7707 5.10122,14.05051 16.77641,62.20122 16.77641,62.20122"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 778.67541,205.57596 -33.87462,19.4529 -44.76809,7.01485"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 779.17072,209.88429 10.38813,106.50401 4.9666,82.16563"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="M950.45471 210.63693,932.05475 321.97729"
        fill="none"
        stroke="cyan"
        strokeWidth="5"
      />
      <path
        d="m 276.71927,261.88905 -52.1413,21.41412 -47.4188,28.65791"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 276.91682,256.75142 c 0,0 11.28365,53.93488 16.56628,80.97414 4.18883,21.44056 11.99586,64.43053 11.99586,64.43053"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 702.18309,239.09364 c 0,0 -72.16762,23.7477 -93.80981,52.75799 -6.36296,8.52924 -8.23793,32.22171 -8.23793,32.22171"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 697.53801,238.30838 18.83936,63.96612 11.36975,71.43926"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 876.5733,259.71199 -9.19721,58.4516 -3.79708,58.38505"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 170.87513,306.07213 -63.06484,78.34054"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 174.43199,308.45334 80.9695,107.14381"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="M 402.80961,369.43575 338.96174,389.45"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="M403.06802 373.8869,462.49658 476.01227"
        fill="none"
        stroke="cyan"
        strokeWidth="5"
      />
      <path
        d="M 402.53145,369.79133 503.55434,342.40868"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 507.95744,344.04135 11.56419,55.80081"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="M 504.88184,347.65592 592.17408,324.3595"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 592.94574,322.65686 c 0,0 -17.28407,31.57863 -31.04107,42.43714 -7.16565,5.65591 -18.42784,4.53212 -25.25541,10.59183 -8.1392,7.22383 -16.11229,28.39483 -16.11229,28.39483"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="M592.94574 322.65686,619.50409 395.871"
        fill="none"
        stroke="cyan"
        strokeWidth="5"
      />
      <path
        d="M932.05475 321.97729,887.28424 435.17877"
        fill="none"
        stroke="cyan"
        strokeWidth="5"
      />
      <path
        d="m 930.7621,326.00927 37.57069,56.80764 13.4099,60.89154"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 109.72914,391.94711 c 0,0 -6.30537,13.07941 -6.67484,20.1432 -0.34634,6.62144 5.50621,0.53378 7.62511,9.0122 2.96001,11.84393 2.56884,37.56421 2.56884,37.56421"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="M 249.11492,412.76494 112.94849,454.3078"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 247.28289,418.11588 c 0,0 10.93011,36.3821 25.12009,64.72769 9.13248,18.24284 24.14298,36.93828 29.10583,51.44685 9.21811,26.94853 12.87885,75.07195 12.87885,75.07195"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 251.46691,412.01895 50.7842,-14.3826"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 302.03667,398.24114 36.00493,-8.25181"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 518.10419,407.85064 -22.91276,18.13862 c 0,0 -14.78281,16.76894 -19.96706,26.5555 -3.8382,7.24556 -7.96114,23.27422 -7.96114,23.27422"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 519.86497,399.126 17.28136,43.09742 c 0,0 -1.76522,15.04205 -0.46389,22.39406 1.58618,8.9612 9.90042,25.44314 9.90042,25.44314 0,0 -3.99679,29.29891 -3.6878,44.0206 0.30027,14.30653 5.37562,42.59114 5.37562,42.59114 l -2.34251,61.81051"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 733.12855,381.27435 c 0,0 -12.54313,-1.59751 -25.9575,-0.0438 -10.15976,1.17674 -20.58073,5.3635 -27.79726,6.53284 -8.70459,1.41046 -19.18271,6.70244 -29.83696,8.93924 -14.51804,3.04799 -28.2762,2.94734 -28.2762,2.94734"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 736.57218,376.33984 -0.0109,43.09651 4.18129,91.32961"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="M732.93207 376.95294,798.22974 398.96921"
        fill="none"
        stroke="cyan"
        strokeWidth="5"
      />
      <path
        d="M798.22974 398.96921,887.28424 435.17877"
        fill="none"
        stroke="cyan"
        strokeWidth="5"
      />
      <path
        d="m 857.04177,383.61291 27.13845,54.5151"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 54.043614,472.71731 56.800546,-17.8621"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 458.40495,474.39872 -30.88189,25.82782 -22.23662,24.55032"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="M619.50409 395.871,667.72656 550.26697"
        fill="none"
        stroke="cyan"
        strokeWidth="5"
      />
      <path
        d="m 889.12204,439.52787 c 0,0 36.14887,9.06835 55.00106,11.14802 15.17554,1.67408 41.2665,0.346 41.2665,0.346"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 888.44325,435.86964 -6.55887,88.83292"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 987.10205,446.44778 c 0,0 7.14575,51.83886 5.87746,77.8227 -1.22808,25.16009 -13.00292,74.44305 -13.00292,74.44305 l -20.88136,90.28153 -40.74269,55.84661"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 873.71622,521.7352 c 0,0 -29.94783,25.36469 -57.62053,25.54166 -41.24196,0.26375 -78.50098,-38.54275 -78.50098,-38.54275"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 877.52924,524.39978 c 0,0 -18.24655,32.55028 -24.36609,50.0756 -5.56236,15.92961 -10.99878,49.40908 -10.99878,49.40908"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 403.54076,519.866 -89.75563,85.08988"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 734.81083,506.97031 -68.44941,37.86028"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 731.20546,511.56027 2.4814,163.33906"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 121.66859,634.74261 -42.538565,2.18726 -46.110974,-3.05011 c 0,0 -9.912034,47.06256 -8.918591,70.84232 0.753937,18.04679 11.229139,53.01133 11.229139,53.01133"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="M121.31674 638.91956,244.60786 631.60223"
        fill="none"
        stroke="cyan"
        strokeWidth="5"
      />
      <path
        d="m 239.1662,630.95062 -44.70966,54.78657 -32.88113,44.97948 -33.50693,12.51499 -87.77441,10.78463"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 249.99139,630.60254 18.59038,175.81691"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="M244.60786 631.60223,314.38766 609.36237"
        fill="none"
        stroke="cyan"
        strokeWidth="5"
      />
      <path
        d="m 309.83016,611.53994 64.80637,118.38169"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 662.97577,547.78511 -36.78499,84.94948"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="M 790.27865,730.57093 743.80683,672.72251"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 793.13336,737.99623 -48.53599,138.007"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 792.33163,734.01019 47.85405,142.87216 13.04745,113.37569"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="M788.69983 735.85101,918.35254 744.84167"
        fill="none"
        stroke="cyan"
        strokeWidth="5"
      />
      <path
        d="m 792.45546,730.67437 c 0,0 15.90744,-42.92957 25.75748,-63.55827 7.09866,-14.86655 23.95143,-43.23164 23.95143,-43.23164"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 629.1687,629.01747 -89.02424,9.51901"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="M630.56555 633.24048,604.82416 760.83838"
        fill="none"
        stroke="cyan"
        strokeWidth="5"
      />
      <path
        d="m 846.81398,623.13998 74.99821,119.16471"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 542.18688,644.15709 c 0,0 -21.27345,22.3957 -33.43563,32.6415 -12.51124,10.53986 -37.99914,31.03891 -37.99914,31.03891"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="M540.71906 642.82593,553.00958 756.79169"
        fill="none"
        stroke="cyan"
        strokeWidth="5"
      />
      <path
        d="m 737.89402,673.59762 c 0,0 -34.77026,24.32163 -52.7499,35.56721 -26.2194,16.39924 -80.29957,46.47048 -80.29957,46.47048"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 42.906552,758.28913 c 0,0 4.577559,23.55165 13.608266,27.40661 16.87271,7.20248 60.483422,0.24689 60.483422,0.24689"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 377.7413,732.32722 -41.02562,101.82493 c 0,0 -22.0252,3.98378 -32.09532,8.61598 -9.13655,4.20276 -25.02598,15.45693 -25.02598,15.45693"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 383.10319,728.93687 62.65655,63.40592 32.33413,30.31603 47.75495,47.44431"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 382.93002,734.54028 c 0,0 30.96882,-8.11003 46.19389,-12.86448 13.53615,-4.22704 36.26582,-10.92681 36.26582,-10.92681"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 472.06931,703.01984 26.29687,46.97433 53.62365,2.9011"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="M553.00958 756.79169,521.92517 872.38556"
        fill="none"
        stroke="cyan"
        strokeWidth="5"
      />
      <path
        d="M553.00958 756.79169,604.82416 760.83838"
        fill="none"
        stroke="cyan"
        strokeWidth="5"
      />
      <path
        d="M604.82416 760.83838,578.03784 929.28149"
        fill="none"
        stroke="cyan"
        strokeWidth="5"
      />
      <path
        d="m 923.27548,741.37296 40.79763,76.61108 46.87679,51.76675 c 0,0 -7.5445,43.64181 -18.86046,57.94272 -19.76109,24.97382 -79.93542,46.61062 -79.93542,46.61062 l -63.73209,20.29697"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="M 113.59258,784.06255 57.31985,835.94558 20.354639,850.94537"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="M 120.69552,784.74028 164.50588,902.7255"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="M 267.99332,809.0206 166.17753,911.58295"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="M263.70715 806.45947,280.97235 861.73907"
        fill="none"
        stroke="cyan"
        strokeWidth="5"
      />
      <path
        d="m 16.796076,855.58215 c 0,0 -4.435067,25.8756 0.46941,37.30285 3.059098,7.12759 8.73506,7.34279 14.803401,13.87131 7.890724,8.4891 13.484931,25.04371 22.792461,33.95383 9.036705,8.65086 15.845775,-4.33946 22.659165,2.60614 8.277649,8.43828 19.069018,34.1438 19.069018,34.1438"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 280.97235,861.73907 c 0,0 -23.90592,35.06257 -65.05868,78.529 -10.82132,11.42972 -21.62967,39.15199 -35.41192,48.62298 -19.54609,13.43185 -40.16841,22.57925 -56.47365,20.87715 -13.96667,-1.458 -24.01592,-34.61179 -24.01592,-34.61179"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 277.66673,865.19117 33.34684,46.73184 20.94667,36.43001 46.19148,-3.30463 c 0,0 0.80171,-23.75911 12.5948,-33.22778 7.64844,-6.14093 45.72979,-13.60103 45.72979,-13.60103 l 86.59578,-21.18592"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 525.48096,869.02678 55.8895,57.19651"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="m 578.03784,929.28149 c 0,0 33.04722,14.25673 45.14537,26.93307 7.03057,7.36657 6.18601,20.93254 14.41061,26.9368 6.37865,4.65665 15.85769,1.6456 23.30292,4.28002 11.79808,4.17463 32.97478,17.95172 32.97478,17.95172 l 49.42722,-129.07863"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      <path
        d="M 99.542548,980.79324 165.18127,911.52155"
        fill="none"
        stroke="#00ffff"
        strokeWidth="5"
      />
      {nodes}
    </svg>
  );
};
