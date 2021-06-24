Count the number of divisors of a positive integer `n`.

Random tests go up to `n = 500000`.

Examples
--------

    divisors(4)  == 3  //  1, 2, 4
    divisors(5)  == 2  //  1, 5
    divisors(12) == 6  //  1, 2, 3, 4, 6, 12
    divisors(30) == 8  //  1, 2, 3, 5, 6, 10, 15, 30
    

    getDivisorsCnt = (4)  -> 3  // 1, 2, 4
    getDivisorsCnt = (5)  -> 2  // 1, 5
    getDivisorsCnt = (12) -> 6  // 1, 2, 3, 4, 6, 12
    getDivisorsCnt = (30) -> 8  // 1, 2, 3, 5, 6, 10, 15, 30
    

    divisors(4)  = 3  # 1, 2, 4
    divisors(5)  = 2  # 1, 5
    divisors(12) = 6  # 1, 2, 3, 4, 6, 12
    divisors(30) = 8  # 1, 2, 3, 5, 6, 10, 15, 30
    

    Kata.Divisors(4)  -> 3 -- 1, 2, 4
    Kata.Divisors(5)  -> 2 -- 1, 5
    Kata.Divisors(12) -> 6 -- 1, 2, 3, 4, 6, 12
    Kata.Divisors(30) -> 8 -- 1, 2, 3, 5, 6, 10, 15, 30
    

    4 divisors  -> 3 ! 1, 2, 4
    5 divisors  -> 2 ! 1, 5
    12 divisors -> 6 ! 1, 2, 3, 4, 6, 12
    30 divisors -> 8 ! 1, 2, 3, 5, 6, 10, 15, 30
    

    divisors 4  = 3 -- 1, 2, 4
    divisors 5  = 2 -- 1, 5
    divisors 12 = 6 -- 1, 2, 3, 4, 6, 12
    divisors 30 = 8 -- 1, 2, 3, 5, 6, 10, 15, 30
    

    numberOfDivisors(4)  == 3 // 1, 2, 4
    numberOfDivisors(5)  == 2 // 1, 5
    numberOfDivisors(12) == 6 // 1, 2, 3, 4, 6, 12
    numberOfDivisors(30) == 8 // 1, 2, 3, 5, 6, 10, 15, 30
    

    divisors(4)  = 3  // 1, 2, 4
    divisors(5)  = 2  // 1, 5
    divisors(12) = 6  // 1, 2, 3, 4, 6, 12
    divisors(30) = 8  // 1, 2, 3, 5, 6, 10, 15, 30
    

    divisors($4)  == 3  // 1, 2, 4
    divisors($5)  == 2  // 1, 5
    divisors($12) == 6  // 1, 2, 3, 4, 6, 12
    divisors($30) == 8  // 1, 2, 3, 5, 6, 10, 15, 30
    

    divisors(4, Result)  % Result is 3 (1, 2, 4)
    divisors(5, Result)  % Result is 2 (1, 5)
    divisors(12, Result) % Result is 6 (1, 2, 3, 4, 6, 12)
    divisors(30, Result) % Result is 8 (1, 2, 3, 5, 6, 10, 15, 30)
    

    divisors(4)  == 3  # 1, 2, 4
    divisors(5)  == 2  # 1, 5
    divisors(12) == 6  # 1, 2, 3, 4, 6, 12
    divisors(30) == 8  # 1, 2, 3, 5, 6, 10, 15, 30
    

    (divisors 4)  = 3  #| 1, 2, 4 |#
    (divisors 5)  = 2  #| 1, 5 |#
    (divisors 12) = 6  #| 1, 2, 3, 4, 6, 12 |#
    (divisors 30) = 8  #| 1, 2, 3, 5, 6, 10, 15, 30 |#
    

    divisors(4)  -> 3 # 1, 2, 4
    divisors(5)  -> 2 # 1, 5
    divisors(12) -> 6 # 1, 2, 3, 4, 6, 12
    divisors(30) -> 8 # 1, 2, 3, 5, 6, 10, 15, 30
    

    divisors(4)  = 3  // 1, 2, 4
    divisors(5)  = 2  // 1, 5
    divisors(12) = 6  // 1, 2, 3, 4, 6, 12
    divisors(30) = 8  // 1, 2, 3, 5, 6, 10, 15, 30
    

    divisors(4)  == 3  //  1, 2, 4
    divisors(5)  == 2  //  1, 5
    divisors(12) == 6  //  1, 2, 3, 4, 6, 12
    divisors(30) == 8  //  1, 2, 3, 5, 6, 10, 15, 30