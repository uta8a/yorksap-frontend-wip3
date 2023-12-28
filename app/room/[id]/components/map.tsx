import React from "react";

type Props = {
  onClickNode: (nodeId: number) => void;
  fillColor: string[];
  strokeColor: string[];
  candidates: number[];
  highlightColor?: string;
};

export const Map = ({
  onClickNode,
  fillColor,
  strokeColor,
  candidates,
  highlightColor,
}: Props) => {
  const candidateTable = new Array(200).fill(false);
  for (const candidate of candidates) {
    candidateTable[candidate] = true;
  }

  highlightColor = highlightColor || "#ff5c61";

  return (
    <svg
      width="1024"
      height="1024"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="1024" height="1024" fill="white" />
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
        d="M869.66241 157.69121,779.17072 209.88429"
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
      <path
        d="m 148.04468,66.228575 c 0,0 49.03204,76.412475 76.29037,117.432015 15.95331,24.00724 50.83911,73.33471 50.83911,73.33471"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
      />
      <path
        d="m 552.15863,87.482088 -62.93682,56.688262 -52.48701,40.09987 -53.8883,30.56994 -61.24079,17.83101 -46.73801,19.11857"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
      />
      <path
        d="m 556.24951,90.440384 c 0,0 -10.32948,33.641736 -9.80358,50.918196 0.67949,22.32219 27.38248,35.03632 34.23786,63.99871 4.72293,19.95323 -28.45327,20.74582 -22.19395,39.40859 3.91149,11.66249 11.92601,22.67985 20.68204,38.67543 8.19239,14.96592 17.2816,35.32981 17.2816,35.32981"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
      />
      <path
        d="m 555.24378,85.523481 84.67902,-22.297466 82.95135,-9.504834 84.62495,41.049654 c 0,0 46.68003,14.876775 60.06986,35.281035 4.85849,7.40367 6.80926,24.48231 6.80926,24.48231 l 2.99706,103.81375 1.75831,6.36739 c 0,0 -5.57377,35.25412 -7.22892,53.01103 -1.78786,19.18074 -2.90891,57.7184 -2.90891,57.7184"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
      />
      <path
        d="m 272.69151,254.60555 c 0,0 -31.58339,10.90386 -56.42755,23.49201 -19.51116,9.886 -42.60343,23.60667 -41.32469,32.6993 0.9375,6.66617 -61.01724,82.95117 -61.70239,83.73434"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
      />
      <path
        d="m 280.57732,255.39006 15.11786,73.82717 29.44241,-14.40635 17.46377,79.14701"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
      />
      <path
        d="M 593.0824,327.48316 409.59142,377.22958 340.4241,397.20814"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
      />
      <path
        d="m 591.94379,324.85029 -6.10858,63.13865 -51.11414,57.23408 -69.13548,35.40464 -35.22273,29.1593 -21.28908,18.68362"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
      />
      <path
        d="m 594.70577,326.87232 67.4528,-21.96344 c 0,0 62.64489,12.64197 92.74095,23.08736 13.58203,4.71389 24.38086,16.02857 41.736,23.98177 28.64019,13.1247 62.44187,23.05901 62.44187,23.05901"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
      />
      <path
        d="m 335.16036,397.39501 c 0,0 17.77304,46.756 29.59572,72.23206 4.60333,9.91948 17.03332,10.53473 17.03332,10.53473 l 26.35769,42.28938"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
      />
      <path
        d="M 339.31613,398.53124 252.4567,420.92045 56.686298,482.3699"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
      />
      <path
        d="m 862.84435,377.72274 -25.4472,33.0558 c 0,0 -30.44155,4.91491 -45.78835,6.23906 -19.24514,1.66051 -57.91088,2.12704 -57.91088,2.12704 0,0 -11.90846,9.12704 -18.65513,12.27016 -13.16565,6.13358 -38.34251,5.52564 -56.4195,10.48192 -21.55245,5.90917 -35.11043,16.84801 -35.11043,16.84801 0,0 -18.65659,21.12093 -26.39643,32.84042 -6.77847,10.26381 -17.37595,32.5533 -17.37595,32.5533 0,0 -9.82586,29.8403 -14.30407,44.89436 -3.62593,12.189 1.64419,38.3184 -2.55024,53.71 -4.2701,15.66932 -19.24732,13.2801 -19.24732,13.2801"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
      />
      <path
        d="m 864.16871,375.01512 28.28226,59.6401 -6.07416,84.10382 c 0,0 -21.68768,37.23558 -28.64308,57.4818 -4.50635,13.11734 -8.24748,40.78389 -8.24748,40.78389 l -26.02693,50.27806 -28.64054,65.42306"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
      />
      <path
        d="m 408.21378,528.46152 -91.09788,84.65706 -69.3809,23.53904 -46.49983,54.68865 -35.47495,47.62818 -48.76198,46.96818"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
      />
      <path
        d="m 405.28644,524.77686 23.97105,95.54364 -6.43304,40.26163 -39.01331,72.49889"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
      />
      <path
        d="m 785.24622,738.24453 -47.11403,-57.75194 -85.94587,-19.6499 -23.35078,-23.08923 -86.00988,8.94513"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
      />
      <path
        d="m 784.61726,735.75512 -26.74752,74.43953 -24.21068,65.69694 -48.88894,124.80471 c 0,0 -15.96882,8.7701 -24.78981,10.1777 -29.37034,4.6866 -72.09673,4.6291 -88.9874,-6.517 -20.97896,-13.84404 7.04493,-75.07551 7.04493,-75.07551"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
      />
      <path
        d="m 532.79478,643.2027 c 0,0 -42.99865,44.30289 -68.57449,56.98156 -28.14551,13.95253 -83.71322,27.42237 -83.71322,27.42237"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
      />
      <path
        d="m 378.04257,730.47659 c 0,0 -61.68139,74.8341 -106.05662,79.75286 -31.74432,3.51869 -55.94707,-30.58124 -87.71601,-33.87026 -22.64571,-2.3445 -67.2717,9.58344 -67.2717,9.58344"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
      />
      <path
        d="m 377.90191,737.38374 64.29067,64.22138 33.25547,31.8635 46.75764,45.98692 51.68106,51.26802"
        fill="none"
        stroke="#ff0000"
        strokeWidth="5"
      />
      <path
        d="m 877.52924,524.39978 c 0,0 -30.53992,-46.98837 -61.74925,-57.4646 -11.90169,-3.99512 -71.57145,5.3175 -89.06822,3.50818 -64.61954,-6.68225 -108.51273,-12.95602 -108.51273,-12.95602"
        fill="none"
        stroke="#000000"
        strokeWidth="5"
      />
      <path
        d="m 618.19904,457.48734 c 0,0 -2.29036,38.61103 -12.03865,87.15793 -5.13528,25.57391 -17.99207,60.40637 -21.39314,79.67778 -17.79651,100.83986 20.05691,136.51533 20.05691,136.51533"
        fill="none"
        stroke="#000000"
        strokeWidth="5"
      />
      <path
        d="m 604.82416,760.83838 c 0,0 -18.45887,-0.31126 -35.04189,49.18143 -18.55373,55.37434 -34.84265,169.79205 -78.69695,180.10139 -102.06867,23.9945 -156.88229,-46.25767 -156.88229,-46.25767"
        fill="none"
        stroke="#000000"
        strokeWidth="5"
      />
      <circle
        id="mapnode-1"
        cx="146.95363"
        cy="61.076096"
        r="12"
        fill={fillColor[1]}
        stroke={strokeColor[1]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[1] && (
          <animate
            attributeName="fill"
            values={`${fillColor[1]};${highlightColor};${fillColor[1]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="137.95363"
        y="64.076096"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        1
      </text>
      <circle
        id="mapnode-2"
        cx="321.50552"
        cy="36.924683"
        r="12"
        fill={fillColor[2]}
        stroke={strokeColor[2]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[2] && (
          <animate
            attributeName="fill"
            values={`${fillColor[2]};${highlightColor};${fillColor[2]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="312.50552"
        y="39.924683"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        2
      </text>
      <circle
        id="mapnode-3"
        cx="434.79761"
        cy="34.459274"
        r="12"
        fill={fillColor[3]}
        stroke={strokeColor[3]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[3] && (
          <animate
            attributeName="fill"
            values={`${fillColor[3]};${highlightColor};${fillColor[3]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="425.79761"
        y="37.459274"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        3
      </text>
      <circle
        id="mapnode-4"
        cx="504.95227"
        cy="23.804806"
        r="12"
        fill={fillColor[4]}
        stroke={strokeColor[4]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[4] && (
          <animate
            attributeName="fill"
            values={`${fillColor[4]};${highlightColor};${fillColor[4]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="495.95227"
        y="26.804806"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        4
      </text>
      <circle
        id="mapnode-5"
        cx="782.21185"
        cy="34.223984"
        r="12"
        fill={fillColor[5]}
        stroke={strokeColor[5]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[5] && (
          <animate
            attributeName="fill"
            values={`${fillColor[5]};${highlightColor};${fillColor[5]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="773.21185"
        y="37.223984"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        5
      </text>
      <circle
        id="mapnode-6"
        cx="869.35254"
        cy="33.290138"
        r="12"
        fill={fillColor[6]}
        stroke={strokeColor[6]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[6] && (
          <animate
            attributeName="fill"
            values={`${fillColor[6]};${highlightColor};${fillColor[6]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="860.35254"
        y="36.290138"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        6
      </text>
      <circle
        id="mapnode-7"
        cx="952.27789"
        cy="43.453575"
        r="12"
        fill={fillColor[7]}
        stroke={strokeColor[7]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[7] && (
          <animate
            attributeName="fill"
            values={`${fillColor[7]};${highlightColor};${fillColor[7]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="943.27789"
        y="46.453575"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        7
      </text>
      <circle
        id="mapnode-8"
        cx="108.56148"
        cy="117.09702"
        r="12"
        fill={fillColor[8]}
        stroke={strokeColor[8]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[8] && (
          <animate
            attributeName="fill"
            values={`${fillColor[8]};${highlightColor};${fillColor[8]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="99.56148"
        y="120.09702"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        8
      </text>
      <circle
        id="mapnode-9"
        cx="178.98067"
        cy="115.86467"
        r="12"
        fill={fillColor[9]}
        stroke={strokeColor[9]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[9] && (
          <animate
            attributeName="fill"
            values={`${fillColor[9]};${highlightColor};${fillColor[9]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="169.98067"
        y="118.86467"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        9
      </text>
      <circle
        id="mapnode-10"
        cx="378.99841"
        cy="100.69551"
        r="12"
        fill={fillColor[10]}
        stroke={strokeColor[10]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[10] && (
          <animate
            attributeName="fill"
            values={`${fillColor[10]};${highlightColor};${fillColor[10]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="369.99841"
        y="103.69551"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        10
      </text>
      <circle
        id="mapnode-11"
        cx="431.57043"
        cy="109.498"
        r="12"
        fill={fillColor[11]}
        stroke={strokeColor[11]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[11] && (
          <animate
            attributeName="fill"
            values={`${fillColor[11]};${highlightColor};${fillColor[11]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="422.57043"
        y="112.498"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        11
      </text>
      <circle
        id="mapnode-12"
        cx="475.96646"
        cy="96.624352"
        r="12"
        fill={fillColor[12]}
        stroke={strokeColor[12]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[12] && (
          <animate
            attributeName="fill"
            values={`${fillColor[12]};${highlightColor};${fillColor[12]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="466.96646"
        y="99.624352"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        12
      </text>
      <circle
        id="mapnode-13"
        cx="556.24951"
        cy="90.440384"
        r="12"
        fill={fillColor[13]}
        stroke={strokeColor[13]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[13] && (
          <animate
            attributeName="fill"
            values={`${fillColor[13]};${highlightColor};${fillColor[13]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="547.24951"
        y="93.440384"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        13
      </text>
      <circle
        id="mapnode-14"
        cx="639.16016"
        cy="67.927223"
        r="12"
        fill={fillColor[14]}
        stroke={strokeColor[14]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[14] && (
          <animate
            attributeName="fill"
            values={`${fillColor[14]};${highlightColor};${fillColor[14]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="630.16016"
        y="70.927223"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        14
      </text>
      <circle
        id="mapnode-15"
        cx="721.87207"
        cy="58.313278"
        r="12"
        fill={fillColor[15]}
        stroke={strokeColor[15]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[15] && (
          <animate
            attributeName="fill"
            values={`${fillColor[15]};${highlightColor};${fillColor[15]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="712.87207"
        y="61.313278"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        15
      </text>
      <circle
        id="mapnode-16"
        cx="802.14563"
        cy="98.218048"
        r="12"
        fill={fillColor[16]}
        stroke={strokeColor[16]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[16] && (
          <animate
            attributeName="fill"
            values={`${fillColor[16]};${highlightColor};${fillColor[16]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="793.14563"
        y="101.218048"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        16
      </text>
      <circle
        id="mapnode-17"
        cx="946.83337"
        cy="130.9677"
        r="12"
        fill={fillColor[17]}
        stroke={strokeColor[17]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[17] && (
          <animate
            attributeName="fill"
            values={`${fillColor[17]};${highlightColor};${fillColor[17]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="937.83337"
        y="133.9677"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        17
      </text>
      <circle
        id="mapnode-18"
        cx="71.859413"
        cy="159.61589"
        r="12"
        fill={fillColor[18]}
        stroke={strokeColor[18]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[18] && (
          <animate
            attributeName="fill"
            values={`${fillColor[18]};${highlightColor};${fillColor[18]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="62.859413"
        y="162.61589"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        18
      </text>
      <circle
        id="mapnode-19"
        cx="135.42819"
        cy="167.50096"
        r="12"
        fill={fillColor[19]}
        stroke={strokeColor[19]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[19] && (
          <animate
            attributeName="fill"
            values={`${fillColor[19]};${highlightColor};${fillColor[19]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="126.42819"
        y="170.50096"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        19
      </text>
      <circle
        id="mapnode-20"
        cx="216.5172"
        cy="136.85501"
        r="12"
        fill={fillColor[20]}
        stroke={strokeColor[20]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[20] && (
          <animate
            attributeName="fill"
            values={`${fillColor[20]};${highlightColor};${fillColor[20]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="207.5172"
        y="139.85501"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        20
      </text>
      <circle
        id="mapnode-21"
        cx="299.96857"
        cy="180.67493"
        r="12"
        fill={fillColor[21]}
        stroke={strokeColor[21]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[21] && (
          <animate
            attributeName="fill"
            values={`${fillColor[21]};${highlightColor};${fillColor[21]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="290.96857"
        y="183.67493"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        21
      </text>
      <circle
        id="mapnode-22"
        cx="434.69092"
        cy="190.67252"
        r="12"
        fill={fillColor[22]}
        stroke={strokeColor[22]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[22] && (
          <animate
            attributeName="fill"
            values={`${fillColor[22]};${highlightColor};${fillColor[22]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="425.69092"
        y="193.67252"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        22
      </text>
      <circle
        id="mapnode-23"
        cx="499.80444"
        cy="141.53888"
        r="12"
        fill={fillColor[23]}
        stroke={strokeColor[23]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[23] && (
          <animate
            attributeName="fill"
            values={`${fillColor[23]};${highlightColor};${fillColor[23]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="490.80444"
        y="144.53888"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        23
      </text>
      <circle
        id="mapnode-24"
        cx="603.79456"
        cy="147.62567"
        r="12"
        fill={fillColor[24]}
        stroke={strokeColor[24]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[24] && (
          <animate
            attributeName="fill"
            values={`${fillColor[24]};${highlightColor};${fillColor[24]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="594.79456"
        y="150.62567"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        24
      </text>
      <circle
        id="mapnode-25"
        cx="649.79126"
        cy="163.15764"
        r="12"
        fill={fillColor[25]}
        stroke={strokeColor[25]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[25] && (
          <animate
            attributeName="fill"
            values={`${fillColor[25]};${highlightColor};${fillColor[25]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="640.79126"
        y="166.15764"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        25
      </text>
      <circle
        id="mapnode-26"
        cx="716.15356"
        cy="94.843628"
        r="12"
        fill={fillColor[26]}
        stroke={strokeColor[26]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[26] && (
          <animate
            attributeName="fill"
            values={`${fillColor[26]};${highlightColor};${fillColor[26]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="707.15356"
        y="97.843628"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        26
      </text>
      <circle
        id="mapnode-27"
        cx="726.44342"
        cy="147.89021"
        r="12"
        fill={fillColor[27]}
        stroke={strokeColor[27]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[27] && (
          <animate
            attributeName="fill"
            values={`${fillColor[27]};${highlightColor};${fillColor[27]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="717.44342"
        y="150.89021"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        27
      </text>
      <circle
        id="mapnode-28"
        cx="757.1076"
        cy="129.02621"
        r="12"
        fill={fillColor[28]}
        stroke={strokeColor[28]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[28] && (
          <animate
            attributeName="fill"
            values={`${fillColor[28]};${highlightColor};${fillColor[28]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="748.1076"
        y="132.02621"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        28
      </text>
      <circle
        id="mapnode-29"
        cx="869.66241"
        cy="157.69121"
        r="12"
        fill={fillColor[29]}
        stroke={strokeColor[29]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[29] && (
          <animate
            attributeName="fill"
            values={`${fillColor[29]};${highlightColor};${fillColor[29]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="860.66241"
        y="160.69121"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        29
      </text>
      <circle
        id="mapnode-30"
        cx="975.65985"
        cy="152.17581"
        r="12"
        fill={fillColor[30]}
        stroke={strokeColor[30]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[30] && (
          <animate
            attributeName="fill"
            values={`${fillColor[30]};${highlightColor};${fillColor[30]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="966.65985"
        y="155.17581"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        30
      </text>
      <circle
        id="mapnode-31"
        cx="97.253754"
        cy="199.17503"
        r="12"
        fill={fillColor[31]}
        stroke={strokeColor[31]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[31] && (
          <animate
            attributeName="fill"
            values={`${fillColor[31]};${highlightColor};${fillColor[31]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="88.253754"
        y="202.17503"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        31
      </text>
      <circle
        id="mapnode-32"
        cx="192.19846"
        cy="225.69246"
        r="12"
        fill={fillColor[32]}
        stroke={strokeColor[32]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[32] && (
          <animate
            attributeName="fill"
            values={`${fillColor[32]};${highlightColor};${fillColor[32]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="183.19846"
        y="228.69246"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        32
      </text>
      <circle
        id="mapnode-33"
        cx="262.73459"
        cy="206.88477"
        r="12"
        fill={fillColor[33]}
        stroke={strokeColor[33]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[33] && (
          <animate
            attributeName="fill"
            values={`${fillColor[33]};${highlightColor};${fillColor[33]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="253.73459000000003"
        y="209.88477"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        33
      </text>
      <circle
        id="mapnode-34"
        cx="383.03928"
        cy="219.23373"
        r="12"
        fill={fillColor[34]}
        stroke={strokeColor[34]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[34] && (
          <animate
            attributeName="fill"
            values={`${fillColor[34]};${highlightColor};${fillColor[34]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="374.03928"
        y="222.23373"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        34
      </text>
      <circle
        id="mapnode-35"
        cx="455.81717"
        cy="239.55623"
        r="12"
        fill={fillColor[35]}
        stroke={strokeColor[35]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[35] && (
          <animate
            attributeName="fill"
            values={`${fillColor[35]};${highlightColor};${fillColor[35]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="446.81717"
        y="242.55623"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        35
      </text>
      <circle
        id="mapnode-36"
        cx="486.21323"
        cy="244.57619"
        r="12"
        fill={fillColor[36]}
        stroke={strokeColor[36]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[36] && (
          <animate
            attributeName="fill"
            values={`${fillColor[36]};${highlightColor};${fillColor[36]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="477.21323"
        y="247.57619"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        36
      </text>
      <circle
        id="mapnode-37"
        cx="528.96265"
        cy="191.85478"
        r="12"
        fill={fillColor[37]}
        stroke={strokeColor[37]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[37] && (
          <animate
            attributeName="fill"
            values={`${fillColor[37]};${highlightColor};${fillColor[37]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="519.96265"
        y="194.85478"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        37
      </text>
      <circle
        id="mapnode-38"
        cx="625.68079"
        cy="195.43672"
        r="12"
        fill={fillColor[38]}
        stroke={strokeColor[38]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[38] && (
          <animate
            attributeName="fill"
            values={`${fillColor[38]};${highlightColor};${fillColor[38]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="616.68079"
        y="198.43672"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        38
      </text>
      <circle
        id="mapnode-39"
        cx="669.30627"
        cy="186.48553"
        r="12"
        fill={fillColor[39]}
        stroke={strokeColor[39]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[39] && (
          <animate
            attributeName="fill"
            values={`${fillColor[39]};${highlightColor};${fillColor[39]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="660.30627"
        y="189.48553"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        39
      </text>
      <circle
        id="mapnode-40"
        cx="745.3125"
        cy="229.47316"
        r="12"
        fill={fillColor[40]}
        stroke={strokeColor[40]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[40] && (
          <animate
            attributeName="fill"
            values={`${fillColor[40]};${highlightColor};${fillColor[40]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="736.3125"
        y="232.47316"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        40
      </text>
      <circle
        id="mapnode-41"
        cx="779.17072"
        cy="209.88429"
        r="12"
        fill={fillColor[41]}
        stroke={strokeColor[41]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[41] && (
          <animate
            attributeName="fill"
            values={`${fillColor[41]};${highlightColor};${fillColor[41]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="770.17072"
        y="212.88429"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        41
      </text>
      <circle
        id="mapnode-42"
        cx="950.45471"
        cy="210.63693"
        r="12"
        fill={fillColor[42]}
        stroke={strokeColor[42]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[42] && (
          <animate
            attributeName="fill"
            values={`${fillColor[42]};${highlightColor};${fillColor[42]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="941.45471"
        y="213.63693"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        42
      </text>
      <circle
        id="mapnode-43"
        cx="52.591331"
        cy="247.02478"
        r="12"
        fill={fillColor[43]}
        stroke={strokeColor[43]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[43] && (
          <animate
            attributeName="fill"
            values={`${fillColor[43]};${highlightColor};${fillColor[43]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="43.591331"
        y="250.02478"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        43
      </text>
      <circle
        id="mapnode-44"
        cx="145.70999"
        cy="271.10458"
        r="12"
        fill={fillColor[44]}
        stroke={strokeColor[44]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[44] && (
          <animate
            attributeName="fill"
            values={`${fillColor[44]};${highlightColor};${fillColor[44]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="136.70999"
        y="274.10458"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        44
      </text>
      <circle
        id="mapnode-45"
        cx="214.79053"
        cy="283.10504"
        r="12"
        fill={fillColor[45]}
        stroke={strokeColor[45]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[45] && (
          <animate
            attributeName="fill"
            values={`${fillColor[45]};${highlightColor};${fillColor[45]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="205.79053"
        y="286.10504"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        45
      </text>
      <circle
        id="mapnode-46"
        cx="275.17416"
        cy="256.9953"
        r="12"
        fill={fillColor[46]}
        stroke={strokeColor[46]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[46] && (
          <animate
            attributeName="fill"
            values={`${fillColor[46]};${highlightColor};${fillColor[46]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="266.17416"
        y="259.9953"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        46
      </text>
      <circle
        id="mapnode-47"
        cx="320.05286"
        cy="238.58875"
        r="12"
        fill={fillColor[47]}
        stroke={strokeColor[47]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[47] && (
          <animate
            attributeName="fill"
            values={`${fillColor[47]};${highlightColor};${fillColor[47]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="311.05286"
        y="241.58875"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        47
      </text>
      <circle
        id="mapnode-48"
        cx="396.33963"
        cy="283.30963"
        r="12"
        fill={fillColor[48]}
        stroke={strokeColor[48]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[48] && (
          <animate
            attributeName="fill"
            values={`${fillColor[48]};${highlightColor};${fillColor[48]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="387.33963"
        y="286.30963"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        48
      </text>
      <circle
        id="mapnode-49"
        cx="510.01608"
        cy="280.93188"
        r="12"
        fill={fillColor[49]}
        stroke={strokeColor[49]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[49] && (
          <animate
            attributeName="fill"
            values={`${fillColor[49]};${highlightColor};${fillColor[49]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="501.01608"
        y="283.93188"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        49
      </text>
      <circle
        id="mapnode-50"
        cx="558.06464"
        cy="241.32014"
        r="12"
        fill={fillColor[50]}
        stroke={strokeColor[50]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[50] && (
          <animate
            attributeName="fill"
            values={`${fillColor[50]};${highlightColor};${fillColor[50]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="549.06464"
        y="244.32014"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        50
      </text>
      <circle
        id="mapnode-51"
        cx="654.62201"
        cy="252.35388"
        r="12"
        fill={fillColor[51]}
        stroke={strokeColor[51]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[51] && (
          <animate
            attributeName="fill"
            values={`${fillColor[51]};${highlightColor};${fillColor[51]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="645.62201"
        y="255.35388"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        51
      </text>
      <circle
        id="mapnode-52"
        cx="700.75604"
        cy="235.87636"
        r="12"
        fill={fillColor[52]}
        stroke={strokeColor[52]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[52] && (
          <animate
            attributeName="fill"
            values={`${fillColor[52]};${highlightColor};${fillColor[52]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="691.75604"
        y="238.87636"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        52
      </text>
      <circle
        id="mapnode-53"
        cx="753.57025"
        cy="276.11069"
        r="12"
        fill={fillColor[53]}
        stroke={strokeColor[53]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[53] && (
          <animate
            attributeName="fill"
            values={`${fillColor[53]};${highlightColor};${fillColor[53]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="744.57025"
        y="279.11069"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        53
      </text>
      <circle
        id="mapnode-54"
        cx="789.13385"
        cy="259.43298"
        r="12"
        fill={fillColor[54]}
        stroke={strokeColor[54]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[54] && (
          <animate
            attributeName="fill"
            values={`${fillColor[54]};${highlightColor};${fillColor[54]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="780.13385"
        y="262.43298"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        54
      </text>
      <circle
        id="mapnode-55"
        cx="873.3598"
        cy="258.31061"
        r="12"
        fill={fillColor[55]}
        stroke={strokeColor[55]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[55] && (
          <animate
            attributeName="fill"
            values={`${fillColor[55]};${highlightColor};${fillColor[55]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="864.3598"
        y="261.31061"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        55
      </text>
      <circle
        id="mapnode-56"
        cx="982.45325"
        cy="271.28653"
        r="12"
        fill={fillColor[56]}
        stroke={strokeColor[56]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[56] && (
          <animate
            attributeName="fill"
            values={`${fillColor[56]};${highlightColor};${fillColor[56]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="973.45325"
        y="274.28653"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        56
      </text>
      <circle
        id="mapnode-57"
        cx="82.286629"
        cy="293.68863"
        r="12"
        fill={fillColor[57]}
        stroke={strokeColor[57]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[57] && (
          <animate
            attributeName="fill"
            values={`${fillColor[57]};${highlightColor};${fillColor[57]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="73.286629"
        y="296.68863"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        57
      </text>
      <circle
        id="mapnode-58"
        cx="174.43199"
        cy="308.45334"
        r="12"
        fill={fillColor[58]}
        stroke={strokeColor[58]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[58] && (
          <animate
            attributeName="fill"
            values={`${fillColor[58]};${highlightColor};${fillColor[58]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="165.43199"
        y="311.45334"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        58
      </text>
      <circle
        id="mapnode-59"
        cx="189.20694"
        cy="334.27368"
        r="12"
        fill={fillColor[59]}
        stroke={strokeColor[59]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[59] && (
          <animate
            attributeName="fill"
            values={`${fillColor[59]};${highlightColor};${fillColor[59]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="180.20694"
        y="337.27368"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        59
      </text>
      <circle
        id="mapnode-60"
        cx="226.73618"
        cy="327.16241"
        r="12"
        fill={fillColor[60]}
        stroke={strokeColor[60]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[60] && (
          <animate
            attributeName="fill"
            values={`${fillColor[60]};${highlightColor};${fillColor[60]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="217.73618"
        y="330.16241"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        60
      </text>
      <circle
        id="mapnode-61"
        cx="288.41095"
        cy="337.3938"
        r="12"
        fill={fillColor[61]}
        stroke={strokeColor[61]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[61] && (
          <animate
            attributeName="fill"
            values={`${fillColor[61]};${highlightColor};${fillColor[61]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="279.41095"
        y="340.3938"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        61
      </text>
      <circle
        id="mapnode-62"
        cx="321.95636"
        cy="321.54617"
        r="12"
        fill={fillColor[62]}
        stroke={strokeColor[62]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[62] && (
          <animate
            attributeName="fill"
            values={`${fillColor[62]};${highlightColor};${fillColor[62]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="312.95636"
        y="324.54617"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        62
      </text>
      <circle
        id="mapnode-63"
        cx="403.06802"
        cy="373.8869"
        r="12"
        fill={fillColor[63]}
        stroke={strokeColor[63]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[63] && (
          <animate
            attributeName="fill"
            values={`${fillColor[63]};${highlightColor};${fillColor[63]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="394.06802"
        y="376.8869"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        63
      </text>
      <circle
        id="mapnode-64"
        cx="454.00867"
        cy="361.67966"
        r="12"
        fill={fillColor[64]}
        stroke={strokeColor[64]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[64] && (
          <animate
            attributeName="fill"
            values={`${fillColor[64]};${highlightColor};${fillColor[64]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="445.00867"
        y="364.67966"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        64
      </text>
      <circle
        id="mapnode-65"
        cx="504.41446"
        cy="345.90948"
        r="12"
        fill={fillColor[65]}
        stroke={strokeColor[65]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[65] && (
          <animate
            attributeName="fill"
            values={`${fillColor[65]};${highlightColor};${fillColor[65]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="495.41446"
        y="348.90948"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        65
      </text>
      <circle
        id="mapnode-66"
        cx="535.83643"
        cy="336.37375"
        r="12"
        fill={fillColor[66]}
        stroke={strokeColor[66]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[66] && (
          <animate
            attributeName="fill"
            values={`${fillColor[66]};${highlightColor};${fillColor[66]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="526.83643"
        y="339.37375"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        66
      </text>
      <circle
        id="mapnode-67"
        cx="592.94574"
        cy="322.65686"
        r="12"
        fill={fillColor[67]}
        stroke={strokeColor[67]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[67] && (
          <animate
            attributeName="fill"
            values={`${fillColor[67]};${highlightColor};${fillColor[67]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="583.94574"
        y="325.65686"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        67
      </text>
      <circle
        id="mapnode-68"
        cx="659.23279"
        cy="302.97595"
        r="12"
        fill={fillColor[68]}
        stroke={strokeColor[68]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[68] && (
          <animate
            attributeName="fill"
            values={`${fillColor[68]};${highlightColor};${fillColor[68]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="650.23279"
        y="305.97595"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        68
      </text>
      <circle
        id="mapnode-69"
        cx="719.7384"
        cy="297.16681"
        r="12"
        fill={fillColor[69]}
        stroke={strokeColor[69]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[69] && (
          <animate
            attributeName="fill"
            values={`${fillColor[69]};${highlightColor};${fillColor[69]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="710.7384"
        y="300.16681"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        69
      </text>
      <circle
        id="mapnode-70"
        cx="794.14508"
        cy="313.46014"
        r="12"
        fill={fillColor[70]}
        stroke={strokeColor[70]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[70] && (
          <animate
            attributeName="fill"
            values={`${fillColor[70]};${highlightColor};${fillColor[70]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="785.14508"
        y="316.46014"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        70
      </text>
      <circle
        id="mapnode-71"
        cx="862.23547"
        cy="313.48062"
        r="12"
        fill={fillColor[71]}
        stroke={strokeColor[71]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[71] && (
          <animate
            attributeName="fill"
            values={`${fillColor[71]};${highlightColor};${fillColor[71]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="853.23547"
        y="316.48062"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        71
      </text>
      <circle
        id="mapnode-72"
        cx="932.05475"
        cy="321.97729"
        r="12"
        fill={fillColor[72]}
        stroke={strokeColor[72]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[72] && (
          <animate
            attributeName="fill"
            values={`${fillColor[72]};${highlightColor};${fillColor[72]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="923.05475"
        y="324.97729"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        72
      </text>
      <circle
        id="mapnode-73"
        cx="81.583687"
        cy="344.7608"
        r="12"
        fill={fillColor[73]}
        stroke={strokeColor[73]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[73] && (
          <animate
            attributeName="fill"
            values={`${fillColor[73]};${highlightColor};${fillColor[73]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="72.583687"
        y="347.7608"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        73
      </text>
      <circle
        id="mapnode-74"
        cx="109.72914"
        cy="391.94711"
        r="12"
        fill={fillColor[74]}
        stroke={strokeColor[74]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[74] && (
          <animate
            attributeName="fill"
            values={`${fillColor[74]};${highlightColor};${fillColor[74]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="100.72914"
        y="394.94711"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        74
      </text>
      <circle
        id="mapnode-75"
        cx="156.14526"
        cy="375.99426"
        r="12"
        fill={fillColor[75]}
        stroke={strokeColor[75]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[75] && (
          <animate
            attributeName="fill"
            values={`${fillColor[75]};${highlightColor};${fillColor[75]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="147.14526"
        y="378.99426"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        75
      </text>
      <circle
        id="mapnode-76"
        cx="215.93044"
        cy="373.16641"
        r="12"
        fill={fillColor[76]}
        stroke={strokeColor[76]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[76] && (
          <animate
            attributeName="fill"
            values={`${fillColor[76]};${highlightColor};${fillColor[76]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="206.93044"
        y="376.16641"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        76
      </text>
      <circle
        id="mapnode-77"
        cx="251.6972"
        cy="416.23441"
        r="12"
        fill={fillColor[77]}
        stroke={strokeColor[77]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[77] && (
          <animate
            attributeName="fill"
            values={`${fillColor[77]};${highlightColor};${fillColor[77]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="242.6972"
        y="419.23441"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        77
      </text>
      <circle
        id="mapnode-78"
        cx="302.80154"
        cy="402.12589"
        r="12"
        fill={fillColor[78]}
        stroke={strokeColor[78]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[78] && (
          <animate
            attributeName="fill"
            values={`${fillColor[78]};${highlightColor};${fillColor[78]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="293.80154"
        y="405.12589"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        78
      </text>
      <circle
        id="mapnode-79"
        cx="338.80798"
        cy="394.52795"
        r="12"
        fill={fillColor[79]}
        stroke={strokeColor[79]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[79] && (
          <animate
            attributeName="fill"
            values={`${fillColor[79]};${highlightColor};${fillColor[79]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="329.80798"
        y="397.52795"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        79
      </text>
      <circle
        id="mapnode-80"
        cx="418.71542"
        cy="414.64731"
        r="12"
        fill={fillColor[80]}
        stroke={strokeColor[80]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[80] && (
          <animate
            attributeName="fill"
            values={`${fillColor[80]};${highlightColor};${fillColor[80]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="409.71542"
        y="417.64731"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        80
      </text>
      <circle
        id="mapnode-81"
        cx="488.83429"
        cy="428.3905"
        r="12"
        fill={fillColor[81]}
        stroke={strokeColor[81]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[81] && (
          <animate
            attributeName="fill"
            values={`${fillColor[81]};${highlightColor};${fillColor[81]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="479.83429"
        y="431.3905"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        81
      </text>
      <circle
        id="mapnode-82"
        cx="516.06781"
        cy="403.37393"
        r="12"
        fill={fillColor[82]}
        stroke={strokeColor[82]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[82] && (
          <animate
            attributeName="fill"
            values={`${fillColor[82]};${highlightColor};${fillColor[82]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="507.06781"
        y="406.37393"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        82
      </text>
      <circle
        id="mapnode-83"
        cx="580.67566"
        cy="386.85696"
        r="12"
        fill={fillColor[83]}
        stroke={strokeColor[83]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[83] && (
          <animate
            attributeName="fill"
            values={`${fillColor[83]};${highlightColor};${fillColor[83]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="571.67566"
        y="389.85696"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        83
      </text>
      <circle
        id="mapnode-84"
        cx="627.72021"
        cy="360.44183"
        r="12"
        fill={fillColor[84]}
        stroke={strokeColor[84]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[84] && (
          <animate
            attributeName="fill"
            values={`${fillColor[84]};${highlightColor};${fillColor[84]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="618.72021"
        y="363.44183"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        84
      </text>
      <circle
        id="mapnode-85"
        cx="664.59619"
        cy="342.46494"
        r="12"
        fill={fillColor[85]}
        stroke={strokeColor[85]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[85] && (
          <animate
            attributeName="fill"
            values={`${fillColor[85]};${highlightColor};${fillColor[85]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="655.59619"
        y="345.46494"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        85
      </text>
      <circle
        id="mapnode-86"
        cx="732.93207"
        cy="376.95294"
        r="12"
        fill={fillColor[86]}
        stroke={strokeColor[86]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[86] && (
          <animate
            attributeName="fill"
            values={`${fillColor[86]};${highlightColor};${fillColor[86]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="723.93207"
        y="379.95294"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        86
      </text>
      <circle
        id="mapnode-87"
        cx="798.22974"
        cy="398.96921"
        r="12"
        fill={fillColor[87]}
        stroke={strokeColor[87]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[87] && (
          <animate
            attributeName="fill"
            values={`${fillColor[87]};${highlightColor};${fillColor[87]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="789.22974"
        y="401.96921"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        87
      </text>
      <circle
        id="mapnode-88"
        cx="833.466"
        cy="407.1897"
        r="12"
        fill={fillColor[88]}
        stroke={strokeColor[88]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[88] && (
          <animate
            attributeName="fill"
            values={`${fillColor[88]};${highlightColor};${fillColor[88]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="824.466"
        y="410.1897"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        88
      </text>
      <circle
        id="mapnode-89"
        cx="859.07739"
        cy="375.03702"
        r="12"
        fill={fillColor[89]}
        stroke={strokeColor[89]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[89] && (
          <animate
            attributeName="fill"
            values={`${fillColor[89]};${highlightColor};${fillColor[89]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="850.07739"
        y="378.03702"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        89
      </text>
      <circle
        id="mapnode-90"
        cx="904.9104"
        cy="376.68112"
        r="12"
        fill={fillColor[90]}
        stroke={strokeColor[90]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[90] && (
          <animate
            attributeName="fill"
            values={`${fillColor[90]};${highlightColor};${fillColor[90]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="895.9104"
        y="379.68112"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        90
      </text>
      <circle
        id="mapnode-91"
        cx="973.00665"
        cy="379.27951"
        r="12"
        fill={fillColor[91]}
        stroke={strokeColor[91]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[91] && (
          <animate
            attributeName="fill"
            values={`${fillColor[91]};${highlightColor};${fillColor[91]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="964.00665"
        y="382.27951"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        91
      </text>
      <circle
        id="mapnode-92"
        cx="51.168648"
        cy="441.69525"
        r="12"
        fill={fillColor[92]}
        stroke={strokeColor[92]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[92] && (
          <animate
            attributeName="fill"
            values={`${fillColor[92]};${highlightColor};${fillColor[92]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="42.168648"
        y="444.69525"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        92
      </text>
      <circle
        id="mapnode-93"
        cx="54.893803"
        cy="476.39517"
        r="12"
        fill={fillColor[93]}
        stroke={strokeColor[93]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[93] && (
          <animate
            attributeName="fill"
            values={`${fillColor[93]};${highlightColor};${fillColor[93]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="45.893803"
        y="479.39517"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        93
      </text>
      <circle
        id="mapnode-94"
        cx="113.24825"
        cy="458.66672"
        r="12"
        fill={fillColor[94]}
        stroke={strokeColor[94]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[94] && (
          <animate
            attributeName="fill"
            values={`${fillColor[94]};${highlightColor};${fillColor[94]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="104.24825"
        y="461.66672"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        94
      </text>
      <circle
        id="mapnode-95"
        cx="146.08047"
        cy="449.94495"
        r="12"
        fill={fillColor[95]}
        stroke={strokeColor[95]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[95] && (
          <animate
            attributeName="fill"
            values={`${fillColor[95]};${highlightColor};${fillColor[95]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="137.08047"
        y="452.94495"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        95
      </text>
      <circle
        id="mapnode-96"
        cx="288.79532"
        cy="473.44312"
        r="12"
        fill={fillColor[96]}
        stroke={strokeColor[96]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[96] && (
          <animate
            attributeName="fill"
            values={`${fillColor[96]};${highlightColor};${fillColor[96]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="279.79532"
        y="476.44312"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        96
      </text>
      <circle
        id="mapnode-97"
        cx="312.03918"
        cy="464.45685"
        r="12"
        fill={fillColor[97]}
        stroke={strokeColor[97]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[97] && (
          <animate
            attributeName="fill"
            values={`${fillColor[97]};${highlightColor};${fillColor[97]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="303.03918"
        y="467.45685"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        97
      </text>
      <circle
        id="mapnode-98"
        cx="355.72827"
        cy="440.56119"
        r="12"
        fill={fillColor[98]}
        stroke={strokeColor[98]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[98] && (
          <animate
            attributeName="fill"
            values={`${fillColor[98]};${highlightColor};${fillColor[98]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="346.72827"
        y="443.56119"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        98
      </text>
      <circle
        id="mapnode-99"
        cx="396.6553"
        cy="446.04736"
        r="12"
        fill={fillColor[99]}
        stroke={strokeColor[99]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[99] && (
          <animate
            attributeName="fill"
            values={`${fillColor[99]};${highlightColor};${fillColor[99]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="387.6553"
        y="449.04736"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        99
      </text>
      <circle
        id="mapnode-100"
        cx="462.49658"
        cy="476.01227"
        r="12"
        fill={fillColor[100]}
        stroke={strokeColor[100]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[100] && (
          <animate
            attributeName="fill"
            values={`${fillColor[100]};${highlightColor};${fillColor[100]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="453.49658"
        y="479.01227"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        100
      </text>
      <circle
        id="mapnode-101"
        cx="531.83655"
        cy="441.68503"
        r="12"
        fill={fillColor[101]}
        stroke={strokeColor[101]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[101] && (
          <animate
            attributeName="fill"
            values={`${fillColor[101]};${highlightColor};${fillColor[101]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="522.83655"
        y="444.68503"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        101
      </text>
      <circle
        id="mapnode-102"
        cx="619.50409"
        cy="395.871"
        r="12"
        fill={fillColor[102]}
        stroke={strokeColor[102]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[102] && (
          <animate
            attributeName="fill"
            values={`${fillColor[102]};${highlightColor};${fillColor[102]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="610.50409"
        y="398.871"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        102
      </text>
      <circle
        id="mapnode-103"
        cx="675.08331"
        cy="383.37003"
        r="12"
        fill={fillColor[103]}
        stroke={strokeColor[103]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[103] && (
          <animate
            attributeName="fill"
            values={`${fillColor[103]};${highlightColor};${fillColor[103]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="666.08331"
        y="386.37003"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        103
      </text>
      <circle
        id="mapnode-104"
        cx="732.0874"
        cy="418.34909"
        r="12"
        fill={fillColor[104]}
        stroke={strokeColor[104]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[104] && (
          <animate
            attributeName="fill"
            values={`${fillColor[104]};${highlightColor};${fillColor[104]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="723.0874"
        y="421.34909"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        104
      </text>
      <circle
        id="mapnode-105"
        cx="887.28424"
        cy="435.17877"
        r="12"
        fill={fillColor[105]}
        stroke={strokeColor[105]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[105] && (
          <animate
            attributeName="fill"
            values={`${fillColor[105]};${highlightColor};${fillColor[105]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="878.28424"
        y="438.17877"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        105
      </text>
      <circle
        id="mapnode-106"
        cx="943.91125"
        cy="446.78683"
        r="12"
        fill={fillColor[106]}
        stroke={strokeColor[106]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[106] && (
          <animate
            attributeName="fill"
            values={`${fillColor[106]};${highlightColor};${fillColor[106]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="934.91125"
        y="449.78683"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        106
      </text>
      <circle
        id="mapnode-107"
        cx="987.10205"
        cy="446.44778"
        r="12"
        fill={fillColor[107]}
        stroke={strokeColor[107]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[107] && (
          <animate
            attributeName="fill"
            values={`${fillColor[107]};${highlightColor};${fillColor[107]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="978.10205"
        y="449.44778"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        107
      </text>
      <circle
        id="mapnode-108"
        cx="877.52924"
        cy="524.39978"
        r="12"
        fill={fillColor[108]}
        stroke={strokeColor[108]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[108] && (
          <animate
            attributeName="fill"
            values={`${fillColor[108]};${highlightColor};${fillColor[108]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="868.52924"
        y="527.39978"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        108
      </text>
      <circle
        id="mapnode-109"
        cx="328.33691"
        cy="542.69537"
        r="12"
        fill={fillColor[109]}
        stroke={strokeColor[109]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[109] && (
          <animate
            attributeName="fill"
            values={`${fillColor[109]};${highlightColor};${fillColor[109]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="319.33691"
        y="545.69537"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        109
      </text>
      <circle
        id="mapnode-110"
        cx="378.57172"
        cy="482.39136"
        r="12"
        fill={fillColor[110]}
        stroke={strokeColor[110]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[110] && (
          <animate
            attributeName="fill"
            values={`${fillColor[110]};${highlightColor};${fillColor[110]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="369.57172"
        y="485.39136"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        110
      </text>
      <circle
        id="mapnode-111"
        cx="405.28644"
        cy="524.77686"
        r="12"
        fill={fillColor[111]}
        stroke={strokeColor[111]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[111] && (
          <animate
            attributeName="fill"
            values={`${fillColor[111]};${highlightColor};${fillColor[111]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="396.28644"
        y="527.77686"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        111
      </text>
      <circle
        id="mapnode-112"
        cx="424.6561"
        cy="508.62238"
        r="12"
        fill={fillColor[112]}
        stroke={strokeColor[112]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[112] && (
          <animate
            attributeName="fill"
            values={`${fillColor[112]};${highlightColor};${fillColor[112]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="415.6561"
        y="511.62238"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        112
      </text>
      <circle
        id="mapnode-113"
        cx="493.03732"
        cy="512.60327"
        r="12"
        fill={fillColor[113]}
        stroke={strokeColor[113]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[113] && (
          <animate
            attributeName="fill"
            values={`${fillColor[113]};${highlightColor};${fillColor[113]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="484.03732"
        y="515.60327"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        113
      </text>
      <circle
        id="mapnode-114"
        cx="541.31824"
        cy="489.30679"
        r="12"
        fill={fillColor[114]}
        stroke={strokeColor[114]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[114] && (
          <animate
            attributeName="fill"
            values={`${fillColor[114]};${highlightColor};${fillColor[114]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="532.31824"
        y="492.30679"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        114
      </text>
      <circle
        id="mapnode-115"
        cx="618.19904"
        cy="457.48734"
        r="12"
        fill={fillColor[115]}
        stroke={strokeColor[115]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[115] && (
          <animate
            attributeName="fill"
            values={`${fillColor[115]};${highlightColor};${fillColor[115]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="609.19904"
        y="460.48734"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        115
      </text>
      <circle
        id="mapnode-116"
        cx="735.98645"
        cy="511.41077"
        r="12"
        fill={fillColor[116]}
        stroke={strokeColor[116]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[116] && (
          <animate
            attributeName="fill"
            values={`${fillColor[116]};${highlightColor};${fillColor[116]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="726.98645"
        y="514.41077"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        116
      </text>
      <circle
        id="mapnode-117"
        cx="816.93591"
        cy="551.87891"
        r="12"
        fill={fillColor[117]}
        stroke={strokeColor[117]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[117] && (
          <animate
            attributeName="fill"
            values={`${fillColor[117]};${highlightColor};${fillColor[117]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="807.93591"
        y="554.87891"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        117
      </text>
      <circle
        id="mapnode-118"
        cx="737.55017"
        cy="575.46326"
        r="12"
        fill={fillColor[118]}
        stroke={strokeColor[118]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[118] && (
          <animate
            attributeName="fill"
            values={`${fillColor[118]};${highlightColor};${fillColor[118]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="728.55017"
        y="578.46326"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        118
      </text>
      <circle
        id="mapnode-119"
        cx="985.07355"
        cy="592.52826"
        r="12"
        fill={fillColor[119]}
        stroke={strokeColor[119]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[119] && (
          <animate
            attributeName="fill"
            values={`${fillColor[119]};${highlightColor};${fillColor[119]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="976.07355"
        y="595.52826"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        119
      </text>
      <circle
        id="mapnode-120"
        cx="37.149261"
        cy="638.71637"
        r="12"
        fill={fillColor[120]}
        stroke={strokeColor[120]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[120] && (
          <animate
            attributeName="fill"
            values={`${fillColor[120]};${highlightColor};${fillColor[120]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="28.149261000000003"
        y="641.71637"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        120
      </text>
      <circle
        id="mapnode-121"
        cx="72.201385"
        cy="641.7854"
        r="12"
        fill={fillColor[121]}
        stroke={strokeColor[121]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[121] && (
          <animate
            attributeName="fill"
            values={`${fillColor[121]};${highlightColor};${fillColor[121]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="63.201385"
        y="644.7854"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        121
      </text>
      <circle
        id="mapnode-122"
        cx="121.31674"
        cy="638.91956"
        r="12"
        fill={fillColor[122]}
        stroke={strokeColor[122]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[122] && (
          <animate
            attributeName="fill"
            values={`${fillColor[122]};${highlightColor};${fillColor[122]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="112.31674"
        y="641.91956"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        122
      </text>
      <circle
        id="mapnode-123"
        cx="244.60786"
        cy="631.60223"
        r="12"
        fill={fillColor[123]}
        stroke={strokeColor[123]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[123] && (
          <animate
            attributeName="fill"
            values={`${fillColor[123]};${highlightColor};${fillColor[123]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="235.60786"
        y="634.60223"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        123
      </text>
      <circle
        id="mapnode-124"
        cx="314.38766"
        cy="609.36237"
        r="12"
        fill={fillColor[124]}
        stroke={strokeColor[124]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[124] && (
          <animate
            attributeName="fill"
            values={`${fillColor[124]};${highlightColor};${fillColor[124]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="305.38766"
        y="612.36237"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        124
      </text>
      <circle
        id="mapnode-125"
        cx="446.45462"
        cy="551.26221"
        r="12"
        fill={fillColor[125]}
        stroke={strokeColor[125]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[125] && (
          <animate
            attributeName="fill"
            values={`${fillColor[125]};${highlightColor};${fillColor[125]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="437.45462"
        y="554.26221"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        125
      </text>
      <circle
        id="mapnode-126"
        cx="574.40765"
        cy="522.68268"
        r="12"
        fill={fillColor[126]}
        stroke={strokeColor[126]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[126] && (
          <animate
            attributeName="fill"
            values={`${fillColor[126]};${highlightColor};${fillColor[126]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="565.40765"
        y="525.68268"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        126
      </text>
      <circle
        id="mapnode-127"
        cx="667.72656"
        cy="550.26697"
        r="12"
        fill={fillColor[127]}
        stroke={strokeColor[127]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[127] && (
          <animate
            attributeName="fill"
            values={`${fillColor[127]};${highlightColor};${fillColor[127]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="658.72656"
        y="553.26697"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        127
      </text>
      <circle
        id="mapnode-128"
        cx="788.69983"
        cy="735.85101"
        r="12"
        fill={fillColor[128]}
        stroke={strokeColor[128]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[128] && (
          <animate
            attributeName="fill"
            values={`${fillColor[128]};${highlightColor};${fillColor[128]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="779.69983"
        y="738.85101"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        128
      </text>
      <circle
        id="mapnode-129"
        cx="811.63531"
        cy="585.98547"
        r="12"
        fill={fillColor[129]}
        stroke={strokeColor[129]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[129] && (
          <animate
            attributeName="fill"
            values={`${fillColor[129]};${highlightColor};${fillColor[129]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="802.63531"
        y="588.98547"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        129
      </text>
      <circle
        id="mapnode-130"
        cx="423.67401"
        cy="616.98218"
        r="12"
        fill={fillColor[130]}
        stroke={strokeColor[130]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[130] && (
          <animate
            attributeName="fill"
            values={`${fillColor[130]};${highlightColor};${fillColor[130]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="414.67401"
        y="619.98218"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        130
      </text>
      <circle
        id="mapnode-131"
        cx="463.5108"
        cy="580.00537"
        r="12"
        fill={fillColor[131]}
        stroke={strokeColor[131]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[131] && (
          <animate
            attributeName="fill"
            values={`${fillColor[131]};${highlightColor};${fillColor[131]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="454.5108"
        y="583.00537"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        131
      </text>
      <circle
        id="mapnode-132"
        cx="542.43475"
        cy="577.53119"
        r="12"
        fill={fillColor[132]}
        stroke={strokeColor[132]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[132] && (
          <animate
            attributeName="fill"
            values={`${fillColor[132]};${highlightColor};${fillColor[132]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="533.43475"
        y="580.53119"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        132
      </text>
      <circle
        id="mapnode-133"
        cx="630.56555"
        cy="633.24048"
        r="12"
        fill={fillColor[133]}
        stroke={strokeColor[133]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[133] && (
          <animate
            attributeName="fill"
            values={`${fillColor[133]};${highlightColor};${fillColor[133]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="621.56555"
        y="636.24048"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        133
      </text>
      <circle
        id="mapnode-134"
        cx="695.6908"
        cy="604.98688"
        r="12"
        fill={fillColor[134]}
        stroke={strokeColor[134]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[134] && (
          <animate
            attributeName="fill"
            values={`${fillColor[134]};${highlightColor};${fillColor[134]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="686.6908"
        y="607.98688"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        134
      </text>
      <circle
        id="mapnode-135"
        cx="842.16437"
        cy="623.88446"
        r="12"
        fill={fillColor[135]}
        stroke={strokeColor[135]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[135] && (
          <animate
            attributeName="fill"
            values={`${fillColor[135]};${highlightColor};${fillColor[135]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="833.16437"
        y="626.88446"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        135
      </text>
      <circle
        id="mapnode-136"
        cx="964.74084"
        cy="685.43793"
        r="12"
        fill={fillColor[136]}
        stroke={strokeColor[136]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[136] && (
          <animate
            attributeName="fill"
            values={`${fillColor[136]};${highlightColor};${fillColor[136]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="955.74084"
        y="688.43793"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        136
      </text>
      <circle
        id="mapnode-137"
        cx="197.74309"
        cy="687.92969"
        r="12"
        fill={fillColor[137]}
        stroke={strokeColor[137]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[137] && (
          <animate
            attributeName="fill"
            values={`${fillColor[137]};${highlightColor};${fillColor[137]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="188.74309"
        y="690.92969"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        137
      </text>
      <circle
        id="mapnode-138"
        cx="336.6597"
        cy="650.0979"
        r="12"
        fill={fillColor[138]}
        stroke={strokeColor[138]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[138] && (
          <animate
            attributeName="fill"
            values={`${fillColor[138]};${highlightColor};${fillColor[138]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="327.6597"
        y="653.0979"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        138
      </text>
      <circle
        id="mapnode-139"
        cx="417.88681"
        cy="656.82776"
        r="12"
        fill={fillColor[139]}
        stroke={strokeColor[139]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[139] && (
          <animate
            attributeName="fill"
            values={`${fillColor[139]};${highlightColor};${fillColor[139]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="408.88681"
        y="659.82776"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        139
      </text>
      <circle
        id="mapnode-140"
        cx="540.71906"
        cy="642.82593"
        r="12"
        fill={fillColor[140]}
        stroke={strokeColor[140]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[140] && (
          <animate
            attributeName="fill"
            values={`${fillColor[140]};${highlightColor};${fillColor[140]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="531.71906"
        y="645.82593"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        140
      </text>
      <circle
        id="mapnode-141"
        cx="655.06775"
        cy="656.14966"
        r="12"
        fill={fillColor[141]}
        stroke={strokeColor[141]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[141] && (
          <animate
            attributeName="fill"
            values={`${fillColor[141]};${highlightColor};${fillColor[141]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="646.06775"
        y="659.14966"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        141
      </text>
      <circle
        id="mapnode-142"
        cx="739.24103"
        cy="675.49884"
        r="12"
        fill={fillColor[142]}
        stroke={strokeColor[142]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[142] && (
          <animate
            attributeName="fill"
            values={`${fillColor[142]};${highlightColor};${fillColor[142]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="730.24103"
        y="678.49884"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        142
      </text>
      <circle
        id="mapnode-143"
        cx="814.79492"
        cy="661.05566"
        r="12"
        fill={fillColor[143]}
        stroke={strokeColor[143]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[143] && (
          <animate
            attributeName="fill"
            values={`${fillColor[143]};${highlightColor};${fillColor[143]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="805.79492"
        y="664.05566"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        143
      </text>
      <circle
        id="mapnode-144"
        cx="39.619053"
        cy="758.44165"
        r="12"
        fill={fillColor[144]}
        stroke={strokeColor[144]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[144] && (
          <animate
            attributeName="fill"
            values={`${fillColor[144]};${highlightColor};${fillColor[144]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="30.619053"
        y="761.44165"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        144
      </text>
      <circle
        id="mapnode-145"
        cx="76.220284"
        cy="754.14948"
        r="12"
        fill={fillColor[145]}
        stroke={strokeColor[145]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[145] && (
          <animate
            attributeName="fill"
            values={`${fillColor[145]};${highlightColor};${fillColor[145]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="67.220284"
        y="757.14948"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        145
      </text>
      <circle
        id="mapnode-146"
        cx="124.55231"
        cy="748.44995"
        r="12"
        fill={fillColor[146]}
        stroke={strokeColor[146]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[146] && (
          <animate
            attributeName="fill"
            values={`${fillColor[146]};${highlightColor};${fillColor[146]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="115.55231"
        y="751.44995"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        146
      </text>
      <circle
        id="mapnode-147"
        cx="161.73372"
        cy="736.7323"
        r="12"
        fill={fillColor[147]}
        stroke={strokeColor[147]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[147] && (
          <animate
            attributeName="fill"
            values={`${fillColor[147]};${highlightColor};${fillColor[147]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="152.73372"
        y="739.7323"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        147
      </text>
      <circle
        id="mapnode-148"
        cx="212.61447"
        cy="725.10229"
        r="12"
        fill={fillColor[148]}
        stroke={strokeColor[148]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[148] && (
          <animate
            attributeName="fill"
            values={`${fillColor[148]};${highlightColor};${fillColor[148]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="203.61447"
        y="728.10229"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        148
      </text>
      <circle
        id="mapnode-149"
        cx="254.65511"
        cy="717.22382"
        r="12"
        fill={fillColor[149]}
        stroke={strokeColor[149]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[149] && (
          <animate
            attributeName="fill"
            values={`${fillColor[149]};${highlightColor};${fillColor[149]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="245.65511"
        y="720.22382"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        149
      </text>
      <circle
        id="mapnode-150"
        cx="304.5611"
        cy="691.8302"
        r="12"
        fill={fillColor[150]}
        stroke={strokeColor[150]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[150] && (
          <animate
            attributeName="fill"
            values={`${fillColor[150]};${highlightColor};${fillColor[150]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="295.5611"
        y="694.8302"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        150
      </text>
      <circle
        id="mapnode-151"
        cx="326.36984"
        cy="725.93677"
        r="12"
        fill={fillColor[151]}
        stroke={strokeColor[151]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[151] && (
          <animate
            attributeName="fill"
            values={`${fillColor[151]};${highlightColor};${fillColor[151]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="317.36984"
        y="728.93677"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        151
      </text>
      <circle
        id="mapnode-152"
        cx="360.59189"
        cy="692.97302"
        r="12"
        fill={fillColor[152]}
        stroke={strokeColor[152]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[152] && (
          <animate
            attributeName="fill"
            values={`${fillColor[152]};${highlightColor};${fillColor[152]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="351.59189"
        y="695.97302"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        152
      </text>
      <circle
        id="mapnode-153"
        cx="380.49347"
        cy="731.70355"
        r="12"
        fill={fillColor[153]}
        stroke={strokeColor[153]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[153] && (
          <animate
            attributeName="fill"
            values={`${fillColor[153]};${highlightColor};${fillColor[153]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="371.49347"
        y="734.70355"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        153
      </text>
      <circle
        id="mapnode-154"
        cx="466.74203"
        cy="705.06042"
        r="12"
        fill={fillColor[154]}
        stroke={strokeColor[154]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[154] && (
          <animate
            attributeName="fill"
            values={`${fillColor[154]};${highlightColor};${fillColor[154]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="457.74203"
        y="708.06042"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        154
      </text>
      <circle
        id="mapnode-155"
        cx="495.43552"
        cy="755.71906"
        r="12"
        fill={fillColor[155]}
        stroke={strokeColor[155]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[155] && (
          <animate
            attributeName="fill"
            values={`${fillColor[155]};${highlightColor};${fillColor[155]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="486.43552"
        y="758.71906"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        155
      </text>
      <circle
        id="mapnode-156"
        cx="553.00958"
        cy="756.79169"
        r="12"
        fill={fillColor[156]}
        stroke={strokeColor[156]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[156] && (
          <animate
            attributeName="fill"
            values={`${fillColor[156]};${highlightColor};${fillColor[156]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="544.00958"
        y="759.79169"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        156
      </text>
      <circle
        id="mapnode-157"
        cx="604.82416"
        cy="760.83838"
        r="12"
        fill={fillColor[157]}
        stroke={strokeColor[157]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[157] && (
          <animate
            attributeName="fill"
            values={`${fillColor[157]};${highlightColor};${fillColor[157]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="595.82416"
        y="763.83838"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        157
      </text>
      <circle
        id="mapnode-158"
        cx="682.91797"
        cy="716.91833"
        r="12"
        fill={fillColor[158]}
        stroke={strokeColor[158]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[158] && (
          <animate
            attributeName="fill"
            values={`${fillColor[158]};${highlightColor};${fillColor[158]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="673.91797"
        y="719.91833"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        158
      </text>
      <circle
        id="mapnode-159"
        cx="687.46155"
        cy="869.10461"
        r="12"
        fill={fillColor[159]}
        stroke={strokeColor[159]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[159] && (
          <animate
            attributeName="fill"
            values={`${fillColor[159]};${highlightColor};${fillColor[159]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="678.46155"
        y="872.10461"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        159
      </text>
      <circle
        id="mapnode-160"
        cx="850.59967"
        cy="755.49396"
        r="12"
        fill={fillColor[160]}
        stroke={strokeColor[160]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[160] && (
          <animate
            attributeName="fill"
            values={`${fillColor[160]};${highlightColor};${fillColor[160]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="841.59967"
        y="758.49396"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        160
      </text>
      <circle
        id="mapnode-161"
        cx="918.35254"
        cy="744.84167"
        r="12"
        fill={fillColor[161]}
        stroke={strokeColor[161]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[161] && (
          <animate
            attributeName="fill"
            values={`${fillColor[161]};${highlightColor};${fillColor[161]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="909.35254"
        y="747.84167"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        161
      </text>
      <circle
        id="mapnode-162"
        cx="1007.2585"
        cy="746.57202"
        r="12"
        fill={fillColor[162]}
        stroke={strokeColor[162]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[162] && (
          <animate
            attributeName="fill"
            values={`${fillColor[162]};${highlightColor};${fillColor[162]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="998.2585"
        y="749.57202"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        162
      </text>
      <circle
        id="mapnode-163"
        cx="116.99824"
        cy="785.94263"
        r="12"
        fill={fillColor[163]}
        stroke={strokeColor[163]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[163] && (
          <animate
            attributeName="fill"
            values={`${fillColor[163]};${highlightColor};${fillColor[163]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="107.99824"
        y="788.94263"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        163
      </text>
      <circle
        id="mapnode-164"
        cx="168.04266"
        cy="783.63507"
        r="12"
        fill={fillColor[164]}
        stroke={strokeColor[164]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[164] && (
          <animate
            attributeName="fill"
            values={`${fillColor[164]};${highlightColor};${fillColor[164]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="159.04266"
        y="786.63507"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        164
      </text>
      <circle
        id="mapnode-165"
        cx="263.70715"
        cy="806.45947"
        r="12"
        fill={fillColor[165]}
        stroke={strokeColor[165]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[165] && (
          <animate
            attributeName="fill"
            values={`${fillColor[165]};${highlightColor};${fillColor[165]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="254.70715"
        y="809.45947"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        165
      </text>
      <circle
        id="mapnode-166"
        cx="365.57532"
        cy="775.31812"
        r="12"
        fill={fillColor[166]}
        stroke={strokeColor[166]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[166] && (
          <animate
            attributeName="fill"
            values={`${fillColor[166]};${highlightColor};${fillColor[166]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="356.57532"
        y="778.31812"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        166
      </text>
      <circle
        id="mapnode-167"
        cx="443.37247"
        cy="796.46484"
        r="12"
        fill={fillColor[167]}
        stroke={strokeColor[167]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[167] && (
          <animate
            attributeName="fill"
            values={`${fillColor[167]};${highlightColor};${fillColor[167]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="434.37247"
        y="799.46484"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        167
      </text>
      <circle
        id="mapnode-168"
        cx="472.81421"
        cy="824.14117"
        r="12"
        fill={fillColor[168]}
        stroke={strokeColor[168]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[168] && (
          <animate
            attributeName="fill"
            values={`${fillColor[168]};${highlightColor};${fillColor[168]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="463.81421"
        y="827.14117"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        168
      </text>
      <circle
        id="mapnode-169"
        cx="549.88507"
        cy="810.38483"
        r="12"
        fill={fillColor[169]}
        stroke={strokeColor[169]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[169] && (
          <animate
            attributeName="fill"
            values={`${fillColor[169]};${highlightColor};${fillColor[169]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="540.88507"
        y="813.38483"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        169
      </text>
      <circle
        id="mapnode-170"
        cx="595.78821"
        cy="819.11096"
        r="12"
        fill={fillColor[170]}
        stroke={strokeColor[170]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[170] && (
          <animate
            attributeName="fill"
            values={`${fillColor[170]};${highlightColor};${fillColor[170]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="586.78821"
        y="822.11096"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        170
      </text>
      <circle
        id="mapnode-171"
        cx="907.69147"
        cy="969.67072"
        r="12"
        fill={fillColor[171]}
        stroke={strokeColor[171]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[171] && (
          <animate
            attributeName="fill"
            values={`${fillColor[171]};${highlightColor};${fillColor[171]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="898.69147"
        y="972.67072"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        171
      </text>
      <circle
        id="mapnode-172"
        cx="764.10999"
        cy="810.76776"
        r="12"
        fill={fillColor[172]}
        stroke={strokeColor[172]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[172] && (
          <animate
            attributeName="fill"
            values={`${fillColor[172]};${highlightColor};${fillColor[172]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="755.10999"
        y="813.76776"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        172
      </text>
      <circle
        id="mapnode-173"
        cx="871.43805"
        cy="855.27234"
        r="12"
        fill={fillColor[173]}
        stroke={strokeColor[173]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[173] && (
          <animate
            attributeName="fill"
            values={`${fillColor[173]};${highlightColor};${fillColor[173]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="862.43805"
        y="858.27234"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        173
      </text>
      <circle
        id="mapnode-174"
        cx="959.10712"
        cy="818.52643"
        r="12"
        fill={fillColor[174]}
        stroke={strokeColor[174]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[174] && (
          <animate
            attributeName="fill"
            values={`${fillColor[174]};${highlightColor};${fillColor[174]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="950.10712"
        y="821.52643"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        174
      </text>
      <circle
        id="mapnode-175"
        cx="1007.7679"
        cy="869.93182"
        r="12"
        fill={fillColor[175]}
        stroke={strokeColor[175]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[175] && (
          <animate
            attributeName="fill"
            values={`${fillColor[175]};${highlightColor};${fillColor[175]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="998.7679"
        y="872.93182"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        175
      </text>
      <circle
        id="mapnode-176"
        cx="16.796076"
        cy="855.58215"
        r="12"
        fill={fillColor[176]}
        stroke={strokeColor[176]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[176] && (
          <animate
            attributeName="fill"
            values={`${fillColor[176]};${highlightColor};${fillColor[176]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="7.796075999999999"
        y="858.58215"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        176
      </text>
      <circle
        id="mapnode-177"
        cx="58.45089"
        cy="842.96716"
        r="12"
        fill={fillColor[177]}
        stroke={strokeColor[177]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[177] && (
          <animate
            attributeName="fill"
            values={`${fillColor[177]};${highlightColor};${fillColor[177]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="49.45089"
        y="845.96716"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        177
      </text>
      <circle
        id="mapnode-178"
        cx="134.41104"
        cy="834.16797"
        r="12"
        fill={fillColor[178]}
        stroke={strokeColor[178]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[178] && (
          <animate
            attributeName="fill"
            values={`${fillColor[178]};${highlightColor};${fillColor[178]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="125.41104000000001"
        y="837.16797"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        178
      </text>
      <circle
        id="mapnode-179"
        cx="224.90062"
        cy="845.04382"
        r="12"
        fill={fillColor[179]}
        stroke={strokeColor[179]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[179] && (
          <animate
            attributeName="fill"
            values={`${fillColor[179]};${highlightColor};${fillColor[179]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="215.90062"
        y="848.04382"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        179
      </text>
      <circle
        id="mapnode-180"
        cx="280.97235"
        cy="861.73907"
        r="12"
        fill={fillColor[180]}
        stroke={strokeColor[180]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[180] && (
          <animate
            attributeName="fill"
            values={`${fillColor[180]};${highlightColor};${fillColor[180]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="271.97235"
        y="864.73907"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        180
      </text>
      <circle
        id="mapnode-181"
        cx="340.18024"
        cy="838.90002"
        r="12"
        fill={fillColor[181]}
        stroke={strokeColor[181]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[181] && (
          <animate
            attributeName="fill"
            values={`${fillColor[181]};${highlightColor};${fillColor[181]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="331.18024"
        y="841.90002"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        181
      </text>
      <circle
        id="mapnode-182"
        cx="367.06012"
        cy="851.3075"
        r="12"
        fill={fillColor[182]}
        stroke={strokeColor[182]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[182] && (
          <animate
            attributeName="fill"
            values={`${fillColor[182]};${highlightColor};${fillColor[182]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="358.06012"
        y="854.3075"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        182
      </text>
      <circle
        id="mapnode-183"
        cx="419.6098"
        cy="818.3642"
        r="12"
        fill={fillColor[183]}
        stroke={strokeColor[183]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[183] && (
          <animate
            attributeName="fill"
            values={`${fillColor[183]};${highlightColor};${fillColor[183]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="410.6098"
        y="821.3642"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        183
      </text>
      <circle
        id="mapnode-184"
        cx="521.92517"
        cy="872.38556"
        r="12"
        fill={fillColor[184]}
        stroke={strokeColor[184]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[184] && (
          <animate
            attributeName="fill"
            values={`${fillColor[184]};${highlightColor};${fillColor[184]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="512.92517"
        y="875.38556"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        184
      </text>
      <circle
        id="mapnode-185"
        cx="578.03784"
        cy="929.28149"
        r="12"
        fill={fillColor[185]}
        stroke={strokeColor[185]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[185] && (
          <animate
            attributeName="fill"
            values={`${fillColor[185]};${highlightColor};${fillColor[185]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="569.03784"
        y="932.28149"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        185
      </text>
      <circle
        id="mapnode-186"
        cx="644.1568"
        cy="909.62103"
        r="12"
        fill={fillColor[186]}
        stroke={strokeColor[186]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[186] && (
          <animate
            attributeName="fill"
            values={`${fillColor[186]};${highlightColor};${fillColor[186]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="635.1568"
        y="912.62103"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        186
      </text>
      <circle
        id="mapnode-187"
        cx="739.19427"
        cy="875.14471"
        r="12"
        fill={fillColor[187]}
        stroke={strokeColor[187]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[187] && (
          <animate
            attributeName="fill"
            values={`${fillColor[187]};${highlightColor};${fillColor[187]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="730.19427"
        y="878.14471"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        187
      </text>
      <circle
        id="mapnode-188"
        cx="834.70679"
        cy="879.44421"
        r="12"
        fill={fillColor[188]}
        stroke={strokeColor[188]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[188] && (
          <animate
            attributeName="fill"
            values={`${fillColor[188]};${highlightColor};${fillColor[188]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="825.70679"
        y="882.44421"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        188
      </text>
      <circle
        id="mapnode-189"
        cx="55.339531"
        cy="939.54938"
        r="12"
        fill={fillColor[189]}
        stroke={strokeColor[189]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[189] && (
          <animate
            attributeName="fill"
            values={`${fillColor[189]};${highlightColor};${fillColor[189]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="46.339531"
        y="942.54938"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        189
      </text>
      <circle
        id="mapnode-190"
        cx="96.589531"
        cy="977.46008"
        r="12"
        fill={fillColor[190]}
        stroke={strokeColor[190]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[190] && (
          <animate
            attributeName="fill"
            values={`${fillColor[190]};${highlightColor};${fillColor[190]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="87.589531"
        y="980.46008"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        190
      </text>
      <circle
        id="mapnode-191"
        cx="161.90471"
        cy="909.13287"
        r="12"
        fill={fillColor[191]}
        stroke={strokeColor[191]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[191] && (
          <animate
            attributeName="fill"
            values={`${fillColor[191]};${highlightColor};${fillColor[191]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="152.90471"
        y="912.13287"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        191
      </text>
      <circle
        id="mapnode-192"
        cx="171.94466"
        cy="998.83618"
        r="12"
        fill={fillColor[192]}
        stroke={strokeColor[192]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[192] && (
          <animate
            attributeName="fill"
            values={`${fillColor[192]};${highlightColor};${fillColor[192]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="162.94466"
        y="1001.83618"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        192
      </text>
      <circle
        id="mapnode-193"
        cx="318.33496"
        cy="913.7627"
        r="12"
        fill={fillColor[193]}
        stroke={strokeColor[193]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[193] && (
          <animate
            attributeName="fill"
            values={`${fillColor[193]};${highlightColor};${fillColor[193]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="309.33496"
        y="916.7627"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        193
      </text>
      <circle
        id="mapnode-194"
        cx="334.20303"
        cy="943.86353"
        r="12"
        fill={fillColor[194]}
        stroke={strokeColor[194]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[194] && (
          <animate
            attributeName="fill"
            values={`${fillColor[194]};${highlightColor};${fillColor[194]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="325.20303"
        y="946.86353"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        194
      </text>
      <circle
        id="mapnode-195"
        cx="378.74857"
        cy="939.42517"
        r="12"
        fill={fillColor[195]}
        stroke={strokeColor[195]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[195] && (
          <animate
            attributeName="fill"
            values={`${fillColor[195]};${highlightColor};${fillColor[195]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="369.74857"
        y="942.42517"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        195
      </text>
      <circle
        id="mapnode-196"
        cx="441.6217"
        cy="891.90863"
        r="12"
        fill={fillColor[196]}
        stroke={strokeColor[196]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[196] && (
          <animate
            attributeName="fill"
            values={`${fillColor[196]};${highlightColor};${fillColor[196]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="432.6217"
        y="894.90863"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        196
      </text>
      <circle
        id="mapnode-197"
        cx="451.03909"
        cy="952.07227"
        r="12"
        fill={fillColor[197]}
        stroke={strokeColor[197]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[197] && (
          <animate
            attributeName="fill"
            values={`${fillColor[197]};${highlightColor};${fillColor[197]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="442.03909"
        y="955.07227"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        197
      </text>
      <circle
        id="mapnode-198"
        cx="688.69348"
        cy="1001.3235"
        r="12"
        fill={fillColor[198]}
        stroke={strokeColor[198]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[198] && (
          <animate
            attributeName="fill"
            values={`${fillColor[198]};${highlightColor};${fillColor[198]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="679.69348"
        y="1004.3235"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        198
      </text>
      <circle
        id="mapnode-199"
        cx="847.70312"
        cy="991.42535"
        r="12"
        fill={fillColor[199]}
        stroke={strokeColor[199]}
        onClick={(event) => {
          const target = event.target as HTMLInputElement;
          onClickNode(parseInt(target.id.substring(8)));
        }}
      >
        {candidateTable[199] && (
          <animate
            attributeName="fill"
            values={`${fillColor[199]};${highlightColor};${fillColor[199]}`}
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="838.70312"
        y="994.42535"
        fontFamily="sans-serif"
        fontSize="12"
        style={{ pointerEvents: "none" }}
      >
        199
      </text>
    </svg>
  );
};
