#!/bin/bash
echo "Nhập giá trị của a: "
read a
echo "Nhập giá trị của b: "
read b

if [ $a -ne 0 ]; then
    x=$(echo "scale=2; -$b / $a" | bc)
    echo "Nghiệm của phương trình là x = $x"
else
    echo "Phương trình vô nghiệm."
fi

~                   

