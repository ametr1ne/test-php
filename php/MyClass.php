<?php 

class MyClass {
    public $s;

    function __construct(string $s)
    {
        $this->s = $s;
    }
 
    function chekingBrackets() {
        $array = str_split($this->s);
        $checker = 0;
        foreach ($array as $key) {
            if ($key == "{") {
                $checker += 1;
            }
            if ($key == "}") {
                $checker -= 1;
            }
        }

        if ($checker == 0) {
            return "correct";
        } else {
            return "incorrect";
        }
    }
}

$text = new MyClass('{{lajkdhf{adfa}}}');

echo $text->chekingBrackets();   


