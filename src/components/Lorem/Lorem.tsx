import React from "react";

const lorumsrc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat dictum dolor, viverra gravida orci imperdiet sit amet. Nam ligula nisl, fermentum eu tincidunt sit amet, fringilla eget sem. Nulla sit amet tortor at ex auctor pretium. Curabitur in mi in nunc dapibus lobortis. Donec eu efficitur felis. Nam quis iaculis erat, vel vehicula neque. Morbi id elit sit amet mi dapibus porta. Donec vel arcu at dui dignissim auctor. In pellentesque nunc at nibh aliquam, quis iaculis ipsum efficitur. Sed in tortor et mauris blandit hendrerit ut at orci. Aliquam sed massa ac enim fermentum commodo at venenatis urna. Morbi mollis aliquet nulla, sit amet condimentum tortor vulputate ac. Phasellus ac accumsan metus.

Quisque sit amet tortor ac nulla pulvinar elementum pulvinar non felis. Praesent aliquet sem vel ante accumsan, et pharetra justo luctus. Vestibulum vel ipsum varius, dapibus nunc et, euismod magna. Aliquam vel ultricies nisl. Suspendisse vestibulum ut ex et vehicula. Vivamus varius ultrices iaculis. Donec viverra nibh interdum, dapibus nibh eu, pulvinar arcu. Ut elementum efficitur efficitur. Aenean a odio eu metus maximus varius. Integer dictum nibh vitae pulvinar dictum. Aenean libero elit, molestie sit amet nunc ac, condimentum aliquam ante. Suspendisse volutpat sem et rutrum commodo. Sed suscipit nec sem nec ultricies.

Vivamus rutrum odio id malesuada gravida. Pellentesque scelerisque quis purus id sagittis. In tellus turpis, placerat id nunc ac, dapibus ornare augue. Nunc in sodales ex. Proin sit amet augue pellentesque, egestas magna et, luctus dui. Proin ac tellus vitae tortor iaculis condimentum malesuada at enim. Phasellus ac malesuada sem. Nam posuere, nunc ut finibus pellentesque, enim nulla semper risus, quis rhoncus nunc tortor eget massa. Curabitur tincidunt posuere odio, in posuere elit. Mauris eleifend molestie lorem ac ornare.

Etiam rutrum mattis mauris vel feugiat. In vitae lacus vitae tortor varius sollicitudin a non ex. Vivamus non massa a tellus dapibus suscipit. Aenean vestibulum orci eu vulputate viverra. Curabitur hendrerit ante laoreet nibh sollicitudin convallis. Quisque tincidunt elit erat, in posuere urna congue imperdiet. Integer eu neque dignissim, luctus lectus ut, convallis nisl. Nulla quis elit lorem. Nunc id nunc accumsan nibh cursus tincidunt. Maecenas enim ipsum, tristique ut auctor non, fringilla non mauris. Aliquam accumsan vitae massa ac gravida. Pellentesque sed quam magna. Aliquam condimentum nisi at nibh scelerisque, nec viverra nibh tempor.

Fusce nisi turpis, aliquet et semper sit amet, dignissim in ipsum. Integer facilisis commodo lacus, volutpat pharetra ante dictum sed. Sed molestie diam sit amet feugiat viverra. Proin scelerisque auctor urna, ac dignissim arcu auctor a. Praesent gravida turpis sed ligula pellentesque aliquet. Nunc erat quam, tempus vitae turpis ac, dapibus consequat felis. Curabitur luctus, augue eu gravida egestas, dolor odio cursus ante, id hendrerit nibh lectus ut lacus. Ut consequat augue nec faucibus ullamcorper. Nullam in mi posuere, molestie erat ullamcorper, accumsan ante. Sed semper enim ut aliquet imperdiet. Fusce ornare luctus placerat.`;

const Lorem = () => {
  return (
    <div>
      {lorumsrc.split("\n").map((line: string, index: number) => (
        <p key={`${line.substring(0, 10)}-${index}`}>{line}</p>
      ))}
    </div>
  );
};

export default Lorem;
