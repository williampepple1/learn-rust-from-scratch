const QUIZ_DATA = {
 "parts": [
  {
   "index": 1,
   "title": "Basics & Syntax",
   "range": "Q1–Q100",
   "count": 100
  },
  {
   "index": 2,
   "title": "Ownership, Borrowing & Lifetimes",
   "range": "Q101–Q200",
   "count": 100
  },
  {
   "index": 3,
   "title": "Traits, Generics & Error Handling",
   "range": "Q201–Q300",
   "count": 100
  },
  {
   "index": 4,
   "title": "Concurrency, Async & Advanced",
   "range": "Q301–Q400",
   "count": 100
  },
  {
   "index": 5,
   "title": "Ecosystem, Web, Systems & Mixed",
   "range": "Q401–Q500",
   "count": 100
  }
 ],
 "questions": [
  {
   "id": 1,
   "question": "What is Rust primarily designed for?",
   "options": {
    "A": "Web development only",
    "B": "Systems programming with safety and performance",
    "C": "Mobile app development",
    "D": "Data science"
   },
   "correct": "B",
   "explanation": "Systems programming with safety and performance. Rust focuses on memory safety, zero-cost abstractions, and concurrency.",
   "part": 1
  },
  {
   "id": 2,
   "question": "Who originally created Rust?",
   "options": {
    "A": "Microsoft",
    "B": "Mozilla Research (Graydon Hoare)",
    "C": "Google",
    "D": "The Linux Foundation"
   },
   "correct": "B",
   "explanation": "Mozilla Research (Graydon Hoare). Rust was started by Graydon Hoare at Mozilla around 2006.",
   "part": 1
  },
  {
   "id": 3,
   "question": "What year did Rust reach version 1.0?",
   "options": {
    "A": "2012",
    "B": "2013",
    "C": "2014",
    "D": "2015"
   },
   "correct": "D",
   "explanation": "2015. Rust 1.0 was released on May 15, 2015.",
   "part": 1
  },
  {
   "id": 4,
   "question": "Which of these is NOT one of Rust's core design goals?",
   "options": {
    "A": "Memory safety without garbage collection",
    "B": "Zero-cost abstractions",
    "C": "Automatic memory management via GC",
    "D": "Fearless concurrency"
   },
   "correct": "C",
   "explanation": "Automatic memory management via GC. Rust uses ownership and borrowing instead of garbage collection.",
   "part": 1
  },
  {
   "id": 5,
   "question": "What does `rustc` do?",
   "options": {
    "A": "Manages Rust versions and toolchains",
    "B": "Compiles Rust source code to machine code",
    "C": "Runs Rust tests only",
    "D": "Formats Rust code"
   },
   "correct": "B",
   "explanation": "Compiles Rust source code to machine code. `rustc` is the Rust compiler.",
   "part": 1
  },
  {
   "id": 6,
   "question": "What is Cargo?",
   "options": {
    "A": "Rust's compiler",
    "B": "Rust's package manager and build system",
    "C": "A Rust IDE",
    "D": "Rust's standard library"
   },
   "correct": "B",
   "explanation": "Rust's package manager and build system. Cargo handles building, testing, and dependency management.",
   "part": 1
  },
  {
   "id": 7,
   "question": "What command creates a new Rust project?",
   "options": {
    "A": "`rust new my_project`",
    "B": "`cargo new my_project`",
    "C": "`rustup new my_project`",
    "D": "`cargo init my_project`"
   },
   "correct": "B",
   "explanation": "`cargo new my_project`. This creates a new binary project with the standard structure.",
   "part": 1
  },
  {
   "id": 8,
   "question": "What does `rustup` manage?",
   "options": {
    "A": "Dependencies in Cargo.toml",
    "B": "Rust toolchain versions and installations",
    "C": "Code formatting",
    "D": "Documentation generation"
   },
   "correct": "B",
   "explanation": "Rust toolchain versions and installations. `rustup` manages multiple Rust versions and targets.",
   "part": 1
  },
  {
   "id": 9,
   "question": "What is the default entry point of a Rust program?",
   "options": {
    "A": "`main()`",
    "B": "`start()`",
    "C": "`rust_main()`",
    "D": "`entry()`"
   },
   "correct": "A",
   "explanation": "`main()`. Every executable Rust program starts with the `main` function.",
   "part": 1
  },
  {
   "id": 10,
   "question": "Which file defines project metadata and dependencies?",
   "options": {
    "A": "`Cargo.lock`",
    "B": "`cargo.toml`",
    "C": "`Cargo.toml`",
    "D": "`rust.toml`"
   },
   "correct": "C",
   "explanation": "`Cargo.toml`. Project metadata and dependencies are defined in `Cargo.toml` (capital C).",
   "part": 1
  },
  {
   "id": 11,
   "question": "By default, Rust variables are:",
   "options": {
    "A": "Mutable",
    "B": "Immutable",
    "C": "Constant",
    "D": "Static"
   },
   "correct": "B",
   "explanation": "Immutable. Variables are immutable by default; use `mut` to make them mutable.",
   "part": 1
  },
  {
   "id": 12,
   "question": "What keyword makes a variable mutable?",
   "options": {
    "A": "`var`",
    "B": "`mut`",
    "C": "`mutable`",
    "D": "`let mut`"
   },
   "correct": "B",
   "explanation": "`mut`. The full declaration is `let mut x = 5;`.",
   "part": 1
  },
  {
   "id": 13,
   "question": "What is the output of this code?\n```rust\nlet x = 5;\nx = 6;\nprintln!(\"{}\", x);\n```",
   "options": {
    "A": "5",
    "B": "6",
    "C": "Compilation error",
    "D": "Runtime error"
   },
   "correct": "C",
   "explanation": "Compilation error. `x` is immutable, so reassigning causes a compile error.",
   "part": 1
  },
  {
   "id": 14,
   "question": "How do you declare a compile-time constant?",
   "options": {
    "A": "`let const MAX = 100;`",
    "B": "`const MAX: i32 = 100;`",
    "C": "`constant MAX = 100;`",
    "D": "`static MAX = 100;`"
   },
   "correct": "B",
   "explanation": "`const MAX: i32 = 100;`. Constants require a type annotation and a compile-time evaluable expression.",
   "part": 1
  },
  {
   "id": 15,
   "question": "What is variable shadowing?",
   "options": {
    "A": "Declaring a variable with the same name in a different scope, hiding the previous one",
    "B": "Making a variable mutable",
    "C": "Copying a variable's value",
    "D": "Declaring a constant with the same name as a variable"
   },
   "correct": "A",
   "explanation": "Declaring a variable with the same name in a different scope, hiding the previous one. Shadowing creates a new variable.",
   "part": 1
  },
  {
   "id": 16,
   "question": "What does this code output?\n```rust\nlet x = 5;\nlet x = x + 1;\nlet x = x * 2;\nprintln!(\"{}\", x);\n```",
   "options": {
    "A": "5",
    "B": "6",
    "C": "12",
    "D": "Compilation error"
   },
   "correct": "C",
   "explanation": "12. Each `let x` shadows the previous: 5→6→12.",
   "part": 1
  },
  {
   "id": 17,
   "question": "Which naming convention does Rust use for variables?",
   "options": {
    "A": "camelCase",
    "B": "snake_case",
    "C": "PascalCase",
    "D": "kebab-case"
   },
   "correct": "B",
   "explanation": "snake_case. Rust uses snake_case for variables, functions, and modules.",
   "part": 1
  },
  {
   "id": 18,
   "question": "What is the difference between `const` and `let`?",
   "options": {
    "A": "`const` is mutable, `let` is immutable",
    "B": "`const` must have a type annotation and must be a compile-time constant expression",
    "C": "`let` can only be used in functions",
    "D": "There is no difference"
   },
   "correct": "B",
   "explanation": "`const` must have a type annotation and must be a compile-time constant expression. `let` can hold runtime values.",
   "part": 1
  },
  {
   "id": 19,
   "question": "Can you shadow a variable with a different type?",
   "options": {
    "A": "No, shadowing requires the same type",
    "B": "Yes, shadowing allows reusing the name with a different type",
    "C": "Only with `mut`",
    "D": "Only for numeric types"
   },
   "correct": "B",
   "explanation": "Yes, shadowing allows reusing the name with a different type. e.g., `let x = 5; let x = \"hello\";`",
   "part": 1
  },
  {
   "id": 20,
   "question": "What does `static` declare?",
   "options": {
    "A": "A compile-time constant",
    "B": "A variable with global lifetime that exists for the entire program",
    "C": "An immutable variable",
    "D": "A thread-local variable"
   },
   "correct": "B",
   "explanation": "A variable with global lifetime that exists for the entire program. `static` items have a fixed memory address.",
   "part": 1
  },
  {
   "id": 21,
   "question": "What is the default integer type when you write `let x = 42;`?",
   "options": {
    "A": "`i8`",
    "B": "`i32`",
    "C": "`i64`",
    "D": "`u32`"
   },
   "correct": "B",
   "explanation": "`i32`. The default integer type for numeric literals is `i32`.",
   "part": 1
  },
  {
   "id": 22,
   "question": "What is the range of `i8`?",
   "options": {
    "A": "0 to 255",
    "B": "-128 to 127",
    "C": "-256 to 255",
    "D": "0 to 127"
   },
   "correct": "B",
   "explanation": "128 to 127. `i8` is an 8-bit signed integer.",
   "part": 1
  },
  {
   "id": 23,
   "question": "What is the default floating-point type?",
   "options": {
    "A": "`f32`",
    "B": "`f64`",
    "C": "`float`",
    "D": "`double`"
   },
   "correct": "B",
   "explanation": "`f64`. Rust defaults to 64-bit floats for type inference.",
   "part": 1
  },
  {
   "id": 24,
   "question": "In Rust, what type is `true`?",
   "options": {
    "A": "`bool`",
    "B": "`boolean`",
    "C": "`i1`",
    "D": "`u8`"
   },
   "correct": "A",
   "explanation": "`bool`. Rust has a dedicated boolean type.",
   "part": 1
  },
  {
   "id": 25,
   "question": "How many bytes does a `char` occupy in Rust?",
   "options": {
    "A": "1 byte",
    "B": "2 bytes",
    "C": "4 bytes",
    "D": "Variable (1–4 bytes)"
   },
   "correct": "C",
   "explanation": "4 bytes. A `char` in Rust is a Unicode scalar value (U+0000 to U+D7FF or U+E000 to U+10FFFF).",
   "part": 1
  },
  {
   "id": 26,
   "question": "What does this code output?\n```rust\nlet x: u8 = 256;\nprintln!(\"{}\", x);\n```",
   "options": {
    "A": "256",
    "B": "0",
    "C": "Compilation error (overflow in literal)",
    "D": "Runtime panic"
   },
   "correct": "C",
   "explanation": "Compilation error (overflow in literal). 256 is out of range for `u8` (0–255).",
   "part": 1
  },
  {
   "id": 27,
   "question": "How do you perform explicit type conversion (casting)?",
   "options": {
    "A": "`x as i32`",
    "B": "`(i32) x`",
    "C": "`convert::<i32>(x)`",
    "D": "`i32::from(x)`"
   },
   "correct": "A",
   "explanation": "`x as i32`. The `as` keyword performs primitive type casting.",
   "part": 1
  },
  {
   "id": 28,
   "question": "What is the result of `10 / 3` in Rust when both operands are integers?",
   "options": {
    "A": "3.333...",
    "B": "3",
    "C": "3.0",
    "D": "Compilation error (type mismatch)"
   },
   "correct": "B",
   "explanation": "3. Integer division truncates toward zero; no automatic float conversion.",
   "part": 1
  },
  {
   "id": 29,
   "question": "Which suffix specifies a `u64` literal?",
   "options": {
    "A": "`u`",
    "B": "`u64`",
    "C": "`ul`",
    "D": "`L`"
   },
   "correct": "B",
   "explanation": "`u64`. e.g., `42u64` or `42_u64`.",
   "part": 1
  },
  {
   "id": 30,
   "question": "What does `let x = 3.14;` infer as the type of `x`?",
   "options": {
    "A": "`f32`",
    "B": "`f64`",
    "C": "`float`",
    "D": "Compilation error (ambiguous)"
   },
   "correct": "B",
   "explanation": "`f64`. Floating-point literals without a suffix default to `f64`.",
   "part": 1
  },
  {
   "id": 31,
   "question": "What is `&str` in Rust?",
   "options": {
    "A": "A growable, owned string",
    "B": "A string slice (borrowed view into UTF-8 text)",
    "C": "A mutable string buffer",
    "D": "A C-style null-terminated string"
   },
   "correct": "B",
   "explanation": "A string slice (borrowed view into UTF-8 text). `&str` is an immutable reference to string data.",
   "part": 1
  },
  {
   "id": 32,
   "question": "What is `String` in Rust?",
   "options": {
    "A": "A fixed-size array of characters",
    "B": "An owned, growable UTF-8 string",
    "C": "A string slice",
    "D": "A reference to a string"
   },
   "correct": "B",
   "explanation": "An owned, growable UTF-8 string. `String` allocates on the heap and can grow.",
   "part": 1
  },
  {
   "id": 33,
   "question": "How do you create a `String` from a string literal?",
   "options": {
    "A": "`\"hello\".to_string()`",
    "B": "`String::from(\"hello\")`",
    "C": "Both A and B",
    "D": "`new String(\"hello\")`"
   },
   "correct": "C",
   "explanation": "Both A and B. `\"hello\".to_string()` and `String::from(\"hello\")` are equivalent.",
   "part": 1
  },
  {
   "id": 34,
   "question": "Are Rust strings UTF-8 encoded?",
   "options": {
    "A": "No, they use ASCII",
    "B": "No, they use UTF-16",
    "C": "Yes, both `&str` and `String` are UTF-8",
    "D": "Only `String` is UTF-8"
   },
   "correct": "C",
   "explanation": "Yes, both `&str` and `String` are UTF-8. Rust guarantees valid UTF-8 for all string types.",
   "part": 1
  },
  {
   "id": 35,
   "question": "What does `\"hello\".len()` return?",
   "options": {
    "A": "5 (number of characters)",
    "B": "5 (number of bytes for ASCII)",
    "C": "6 (including null terminator)",
    "D": "Depends on encoding"
   },
   "correct": "B",
   "explanation": "5 (number of bytes for ASCII). `len()` returns byte count; for \"hello\" that equals character count.",
   "part": 1
  },
  {
   "id": 36,
   "question": "What macro is used for formatted output?",
   "options": {
    "A": "`print!`",
    "B": "`println!`",
    "C": "`format!`",
    "D": "All of the above use formatting"
   },
   "correct": "D",
   "explanation": "All of the above use formatting. `print!`, `println!`, and `format!` all use the same format string syntax.",
   "part": 1
  },
  {
   "id": 37,
   "question": "What does `format!(\"{:.2}\", 3.14159)` produce?",
   "options": {
    "A": "`\"3.14\"`",
    "B": "`\"3.14159\"`",
    "C": "`\"3.15\"` (rounded)",
    "D": "Compilation error"
   },
   "correct": "A",
   "explanation": "`\"3.14\"`. `:.2` formats with 2 decimal places.",
   "part": 1
  },
  {
   "id": 38,
   "question": "How do you concatenate two `String` values?",
   "options": {
    "A": "`s1 + s2` (both must be `String`)",
    "B": "`format!(\"{}{}\", s1, s2)`",
    "C": "`s1.push_str(&s2)`",
    "D": "All of the above (with appropriate types)"
   },
   "correct": "D",
   "explanation": "All of the above (with appropriate types). `+` requires `&str` on the right; `push_str` mutates; `format!` creates new.",
   "part": 1
  },
  {
   "id": 39,
   "question": "What does `\"hello\".chars()` return?",
   "options": {
    "A": "A `Vec<char>`",
    "B": "An iterator over Unicode scalar values",
    "C": "A slice of bytes",
    "D": "The string unchanged"
   },
   "correct": "B",
   "explanation": "An iterator over Unicode scalar values. `chars()` yields `char` values, not bytes.",
   "part": 1
  },
  {
   "id": 40,
   "question": "What is the type of `\"hello\"`?",
   "options": {
    "A": "`String`",
    "B": "`&str`",
    "C": "`&[u8]`",
    "D": "`str`"
   },
   "correct": "B",
   "explanation": "`&str`. String literals have type `&'static str`.",
   "part": 1
  },
  {
   "id": 41,
   "question": "What is a tuple in Rust?",
   "options": {
    "A": "A fixed-size collection of heterogeneous elements",
    "B": "A growable list of same-type elements",
    "C": "A key-value mapping",
    "D": "A single value"
   },
   "correct": "A",
   "explanation": "A fixed-size collection of heterogeneous elements. Tuples can hold different types.",
   "part": 1
  },
  {
   "id": 42,
   "question": "How do you access the first element of tuple `t`?",
   "options": {
    "A": "`t[0]`",
    "B": "`t.0`",
    "C": "`t.first`",
    "D": "`t.get(0)`"
   },
   "correct": "B",
   "explanation": "`t.0`. Tuple elements are accessed by index with dot notation (`.0`, `.1`, etc.).",
   "part": 1
  },
  {
   "id": 43,
   "question": "What is the type of `[1, 2, 3]` in Rust?",
   "options": {
    "A": "`Vec<i32>`",
    "B": "`[i32; 3]` (array of 3 i32)",
    "C": "`&[i32]`",
    "D": "`(i32, i32, i32)`"
   },
   "correct": "B",
   "explanation": "`[i32; 3]`. Square brackets with a semicolon denote a fixed-size array.",
   "part": 1
  },
  {
   "id": 44,
   "question": "Arrays in Rust have a fixed size that must be known at:",
   "options": {
    "A": "Runtime",
    "B": "Compile time",
    "C": "Either",
    "D": "Never (arrays are dynamic)"
   },
   "correct": "B",
   "explanation": "Compile time. Array length is part of the type.",
   "part": 1
  },
  {
   "id": 45,
   "question": "What is a slice?",
   "options": {
    "A": "An owned contiguous sequence",
    "B": "A borrowed view into a contiguous sequence (array or Vec)",
    "C": "A copy of an array",
    "D": "A reference to a single element"
   },
   "correct": "B",
   "explanation": "A borrowed view into a contiguous sequence. Slices are `&[T]` or `&mut [T]`.",
   "part": 1
  },
  {
   "id": 46,
   "question": "What is the type of `&arr[1..3]` when `arr` is `[i32; 5]`?",
   "options": {
    "A": "`[i32; 2]`",
    "B": "`&[i32]`",
    "C": "`Vec<i32>`",
    "D": "`(i32, i32)`"
   },
   "correct": "B",
   "explanation": "`&[i32]`. A slice of the array from index 1 to 3 (exclusive).",
   "part": 1
  },
  {
   "id": 47,
   "question": "How do you create an empty `Vec<i32>`?",
   "options": {
    "A": "`Vec::new()`",
    "B": "`vec![]`",
    "C": "Both A and B (with type annotation for A)",
    "D": "`Vec::empty()`"
   },
   "correct": "C",
   "explanation": "Both A and B. `Vec::new()` needs a type (e.g., `Vec::<i32>::new()` or `let v: Vec<i32> = Vec::new()`); `vec![]` may need context.",
   "part": 1
  },
  {
   "id": 48,
   "question": "What does `vec![1, 2, 3]` create?",
   "options": {
    "A": "An array `[1, 2, 3]`",
    "B": "A `Vec<i32>` with elements 1, 2, 3",
    "C": "A slice",
    "D": "A tuple"
   },
   "correct": "B",
   "explanation": "A `Vec<i32>` with elements 1, 2, 3. The `vec!` macro creates a vector.",
   "part": 1
  },
  {
   "id": 49,
   "question": "How do you push an element onto a `Vec`?",
   "options": {
    "A": "`vec.add(4)`",
    "B": "`vec.push(4)`",
    "C": "`vec.append(4)`",
    "D": "`vec.insert(4)`"
   },
   "correct": "B",
   "explanation": "`vec.push(4)`. `push` adds an element to the end.",
   "part": 1
  },
  {
   "id": 50,
   "question": "What does `&v[..]` produce when `v` is a `Vec<i32>`?",
   "options": {
    "A": "The first element",
    "B": "A slice of the entire Vec",
    "C": "A copy of the Vec",
    "D": "Compilation error"
   },
   "correct": "B",
   "explanation": "A slice of the entire Vec. `..` means full range; `&v` also coerces to `&[i32]`.",
   "part": 1
  },
  {
   "id": 51,
   "question": "What is the return type of a function that doesn't specify one?",
   "options": {
    "A": "`void`",
    "B": "`()` (unit type)",
    "C": "`null`",
    "D": "Compilation error"
   },
   "correct": "B",
   "explanation": "`()` (unit type). Functions without an explicit return type return `()`.",
   "part": 1
  },
  {
   "id": 52,
   "question": "In Rust, what is the difference between a statement and an expression?",
   "options": {
    "A": "There is no difference",
    "B": "Statements do not return a value; expressions do",
    "C": "Expressions cannot contain statements",
    "D": "Statements are only in `fn` bodies"
   },
   "correct": "B",
   "explanation": "Statements do not return a value; expressions do. The last expression in a block is its value.",
   "part": 1
  },
  {
   "id": 53,
   "question": "What does this function return?\n```rust\nfn foo() -> i32 {\n    5\n}\n```",
   "options": {
    "A": "Nothing (error: missing return)",
    "B": "5 (the trailing expression)",
    "C": "Compilation error (need `return 5`)",
    "D": "Undefined"
   },
   "correct": "B",
   "explanation": "5 (the trailing expression). In Rust, the last expression (no semicolon) is the return value.",
   "part": 1
  },
  {
   "id": 54,
   "question": "How do you pass a value by reference to a function?",
   "options": {
    "A": "`fn f(x: &i32)`",
    "B": "`fn f(x: ref i32)`",
    "C": "`fn f(x: *i32)`",
    "D": "`fn f(x: ref &i32)`"
   },
   "correct": "A",
   "explanation": "`fn f(x: &i32)`. The `&` denotes a reference (borrow).",
   "part": 1
  },
  {
   "id": 55,
   "question": "What does `fn add(x: i32, y: i32) -> i32 { x + y }` demonstrate?",
   "options": {
    "A": "Multiple return values",
    "B": "Parameters and return value",
    "C": "Closure syntax",
    "D": "Generic function"
   },
   "correct": "B",
   "explanation": "Parameters and return value. The function takes two `i32`s and returns their sum.",
   "part": 1
  },
  {
   "id": 56,
   "question": "What is a closure in Rust?",
   "options": {
    "A": "A function that can only be called once",
    "B": "An anonymous function that can capture its environment",
    "C": "A function with no parameters",
    "D": "A recursive function"
   },
   "correct": "B",
   "explanation": "An anonymous function that can capture its environment. Closures can use variables from the enclosing scope.",
   "part": 1
  },
  {
   "id": 57,
   "question": "Which syntax defines a closure that adds two numbers?",
   "options": {
    "A": "`fn |a, b| a + b`",
    "B": "`|a, b| a + b`",
    "C": "`closure(a, b) { a + b }`",
    "D": "`lambda a, b: a + b`"
   },
   "correct": "B",
   "explanation": "`|a, b| a + b`. Closures use `|params| body` syntax.",
   "part": 1
  },
  {
   "id": 58,
   "question": "Can a closure capture variables from its enclosing scope?",
   "options": {
    "A": "No, never",
    "B": "Yes, by default it borrows immutably",
    "C": "Only with explicit `capture` keyword",
    "D": "Only for `Copy` types"
   },
   "correct": "B",
   "explanation": "Yes, by default it borrows immutably. Closures can also borrow mutably or take ownership with `move`.",
   "part": 1
  },
  {
   "id": 59,
   "question": "What does `return` do in a Rust function?",
   "options": {
    "A": "Exits the function and returns the unit value `()`",
    "B": "Exits the function and returns the specified value",
    "C": "Only exits loops",
    "D": "Is required for all functions"
   },
   "correct": "B",
   "explanation": "Exits the function and returns the specified value. `return x;` is equivalent to `x` as the last expression, but can appear anywhere.",
   "part": 1
  },
  {
   "id": 60,
   "question": "What is the type of `|| 42`?",
   "options": {
    "A": "`fn() -> i32`",
    "B": "A closure type (e.g., `impl Fn() -> i32`)",
    "C": "`i32`",
    "D": "Invalid syntax"
   },
   "correct": "B",
   "explanation": "A closure type. Each closure has a unique, anonymous type implementing `Fn`, `FnMut`, or `FnOnce`.",
   "part": 1
  },
  {
   "id": 61,
   "question": "In Rust, is `if` an expression or a statement?",
   "options": {
    "A": "Statement only",
    "B": "Expression (can produce a value)",
    "C": "Neither",
    "D": "Both, depending on context"
   },
   "correct": "B",
   "explanation": "Expression (can produce a value). `let x = if cond { 1 } else { 2 };` is valid.",
   "part": 1
  },
  {
   "id": 62,
   "question": "What must all arms of an `if` expression return?",
   "options": {
    "A": "The same type",
    "B": "Any type",
    "C": "Only numeric types",
    "D": "The unit type `()`"
   },
   "correct": "A",
   "explanation": "The same type. All branches must evaluate to the same type for the `if` to be used as an expression.",
   "part": 1
  },
  {
   "id": 63,
   "question": "What does `match` require?",
   "options": {
    "A": "At least one arm",
    "B": "Exhaustive pattern matching (all cases covered)",
    "C": "A default arm",
    "D": "Only one arm"
   },
   "correct": "B",
   "explanation": "Exhaustive pattern matching (all cases covered). Every possible value must be handled or `_` used.",
   "part": 1
  },
  {
   "id": 64,
   "question": "What does `loop` do?",
   "options": {
    "A": "Runs exactly once",
    "B": "Runs while a condition is true",
    "C": "Runs indefinitely until `break`",
    "D": "Runs a fixed number of times"
   },
   "correct": "C",
   "explanation": "Runs indefinitely until `break`. `loop` is an infinite loop by default.",
   "part": 1
  },
  {
   "id": 65,
   "question": "What does `break` return from a `loop`?",
   "options": {
    "A": "Nothing",
    "B": "The value passed to `break` (e.g., `break 42`)",
    "C": "Always `()`",
    "D": "The loop's last expression"
   },
   "correct": "B",
   "explanation": "The value passed to `break` (e.g., `break 42`). `loop` can be an expression: `let x = loop { break 42; };`",
   "part": 1
  },
  {
   "id": 66,
   "question": "How do you label a loop for use with `break`/`continue`?",
   "options": {
    "A": "`loop \"outer\" { }`",
    "B": "`'outer: loop { }`",
    "C": "`loop @outer { }`",
    "D": "`#outer loop { }`"
   },
   "correct": "B",
   "explanation": "`'outer: loop { }`. Loop labels use a lifetime-like syntax with a leading quote.",
   "part": 1
  },
  {
   "id": 67,
   "question": "What does `for i in 0..5` iterate over?",
   "options": {
    "A": "0, 1, 2, 3, 4",
    "B": "0, 1, 2, 3, 4, 5",
    "C": "1, 2, 3, 4, 5",
    "D": "An infinite range"
   },
   "correct": "A",
   "explanation": "0, 1, 2, 3, 4. `0..5` is a range exclusive of the end.",
   "part": 1
  },
  {
   "id": 68,
   "question": "What is `0..=5`?",
   "options": {
    "A": "Range 0 to 5 exclusive",
    "B": "Range 0 to 5 inclusive",
    "C": "Invalid syntax",
    "D": "Same as `0..5`"
   },
   "correct": "B",
   "explanation": "Range 0 to 5 inclusive. `..=` includes the end value.",
   "part": 1
  },
  {
   "id": 69,
   "question": "When is a `while` loop's condition evaluated?",
   "options": {
    "A": "Only at the start",
    "B": "Before each iteration",
    "C": "Only at the end",
    "D": "Once, before the first run"
   },
   "correct": "B",
   "explanation": "Before each iteration. The condition is checked at the start of every loop iteration.",
   "part": 1
  },
  {
   "id": 70,
   "question": "What does `continue` do?",
   "options": {
    "A": "Exits the loop entirely",
    "B": "Skips the rest of the current iteration and continues to the next",
    "C": "Returns a value from the loop",
    "D": "Pauses the loop"
   },
   "correct": "B",
   "explanation": "Skips the rest of the current iteration and continues to the next. With a label, it continues the labeled loop.",
   "part": 1
  },
  {
   "id": 71,
   "question": "What are the three kinds of structs in Rust?",
   "options": {
    "A": "Public, private, protected",
    "B": "Struct, class, interface",
    "C": "Named-field, tuple, unit",
    "D": "Mutable, immutable, constant"
   },
   "correct": "C",
   "explanation": "Named-field, tuple, unit. Structs can have named fields, tuple-like fields, or no fields.",
   "part": 1
  },
  {
   "id": 72,
   "question": "What is a unit struct?",
   "options": {
    "A": "A struct with no fields",
    "B": "A struct with one field",
    "C": "A struct that implements `Unit`",
    "D": "A struct with unit type fields only"
   },
   "correct": "A",
   "explanation": "A struct with no fields. e.g., `struct Unit;` — useful for type-level markers.",
   "part": 1
  },
  {
   "id": 73,
   "question": "How do you define a method on a struct?",
   "options": {
    "A": "Inside the struct definition",
    "B": "In an `impl` block",
    "C": "Using the `method` keyword",
    "D": "With `fn struct_name::method`"
   },
   "correct": "B",
   "explanation": "In an `impl` block. `impl StructName { fn method(&self) { } }`",
   "part": 1
  },
  {
   "id": 74,
   "question": "What is `self` in a method?",
   "options": {
    "A": "A keyword for the current module",
    "B": "A reference to the instance the method is called on",
    "C": "The return value",
    "D": "A type parameter"
   },
   "correct": "B",
   "explanation": "A reference to the instance the method is called on. `self` can be `self`, `&self`, or `&mut self`.",
   "part": 1
  },
  {
   "id": 75,
   "question": "What is the difference between `&self` and `self` in a method?",
   "options": {
    "A": "No difference",
    "B": "`&self` borrows the instance; `self` takes ownership",
    "C": "`self` is used for static methods",
    "D": "`&self` is mutable, `self` is immutable"
   },
   "correct": "B",
   "explanation": "`&self` borrows the instance; `self` takes ownership. Use `&self` for read-only, `&mut self` for mutation.",
   "part": 1
  },
  {
   "id": 76,
   "question": "What is an associated function?",
   "options": {
    "A": "A function that takes `&self`",
    "B": "A function in an `impl` block that doesn't take `self` (like a constructor)",
    "C": "A function in another module",
    "D": "A closure associated with a struct"
   },
   "correct": "B",
   "explanation": "A function in an `impl` block that doesn't take `self`. Often used as constructors, e.g., `String::new()`.",
   "part": 1
  },
  {
   "id": 77,
   "question": "How do you call an associated function?",
   "options": {
    "A": "`instance.method()`",
    "B": "`Struct::function()`",
    "C": "`function(Struct)`",
    "D": "`Struct.method()`"
   },
   "correct": "B",
   "explanation": "`Struct::function()`. Associated functions are called with `::`; methods use `.`.",
   "part": 1
  },
  {
   "id": 78,
   "question": "What is a tuple struct?\n\n```rust\nstruct Point(i32, i32);\n```",
   "options": {
    "A": "Invalid syntax",
    "B": "A struct with unnamed fields accessed by index",
    "C": "A type alias for a tuple",
    "D": "A struct with one field"
   },
   "correct": "B",
   "explanation": "A struct with unnamed fields accessed by index. `Point(1, 2)` has fields `.0` and `.1`.",
   "part": 1
  },
  {
   "id": 79,
   "question": "Can you have multiple `impl` blocks for the same struct?",
   "options": {
    "A": "No, only one",
    "B": "Yes, you can split them",
    "C": "Only for generic structs",
    "D": "Only in different modules"
   },
   "correct": "B",
   "explanation": "Yes, you can split them. Multiple `impl` blocks for the same type are allowed.",
   "part": 1
  },
  {
   "id": 80,
   "question": "What does `#[derive(Debug)]` do?",
   "options": {
    "A": "Enables debug mode",
    "B": "Automatically implements the `Debug` trait for formatting",
    "C": "Adds debug logging",
    "D": "Makes the struct public"
   },
   "correct": "B",
   "explanation": "Automatically implements the `Debug` trait for formatting. Enables `{:?}` and `{:#?}` in `println!`.",
   "part": 1
  },
  {
   "id": 81,
   "question": "What is an enum in Rust?",
   "options": {
    "A": "A collection of constants",
    "B": "A type that can be one of several variants, each optionally holding data",
    "C": "A set of flags",
    "D": "A namespace for functions"
   },
   "correct": "B",
   "explanation": "A type that can be one of several variants, each optionally holding data. Enums are algebraic data types.",
   "part": 1
  },
  {
   "id": 82,
   "question": "What is `Option<T>`?",
   "options": {
    "A": "A type that must hold a value",
    "B": "A type representing an optional value: `Some(T)` or `None`",
    "C": "A generic array",
    "D": "A result type"
   },
   "correct": "B",
   "explanation": "A type representing an optional value: `Some(T)` or `None`. Replaces null from other languages.",
   "part": 1
  },
  {
   "id": 83,
   "question": "What is `Result<T, E>`?",
   "options": {
    "A": "A type that can only succeed",
    "B": "A type representing success `Ok(T)` or failure `Err(E)`",
    "C": "A tuple of two values",
    "D": "An optional with error info"
   },
   "correct": "B",
   "explanation": "A type representing success `Ok(T)` or failure `Err(E)`. Used for fallible operations.",
   "part": 1
  },
  {
   "id": 84,
   "question": "How do you unwrap an `Option<T>` to get the inner value (panicking if `None`)?",
   "options": {
    "A": "`.get()`",
    "B": "`.unwrap()`",
    "C": "`.value()`",
    "D": "`.extract()`"
   },
   "correct": "B",
   "explanation": "`.unwrap()`. Returns the value or panics. Prefer `?`, `unwrap_or`, or `match` in production.",
   "part": 1
  },
  {
   "id": 85,
   "question": "What does `Option::unwrap_or(default)` do?",
   "options": {
    "A": "Panics if `None`",
    "B": "Returns the inner value, or `default` if `None`",
    "C": "Converts to `Result`",
    "D": "Returns `None`"
   },
   "correct": "B",
   "explanation": "Returns the inner value, or `default` if `None`. Safe way to provide a fallback.",
   "part": 1
  },
  {
   "id": 86,
   "question": "Can enum variants hold different types of data?",
   "options": {
    "A": "No, all variants must hold the same type",
    "B": "Yes, each variant can have different associated data",
    "C": "Only tuple variants",
    "D": "Only unit variants"
   },
   "correct": "B",
   "explanation": "Yes, each variant can have different associated data. Variants can be unit, tuple, or struct-like.",
   "part": 1
  },
  {
   "id": 87,
   "question": "What is this enum?\n```rust\nenum Message {\n    Quit,\n    Write(String),\n    Move { x: i32, y: i32 },\n}\n```",
   "options": {
    "A": "Invalid (mixed variant styles)",
    "B": "Valid: unit, tuple, and struct variants",
    "C": "Only unit variants allowed",
    "D": "Must use one style only"
   },
   "correct": "B",
   "explanation": "Valid: unit, tuple, and struct variants. Rust allows mixing variant styles in one enum.",
   "part": 1
  },
  {
   "id": 88,
   "question": "How do you construct `Some(5)`?",
   "options": {
    "A": "`Option::Some(5)` or `Some(5)`",
    "B": "`Option(5)`",
    "C": "`Optional::some(5)`",
    "D": "`Some::new(5)`"
   },
   "correct": "A",
   "explanation": "`Option::Some(5)` or `Some(5)`. `Some` is a variant constructor.",
   "part": 1
  },
  {
   "id": 89,
   "question": "What does `?` do when used on a `Result`?",
   "options": {
    "A": "Negates the value",
    "B": "Returns early with `Err` if the `Result` is `Err`, otherwise unwraps `Ok`",
    "C": "Converts to `Option`",
    "D": "Unwraps and panics on `Err`"
   },
   "correct": "B",
   "explanation": "Returns early with `Err` if the `Result` is `Err`, otherwise unwraps `Ok`. Used for error propagation.",
   "part": 1
  },
  {
   "id": 90,
   "question": "Is `Option<T>` in the prelude?",
   "options": {
    "A": "No, you must import it",
    "B": "Yes, `Some` and `None` are in the prelude",
    "C": "Only `Option` is, not `Some`/`None`",
    "D": "Only in `std`"
   },
   "correct": "B",
   "explanation": "Yes, `Some` and `None` are in the prelude. No need to import for basic use.",
   "part": 1
  },
  {
   "id": 91,
   "question": "What does `match` do?",
   "options": {
    "A": "Compares two values for equality",
    "B": "Pattern matches on a value and executes the matching arm",
    "C": "Loops until a condition is met",
    "D": "Declares a variable"
   },
   "correct": "B",
   "explanation": "Pattern matches on a value and executes the matching arm. `match` is exhaustive and must cover all cases.",
   "part": 1
  },
  {
   "id": 92,
   "question": "What is `if let` used for?",
   "options": {
    "A": "Replacing `if` with `let`",
    "B": "Concise pattern matching when you care about one variant only",
    "C": "Declaring a variable conditionally",
    "D": "Looping with a condition"
   },
   "correct": "B",
   "explanation": "Concise pattern matching when you care about one variant. e.g., `if let Some(x) = opt { }` instead of `match opt { Some(x) => {}, _ => {} }`",
   "part": 1
  },
  {
   "id": 93,
   "question": "What does `while let` do?",
   "options": {
    "A": "Loops while a condition is true",
    "B": "Loops while a pattern matches, binding the matched value",
    "C": "Same as `for` loop",
    "D": "Invalid syntax"
   },
   "correct": "B",
   "explanation": "Loops while a pattern matches, binding the matched value. Useful for iterators: `while let Some(item) = iter.next()`",
   "part": 1
  },
  {
   "id": 94,
   "question": "What is destructuring?",
   "options": {
    "A": "Deleting a variable",
    "B": "Extracting values from a compound type (tuple, struct, enum) into variables",
    "C": "Converting types",
    "D": "Breaking a string"
   },
   "correct": "B",
   "explanation": "Extracting values from a compound type into variables. e.g., `let (a, b) = (1, 2);` or `let Point { x, y } = p;`",
   "part": 1
  },
  {
   "id": 95,
   "question": "What is a match guard?",
   "options": {
    "A": "A `match` that must be exhaustive",
    "B": "An extra `if` condition on a match arm",
    "C": "A default arm",
    "D": "A pattern that matches everything"
   },
   "correct": "B",
   "explanation": "An extra `if` condition on a match arm. e.g., `Some(n) if n > 0 =>` — refines the match.",
   "part": 1
  },
  {
   "id": 96,
   "question": "What does `_` mean in a pattern?",
   "options": {
    "A": "A variable named underscore",
    "B": "A wildcard that matches any value and doesn't bind",
    "C": "Ignore the rest of the pattern",
    "D": "Default value"
   },
   "correct": "B",
   "explanation": "A wildcard that matches any value and doesn't bind. Used when you don't need the value.",
   "part": 1
  },
  {
   "id": 97,
   "question": "What does `..` mean in a pattern?",
   "options": {
    "A": "Range",
    "B": "Ignore remaining fields in a struct/tuple",
    "C": "Splat operator",
    "D": "Spread"
   },
   "correct": "B",
   "explanation": "Ignore remaining fields in a struct/tuple. e.g., `Point { x, .. }` ignores `y` and other fields.",
   "part": 1
  },
  {
   "id": 98,
   "question": "Can you use `if let` with `else`?",
   "options": {
    "A": "No",
    "B": "Yes, `if let ... else { }`",
    "C": "Only with `match`",
    "D": "Only for `Option`"
   },
   "correct": "B",
   "explanation": "Yes, `if let ... else { }`. The `else` block runs when the pattern doesn't match.",
   "part": 1
  },
  {
   "id": 99,
   "question": "What does this match?\n```rust\nmatch x {\n    Some(n) if n > 0 => { },\n    _ => { },\n}\n```",
   "options": {
    "A": "Only `Some` with positive value",
    "B": "`Some(n)` where n > 0 (first arm)",
    "C": "Invalid syntax",
    "D": "All `Some` values"
   },
   "correct": "B",
   "explanation": "`Some(n)` where n > 0 (first arm). The `if n > 0` is a match guard; `_` catches everything else.",
   "part": 1
  },
  {
   "id": 100,
   "question": "What is `@` used for in patterns?",
   "options": {
    "A": "Reference to a variable",
    "B": "Binding a value to a variable while also matching a pattern (e.g., `p @ 1..=5`)",
    "C": "Dereference",
    "D": "Address-of"
   },
   "correct": "B",
   "explanation": "Binding a value to a variable while also matching a pattern. e.g., `p @ 1..=5` binds the matched value to `p`.",
   "part": 1
  },
  {
   "id": 101,
   "question": "What happens when a variable goes out of scope in Rust?",
   "options": {
    "A": "Nothing",
    "B": "The garbage collector frees it",
    "C": "`drop` is called automatically",
    "D": "It becomes null"
   },
   "correct": "C",
   "explanation": "`drop` is called automatically. Rust uses RAII — when a value's owner goes out of scope, its `drop` method runs.",
   "part": 2
  },
  {
   "id": 102,
   "question": "What does this code do? `let x = 5; let y = x; println!(\"{}\", x);`",
   "options": {
    "A": "Compiles and prints 5 (x is copied)",
    "B": "Compile error: x was moved",
    "C": "Prints garbage",
    "D": "Runtime panic"
   },
   "correct": "A",
   "explanation": "Compiles and prints 5. `i32` implements `Copy`, so `x` is implicitly copied to `y`; both remain valid.",
   "part": 2
  },
  {
   "id": 103,
   "question": "Which trait allows implicit copying instead of moving?",
   "options": {
    "A": "`Clone`",
    "B": "`Copy`",
    "C": "`Dup`",
    "D": "`Duplicate`"
   },
   "correct": "B",
   "explanation": "`Copy` allows implicit copying. Types implementing `Copy` are copied on assignment instead of moved.",
   "part": 2
  },
  {
   "id": 104,
   "question": "What happens when you assign a `String` to another variable?",
   "options": {
    "A": "The string is copied",
    "B": "The string is moved (ownership transferred)",
    "C": "Both variables share the same reference",
    "D": "A deep copy is made"
   },
   "correct": "B",
   "explanation": "The string is moved. Ownership is transferred; the original binding is no longer valid.",
   "part": 2
  },
  {
   "id": 105,
   "question": "Which types implement `Copy` by default?",
   "options": {
    "A": "`String`, `Vec<T>`",
    "B": "`i32`, `bool`, `char`",
    "C": "All types",
    "D": "Only `&T` references"
   },
   "correct": "B",
   "explanation": "Primitive types like `i32`, `bool`, `char`, `f64`, etc. implement `Copy`. `String` and `Vec<T>` do not.",
   "part": 2
  },
  {
   "id": 106,
   "question": "What does `#[derive(Clone)]` on a struct do?",
   "options": {
    "A": "Makes the struct `Copy`",
    "B": "Generates a `clone()` method that creates a deep copy",
    "C": "Prevents moves",
    "D": "Enables reference counting"
   },
   "correct": "B",
   "explanation": "`#[derive(Clone)]` generates a `clone()` method that creates a deep copy. You must explicitly call `.clone()`.",
   "part": 2
  },
  {
   "id": 107,
   "question": "Does this compile? `let s1 = String::from(\"hello\"); let s2 = s1; println!(\"{}\", s1);`",
   "options": {
    "A": "Yes, prints \"hello\"",
    "B": "No — `s1` was moved to `s2`",
    "C": "Yes, but prints empty string",
    "D": "Compiles with warning"
   },
   "correct": "B",
   "explanation": "No — `s1` was moved to `s2`. Using `s1` after the move is a compile error.",
   "part": 2
  },
  {
   "id": 108,
   "question": "What is RAII in Rust?",
   "options": {
    "A": "Random Access Iterator Interface",
    "B": "Resource Acquisition Is Initialization — resources are freed when they go out of scope",
    "C": "Rust Allocation and Initialization",
    "D": "Reference And Immutable Invariant"
   },
   "correct": "B",
   "explanation": "RAII means resources (memory, file handles) are acquired at initialization and freed when the owning value goes out of scope via `drop`.",
   "part": 2
  },
  {
   "id": 109,
   "question": "When is `drop` called on a value?",
   "options": {
    "A": "Never — Rust uses GC",
    "B": "When the owner goes out of scope",
    "C": "Only when explicitly called",
    "D": "When the program exits"
   },
   "correct": "B",
   "explanation": "`drop` is called automatically when the owner goes out of scope. You can also call it explicitly with `drop(value)`.",
   "part": 2
  },
  {
   "id": 110,
   "question": "What does this print? `let v = vec![1,2,3]; for i in v { println!(\"{}\", i); } println!(\"{:?}\", v);`",
   "options": {
    "A": "1 2 3 [1,2,3]",
    "B": "Compile error — `v` was moved in the for loop",
    "C": "1 2 3 then panic",
    "D": "Nothing — infinite loop"
   },
   "correct": "B",
   "explanation": "Compile error. The `for` loop consumes `v` (moves it). Using `v` afterward is invalid.",
   "part": 2
  },
  {
   "id": 111,
   "question": "What is an immutable borrow in Rust?",
   "options": {
    "A": "`&mut T`",
    "B": "`&T` — a reference that allows reading but not modifying",
    "C": "`*const T`",
    "D": "`Box<T>`"
   },
   "correct": "B",
   "explanation": "`&T` is an immutable borrow — you can read but not modify through it.",
   "part": 2
  },
  {
   "id": 112,
   "question": "How many mutable borrows can exist at the same time for a value?",
   "options": {
    "A": "Unlimited",
    "B": "Exactly 2",
    "C": "Exactly 1 (exclusive)",
    "D": "Depends on the type"
   },
   "correct": "C",
   "explanation": "Exactly one mutable borrow can exist at a time. It gives exclusive access.",
   "part": 2
  },
  {
   "id": 113,
   "question": "Can you have immutable and mutable borrows active simultaneously?",
   "options": {
    "A": "Yes, always",
    "B": "No — they are mutually exclusive",
    "C": "Yes, if they don't overlap",
    "D": "Only for `Copy` types"
   },
   "correct": "B",
   "explanation": "No. Immutable and mutable borrows are mutually exclusive. You cannot have both active.",
   "part": 2
  },
  {
   "id": 114,
   "question": "What does this code do? `let mut x = 5; let r = &x; x = 10; println!(\"{}\", r);`",
   "options": {
    "A": "Prints 10",
    "B": "Compile error — cannot mutate `x` while `r` borrows it",
    "C": "Prints 5",
    "D": "Undefined behavior"
   },
   "correct": "B",
   "explanation": "Compile error. You cannot mutate `x` while `r` holds an immutable borrow.",
   "part": 2
  },
  {
   "id": 115,
   "question": "What is a dangling reference?",
   "options": {
    "A": "A reference to uninitialized memory",
    "B": "A reference that outlives its referent (points to freed memory)",
    "C": "A null reference",
    "D": "A reference to a moved value"
   },
   "correct": "B",
   "explanation": "A dangling reference points to memory that has been freed. The referent no longer exists.",
   "part": 2
  },
  {
   "id": 116,
   "question": "Does Rust allow dangling references?",
   "options": {
    "A": "Yes, with `unsafe`",
    "B": "No — the borrow checker prevents them at compile time",
    "C": "Yes, they are common",
    "D": "Only in release mode"
   },
   "correct": "B",
   "explanation": "No. The borrow checker ensures references never outlive their referents, preventing dangling refs at compile time.",
   "part": 2
  },
  {
   "id": 117,
   "question": "What does `fn foo(x: &i32)` mean?",
   "options": {
    "A": "`foo` takes ownership of an `i32`",
    "B": "`foo` borrows an `i32` immutably",
    "C": "`foo` borrows an `i32` mutably",
    "D": "`foo` returns a reference"
   },
   "correct": "B",
   "explanation": "`foo` borrows an `i32` immutably. The caller retains ownership.",
   "part": 2
  },
  {
   "id": 118,
   "question": "Which line causes an error? `let mut v = vec![1,2,3]; let r = &v; v.push(4); println!(\"{}\", r[0]);`",
   "options": {
    "A": "Line 1",
    "B": "Line 2",
    "C": "Line 3 — cannot push while `r` borrows `v`",
    "D": "Line 4"
   },
   "correct": "C",
   "explanation": "Line 3. `v.push(4)` requires a mutable borrow, but `r` holds an immutable borrow. They cannot coexist.",
   "part": 2
  },
  {
   "id": 119,
   "question": "What does `&mut T` allow?",
   "options": {
    "A": "Only reading",
    "B": "Reading and writing (exclusive access)",
    "C": "Shared access",
    "D": "Copying the value"
   },
   "correct": "B",
   "explanation": "`&mut T` gives exclusive access — you can read and write. No other references to that value can exist.",
   "part": 2
  },
  {
   "id": 120,
   "question": "What prints? `let s = String::from(\"hi\"); let r1 = &s; let r2 = &s; println!(\"{}\", r1); println!(\"{}\", r2);`",
   "options": {
    "A": "Compile error",
    "B": "hi hi",
    "C": "hi (then panic)",
    "D": "Empty lines"
   },
   "correct": "B",
   "explanation": "Prints \"hi hi\". Multiple immutable borrows are allowed.",
   "part": 2
  },
  {
   "id": 121,
   "question": "What is `&str` in Rust?",
   "options": {
    "A": "An owned string",
    "B": "A string slice — borrowed view into UTF-8 text",
    "C": "A mutable string",
    "D": "A raw pointer to a string"
   },
   "correct": "B",
   "explanation": "`&str` is a string slice — an immutable borrowed view into UTF-8 encoded text.",
   "part": 2
  },
  {
   "id": 122,
   "question": "What does `&s[0..3]` on a `String` produce?",
   "options": {
    "A": "`String`",
    "B": "`&str` — a slice of the first 3 bytes",
    "C": "`char`",
    "D": "Compile error"
   },
   "correct": "B",
   "explanation": "Produces `&str` — a slice of the first 3 bytes. (Caution: may split a multi-byte char.)",
   "part": 2
  },
  {
   "id": 123,
   "question": "What is the range `..` (no start or end) equivalent to?",
   "options": {
    "A": "`0..0`",
    "B": "`0..len` — full range",
    "C": "Invalid syntax",
    "D": "`1..len-1`"
   },
   "correct": "B",
   "explanation": "`..` is the full range `0..len`, including all elements.",
   "part": 2
  },
  {
   "id": 124,
   "question": "Does `let s: &str = \"hello\";` store the string on the heap?",
   "options": {
    "A": "Yes",
    "B": "No — `\"hello\"` is in the binary; `s` points to it",
    "C": "Only in debug mode",
    "D": "Depends on the compiler"
   },
   "correct": "B",
   "explanation": "String literals are stored in the binary. `&str` points to that static data.",
   "part": 2
  },
  {
   "id": 125,
   "question": "What does `&arr[1..4]` produce for `let arr = [1,2,3,4,5];`?",
   "options": {
    "A": "`[1,2,3,4,5]`",
    "B": "`&[i32]` — slice containing `[2,3,4]`",
    "C": "`[2,3,4]` (owned array)",
    "D": "Compile error"
   },
   "correct": "B",
   "explanation": "Produces `&[i32]` — a slice with elements at indices 1, 2, 3: `[2,3,4]`.",
   "part": 2
  },
  {
   "id": 126,
   "question": "What is the type of `&v[..]` when `v` is `Vec<i32>`?",
   "options": {
    "A": "`Vec<i32>`",
    "B": "`&[i32]`",
    "C": "`&Vec<i32>`",
    "D": "`[i32]`"
   },
   "correct": "B",
   "explanation": "`&[i32]` — a slice of the vector's contents.",
   "part": 2
  },
  {
   "id": 127,
   "question": "Can you slice a `String` with `[0..3]` on arbitrary byte indices?",
   "options": {
    "A": "Yes, always",
    "B": "No — must be at UTF-8 character boundaries or panic at runtime",
    "C": "Only in `unsafe`",
    "D": "Yes, but returns bytes not chars"
   },
   "correct": "B",
   "explanation": "Slicing must be at UTF-8 boundaries. Slicing in the middle of a multi-byte character causes a runtime panic.",
   "part": 2
  },
  {
   "id": 128,
   "question": "What does `first_word(s: &String) -> &str` return?",
   "options": {
    "A": "An owned `String`",
    "B": "A slice (borrowed view) into `s`",
    "C": "A copy of the first word",
    "D": "A new allocation"
   },
   "correct": "B",
   "explanation": "Returns a `&str` that borrows from `s` — a view into the original string.",
   "part": 2
  },
  {
   "id": 129,
   "question": "What is `&[T]`?",
   "options": {
    "A": "A reference to a single `T`",
    "B": "A slice — contiguous sequence of `T` (unsized type)",
    "C": "An array",
    "D": "A vector"
   },
   "correct": "B",
   "explanation": "`&[T]` is a slice — a dynamically sized view into a contiguous sequence of `T`.",
   "part": 2
  },
  {
   "id": 130,
   "question": "What does `\"hello\".to_string()` return?",
   "options": {
    "A": "`&str`",
    "B": "`String` — owned, heap-allocated",
    "C": "`&String`",
    "D": "`str`"
   },
   "correct": "B",
   "explanation": "Returns `String` — an owned, heap-allocated string.",
   "part": 2
  },
  {
   "id": 131,
   "question": "What does `'a` in `fn foo<'a>(x: &'a i32)` mean?",
   "options": {
    "A": "A generic type parameter",
    "B": "A lifetime parameter — `x` lives at least as long as `'a`",
    "C": "A constant",
    "D": "A module name"
   },
   "correct": "B",
   "explanation": "`'a` is a lifetime parameter. The reference `x` lives at least as long as `'a`.",
   "part": 2
  },
  {
   "id": 132,
   "question": "What is the special lifetime `'static`?",
   "options": {
    "A": "Lives for one function call",
    "B": "Lives for the entire program duration",
    "C": "Lives until dropped",
    "D": "A compile-time only marker"
   },
   "correct": "B",
   "explanation": "`'static` lives for the entire program. String literals have type `&'static str`.",
   "part": 2
  },
  {
   "id": 133,
   "question": "When can lifetime annotations be elided (omitted)?",
   "options": {
    "A": "Never",
    "B": "When the compiler can infer them from specific rules",
    "C": "Only in `main`",
    "D": "Only for `'static`"
   },
   "correct": "B",
   "explanation": "The compiler can infer lifetimes using elision rules (e.g., one input ref → output gets same lifetime).",
   "part": 2
  },
  {
   "id": 134,
   "question": "What does this mean? `struct Foo<'a> { x: &'a i32 }`",
   "options": {
    "A": "`Foo` owns an `i32`",
    "B": "`Foo` holds a reference that must outlive `Foo`; the reference lives at least `'a`",
    "C": "`Foo` is generic over type `'a`",
    "D": "Invalid syntax"
   },
   "correct": "B",
   "explanation": "`Foo` holds a reference; that reference must outlive (or live as long as) `Foo`.",
   "part": 2
  },
  {
   "id": 135,
   "question": "In `fn longest<'a>(x: &'a str, y: &'a str) -> &'a str`, what does `'a` enforce?",
   "options": {
    "A": "`x` and `y` must be the same reference",
    "B": "The return value lives as long as the shorter of `x` and `y`",
    "C": "`x` and `y` must outlive the return value",
    "D": "Nothing — it's optional"
   },
   "correct": "B",
   "explanation": "The return value's lifetime is the intersection — it lives as long as the shorter of `x` and `y`.",
   "part": 2
  },
  {
   "id": 136,
   "question": "Does `fn foo(x: &i32) -> &i32` need explicit lifetimes?",
   "options": {
    "A": "Yes, always",
    "B": "No — elision rules apply: input and output get the same lifetime",
    "C": "Only in Rust 2015",
    "D": "Only for `impl` blocks"
   },
   "correct": "B",
   "explanation": "Elision: single input reference means output gets the same lifetime. No explicit annotation needed.",
   "part": 2
  },
  {
   "id": 137,
   "question": "What is `where 'a: 'b` (lifetime bound)?",
   "options": {
    "A": "`'a` must be shorter than `'b`",
    "B": "`'a` must outlive `'b` — `'a` lives at least as long as `'b`",
    "C": "`'a` and `'b` are equal",
    "D": "Invalid syntax"
   },
   "correct": "B",
   "explanation": "`'a: 'b` means `'a` outlives `'b` — `'a` is at least as long as `'b`.",
   "part": 2
  },
  {
   "id": 138,
   "question": "Can a function return a reference to a local variable?",
   "options": {
    "A": "Yes",
    "B": "No — it would be a dangling reference (compile error)",
    "C": "Yes, with `'static`",
    "D": "Yes, with `unsafe`"
   },
   "correct": "B",
   "explanation": "No. Returning a reference to a local would be dangling. The borrow checker rejects it.",
   "part": 2
  },
  {
   "id": 139,
   "question": "What does `&'static str` refer to?",
   "options": {
    "A": "A string that can be mutated",
    "B": "A string literal — lives for the whole program",
    "C": "A heap-allocated string",
    "D": "A null string"
   },
   "correct": "B",
   "explanation": "`&'static str` is typically a string literal, stored in the binary, valid for the whole program.",
   "part": 2
  },
  {
   "id": 140,
   "question": "In `impl<'a> Foo<'a>`, what does `'a` represent?",
   "options": {
    "A": "A type parameter",
    "B": "A lifetime that `Foo`'s references must satisfy",
    "C": "An optional parameter",
    "D": "A constant"
   },
   "correct": "B",
   "explanation": "`'a` is the lifetime parameter that `Foo`'s reference fields must satisfy.",
   "part": 2
  },
  {
   "id": 141,
   "question": "What is `Box<T>` used for?",
   "options": {
    "A": "Reference counting",
    "B": "Heap allocation — owning a value on the heap",
    "C": "Interior mutability",
    "D": "Thread-safe sharing"
   },
   "correct": "B",
   "explanation": "`Box<T>` allocates `T` on the heap and gives single ownership.",
   "part": 2
  },
  {
   "id": 142,
   "question": "What does `Rc<T>` provide?",
   "options": {
    "A": "Single ownership",
    "B": "Shared ownership with reference counting (single-threaded)",
    "C": "Mutable shared access",
    "D": "Automatic garbage collection"
   },
   "correct": "B",
   "explanation": "`Rc<T>` provides shared ownership via reference counting. For single-threaded use.",
   "part": 2
  },
  {
   "id": 143,
   "question": "When would you use `Arc<T>` instead of `Rc<T>`?",
   "options": {
    "A": "For smaller types",
    "B": "When sharing across threads — thread-safe reference counting",
    "C": "For faster performance",
    "D": "When you need interior mutability"
   },
   "correct": "B",
   "explanation": "`Arc<T>` is the thread-safe version of `Rc`. Use when sharing across threads.",
   "part": 2
  },
  {
   "id": 144,
   "question": "What is `RefCell<T>`?",
   "options": {
    "A": "A boxed value",
    "B": "Interior mutability — mutate through an immutable reference (runtime borrow check)",
    "C": "A reference-counted pointer",
    "D": "A thread-safe cell"
   },
   "correct": "B",
   "explanation": "`RefCell<T>` provides interior mutability — mutate through `&RefCell<T>` using runtime borrow checks.",
   "part": 2
  },
  {
   "id": 145,
   "question": "What does `Weak<T>` do?",
   "options": {
    "A": "Same as `Rc<T>` but weaker",
    "B": "Non-owning reference to `Rc` — breaks cycles, doesn't prevent drop",
    "C": "A weak pointer that can be null",
    "D": "A downgraded `Arc`"
   },
   "correct": "B",
   "explanation": "`Weak<T>` is a non-owning reference to `Rc`. Doesn't keep the value alive; used to break cycles.",
   "part": 2
  },
  {
   "id": 146,
   "question": "What is `Cow<'a, B>`?",
   "options": {
    "A": "Clone on Write — can hold borrowed or owned data; clones when mutating borrowed",
    "B": "Copy on Write",
    "C": "A cow type",
    "D": "A reference-counted cow"
   },
   "correct": "A",
   "explanation": "Clone-on-write. Can hold `B` or `Cow::Borrowed(&B)`. Clones when you need to mutate borrowed data.",
   "part": 2
  },
  {
   "id": 147,
   "question": "Does `Box<T>` implement `Copy`?",
   "options": {
    "A": "Yes",
    "B": "No — it has unique ownership; copying would double-free",
    "C": "Only when `T: Copy`",
    "D": "Only for `Box<i32>`"
   },
   "correct": "B",
   "explanation": "No. `Box` has unique ownership. Implementing `Copy` would allow double-free.",
   "part": 2
  },
  {
   "id": 148,
   "question": "What does `Rc::clone(&rc)` do?",
   "options": {
    "A": "Deep copies the inner value",
    "B": "Increments the reference count; both refs point to same data",
    "C": "Moves the value",
    "D": "Creates a weak reference"
   },
   "correct": "B",
   "explanation": "Increments the ref count. Both `Rc` handles point to the same allocation.",
   "part": 2
  },
  {
   "id": 149,
   "question": "When does `RefCell` panic?",
   "options": {
    "A": "Never",
    "B": "When you have overlapping mutable borrows at runtime",
    "C": "When the inner value is dropped",
    "D": "Only in debug mode"
   },
   "correct": "B",
   "explanation": "Panics at runtime if you try to take a second mutable borrow while one is active.",
   "part": 2
  },
  {
   "id": 150,
   "question": "What is a common pattern for shared mutable state?",
   "options": {
    "A": "`Box<T>`",
    "B": "`Rc<RefCell<T>>` — shared ownership + interior mutability",
    "C": "`&mut T`",
    "D": "`Arc<Box<T>>`"
   },
   "correct": "B",
   "explanation": "`Rc<RefCell<T>>` — shared ownership (Rc) + interior mutability (RefCell). Common for graphs, etc.",
   "part": 2
  },
  {
   "id": 151,
   "question": "What does `fn foo(x: &'a str, y: &'a str) -> &'a str` require when called?",
   "options": {
    "A": "`x` and `y` must be the same variable",
    "B": "The returned reference lives as long as the shorter of `x` and `y`",
    "C": "`x` and `y` must be `'static`",
    "D": "No special requirement"
   },
   "correct": "B",
   "explanation": "The returned reference's lifetime is the intersection of `x` and `y` — it lives as long as the shorter.",
   "part": 2
  },
  {
   "id": 152,
   "question": "What prints? `let x = 5; let r = &x; drop(x); println!(\"{}\", r);`",
   "options": {
    "A": "5",
    "B": "Compile error — `x` is `Copy`, `drop` doesn't apply; but you can't move `x` and use `r`",
    "C": "Actually: compile error — `drop(x)` would move `x`, but `r` borrows it",
    "D": "Undefined behavior"
   },
   "correct": "C",
   "explanation": "Compile error. `drop(x)` would need to take ownership, but `r` borrows `x`. Can't move while borrowed.",
   "part": 2
  },
  {
   "id": 153,
   "question": "What is the elision rule for `fn foo(x: &i32, y: &i32) -> &i32`?",
   "options": {
    "A": "Invalid — must specify lifetimes",
    "B": "Each input gets its own lifetime; output gets first input's lifetime",
    "C": "Compiler error — ambiguous",
    "D": "All get `'static`"
   },
   "correct": "B",
   "explanation": "With multiple ref inputs, the output gets the first input's lifetime by default (elision rule 2).",
   "part": 2
  },
  {
   "id": 154,
   "question": "Can `fn get_str() -> &str` return `&String::from(\"hi\")`?",
   "options": {
    "A": "Yes",
    "B": "No — would return reference to temporary; dangling (compile error)",
    "C": "Yes with `leak`",
    "D": "Yes in `unsafe`"
   },
   "correct": "B",
   "explanation": "No. `String::from(\"hi\")` is a temporary; returning a reference to it would be dangling.",
   "part": 2
  },
  {
   "id": 155,
   "question": "What does `struct S<'a, 'b> { x: &'a i32, y: &'b i32 }` mean?",
   "options": {
    "A": "`x` and `y` must have the same lifetime",
    "B": "`x` lives `'a`, `y` lives `'b` — they can differ",
    "C": "Invalid — only one lifetime allowed",
    "D": "`'a` must outlive `'b`"
   },
   "correct": "B",
   "explanation": "`x` and `y` can have different lifetimes. The struct is generic over both.",
   "part": 2
  },
  {
   "id": 156,
   "question": "What is `Box::leak`?",
   "options": {
    "A": "Frees the box immediately",
    "B": "Converts `Box<T>` to `&'static T` — leaks memory, value lives forever",
    "C": "Creates a weak reference",
    "D": "Downgrades to raw pointer"
   },
   "correct": "B",
   "explanation": "`Box::leak` turns `Box<T>` into `&'static T`. The memory is never freed (intentional leak).",
   "part": 2
  },
  {
   "id": 157,
   "question": "In `fn f<'a>(x: &'a i32) -> &'a i32`, can the return outlive `x`?",
   "options": {
    "A": "Yes",
    "B": "No — the return is tied to `'a`, which is `x`'s lifetime",
    "C": "Only if `x` is `'static`",
    "D": "Depends on the caller"
   },
   "correct": "B",
   "explanation": "No. The return lifetime is `'a`, which is the same as `x`'s. It cannot outlive `x`.",
   "part": 2
  },
  {
   "id": 158,
   "question": "What does `impl<'a> Trait for &'a T` mean?",
   "options": {
    "A": "`T` implements `Trait`",
    "B": "References to `T` implement `Trait`; the impl is generic over the ref's lifetime",
    "C": "Invalid syntax",
    "D": "`T` must outlive `'a`"
   },
   "correct": "B",
   "explanation": "References to `T` implement `Trait`. The impl is parameterized by the reference's lifetime.",
   "part": 2
  },
  {
   "id": 159,
   "question": "Can you have `fn foo() -> &i32` with no parameters?",
   "options": {
    "A": "Yes — returns `'static`",
    "B": "No — no way to infer output lifetime; must return `'static` or take input refs",
    "C": "Yes, returns null",
    "D": "Yes in nightly"
   },
   "correct": "B",
   "explanation": "No. With no inputs, the compiler can't infer the output lifetime. You'd need `-> &'static i32` explicitly.",
   "part": 2
  },
  {
   "id": 160,
   "question": "What does `for<'a> fn(&'a i32)` mean?",
   "options": {
    "A": "A function that takes any lifetime",
    "B": "Higher-ranked trait bound — the function works for any choice of `'a`",
    "C": "Invalid syntax",
    "D": "A closure"
   },
   "correct": "B",
   "explanation": "Higher-ranked trait bound. The function is valid for any lifetime `'a` the caller provides.",
   "part": 2
  },
  {
   "id": 161,
   "question": "Where are local variables stored by default?",
   "options": {
    "A": "Heap",
    "B": "Stack",
    "C": "Static memory",
    "D": "Register only"
   },
   "correct": "B",
   "explanation": "Local variables are stored on the stack by default.",
   "part": 2
  },
  {
   "id": 162,
   "question": "What does `std::mem::size_of::<Vec<i32>>()` return?",
   "options": {
    "A": "The size of all elements in the vector",
    "B": "The size of the `Vec` struct itself (pointer + capacity + length)",
    "C": "0",
    "D": "Compile error"
   },
   "correct": "B",
   "explanation": "Returns the size of the `Vec` struct (typically 24 bytes: ptr + cap + len), not the heap data.",
   "part": 2
  },
  {
   "id": 163,
   "question": "What is \"zero-cost abstraction\" in Rust?",
   "options": {
    "A": "Abstractions are free to use",
    "B": "Using abstractions (e.g. iterators) has no runtime overhead vs hand-written code",
    "C": "No memory cost",
    "D": "Compile-time only"
   },
   "correct": "B",
   "explanation": "Zero-cost means abstractions compile to code as efficient as hand-written low-level code.",
   "part": 2
  },
  {
   "id": 164,
   "question": "What does `Box` add over a raw heap allocation?",
   "options": {
    "A": "Nothing — same as malloc",
    "B": "Automatic deallocation when the `Box` goes out of scope",
    "C": "Reference counting",
    "D": "Bounds checking"
   },
   "correct": "B",
   "explanation": "`Box` automatically frees the allocation when it goes out of scope (RAII).",
   "part": 2
  },
  {
   "id": 165,
   "question": "What is memory alignment?",
   "options": {
    "A": "Making memory contiguous",
    "B": "Storing data at addresses divisible by its size (for CPU efficiency)",
    "C": "Aligning struct fields",
    "D": "Garbage collection"
   },
   "correct": "B",
   "explanation": "Alignment means data is stored at addresses that are multiples of its alignment (e.g. i64 at 8-byte boundaries).",
   "part": 2
  },
  {
   "id": 166,
   "question": "What does `std::mem::align_of::<i64>()` typically return?",
   "options": {
    "A": "1",
    "B": "4",
    "C": "8",
    "D": "16"
   },
   "correct": "C",
   "explanation": "`i64` is typically 8-byte aligned. `align_of::<i64>()` returns 8.",
   "part": 2
  },
  {
   "id": 167,
   "question": "When does Rust allocate on the heap?",
   "options": {
    "A": "Never",
    "B": "For `Box`, `Vec`, `String`, etc. — when you explicitly request heap allocation",
    "C": "For all variables",
    "D": "Only in `main`"
   },
   "correct": "B",
   "explanation": "Heap allocation happens for `Box`, `Vec`, `String`, `HashMap`, etc. — types that need dynamic size.",
   "part": 2
  },
  {
   "id": 168,
   "question": "What is the stack used for?",
   "options": {
    "A": "Long-lived data",
    "B": "Local variables, function frames, return addresses",
    "C": "Global variables only",
    "D": "Shared data"
   },
   "correct": "B",
   "explanation": "Stack holds local variables, function parameters, return addresses, and temporary data.",
   "part": 2
  },
  {
   "id": 169,
   "question": "Does `let x = [0u8; 1000];` allocate on the heap?",
   "options": {
    "A": "Yes",
    "B": "No — fixed-size array on the stack",
    "C": "Depends on size",
    "D": "Only in release mode"
   },
   "correct": "B",
   "explanation": "Fixed-size arrays like `[0u8; 1000]` are stack-allocated. (Large arrays may cause stack overflow.)",
   "part": 2
  },
  {
   "id": 170,
   "question": "What does `std::mem::size_of_val(&v)` give for `Vec<i32>`?",
   "options": {
    "A": "Size of the `Vec` struct",
    "B": "Size of the heap allocation (capacity * size_of::<i32>())",
    "C": "Size of one element",
    "D": "Same as `size_of::<Vec<i32>>()`"
   },
   "correct": "D",
   "explanation": "`size_of_val` gives the size of the value. For `Vec`, that's the struct size, same as `size_of::<Vec<i32>>()`.",
   "part": 2
  },
  {
   "id": 171,
   "question": "What does `std::mem::replace(dest, src)` do?",
   "options": {
    "A": "Swaps `dest` and `src`",
    "B": "Replaces `dest`'s value with `src`, returns the old value of `dest`",
    "C": "Copies `src` into `dest`",
    "D": "Frees `dest`"
   },
   "correct": "B",
   "explanation": "Replaces `dest` with `src` and returns the previous value of `dest`. Useful when you need the old value.",
   "part": 2
  },
  {
   "id": 172,
   "question": "What is `MaybeUninit<T>` used for?",
   "options": {
    "A": "Optional values",
    "B": "Uninitialized memory — when you need to defer initialization",
    "C": "Null pointers",
    "D": "Default values"
   },
   "correct": "B",
   "explanation": "`MaybeUninit<T>` represents uninitialized memory. Used when you need to defer initialization (e.g. FFI).",
   "part": 2
  },
  {
   "id": 173,
   "question": "What does `std::mem::forget` do?",
   "options": {
    "A": "Frees memory immediately",
    "B": "Prevents `drop` from running — leaks the value (use with caution)",
    "C": "Zeros memory",
    "D": "Invalidates the value"
   },
   "correct": "B",
   "explanation": "`forget` consumes the value without calling `drop`. The memory is leaked. Use sparingly (e.g. FFI).",
   "part": 2
  },
  {
   "id": 174,
   "question": "When is `ManuallyDrop<T>` useful?",
   "options": {
    "A": "For automatic dropping",
    "B": "When you need to control exactly when `drop` runs (e.g. FFI, custom allocators)",
    "C": "For reference counting",
    "D": "For thread safety"
   },
   "correct": "B",
   "explanation": "`ManuallyDrop` prevents automatic drop. You control when the inner value is dropped (e.g. via `ManuallyDrop::drop`).",
   "part": 2
  },
  {
   "id": 175,
   "question": "What does `std::ptr::read` do?",
   "options": {
    "A": "Reads a file",
    "B": "Reads from a raw pointer without taking ownership (caller must ensure validity)",
    "C": "Safe read",
    "D": "Copies a reference"
   },
   "correct": "B",
   "explanation": "`ptr::read` reads from a raw pointer. Unsafe — caller must ensure the pointer is valid and properly aligned.",
   "part": 2
  },
  {
   "id": 176,
   "question": "What is interior mutability?",
   "options": {
    "A": "Mutating the interior of a value through an immutable reference (e.g. `RefCell`, `Cell`)",
    "B": "Mutating a struct field",
    "C": "Mutating inside a loop",
    "D": "Unsafe mutation"
   },
   "correct": "A",
   "explanation": "Interior mutability lets you mutate through `&T` using types like `RefCell` or `Cell` that enforce borrowing at runtime.",
   "part": 2
  },
  {
   "id": 177,
   "question": "What does `Cell<T>` provide?",
   "options": {
    "A": "Reference counting",
    "B": "Interior mutability for `Copy` types — get/set by value",
    "C": "Thread-safe sharing",
    "D": "Heap allocation"
   },
   "correct": "B",
   "explanation": "`Cell<T>` provides interior mutability for `T: Copy`. You swap/get/set by value; no references to the interior.",
   "part": 2
  },
  {
   "id": 178,
   "question": "When would you use `Rc<RefCell<T>>`?",
   "options": {
    "A": "Single-threaded shared mutable state (e.g. graph nodes with multiple owners)",
    "B": "Multi-threaded shared state",
    "C": "When you need `Copy`",
    "D": "For static data"
   },
   "correct": "A",
   "explanation": "`Rc<RefCell<T>>` — shared ownership + interior mutability. Common for graphs, UI state, etc. Single-threaded only.",
   "part": 2
  },
  {
   "id": 179,
   "question": "What does a closure that takes `|x|` capture?",
   "options": {
    "A": "Nothing",
    "B": "By reference — borrows variables from the environment",
    "C": "By value — takes ownership",
    "D": "Depends on usage — Rust infers (reference if possible)"
   },
   "correct": "D",
   "explanation": "Rust infers. If the closure only reads, it borrows immutably; if it modifies, mutably. Use `move` to force ownership.",
   "part": 2
  },
  {
   "id": 180,
   "question": "What does `move` in a closure do?",
   "options": {
    "A": "Moves the closure",
    "B": "Forces the closure to take ownership of captured variables",
    "C": "Moves the return value",
    "D": "Invalid keyword"
   },
   "correct": "B",
   "explanation": "`move` makes the closure take ownership of captured variables. Required when the closure outlives the current scope.",
   "part": 2
  },
  {
   "id": 181,
   "question": "What does `Arc<Mutex<T>>` provide?",
   "options": {
    "A": "Single-threaded shared state",
    "B": "Thread-safe shared mutable state",
    "C": "Interior mutability only",
    "D": "Lock-free access"
   },
   "correct": "B",
   "explanation": "`Arc<Mutex<T>>` — thread-safe shared ownership (Arc) + exclusive mutable access (Mutex).",
   "part": 2
  },
  {
   "id": 182,
   "question": "What happens if you `clone` an `Rc` in a cycle (A -> B -> A)?",
   "options": {
    "A": "Compile error",
    "B": "The cycle prevents drop — memory leak (use `Weak` to break it)",
    "C": "Panic",
    "D": "Automatic cycle detection"
   },
   "correct": "B",
   "explanation": "Reference cycles with `Rc` cause leaks — the ref count never reaches 0. Use `Weak` to break cycles.",
   "part": 2
  },
  {
   "id": 183,
   "question": "What does `Cow::Borrowed(&s)` hold?",
   "options": {
    "A": "Owned data",
    "B": "A reference — no allocation",
    "C": "A copy",
    "D": "Mutable data"
   },
   "correct": "B",
   "explanation": "`Cow::Borrowed` holds a reference. No allocation.",
   "part": 2
  },
  {
   "id": 184,
   "question": "When does `Cow::to_mut()` allocate?",
   "options": {
    "A": "Never",
    "B": "When the `Cow` is `Borrowed` — clones to get owned data, then returns mutable ref",
    "C": "Always",
    "D": "When the type is `String`"
   },
   "correct": "B",
   "explanation": "When the `Cow` is `Borrowed`, `to_mut()` clones the data to get an owned copy, then returns a mutable reference.",
   "part": 2
  },
  {
   "id": 185,
   "question": "What does `Mutex::lock()` return?",
   "options": {
    "A": "`&T`",
    "B": "`MutexGuard<T>` — a guard that derefs to `&T` and unlocks on drop",
    "C": "`Option<&T>`",
    "D": "`Result<T, E>`"
   },
   "correct": "B",
   "explanation": "Returns `MutexGuard<T>`, which implements `Deref` to `&T` and releases the lock when dropped.",
   "part": 2
  },
  {
   "id": 186,
   "question": "Can you pass `Rc<T>` to another thread?",
   "options": {
    "A": "Yes, always",
    "B": "No — `Rc` is not `Send`; use `Arc` for cross-thread sharing",
    "C": "Yes with `unsafe`",
    "D": "Only if `T: Send`"
   },
   "correct": "B",
   "explanation": "`Rc` is not `Send` — its ref count isn't atomic. Use `Arc` for cross-thread sharing.",
   "part": 2
  },
  {
   "id": 187,
   "question": "What does `RwLock<T>` allow?",
   "options": {
    "A": "Only one writer at a time",
    "B": "Multiple readers OR one writer (not both)",
    "C": "Multiple writers",
    "D": "Lock-free reads"
   },
   "correct": "B",
   "explanation": "`RwLock` allows many readers or one writer. Readers and writers are mutually exclusive.",
   "part": 2
  },
  {
   "id": 188,
   "question": "What is `Send`?",
   "options": {
    "A": "A function to send data",
    "B": "A marker trait — types that can be transferred across thread boundaries",
    "C": "A channel",
    "D": "A sync primitive"
   },
   "correct": "B",
   "explanation": "`Send` means the type can be safely transferred to another thread (ownership transfer).",
   "part": 2
  },
  {
   "id": 189,
   "question": "What is `Sync`?",
   "options": {
    "A": "Synchronous I/O",
    "B": "Types that can be shared across threads via `&T` (i.e. `&T: Send` when `T: Sync`)",
    "C": "Same as `Send`",
    "D": "A mutex"
   },
   "correct": "B",
   "explanation": "`Sync` means `&T` is `Send` — the type can be shared across threads via immutable references.",
   "part": 2
  },
  {
   "id": 190,
   "question": "Why is `Rc<T>` not `Send`?",
   "options": {
    "A": "It uses locks",
    "B": "Its ref count is not atomic — sharing across threads would be data-race-unsafe",
    "C": "It's too slow",
    "D": "By design choice"
   },
   "correct": "B",
   "explanation": "`Rc` uses non-atomic ref counting. Sharing it across threads could cause data races. `Arc` uses atomics.",
   "part": 2
  },
  {
   "id": 191,
   "question": "What does this do? `let c = RefCell::new(5); *c.borrow_mut() += 1;`",
   "options": {
    "A": "Compile error",
    "B": "Increments the inner value to 6",
    "C": "Panic",
    "D": "Undefined behavior"
   },
   "correct": "B",
   "explanation": "Increments the inner value to 6. `borrow_mut()` returns a `RefMut` that derefs to `&mut i32`.",
   "part": 2
  },
  {
   "id": 192,
   "question": "What prints? `let r = Rc::new(5); let w = Rc::downgrade(&r); drop(r); println!(\"{:?}\", w.upgrade());`",
   "options": {
    "A": "`Some(5)`",
    "B": "`None` — the `Rc` was dropped, inner value freed",
    "C": "Panic",
    "D": "`5`"
   },
   "correct": "B",
   "explanation": "`None`. After `drop(r)`, the last `Rc` is gone, so the inner value is dropped. `w.upgrade()` returns `None`.",
   "part": 2
  },
  {
   "id": 193,
   "question": "Which line errors? `let mut x = 5; let c = || { x += 1; }; c(); c();`",
   "options": {
    "A": "Line 1",
    "B": "Line 2 — closure would need to borrow `x` mutably twice (call c twice)",
    "C": "Actually: `c` is not `FnMut` if it mutates — but the real issue: calling `c()` twice; the closure borrows `x` mutably, and the first call holds the borrow until it returns. So second `c()` would try to borrow again. Compile error on line 3 or 4.",
    "D": "Line 4"
   },
   "correct": "B",
   "explanation": "Compile error. The closure mutates `x`, so it's `FnMut`. You need `let mut c = ...` to call it. Also, `c` mutably borrows `x`; calling `c()` twice can cause borrow conflicts.",
   "part": 2
  },
  {
   "id": 194,
   "question": "What does `let f = move |x| x + y;` do?",
   "options": {
    "A": "`y` is copied into the closure",
    "B": "`y` is moved into the closure (ownership taken)",
    "C": "`y` is borrowed",
    "D": "Invalid — `move` requires `||`"
   },
   "correct": "B",
   "explanation": "`move` moves `y` into the closure. The closure takes ownership of `y`.",
   "part": 2
  },
  {
   "id": 195,
   "question": "What is the output? `let v = vec![1,2,3]; let c = move || println!(\"{:?}\", v); c(); println!(\"{:?}\", v);`",
   "options": {
    "A": "[1,2,3] [1,2,3]",
    "B": "Compile error — `v` was moved into the closure",
    "C": "[1,2,3] then panic",
    "D": "Nothing"
   },
   "correct": "B",
   "explanation": "Compile error. `move` moved `v` into the closure. Using `v` after `c()` is invalid.",
   "part": 2
  },
  {
   "id": 196,
   "question": "When does `RefCell::borrow()` panic?",
   "options": {
    "A": "Never",
    "B": "When a `borrow_mut()` is active (mutable borrow exists)",
    "C": "When the value is dropped",
    "D": "Only in debug"
   },
   "correct": "B",
   "explanation": "Panics when `borrow_mut()` is active — you can't have an immutable borrow while a mutable one exists.",
   "part": 2
  },
  {
   "id": 197,
   "question": "What does `UnsafeCell<T>` provide?",
   "options": {
    "A": "Safe interior mutability",
    "B": "The core primitive for interior mutability — allows mutation through `&UnsafeCell<T>` (unsafe)",
    "C": "Thread-safe cell",
    "D": "A wrapper for `Option`"
   },
   "correct": "B",
   "explanation": "`UnsafeCell` is the primitive for interior mutability. `RefCell` and `Cell` are built on it. It's `unsafe` to use directly.",
   "part": 2
  },
  {
   "id": 198,
   "question": "Can `Cell<i32>` be shared across threads?",
   "options": {
    "A": "Yes",
    "B": "No — `Cell` is not `Sync` (not thread-safe)",
    "C": "Yes with `Mutex`",
    "D": "Only for `Copy` types"
   },
   "correct": "B",
   "explanation": "No. `Cell` is not `Sync` — sharing `&Cell<T>` across threads would be unsound. Use `Mutex` or `AtomicX` for thread-safe interior mutability.",
   "part": 2
  },
  {
   "id": 199,
   "question": "What does `impl Clone for Rc<T>` do?",
   "options": {
    "A": "Deep copies the inner `T`",
    "B": "Increments ref count; returns new `Rc` pointing to same allocation",
    "C": "Moves the value",
    "D": "Creates a `Weak`"
   },
   "correct": "B",
   "explanation": "`Rc::clone` (and `Clone` impl) increments the ref count and returns a new `Rc` to the same allocation.",
   "part": 2
  },
  {
   "id": 200,
   "question": "What is a typical use of `Rc<RefCell<Vec<T>>>`?",
   "options": {
    "A": "Multi-threaded vector",
    "B": "Single-threaded shared mutable vector (e.g. multiple components holding refs, modifying the same list)",
    "C": "Immutable shared vector",
    "D": "Stack-allocated vector"
   },
   "correct": "B",
   "explanation": "Single-threaded shared mutable vector — e.g. UI components or graph nodes that need to modify a shared list.",
   "part": 2
  },
  {
   "id": 201,
   "question": "Which keyword is used to define a trait in Rust?",
   "options": {
    "A": "`interface`",
    "B": "`trait`",
    "C": "`protocol`",
    "D": "`abstract`"
   },
   "correct": "B",
   "explanation": "`trait`. Traits define shared behavior, similar to interfaces in other languages.",
   "part": 3
  },
  {
   "id": 202,
   "question": "What does the `impl` keyword do when used with a trait?",
   "options": {
    "A": "Declares a new trait",
    "B": "Implements trait methods for a type",
    "C": "Imports a trait from another crate",
    "D": "Defines a trait bound"
   },
   "correct": "B",
   "explanation": "Implements trait methods for a type. `impl Trait for Type` provides the implementation.",
   "part": 3
  },
  {
   "id": 203,
   "question": "Which of the following is valid trait definition syntax?",
   "options": {
    "A": "`trait Foo { fn bar(); }`",
    "B": "`trait Foo { fn bar() -> Self; }`",
    "C": "Both A and B",
    "D": "Neither—traits cannot have methods"
   },
   "correct": "C",
   "explanation": "Both A and B. Traits can have methods with or without return types (including `Self`).",
   "part": 3
  },
  {
   "id": 204,
   "question": "What is a default method in a trait?",
   "options": {
    "A": "A method that must be overridden by implementors",
    "B": "A method with a body that implementors can optionally override",
    "C": "A method that only works with default type parameters",
    "D": "A deprecated method"
   },
   "correct": "B",
   "explanation": "A method with a body that implementors can optionally override. Default methods have `{ }` with implementation.",
   "part": 3
  },
  {
   "id": 205,
   "question": "How do you implement multiple traits for the same type?",
   "options": {
    "A": "`impl Trait1, Trait2 for Type { }`",
    "B": "Use separate `impl Trait1 for Type` and `impl Trait2 for Type` blocks",
    "C": "`impl Trait1 + Trait2 for Type { }`",
    "D": "Traits cannot be combined for one type"
   },
   "correct": "B",
   "explanation": "Use separate `impl Trait1 for Type` and `impl Trait2 for Type` blocks. Each trait gets its own impl block.",
   "part": 3
  },
  {
   "id": 206,
   "question": "What does the orphan rule restrict?",
   "options": {
    "A": "You cannot implement a trait for a type unless either the trait or the type is defined in your crate",
    "B": "You cannot have orphan types in Rust",
    "C": "You cannot implement traits for generic types",
    "D": "You cannot implement traits from stdlib"
   },
   "correct": "A",
   "explanation": "You cannot implement a trait for a type unless either the trait or the type is defined in your crate. This prevents conflicting implementations.",
   "part": 3
  },
  {
   "id": 207,
   "question": "What does trait inheritance (supertrait) syntax look like?",
   "options": {
    "A": "`trait Child : Parent { }`",
    "B": "`trait Child extends Parent { }`",
    "C": "`trait Child : Parent + Other { }`",
    "D": "Both A and C"
   },
   "correct": "D",
   "explanation": "Both A and C. `trait Child : Parent` and `trait Child : Parent + Other` are valid supertrait syntax.",
   "part": 3
  },
  {
   "id": 208,
   "question": "In `impl Trait for Type`, what does `Self` refer to?",
   "options": {
    "A": "The trait being implemented",
    "B": "The type being implemented for",
    "C": "The current module",
    "D": "The parent trait"
   },
   "correct": "B",
   "explanation": "The type being implemented for. `Self` is an alias for the implementing type.",
   "part": 3
  },
  {
   "id": 209,
   "question": "Can a trait have associated constants?",
   "options": {
    "A": "No, only methods",
    "B": "Yes, with `const NAME: Type`",
    "C": "Only in nightly Rust",
    "D": "Yes, but they must be overridden"
   },
   "correct": "B",
   "explanation": "Yes, with `const NAME: Type`. Traits can have associated constants, types, and methods.",
   "part": 3
  },
  {
   "id": 210,
   "question": "What does `impl Trait` as a return type mean?",
   "options": {
    "A": "Returns a concrete type that implements the trait (opaque type)",
    "B": "Returns the trait itself",
    "C": "Returns a generic type",
    "D": "Returns a trait object"
   },
   "correct": "A",
   "explanation": "Returns a concrete type that implements the trait (opaque type). The caller knows it implements the trait but not the concrete type.",
   "part": 3
  },
  {
   "id": 211,
   "question": "Which trait is required for `println!(\"{}\", x)` to work?",
   "options": {
    "A": "`Debug`",
    "B": "`Display`",
    "C": "`ToString`",
    "D": "`Print`"
   },
   "correct": "B",
   "explanation": "`Display`. The `{}` format specifier uses `Display`; `{:?}` uses `Debug`.",
   "part": 3
  },
  {
   "id": 212,
   "question": "What does `#[derive(Debug)]` provide?",
   "options": {
    "A": "Human-readable output for `{:?}` and `{:#?}`",
    "B": "Compile-time debugging symbols",
    "C": "Runtime debug assertions",
    "D": "Stack trace on panic"
   },
   "correct": "A",
   "explanation": "Human-readable output for `{:?}` and `{:#?}`. `Debug` is used for debugging output.",
   "part": 3
  },
  {
   "id": 213,
   "question": "What is the difference between `Clone` and `Copy`?",
   "options": {
    "A": "`Copy` is a superset of `Clone`",
    "B": "`Copy` implies trivial bitwise copy; `Clone` can have custom logic",
    "C": "`Clone` is for references, `Copy` is for values",
    "D": "They are identical"
   },
   "correct": "B",
   "explanation": "`Copy` implies trivial bitwise copy (no custom logic); `Clone` can have custom clone logic. `Copy` types implicitly implement `Clone`.",
   "part": 3
  },
  {
   "id": 214,
   "question": "Why can't `String` implement `Copy`?",
   "options": {
    "A": "It's in the standard library",
    "B": "It contains heap-allocated data; copying would be expensive and ambiguous",
    "C": "It implements `Clone` instead",
    "D": "`Copy` is only for primitive types"
   },
   "correct": "B",
   "explanation": "It contains heap-allocated data; copying would be expensive and ambiguous (would it clone the buffer or share it?).",
   "part": 3
  },
  {
   "id": 215,
   "question": "What does `PartialEq` require that `Eq` adds?",
   "options": {
    "A": "`Eq` adds reflexivity: `a == a` for all `a`",
    "B": "`Eq` adds commutativity",
    "C": "`Eq` adds transitivity",
    "D": "`Eq` is a marker with no extra requirements"
   },
   "correct": "A",
   "explanation": "`Eq` adds reflexivity: `a == a` for all `a`. `PartialEq` allows `NaN != NaN`; `Eq` does not.",
   "part": 3
  },
  {
   "id": 216,
   "question": "When would you use `Hash`?",
   "options": {
    "A": "For types used as keys in `HashMap` or in `HashSet`",
    "B": "For cryptographic hashing",
    "C": "For checksums",
    "D": "For serialization"
   },
   "correct": "A",
   "explanation": "For types used as keys in `HashMap` or in `HashSet`. Types with `Hash` can be hashed consistently.",
   "part": 3
  },
  {
   "id": 217,
   "question": "What does `Default` provide?",
   "options": {
    "A": "A way to create a default instance with `Default::default()` or `Type::default()`",
    "B": "Default method implementations in traits",
    "C": "Default function parameters",
    "D": "Fallback values for Option"
   },
   "correct": "A",
   "explanation": "A way to create a default instance with `Default::default()` or `Type::default()`.",
   "part": 3
  },
  {
   "id": 218,
   "question": "If you implement `From<T> for U`, what do you get for free?",
   "options": {
    "A": "`Into<U>` for `T`",
    "B": "`TryFrom` for `U`",
    "C": "`AsRef<U>` for `T`",
    "D": "Nothing—you must implement both"
   },
   "correct": "A",
   "explanation": "`Into<U>` for `T`. Implementing `From` automatically provides the blanket `Into` implementation.",
   "part": 3
  },
  {
   "id": 219,
   "question": "What does the `Iterator` trait's `Item` represent?",
   "options": {
    "A": "The number of items",
    "B": "The type of each yielded element",
    "C": "The index type",
    "D": "The iterator's state"
   },
   "correct": "B",
   "explanation": "The type of each yielded element. `Item` is an associated type of the `Iterator` trait.",
   "part": 3
  },
  {
   "id": 220,
   "question": "Which method is required when implementing `Iterator`?",
   "options": {
    "A": "`next()`",
    "B": "`iter()`",
    "C": "`into_iter()`",
    "D": "`collect()`"
   },
   "correct": "A",
   "explanation": "`next()`. The `Iterator` trait only requires implementing `next()`; other methods have default implementations.",
   "part": 3
  },
  {
   "id": 221,
   "question": "What does this generic function signature mean: `fn foo<T>(x: T) -> T`?",
   "options": {
    "A": "`T` must be `Copy`",
    "B": "`foo` works with any type `T`, and returns a value of the same type",
    "C": "`T` must be `Clone`",
    "D": "`T` is a trait"
   },
   "correct": "B",
   "explanation": "`foo` works with any type `T`, and returns a value of the same type. No trait bounds means minimal requirements.",
   "part": 3
  },
  {
   "id": 222,
   "question": "How do you constrain a generic `T` to types that implement `Display`?",
   "options": {
    "A": "`fn foo<T: Display>(x: T)`",
    "B": "`fn foo<T where T: Display>(x: T)`",
    "C": "Both A and B",
    "D": "`fn foo<T impl Display>(x: T)`"
   },
   "correct": "C",
   "explanation": "Both A and B. `T: Display` and `where T: Display` are valid trait bound syntaxes.",
   "part": 3
  },
  {
   "id": 223,
   "question": "What is a `where` clause used for?",
   "options": {
    "A": "To specify the crate where a type comes from",
    "B": "To add trait bounds when the signature would be too long",
    "C": "To define local variables",
    "D": "To specify module paths"
   },
   "correct": "B",
   "explanation": "To add trait bounds when the signature would be too long. `where` clauses improve readability.",
   "part": 3
  },
  {
   "id": 224,
   "question": "Can a struct have generic type parameters?",
   "options": {
    "A": "No, only functions",
    "B": "Yes, e.g. `struct Foo<T> { x: T }`",
    "C": "Only with `impl` blocks",
    "D": "Yes, but only one parameter"
   },
   "correct": "B",
   "explanation": "Yes, e.g. `struct Foo<T> { x: T }`. Structs, enums, and functions can all be generic.",
   "part": 3
  },
  {
   "id": 225,
   "question": "What does `impl<T> Foo<T>` mean?",
   "options": {
    "A": "`Foo` implements `T`",
    "B": "Implementation for `Foo` for any type `T`",
    "C": "`T` implements `Foo`",
    "D": "Generic implementation block for `Foo`"
   },
   "correct": "D",
   "explanation": "Generic implementation block for `Foo`. `impl<T> Foo<T>` provides methods for `Foo` with any `T`.",
   "part": 3
  },
  {
   "id": 226,
   "question": "What is `impl Trait` in argument position (e.g. `fn foo(x: impl Display)`)?",
   "options": {
    "A": "Accepts a trait object",
    "B": "Accepts any type that implements the trait (syntactic sugar for a generic)",
    "C": "Accepts only `Display` type",
    "D": "Invalid syntax"
   },
   "correct": "B",
   "explanation": "Accepts any type that implements the trait. It's syntactic sugar for a generic with a trait bound.",
   "part": 3
  },
  {
   "id": 227,
   "question": "What is the difference between `fn f<T: Display>(x: T)` and `fn f(x: impl Display)`?",
   "options": {
    "A": "No difference; they are equivalent",
    "B": "`impl Display` cannot be used as return type in the same function",
    "C": "With `T`, you can use `T` in multiple parameters and enforce same type",
    "D": "Both B and C"
   },
   "correct": "C",
   "explanation": "With `T`, you can use `T` in multiple parameters and enforce the same type (e.g. `fn f(a: T, b: T)`). With `impl Display`, each parameter could be a different type.",
   "part": 3
  },
  {
   "id": 228,
   "question": "Can enums have generic parameters?",
   "options": {
    "A": "No",
    "B": "Yes, e.g. `enum Result<T, E> { Ok(T), Err(E) }`",
    "C": "Only in nightly",
    "D": "Only for `Option` and `Result`"
   },
   "correct": "B",
   "explanation": "Yes, e.g. `enum Result<T, E> { Ok(T), Err(E) }`. Enums commonly use generics.",
   "part": 3
  },
  {
   "id": 229,
   "question": "What does `T: Clone + Display` mean?",
   "options": {
    "A": "`T` implements both `Clone` and `Display`",
    "B": "`T` implements `Clone` or `Display`",
    "C": "`T` is a tuple of `(Clone, Display)`",
    "D": "Invalid syntax"
   },
   "correct": "A",
   "explanation": "`T` implements both `Clone` and `Display`. The `+` combines trait bounds.",
   "part": 3
  },
  {
   "id": 230,
   "question": "In `fn foo<T, U>(t: T, u: U) where T: Display, U: Debug`, what are the bounds?",
   "options": {
    "A": "`T` and `U` must both implement `Display` and `Debug`",
    "B": "`T` must implement `Display`, `U` must implement `Debug`",
    "C": "At least one of `T` or `U` must implement both",
    "D": "Invalid—cannot have multiple generics with different bounds"
   },
   "correct": "B",
   "explanation": "`T` must implement `Display`, `U` must implement `Debug`. Each generic has its own bounds.",
   "part": 3
  },
  {
   "id": 231,
   "question": "What is an associated type in a trait?",
   "options": {
    "A": "A type that is associated with a module",
    "B": "A type specified by the implementor instead of the caller (e.g. `Iterator::Item`)",
    "C": "A type parameter of the trait",
    "D": "A type alias"
   },
   "correct": "B",
   "explanation": "A type specified by the implementor instead of the caller. `Iterator::Item` is chosen per type, not per call.",
   "part": 3
  },
  {
   "id": 232,
   "question": "Why use associated types instead of generic traits? `trait Iter<T> { fn next(&mut self) -> Option<T>; }` vs `trait Iterator { type Item; fn next(&mut self) -> Option<Self::Item>; }`",
   "options": {
    "A": "Associated types are faster",
    "B": "With generics, a type could implement `Iter<i32>` and `Iter<String>`; with associated types, one `Item` per impl",
    "C": "Associated types are required by the compiler",
    "D": "No practical difference"
   },
   "correct": "B",
   "explanation": "With generics, a type could implement `Iter<i32>` and `Iter<String>`; with associated types, there is one `Item` per impl, simplifying usage.",
   "part": 3
  },
  {
   "id": 233,
   "question": "Which traits allow overloading the `+` operator?",
   "options": {
    "A": "`Add`",
    "B": "`AddAssign`",
    "C": "`std::ops::Add`",
    "D": "Both A and C (they are the same)"
   },
   "correct": "D",
   "explanation": "Both A and C. `Add` is in `std::ops::Add`; they refer to the same trait.",
   "part": 3
  },
  {
   "id": 234,
   "question": "What does `Deref` provide?",
   "options": {
    "A": "Deep copy semantics",
    "B": "Custom dereference behavior (e.g. `*x` for smart pointers)",
    "C": "Reference conversion",
    "D": "Destructuring"
   },
   "correct": "B",
   "explanation": "Custom dereference behavior. Smart pointers like `Box<T>` implement `Deref` so `*boxed` gives `T`.",
   "part": 3
  },
  {
   "id": 235,
   "question": "What is deref coercion?",
   "options": {
    "A": "Converting `&T` to `&U` when `T: Deref<Target = U>`",
    "B": "Converting `T` to `U`",
    "C": "Converting `Box<T>` to `T`",
    "D": "A compiler bug"
   },
   "correct": "A",
   "explanation": "Converting `&T` to `&U` when `T: Deref<Target = U>`. E.g. `&String` coerces to `&str`.",
   "part": 3
  },
  {
   "id": 236,
   "question": "What is a trait object (e.g. `dyn Trait`)?",
   "options": {
    "A": "A generic type",
    "B": "A value that can hold any type implementing the trait, using dynamic dispatch",
    "C": "A trait definition",
    "D": "An enum"
   },
   "correct": "B",
   "explanation": "A value that can hold any type implementing the trait, using dynamic dispatch (vtable).",
   "part": 3
  },
  {
   "id": 237,
   "question": "What does \"object safety\" mean for traits?",
   "options": {
    "A": "The trait is safe to use",
    "B": "The trait can be used as a trait object (`dyn Trait`); it must not have methods that return `Self` or have generic methods",
    "C": "The trait has no unsafe code",
    "D": "The trait is thread-safe"
   },
   "correct": "B",
   "explanation": "The trait can be used as a trait object; it must not have methods that return `Self` or have generic methods.",
   "part": 3
  },
  {
   "id": 238,
   "question": "Why can't `Clone` be used as `dyn Clone` easily?",
   "options": {
    "A": "It's not in std",
    "B": "`clone()` returns `Self`, which is not object-safe",
    "C": "It requires `Copy`",
    "D": "It has generic methods"
   },
   "correct": "B",
   "explanation": "`clone()` returns `Self`, which is not object-safe. The compiler cannot know the size of `Self` at compile time for `dyn Clone`.",
   "part": 3
  },
  {
   "id": 239,
   "question": "What does `DerefMut` add over `Deref`?",
   "options": {
    "A": "Nothing—they are the same",
    "B": "Mutable dereference: `*x` when `x` is `&mut T`",
    "C": "Multiple dereference levels",
    "D": "Dereference for references only"
   },
   "correct": "B",
   "explanation": "Mutable dereference. `DerefMut` is used when you need `*x = value` through a smart pointer.",
   "part": 3
  },
  {
   "id": 240,
   "question": "Which syntax creates a trait object?",
   "options": {
    "A": "`Box<dyn Display>`",
    "B": "`&dyn Display`",
    "C": "Both A and B",
    "D": "`impl Display`"
   },
   "correct": "C",
   "explanation": "Both A and B. Trait objects can be behind `Box`, `&`, `&mut`, etc.",
   "part": 3
  },
  {
   "id": 241,
   "question": "What does `Result<T, E>` represent?",
   "options": {
    "A": "A value that might be absent",
    "B": "A computation that can succeed with `T` or fail with `E`",
    "C": "A tuple of two values",
    "D": "An error only"
   },
   "correct": "B",
   "explanation": "A computation that can succeed with `T` or fail with `E`. `Ok(T)` or `Err(E)`.",
   "part": 3
  },
  {
   "id": 242,
   "question": "What does `Option<T>` represent?",
   "options": {
    "A": "A required value of type `T`",
    "B": "An optional value: `Some(T)` or `None`",
    "C": "A default value",
    "D": "A result type"
   },
   "correct": "B",
   "explanation": "An optional value: `Some(T)` or `None`. Used when a value might be absent.",
   "part": 3
  },
  {
   "id": 243,
   "question": "What does the `?` operator do?",
   "options": {
    "A": "Returns the value if `Ok`, or propagates the error to the caller",
    "B": "Unwraps the value, panicking on error",
    "C": "Converts `Option` to `Result`",
    "D": "Checks for null"
   },
   "correct": "A",
   "explanation": "Returns the value if `Ok`, or propagates the error to the caller. Requires the function to return `Result` or `Option`.",
   "part": 3
  },
  {
   "id": 244,
   "question": "What is the difference between `unwrap()` and `expect(msg)`?",
   "options": {
    "A": "No difference",
    "B": "`expect` lets you provide a custom panic message",
    "C": "`unwrap` is for `Option`, `expect` is for `Result`",
    "D": "`expect` never panics"
   },
   "correct": "B",
   "explanation": "`expect` lets you provide a custom panic message. Both panic on `None`/`Err`.",
   "part": 3
  },
  {
   "id": 245,
   "question": "What does `result.map(|x| x + 1)` do?",
   "options": {
    "A": "Adds 1 to the error",
    "B": "If `Ok(v)`, produces `Ok(v + 1)`; if `Err`, passes through",
    "C": "Unwraps and adds 1",
    "D": "Panics on `Err`"
   },
   "correct": "B",
   "explanation": "If `Ok(v)`, produces `Ok(v + 1)`; if `Err`, passes through unchanged.",
   "part": 3
  },
  {
   "id": 246,
   "question": "What does `result.and_then(|x| Ok(x + 1))` do?",
   "options": {
    "A": "Same as `map`",
    "B": "Chains computations that return `Result`; flattens nested `Result`s",
    "C": "Only works with `Option`",
    "D": "Runs in a separate thread"
   },
   "correct": "B",
   "explanation": "Chains computations that return `Result`; flattens nested `Result`s. The closure returns `Result`, not a raw value.",
   "part": 3
  },
  {
   "id": 247,
   "question": "When should you use `unwrap()` in production code?",
   "options": {
    "A": "Always—it's the idiomatic way",
    "B": "Rarely; prefer `?` or proper error handling",
    "C": "Only for `Option`",
    "D": "Never"
   },
   "correct": "B",
   "explanation": "Rarely; prefer `?` or proper error handling. `unwrap` is for prototypes or when you're certain.",
   "part": 3
  },
  {
   "id": 248,
   "question": "What does `option.unwrap_or(default)` do?",
   "options": {
    "A": "Unwraps or panics with `default` message",
    "B": "Returns the value if `Some`, otherwise returns `default`",
    "C": "Swaps `Some` and `None`",
    "D": "Converts to `Result`"
   },
   "correct": "B",
   "explanation": "Returns the value if `Some`, otherwise returns `default`. Provides a fallback without panicking.",
   "part": 3
  },
  {
   "id": 249,
   "question": "What does `result.map_err(|e| MyError::from(e))` do?",
   "options": {
    "A": "Maps the success value",
    "B": "Maps the error value, converting it to another error type",
    "C": "Ignores the error",
    "D": "Panics on error"
   },
   "correct": "B",
   "explanation": "Maps the error value, converting it to another error type. Useful for error conversion chains.",
   "part": 3
  },
  {
   "id": 250,
   "question": "Can the `?` operator be used in `main()`?",
   "options": {
    "A": "Yes, always",
    "B": "No, never",
    "C": "Yes, if `main()` returns `Result<(), E>` where `E` implements `Debug` (or use `Box<dyn Error>`)",
    "D": "Only in test functions"
   },
   "correct": "C",
   "explanation": "Yes, if `main()` returns `Result<(), E>` (Rust 1.26+). The error type must implement `Termination` (e.g. `Debug`, `Display`, `Box<dyn Error>`).",
   "part": 3
  },
  {
   "id": 251,
   "question": "What does `thiserror` typically provide?",
   "options": {
    "A": "Runtime error handling",
    "B": "Derive macro for custom error types with `#[derive(thiserror::Error)]`",
    "C": "Global error handler",
    "D": "Error logging"
   },
   "correct": "B",
   "explanation": "Derive macro for custom error types with `#[derive(thiserror::Error)]`. Reduces boilerplate for error types.",
   "part": 3
  },
  {
   "id": 252,
   "question": "What does `anyhow` typically provide?",
   "options": {
    "A": "Strongly typed errors",
    "B": "`anyhow::Result<T>` for application-level code where you don't care about the exact error type",
    "C": "Compile-time error checking",
    "D": "Error serialization"
   },
   "correct": "B",
   "explanation": "`anyhow::Result<T>` for application-level code where you don't care about the exact error type. Good for binaries.",
   "part": 3
  },
  {
   "id": 253,
   "question": "If you implement `From<OtherError> for MyError`, what does that enable?",
   "options": {
    "A": "Converting `OtherError` to `MyError` with `?` operator automatically",
    "B": "Cloning errors",
    "C": "Comparing errors",
    "D": "Logging errors"
   },
   "correct": "A",
   "explanation": "Converting `OtherError` to `MyError` with `?` operator automatically. The `?` operator uses `From` for conversion.",
   "part": 3
  },
  {
   "id": 254,
   "question": "What is an error chain?",
   "options": {
    "A": "A linked list of errors",
    "B": "A sequence of errors caused by each other (e.g. via `source()`)",
    "C": "A chain of `Result` types",
    "D": "A macro for error handling"
   },
   "correct": "B",
   "explanation": "A sequence of errors caused by each other. The `Error::source()` method traverses the chain.",
   "part": 3
  },
  {
   "id": 255,
   "question": "When should you use `panic!` vs returning `Result`?",
   "options": {
    "A": "Always use `panic!`",
    "B": "Use `panic!` for unrecoverable bugs; use `Result` for expected failures",
    "C": "Always use `Result`",
    "D": "Use `panic!` in libraries, `Result` in applications"
   },
   "correct": "B",
   "explanation": "Use `panic!` for unrecoverable bugs (programmer errors); use `Result` for expected failures (user input, I/O).",
   "part": 3
  },
  {
   "id": 256,
   "question": "What does `#[derive(Debug)]` on an error type enable?",
   "options": {
    "A": "Pretty printing for `{:?}`",
    "B": "The `Error` trait",
    "C": "`Display` implementation",
    "D": "Serialization"
   },
   "correct": "A",
   "explanation": "Pretty printing for `{:?}`. The `Error` trait requires `Debug`; `thiserror` derives it.",
   "part": 3
  },
  {
   "id": 257,
   "question": "What is the `std::error::Error` trait's `source()` method for?",
   "options": {
    "A": "Getting the error message",
    "B": "Getting the underlying cause of the error (error chain)",
    "C": "Getting the file and line number",
    "D": "Getting the error type name"
   },
   "correct": "B",
   "explanation": "Getting the underlying cause of the error. Enables error chaining and root cause analysis.",
   "part": 3
  },
  {
   "id": 258,
   "question": "In `thiserror`, what does `#[from]` on a field do?",
   "options": {
    "A": "Imports the type",
    "B": "Generates `From` implementation for that error type",
    "C": "Marks the field as the source",
    "D": "Converts from reference"
   },
   "correct": "B",
   "explanation": "Generates `From` implementation for that error type. Allows `?` to convert that error into your type.",
   "part": 3
  },
  {
   "id": 259,
   "question": "When would you use `anyhow::Context`?",
   "options": {
    "A": "For adding context messages when propagating errors: `.context(\"failed to read config\")`",
    "B": "For error types",
    "C": "For threading",
    "D": "For async"
   },
   "correct": "A",
   "explanation": "For adding context messages when propagating errors. E.g. `read_file().context(\"failed to read config\")`.",
   "part": 3
  },
  {
   "id": 260,
   "question": "What does `Box<dyn std::error::Error>` represent?",
   "options": {
    "A": "A specific error type",
    "B": "Any type implementing `Error`, useful as a generic error type",
    "C": "A boxed panic",
    "D": "A deprecated type"
   },
   "correct": "B",
   "explanation": "Any type implementing `Error`, useful as a generic error type when you need to return various errors.",
   "part": 3
  },
  {
   "id": 261,
   "question": "What are the three closure traits in Rust?",
   "options": {
    "A": "`Fn`, `FnMut`, `FnOnce`",
    "B": "`Closure`, `Lambda`, `Function`",
    "C": "`Call`, `CallMut`, `CallOnce`",
    "D": "`fn`, `fn mut`, `fn once`"
   },
   "correct": "A",
   "explanation": "`Fn`, `FnMut`, `FnOnce`. These are the three closure traits, from most to least restrictive.",
   "part": 3
  },
  {
   "id": 262,
   "question": "What does `FnOnce` mean?",
   "options": {
    "A": "The closure can only be called once",
    "B": "The closure takes ownership of captured values; it can be called at most once",
    "C": "The closure runs once at compile time",
    "D": "The closure is single-threaded"
   },
   "correct": "B",
   "explanation": "The closure takes ownership of captured values; it can be called at most once. Used when the closure moves out of captures.",
   "part": 3
  },
  {
   "id": 263,
   "question": "What does `FnMut` mean?",
   "options": {
    "A": "The closure can mutate its environment",
    "B": "The closure takes `&mut self`; it can mutate captured values",
    "C": "The closure returns a mutable reference",
    "D": "The closure is mutable"
   },
   "correct": "B",
   "explanation": "The closure takes `&mut self`; it can mutate captured values. Can be called multiple times.",
   "part": 3
  },
  {
   "id": 264,
   "question": "What does `Fn` mean?",
   "options": {
    "A": "The closure is a function",
    "B": "The closure takes `&self`; it can be called multiple times without mutating captures",
    "C": "The closure takes `self`",
    "D": "The closure is the same as `fn`"
   },
   "correct": "B",
   "explanation": "The closure takes `&self`; it can be called multiple times without mutating captures. Most flexible for callers.",
   "part": 3
  },
  {
   "id": 265,
   "question": "What is the relationship between `Fn`, `FnMut`, and `FnOnce`?",
   "options": {
    "A": "They are unrelated",
    "B": "`Fn` is a subtrait of `FnMut`, which is a subtrait of `FnOnce`",
    "C": "`FnOnce` is a subtrait of `FnMut`, which is a subtrait of `Fn`",
    "D": "Only `Fn` and `FnMut` are related"
   },
   "correct": "B",
   "explanation": "`Fn` is a subtrait of `FnMut`, which is a subtrait of `FnOnce`. So `Fn` can be used where `FnMut` or `FnOnce` is expected.",
   "part": 3
  },
  {
   "id": 266,
   "question": "What does `iter.map(|x| x + 1)` return?",
   "options": {
    "A": "A `Vec`",
    "B": "A new iterator that yields transformed values (lazy)",
    "C": "The original iterator",
    "D": "`Option<i32>`"
   },
   "correct": "B",
   "explanation": "A new iterator that yields transformed values. Iterators are lazy; no work until consumed.",
   "part": 3
  },
  {
   "id": 267,
   "question": "What does `iter.filter(|x| x > 0)` do?",
   "options": {
    "A": "Filters in place",
    "B": "Returns an iterator that yields only elements satisfying the predicate",
    "C": "Returns a `Vec`",
    "D": "Consumes the iterator"
   },
   "correct": "B",
   "explanation": "Returns an iterator that yields only elements satisfying the predicate. Lazy adapter.",
   "part": 3
  },
  {
   "id": 268,
   "question": "What is an iterator consumer?",
   "options": {
    "A": "A function that creates iterators",
    "B": "A method that consumes the iterator and produces a value (e.g. `collect`, `sum`, `count`)",
    "C": "A closure that consumes values",
    "D": "A trait"
   },
   "correct": "B",
   "explanation": "A method that consumes the iterator and produces a value. Examples: `collect`, `sum`, `count`, `find`.",
   "part": 3
  },
  {
   "id": 269,
   "question": "What does `vec.into_iter().collect::<Vec<_>>()` do?",
   "options": {
    "A": "Nothing—invalid",
    "B": "Consumes the vector and collects into a new `Vec` (essentially a copy for `Vec<T>` where `T: Copy`)",
    "C": "Clones the vector",
    "D": "Moves the vector"
   },
   "correct": "B",
   "explanation": "Consumes the vector and collects into a new `Vec`. For `Vec<T>` with `T: Copy`, this is like cloning; otherwise it moves elements.",
   "part": 3
  },
  {
   "id": 270,
   "question": "What does `iter.fold(0, |acc, x| acc + x)` do?",
   "options": {
    "A": "Folds the iterator into an `Option`",
    "B": "Reduces the iterator to a single value using the closure (like `sum`)",
    "C": "Unfolds values",
    "D": "Filters by accumulator"
   },
   "correct": "B",
   "explanation": "Reduces the iterator to a single value using the closure. `fold(init, |acc, x| ...)` accumulates into `acc`.",
   "part": 3
  },
  {
   "id": 271,
   "question": "What does `(0..10)` create?",
   "options": {
    "A": "A `Vec` of 0 to 9",
    "B": "A range iterator from 0 to 9 (exclusive)",
    "C": "A range from 0 to 10 inclusive",
    "D": "A slice"
   },
   "correct": "B",
   "explanation": "A range iterator from 0 to 9 (exclusive). `0..10` is `Range`; `0..=10` is inclusive.",
   "part": 3
  },
  {
   "id": 272,
   "question": "What is the difference between `iter()` and `into_iter()`?",
   "options": {
    "A": "No difference",
    "B": "`iter()` borrows, yields `&T`; `into_iter()` consumes, yields `T`",
    "C": "`iter()` consumes, `into_iter()` borrows",
    "D": "`iter()` is for arrays only"
   },
   "correct": "B",
   "explanation": "`iter()` borrows, yields `&T`; `into_iter()` consumes the collection, yields `T`.",
   "part": 3
  },
  {
   "id": 273,
   "question": "What does `iter.enumerate()` yield?",
   "options": {
    "A": "Just the values",
    "B": "Pairs `(index, value)`",
    "C": "Indexes only",
    "D": "References"
   },
   "correct": "B",
   "explanation": "Pairs `(index, value)`. Useful for loops with index: `for (i, x) in items.enumerate()`.",
   "part": 3
  },
  {
   "id": 274,
   "question": "What does `iter.chain(other)` do?",
   "options": {
    "A": "Chains two iterators into one that yields from both in sequence",
    "B": "Links two iterators",
    "C": "Zips two iterators",
    "D": "Merges sorted iterators"
   },
   "correct": "A",
   "explanation": "Chains two iterators into one that yields from both in sequence. First all from `iter`, then all from `other`.",
   "part": 3
  },
  {
   "id": 275,
   "question": "What does `iter.zip(other)` yield?",
   "options": {
    "A": "Pairs `(a, b)` from both iterators",
    "B": "A single iterator",
    "C": "Tuples of length 3",
    "D": "Chained values"
   },
   "correct": "A",
   "explanation": "Pairs `(a, b)` from both iterators. Stops when the shorter iterator ends.",
   "part": 3
  },
  {
   "id": 276,
   "question": "What does `Option<T>` implement `IntoIterator` for?",
   "options": {
    "A": "It doesn't",
    "B": "It yields 0 or 1 element—useful for `iter.flat_map(|x| x.into_iter())`",
    "C": "It yields infinite elements",
    "D": "Only for `Option<&T>`"
   },
   "correct": "B",
   "explanation": "It yields 0 or 1 element. `None` yields nothing; `Some(x)` yields `x`. Useful with `flat_map`.",
   "part": 3
  },
  {
   "id": 277,
   "question": "What does `iter.take(n)` do?",
   "options": {
    "A": "Takes ownership",
    "B": "Yields at most `n` elements",
    "C": "Skips `n` elements",
    "D": "Takes the nth element"
   },
   "correct": "B",
   "explanation": "Yields at most `n` elements. Limits the iterator length.",
   "part": 3
  },
  {
   "id": 278,
   "question": "What does `iter.skip(n)` do?",
   "options": {
    "A": "Skips the first `n` elements, yields the rest",
    "B": "Skips all elements",
    "C": "Skips errors",
    "D": "Skips duplicates"
   },
   "correct": "A",
   "explanation": "Skips the first `n` elements, yields the rest. Opposite of `take`.",
   "part": 3
  },
  {
   "id": 279,
   "question": "What does `iter.find(|x| x > 5)` return?",
   "options": {
    "A": "All elements > 5",
    "B": "`Option<&T>`—the first element satisfying the predicate, or `None`",
    "C": "`bool`",
    "D": "`Result<T, E>`"
   },
   "correct": "B",
   "explanation": "`Option<&T>`—the first element satisfying the predicate, or `None`. Consumes the iterator.",
   "part": 3
  },
  {
   "id": 280,
   "question": "What does `iter.any(|x| x > 5)` return?",
   "options": {
    "A": "All elements > 5",
    "B": "`Option<bool>`",
    "C": "`bool`—true if any element satisfies the predicate",
    "D": "The first matching element"
   },
   "correct": "C",
   "explanation": "`bool`—true if any element satisfies the predicate. Short-circuits on first match.",
   "part": 3
  },
  {
   "id": 281,
   "question": "What does `iter.all(|x| x > 0)` return?",
   "options": {
    "A": "All elements > 0",
    "B": "`bool`—true if every element satisfies the predicate",
    "C": "`Option<bool>`",
    "D": "The count of matching elements"
   },
   "correct": "B",
   "explanation": "`bool`—true if every element satisfies the predicate. Short-circuits on first false.",
   "part": 3
  },
  {
   "id": 282,
   "question": "What does `vec.iter().cloned()` yield?",
   "options": {
    "A": "References `&T`",
    "B": "Cloned values `T` (requires `T: Clone`)",
    "C": "Copied values (requires `T: Copy`)",
    "D": "Moved values"
   },
   "correct": "B",
   "explanation": "Cloned values `T`. For `Iterator<Item = &T>`, produces `T` by cloning. Requires `T: Clone`.",
   "part": 3
  },
  {
   "id": 283,
   "question": "What does `iter.rev()` require?",
   "options": {
    "A": "`T: Clone`",
    "B": "The iterator must be `DoubleEndedIterator`",
    "C": "`T: Copy`",
    "D": "Nothing special"
   },
   "correct": "B",
   "explanation": "The iterator must be `DoubleEndedIterator`. `rev()` iterates from the end.",
   "part": 3
  },
  {
   "id": 284,
   "question": "What does `iter.peekable()` provide?",
   "options": {
    "A": "A way to peek at the next element without consuming it",
    "B": "A sorted iterator",
    "C": "A cached iterator",
    "D": "A parallel iterator"
   },
   "correct": "A",
   "explanation": "A way to peek at the next element without consuming it. `peek()` returns `Option<&Item>`.",
   "part": 3
  },
  {
   "id": 285,
   "question": "What does `iter.collect::<Vec<_>>()` do?",
   "options": {
    "A": "Collects into a `Vec`; the type must be specified or inferrable",
    "B": "Collects into a `HashMap`",
    "C": "Collects into a `String`",
    "D": "Collects into any collection—no type needed"
   },
   "correct": "A",
   "explanation": "Collects into a `Vec`; the type must be specified or inferrable. `collect` can produce various types.",
   "part": 3
  },
  {
   "id": 286,
   "question": "What does `iter.partition(|x| x > 5)` return?",
   "options": {
    "A": "`Vec<T>`",
    "B": "`(Vec<T>, Vec<T>)`—two collections split by the predicate",
    "C": "`Option<(Vec<T>, Vec<T>)>`",
    "D": "`bool`"
   },
   "correct": "B",
   "explanation": "`(Vec<T>, Vec<T>)`—two collections split by the predicate. First for true, second for false.",
   "part": 3
  },
  {
   "id": 287,
   "question": "What does `iter.flatten()` do when `Item` is `IntoIterator`?",
   "options": {
    "A": "Flattens one level of nesting: `[[1,2],[3]]` → `[1,2,3]`",
    "B": "Flattens all levels",
    "C": "Flattens only `Option`",
    "D": "Invalid—`flatten` is for `Option` only"
   },
   "correct": "A",
   "explanation": "Flattens one level of nesting. For `Iterator<Item = I>` where `I: IntoIterator`, yields the inner items.",
   "part": 3
  },
  {
   "id": 288,
   "question": "What does `iter.flat_map(|x| x.into_iter())` do?",
   "options": {
    "A": "Maps then flattens one level",
    "B": "Same as `map`",
    "C": "Flattens all levels",
    "D": "Invalid"
   },
   "correct": "A",
   "explanation": "Maps then flattens one level. Equivalent to `map(...).flatten()`.",
   "part": 3
  },
  {
   "id": 289,
   "question": "What does `iter.copied()` require?",
   "options": {
    "A": "`T: Clone`",
    "B": "`T: Copy` (for `Iterator<Item = &T>`)",
    "C": "`T: Default`",
    "D": "Nothing"
   },
   "correct": "B",
   "explanation": "`T: Copy`. For `Iterator<Item = &T>`, produces `T` by copying. More efficient than `cloned` when `T: Copy`.",
   "part": 3
  },
  {
   "id": 290,
   "question": "What does `iter.nth(3)` return?",
   "options": {
    "A": "The first 3 elements",
    "B": "`Option<Self::Item>`—the element at index 3 (0-based), consuming up to it",
    "C": "The 3rd element from the end",
    "D": "A sub-iterator"
   },
   "correct": "B",
   "explanation": "`Option<Self::Item>`—the element at index 3 (0-based). Consumes and discards elements 0..3, returns the 4th.",
   "part": 3
  },
  {
   "id": 291,
   "question": "What does `move` in a closure do? `let f = move || x;`",
   "options": {
    "A": "Moves the closure",
    "B": "Moves captured variables into the closure (takes ownership)",
    "C": "Moves the return value",
    "D": "Enables mutation"
   },
   "correct": "B",
   "explanation": "Moves captured variables into the closure. The closure takes ownership of `x`; useful for spawning threads.",
   "part": 3
  },
  {
   "id": 292,
   "question": "When does a closure implement `Fn` vs `FnMut` vs `FnOnce`?",
   "options": {
    "A": "Always `Fn`",
    "B": "Depends on what it captures and how: immutable borrows → `Fn`; mutable borrows → `FnMut`; ownership → `FnOnce`",
    "C": "Depends on the return type",
    "D": "Always `FnOnce`"
   },
   "correct": "B",
   "explanation": "Depends on what it captures: immutable borrows → `Fn`; mutable borrows → `FnMut`; ownership/moves → `FnOnce`.",
   "part": 3
  },
  {
   "id": 293,
   "question": "What does `|x, y| x + y` capture?",
   "options": {
    "A": "Nothing—it's a pure function of its arguments",
    "B": "Everything in scope",
    "C": "Only `x` and `y`",
    "D": "The environment"
   },
   "correct": "A",
   "explanation": "Nothing—it only uses its parameters. Closures capture from the environment only when they use outer variables.",
   "part": 3
  },
  {
   "id": 294,
   "question": "What does `iter.collect::<HashMap<_, _>>()` require?",
   "options": {
    "A": "`Item` must be `(K, V)`",
    "B": "`Item` must be `K`",
    "C": "`Item` must implement `Hash`",
    "D": "`Item` must be `String`"
   },
   "correct": "A",
   "explanation": "`Item` must be `(K, V)`. `HashMap` implements `FromIterator<(K, V)>`.",
   "part": 3
  },
  {
   "id": 295,
   "question": "What does `iter.collect::<String>()` require for `Iterator<Item = char>`?",
   "options": {
    "A": "`Item` must be `&str`",
    "B": "`Item` must be `char` or `&str` (via `FromIterator`)",
    "C": "`Item` must be `String`",
    "D": "Invalid—cannot collect to `String`"
   },
   "correct": "B",
   "explanation": "`Item` must be `char` or `&str`. `String` implements `FromIterator<char>` and `FromIterator<&str>`.",
   "part": 3
  },
  {
   "id": 296,
   "question": "What does `iter.sum()` return?",
   "options": {
    "A": "`Option<Item>`",
    "B": "The sum type (e.g. `i32` for `Iterator<Item = i32>`)",
    "C": "`Result<Item, Error>`",
    "D": "The iterator"
   },
   "correct": "B",
   "explanation": "The sum type. For `Iterator<Item = i32>`, returns `i32`. Requires `Item: Sum` (e.g. numbers).",
   "part": 3
  },
  {
   "id": 297,
   "question": "What does `iter.count()` return?",
   "options": {
    "A": "`Option<usize>`",
    "B": "`usize`—the number of elements",
    "C": "`u32`",
    "D": "The last element"
   },
   "correct": "B",
   "explanation": "`usize`—the number of elements. Consumes the iterator.",
   "part": 3
  },
  {
   "id": 298,
   "question": "What does `iter.last()` return?",
   "options": {
    "A": "`Option<Self::Item>`—the last element",
    "B": "The first element",
    "C": "`Vec<Self::Item>`",
    "D": "Consumes nothing"
   },
   "correct": "A",
   "explanation": "`Option<Self::Item>`—the last element. Consumes the entire iterator.",
   "part": 3
  },
  {
   "id": 299,
   "question": "What does `iter.max()` require (for `Iterator<Item = T>`)?",
   "options": {
    "A": "`Item: Ord`",
    "B": "`Item: PartialOrd`",
    "C": "`Item: Copy`",
    "D": "Nothing"
   },
   "correct": "A",
   "explanation": "`Item: Ord`. `Iterator::max()` requires `Item: Ord` for total ordering.",
   "part": 3
  },
  {
   "id": 300,
   "question": "What does `iter.min_by_key(|x| x.len())` return?",
   "options": {
    "A": "The minimum key",
    "B": "`Option<Self::Item>`—the element with the minimum key (by the closure)",
    "C": "The key of the minimum",
    "D": "A sorted iterator"
   },
   "correct": "B",
   "explanation": "`Option<Self::Item>`—the element with the minimum key. The closure extracts a comparable key from each element.",
   "part": 3
  },
  {
   "id": 301,
   "question": "What does `std::thread::spawn` return?",
   "options": {
    "A": "`Thread`",
    "B": "`JoinHandle<T>`",
    "C": "`Result<Thread, JoinError>`",
    "D": "`Option<JoinHandle<T>>`"
   },
   "correct": "B",
   "explanation": "`spawn` returns a `JoinHandle<T>` where `T` is the return type of the closure. Call `join()` on it to block and get the result.",
   "part": 4
  },
  {
   "id": 302,
   "question": "Which keyword is required when a closure needs to transfer ownership of captured variables to a spawned thread?",
   "options": {
    "A": "`clone`",
    "B": "`move`",
    "C": "`send`",
    "D": "`transfer`"
   },
   "correct": "B",
   "explanation": "The `move` keyword forces the closure to take ownership of captured variables, which is required for `thread::spawn` since the closure must be `'static`.",
   "part": 4
  },
  {
   "id": 303,
   "question": "What happens if you call `join()` on a `JoinHandle` and the thread panicked?",
   "options": {
    "A": "The program continues normally",
    "B": "`join()` returns `Ok(())`",
    "C": "`join()` returns `Err(Box<dyn Any + Send>)`",
    "D": "The main thread panics"
   },
   "correct": "C",
   "explanation": "If the thread panicked, `join()` returns `Err(Box<dyn Any + Send>)` containing the panic payload. The main thread does not automatically panic.",
   "part": 4
  },
  {
   "id": 304,
   "question": "Which function puts the current thread to sleep for a specified duration?",
   "options": {
    "A": "`std::thread::sleep()`",
    "B": "`std::thread::yield()`",
    "C": "`std::time::sleep()`",
    "D": "`std::thread::block()`"
   },
   "correct": "A",
   "explanation": "`std::thread::sleep(duration)` blocks the current thread for the given duration.",
   "part": 4
  },
  {
   "id": 305,
   "question": "What does this code do?\n```rust\nlet handle = std::thread::spawn(|| {\n    println!(\"Hello from thread\");\n});\nhandle.join().unwrap();\n```",
   "options": {
    "A": "Compile error: closure may outlive the current function",
    "B": "Spawns a thread, prints, and blocks until the thread finishes",
    "C": "Spawns a thread but never waits for it",
    "D": "Runs synchronously in the main thread"
   },
   "correct": "B",
   "explanation": "The closure has no captures, so it's `'static`. `spawn` creates a new thread, and `join().unwrap()` blocks until the thread completes.",
   "part": 4
  },
  {
   "id": 306,
   "question": "What is `std::thread::current()` used for?",
   "options": {
    "A": "Getting the main thread",
    "B": "Getting a handle to the current thread",
    "C": "Switching to another thread",
    "D": "Creating a new thread"
   },
   "correct": "B",
   "explanation": "`std::thread::current()` returns a `Thread` handle representing the current thread.",
   "part": 4
  },
  {
   "id": 307,
   "question": "Which trait must a type implement to be safely transferred between threads?",
   "options": {
    "A": "`Clone`",
    "B": "`Send`",
    "C": "`Sync`",
    "D": "`Copy`"
   },
   "correct": "B",
   "explanation": "The `Send` trait indicates that a type can be safely transferred across thread boundaries.",
   "part": 4
  },
  {
   "id": 308,
   "question": "What does `std::thread::yield_now()` do?",
   "options": {
    "A": "Terminates the current thread",
    "B": "Gives a hint to the scheduler to run other threads",
    "C": "Puts the thread to sleep indefinitely",
    "D": "Joins all other threads"
   },
   "correct": "B",
   "explanation": "`yield_now()` suggests to the scheduler that other threads should run. It's a hint, not a guarantee.",
   "part": 4
  },
  {
   "id": 309,
   "question": "Why does `Rc<T>` NOT implement `Send`?",
   "options": {
    "A": "It's too slow",
    "B": "It uses non-atomic reference counting",
    "C": "It's single-threaded by design",
    "D": "Both B and C"
   },
   "correct": "D",
   "explanation": "`Rc` uses non-atomic reference counting and is designed for single-threaded use. Sharing it across threads would cause data races.",
   "part": 4
  },
  {
   "id": 310,
   "question": "What is the purpose of `thread::scope` (Rust 1.63+)?",
   "options": {
    "A": "To limit thread lifetime to a scope",
    "B": "To allow spawning threads that borrow from the parent without `'static`",
    "C": "To automatically join all spawned threads",
    "D": "Both B and C"
   },
   "correct": "D",
   "explanation": "`thread::scope` creates a scope where spawned threads can borrow from the parent. All threads are automatically joined when the scope ends.",
   "part": 4
  },
  {
   "id": 311,
   "question": "What does `Arc` stand for?",
   "options": {
    "A": "Atomic Reference Count",
    "B": "Asynchronous Reference Counter",
    "C": "Automatic Resource Control",
    "D": "Atomic Rust Counter"
   },
   "correct": "A",
   "explanation": "`Arc` = Atomic Reference Count. It's the thread-safe version of `Rc`.",
   "part": 4
  },
  {
   "id": 312,
   "question": "Which type provides exclusive (write) access and shared (read) access with different semantics?",
   "options": {
    "A": "`Mutex<T>`",
    "B": "`RwLock<T>`",
    "C": "`AtomicPtr<T>`",
    "D": "`RefCell<T>`"
   },
   "correct": "B",
   "explanation": "`RwLock<T>` allows multiple readers OR one writer. `Mutex` allows only one holder at a time.",
   "part": 4
  },
  {
   "id": 313,
   "question": "What happens when a thread holding a `Mutex` lock panics?",
   "options": {
    "A": "The mutex is permanently poisoned",
    "B": "The mutex becomes \"poisoned\"; subsequent `lock()` returns `Err`",
    "C": "The lock is automatically released",
    "D": "Deadlock occurs"
   },
   "correct": "B",
   "explanation": "A poisoned mutex means a thread panicked while holding the lock. `lock()` returns `Err(PoisonError)` to prevent using potentially inconsistent data.",
   "part": 4
  },
  {
   "id": 314,
   "question": "Which pattern is commonly used for shared mutable state across threads?",
   "options": {
    "A": "`Rc<RefCell<T>>`",
    "B": "`Arc<Mutex<T>>`",
    "C": "`Box<Mutex<T>>`",
    "D": "`Mutex<Arc<T>>`"
   },
   "correct": "B",
   "explanation": "`Arc<Mutex<T>>` is the standard pattern: `Arc` for shared ownership across threads, `Mutex` for interior mutability.",
   "part": 4
  },
  {
   "id": 315,
   "question": "What does the `Sync` trait indicate?",
   "options": {
    "A": "A type can be sent between threads",
    "B": "A type can be shared between threads via references",
    "C": "A type is thread-safe",
    "D": "A type supports atomic operations"
   },
   "correct": "B",
   "explanation": "`Sync` means `&T` is `Send` (safe to share references across threads). `Send` is for transferring ownership.",
   "part": 4
  },
  {
   "id": 316,
   "question": "Which atomic type would you use for a lock-free counter?",
   "options": {
    "A": "`AtomicBool`",
    "B": "`AtomicUsize`",
    "C": "`AtomicPtr`",
    "D": "`Mutex<usize>`"
   },
   "correct": "B",
   "explanation": "`AtomicUsize` is ideal for lock-free counters. `fetch_add` and similar operations are atomic.",
   "part": 4
  },
  {
   "id": 317,
   "question": "What is a deadlock?",
   "options": {
    "A": "When a thread panics while holding a lock",
    "B": "When two or more threads wait for each other's locks indefinitely",
    "C": "When a mutex is poisoned",
    "D": "When `join()` is never called"
   },
   "correct": "B",
   "explanation": "Deadlock occurs when threads are waiting on each other's locks in a cycle, and none can proceed.",
   "part": 4
  },
  {
   "id": 318,
   "question": "Does `Arc<T>` allow mutable access to `T`?",
   "options": {
    "A": "Yes, always",
    "B": "No, never",
    "C": "Only if `T` implements `Clone`",
    "D": "Only when wrapped with `Mutex` or `RwLock`"
   },
   "correct": "D",
   "explanation": "`Arc` provides shared ownership. To mutate, you need interior mutability like `Mutex<T>` or `RwLock<T>` inside.",
   "part": 4
  },
  {
   "id": 319,
   "question": "What is the difference between `Mutex::lock()` and `Mutex::try_lock()`?",
   "options": {
    "A": "`try_lock` is faster",
    "B": "`try_lock` returns immediately; `lock` blocks until available",
    "C": "`try_lock` works only with `Arc`",
    "D": "There is no difference"
   },
   "correct": "B",
   "explanation": "`try_lock()` returns `Err` immediately if the lock is held; `lock()` blocks until the lock is available.",
   "part": 4
  },
  {
   "id": 320,
   "question": "Which ordering is typically used for \"release\" semantics in atomics?",
   "options": {
    "A": "`Ordering::Relaxed`",
    "B": "`Ordering::Acquire`",
    "C": "`Ordering::Release`",
    "D": "`Ordering::SeqCst`"
   },
   "correct": "C",
   "explanation": "`Ordering::Release` ensures previous writes are visible to threads that subsequently acquire the same location.",
   "part": 4
  },
  {
   "id": 321,
   "question": "What module provides multi-producer, single-consumer channels?",
   "options": {
    "A": "`std::sync::mpsc`",
    "B": "`std::channel`",
    "C": "`std::io::channel`",
    "D": "`std::thread::mpsc`"
   },
   "correct": "A",
   "explanation": "`std::sync::mpsc` provides the channel API.",
   "part": 4
  },
  {
   "id": 322,
   "question": "What does `mpsc` stand for?",
   "options": {
    "A": "Multi-process single consumer",
    "B": "Multiple producer single consumer",
    "C": "Message passing sync channel",
    "D": "Mutex-protected sync channel"
   },
   "correct": "B",
   "explanation": "mpsc = Multiple Producer, Single Consumer. Multiple senders can send to one receiver.",
   "part": 4
  },
  {
   "id": 323,
   "question": "What does `channel()` return?",
   "options": {
    "A": "`(Sender<T>, Receiver<T>)`",
    "B": "`(Tx<T>, Rx<T>)`",
    "C": "`Channel<T>`",
    "D": "`Result<(Sender, Receiver), Error>`"
   },
   "correct": "A",
   "explanation": "`channel()` returns `(Sender<T>, Receiver<T>)`.",
   "part": 4
  },
  {
   "id": 324,
   "question": "What happens when all `Sender`s are dropped and the `Receiver` tries to `recv()`?",
   "options": {
    "A": "Panic",
    "B": "Blocks forever",
    "C": "Returns `Err` (channel disconnected)",
    "D": "Returns `Ok(None)`"
   },
   "correct": "C",
   "explanation": "When all senders are dropped, the channel is \"disconnected.\" `recv()` returns `Err` indicating no more messages will arrive.",
   "part": 4
  },
  {
   "id": 325,
   "question": "Can you clone a `Sender`?",
   "options": {
    "A": "No",
    "B": "Yes, `Sender` implements `Clone`",
    "C": "Only with `Arc`",
    "D": "Only for `Sync` types"
   },
   "correct": "B",
   "explanation": "`Sender` implements `Clone`. Each clone can send to the same receiver, enabling multiple producers.",
   "part": 4
  },
  {
   "id": 326,
   "question": "What is the difference between `sync_channel(0)` and `channel()`?",
   "options": {
    "A": "`sync_channel(0)` is unbounded",
    "B": "`sync_channel(0)` has zero buffer; `send()` blocks until `recv()`",
    "C": "`channel()` is synchronous",
    "D": "They are identical"
   },
   "correct": "B",
   "explanation": "`sync_channel(0)` is a rendezvous channel: no buffer. `send()` blocks until `recv()` takes the value. `channel()` is unbounded.",
   "part": 4
  },
  {
   "id": 327,
   "question": "What does `Receiver::try_recv()` return when the channel is empty?",
   "options": {
    "A": "`None`",
    "B": "`Err(Empty)`",
    "C": "`Err(TryRecvError::Empty)`",
    "D": "Blocks until a message arrives"
   },
   "correct": "C",
   "explanation": "`try_recv()` returns `Err(TryRecvError::Empty)` when no message is available, or `Err(TryRecvError::Disconnected)` when the channel is closed.",
   "part": 4
  },
  {
   "id": 328,
   "question": "Which method on `Receiver` allows iterating over messages until the channel is closed?",
   "options": {
    "A": "`iter()`",
    "B": "`Receiver` implements `Iterator`",
    "C": "`recv_iter()`",
    "D": "`messages()`"
   },
   "correct": "B",
   "explanation": "`Receiver` implements `Iterator`, yielding `Result<T, RecvError>`. Iteration ends when the channel is disconnected.",
   "part": 4
  },
  {
   "id": 329,
   "question": "In the \"shared state vs message passing\" design choice, when is message passing preferred?",
   "options": {
    "A": "When you need maximum performance",
    "B": "When you want to avoid locks and ownership transfer of data",
    "C": "When you need shared mutable state",
    "D": "When using only a single thread"
   },
   "correct": "B",
   "explanation": "Message passing avoids shared mutable state and locks by transferring ownership of messages. \"Do not communicate by sharing memory; share memory by communicating.\"",
   "part": 4
  },
  {
   "id": 330,
   "question": "What does `sync_channel(n)` with `n > 0` provide?",
   "options": {
    "A": "Unbounded buffering",
    "B": "A bounded buffer of size `n`; `send()` blocks when full",
    "C": "`n` producers",
    "D": "`n` consumers"
   },
   "correct": "B",
   "explanation": "`sync_channel(n)` creates a bounded channel. When the buffer has `n` messages, `send()` blocks until space is available.",
   "part": 4
  },
  {
   "id": 331,
   "question": "Which crate is the most popular async runtime for Rust?",
   "options": {
    "A": "`async-std`",
    "B": "`tokio`",
    "C": "`futures`",
    "D": "`smol`"
   },
   "correct": "B",
   "explanation": "Tokio is the most widely used async runtime in the Rust ecosystem.",
   "part": 4
  },
  {
   "id": 332,
   "question": "What does the `Future` trait represent?",
   "options": {
    "A": "A completed value",
    "B": "An asynchronous computation that may produce a value",
    "C": "A synchronous blocking operation",
    "D": "A thread handle"
   },
   "correct": "B",
   "explanation": "A `Future` represents an asynchronous computation that may eventually produce a value (or error).",
   "part": 4
  },
  {
   "id": 333,
   "question": "What is the key method of the `Future` trait?",
   "options": {
    "A": "`run()`",
    "B": "`execute()`",
    "C": "`poll()`",
    "D": "`await()`"
   },
   "correct": "C",
   "explanation": "The `Future` trait has a `poll` method that the runtime calls to make progress. It returns `Poll::Ready` or `Poll::Pending`.",
   "part": 4
  },
  {
   "id": 334,
   "question": "What does `.await` do?",
   "options": {
    "A": "Blocks the thread until the future completes",
    "B": "Yields control until the future is ready, without blocking the thread",
    "C": "Spawns a new task",
    "D": "Converts a future to a value"
   },
   "correct": "B",
   "explanation": "`.await` suspends the async task and yields to the runtime. The thread can run other tasks; it does not block.",
   "part": 4
  },
  {
   "id": 335,
   "question": "Where can you use `.await`?",
   "options": {
    "A": "Anywhere in Rust code",
    "B": "Only inside `async` functions or blocks",
    "C": "Only in `main`",
    "D": "Only with `tokio::run`"
   },
   "correct": "B",
   "explanation": "`.await` can only be used inside an `async fn`, `async` block, or `async` closure.",
   "part": 4
  },
  {
   "id": 336,
   "question": "What does `async fn foo() -> T` desugar to?",
   "options": {
    "A": "`fn foo() -> T`",
    "B": "`fn foo() -> impl Future<Output = T>`",
    "C": "`fn foo() -> Box<dyn Future<Output = T>>`",
    "D": "`fn foo() -> Pin<Box<dyn Future<Output = T>>>`"
   },
   "correct": "B",
   "explanation": "`async fn foo() -> T` becomes a function that returns `impl Future<Output = T>`.",
   "part": 4
  },
  {
   "id": 337,
   "question": "Why does the `Future` trait use `Pin`?",
   "options": {
    "A": "For performance",
    "B": "To allow self-referential structs in async",
    "C": "To prevent moving futures",
    "D": "Both B and C"
   },
   "correct": "D",
   "explanation": "`Pin` ensures the future is not moved after being polled, which is required for self-referential futures (e.g., holding a reference into the future's own data).",
   "part": 4
  },
  {
   "id": 338,
   "question": "What does `Poll::Ready(value)` mean?",
   "options": {
    "A": "The future will never complete",
    "B": "The future has completed and produced `value`",
    "C": "The future needs to be polled again",
    "D": "The future was cancelled"
   },
   "correct": "B",
   "explanation": "`Poll::Ready(value)` means the future has completed and produced the given value.",
   "part": 4
  },
  {
   "id": 339,
   "question": "What does `Poll::Pending` mean?",
   "options": {
    "A": "The future has completed",
    "B": "The future is not ready; the task will be woken when progress can be made",
    "C": "The future panicked",
    "D": "The future was dropped"
   },
   "correct": "B",
   "explanation": "`Poll::Pending` means the future is not ready. The `Waker` in the `Context` will be used to wake the task when it can make progress.",
   "part": 4
  },
  {
   "id": 340,
   "question": "How do you run an async block in tokio?",
   "options": {
    "A": "`tokio::run(async { ... })`",
    "B": "`tokio::spawn(async { ... })`",
    "C": "`#[tokio::main] async fn main() { ... }` or `tokio::runtime::Runtime::new().unwrap().block_on(async { ... })`",
    "D": "`async { ... }.await`"
   },
   "correct": "C",
   "explanation": "You need an async runtime. With tokio, use `#[tokio::main]` on `main` or create a `Runtime` and call `block_on`.",
   "part": 4
  },
  {
   "id": 341,
   "question": "What does `#[tokio::main]` do?",
   "options": {
    "A": "Marks the function as async",
    "B": "Transforms `main` into an async entry point and runs it on the tokio runtime",
    "C": "Enables multi-threading",
    "D": "Compiles the program for tokio"
   },
   "correct": "B",
   "explanation": "`#[tokio::main]` converts `fn main()` into an async main that creates and runs the tokio runtime.",
   "part": 4
  },
  {
   "id": 342,
   "question": "What is a \"task\" in async Rust?",
   "options": {
    "A": "A thread",
    "B": "A lightweight unit of work scheduled by the runtime",
    "C": "A future that has completed",
    "D": "A mutex"
   },
   "correct": "B",
   "explanation": "A task is a lightweight unit of work. Many tasks can run on few threads; the runtime schedules them.",
   "part": 4
  },
  {
   "id": 343,
   "question": "What does `tokio::spawn` return?",
   "options": {
    "A": "`JoinHandle<T>`",
    "B": "`Task<T>`",
    "C": "`Future<T>`",
    "D": "`Result<T, JoinError>`"
   },
   "correct": "A",
   "explanation": "`tokio::spawn` returns a `JoinHandle<T>`; call `.await` on it to get the result.",
   "part": 4
  },
  {
   "id": 344,
   "question": "Can you use `std::thread::sleep` inside an async function?",
   "options": {
    "A": "Yes, it's recommended",
    "B": "No, it will cause a panic",
    "C": "It works but blocks the entire runtime thread",
    "D": "Only with `tokio::task::spawn_blocking`"
   },
   "correct": "C",
   "explanation": "`std::thread::sleep` blocks the OS thread. In a multi-threaded runtime it blocks one worker; in single-threaded it blocks everything.",
   "part": 4
  },
  {
   "id": 345,
   "question": "What should you use instead of `std::thread::sleep` in async code?",
   "options": {
    "A": "`tokio::time::sleep()`",
    "B": "`std::thread::sleep` is fine",
    "C": "`futures::future::pending()`",
    "D": "`tokio::sync::Notify`"
   },
   "correct": "A",
   "explanation": "Use `tokio::time::sleep(duration).await` so the runtime can run other tasks during the delay.",
   "part": 4
  },
  {
   "id": 346,
   "question": "What does `tokio::join!(a, b)` do?",
   "options": {
    "A": "Runs `a` and `b` sequentially",
    "B": "Runs `a` and `b` concurrently and waits for both to complete",
    "C": "Runs `a` then `b` in parallel",
    "D": "Joins two tasks into one"
   },
   "correct": "B",
   "explanation": "`tokio::join!(a, b)` runs both futures concurrently and returns when both complete.",
   "part": 4
  },
  {
   "id": 347,
   "question": "What does `tokio::select!` do?",
   "options": {
    "A": "Selects the first future to complete",
    "B": "Runs all branches in parallel",
    "C": "Matches on future results",
    "D": "Selects the fastest future"
   },
   "correct": "A",
   "explanation": "`select!` waits for the first branch to complete and cancels the others (or runs a default/complete branch).",
   "part": 4
  },
  {
   "id": 348,
   "question": "What is `tokio::time::timeout` used for?",
   "options": {
    "A": "Setting a maximum duration for a future to complete",
    "B": "Delaying execution",
    "C": "Measuring execution time",
    "D": "Cancelling a task"
   },
   "correct": "A",
   "explanation": "`timeout(duration, future)` returns `Err(Elapsed)` if the future doesn't complete within the duration.",
   "part": 4
  },
  {
   "id": 349,
   "question": "When should you use `spawn_blocking`?",
   "options": {
    "A": "For all async operations",
    "B": "For CPU-intensive or blocking I/O that would block the async runtime",
    "C": "Never",
    "D": "Only for file I/O"
   },
   "correct": "B",
   "explanation": "Use `spawn_blocking` for blocking operations (CPU work, blocking I/O) so they don't block the async worker threads.",
   "part": 4
  },
  {
   "id": 350,
   "question": "What does `futures::stream::Stream` represent?",
   "options": {
    "A": "A single async value",
    "B": "An asynchronous sequence of values",
    "C": "A synchronous iterator",
    "D": "A channel"
   },
   "correct": "B",
   "explanation": "A `Stream` yields a sequence of values asynchronously, like an async version of `Iterator`.",
   "part": 4
  },
  {
   "id": 351,
   "question": "What is `tokio::sync::mpsc` used for?",
   "options": {
    "A": "Same as `std::sync::mpsc` but faster",
    "B": "Async message passing between tasks",
    "C": "Multi-process communication",
    "D": "Synchronous channels"
   },
   "correct": "B",
   "explanation": "`tokio::sync::mpsc` provides async channels; `send()` and `recv()` return futures that can be awaited.",
   "part": 4
  },
  {
   "id": 352,
   "question": "In `tokio::select!`, what does `else` do?",
   "options": {
    "A": "Handles errors",
    "B": "Runs when all branches are disabled (e.g., all channels closed)",
    "C": "Default branch",
    "D": "Runs after all branches complete"
   },
   "correct": "B",
   "explanation": "The `else` branch runs when all `select!` branches are disabled (e.g., all channels closed). It's required if not all branches can always run.",
   "part": 4
  },
  {
   "id": 353,
   "question": "What does `futures::future::select` do?",
   "options": {
    "A": "Runs two futures in parallel",
    "B": "Returns when the first future completes, cancelling the other",
    "C": "Selects the faster future",
    "D": "Joins two futures"
   },
   "correct": "B",
   "explanation": "`select` runs both futures and returns when one completes, dropping the other.",
   "part": 4
  },
  {
   "id": 354,
   "question": "What is `async move`?",
   "options": {
    "A": "An async closure that takes ownership of captured variables",
    "B": "A keyword that moves a future",
    "C": "Invalid syntax",
    "D": "Same as `move` in sync closures"
   },
   "correct": "A",
   "explanation": "`async move { ... }` creates an async block that takes ownership of captured variables, similar to `move` in closures.",
   "part": 4
  },
  {
   "id": 355,
   "question": "Why might an async function need to be `Send`?",
   "options": {
    "A": "To be called from sync code",
    "B": "So the future can be sent between threads (e.g., with `tokio::spawn`)",
    "C": "For FFI",
    "D": "To use `.await`"
   },
   "correct": "B",
   "explanation": "`tokio::spawn` requires the future to be `Send` because the runtime may move it between threads. Async functions produce futures that must be `Send` for this.",
   "part": 4
  },
  {
   "id": 356,
   "question": "What does `pin!` macro do (from `tokio`)?",
   "options": {
    "A": "Pins a value on the stack for use in async",
    "B": "Pins a value to the heap",
    "C": "Prevents a future from being polled",
    "D": "Locks a mutex"
   },
   "correct": "A",
   "explanation": "`pin!` pins a value on the stack, producing a `Pin<&mut T>`, which is needed when you need to poll a future that holds references to itself.",
   "part": 4
  },
  {
   "id": 357,
   "question": "What is `FuturesUnordered` used for?",
   "options": {
    "A": "Running futures in a specific order",
    "B": "Running many futures concurrently, yielding as each completes",
    "C": "Queuing futures",
    "D": "Cancelling futures"
   },
   "correct": "B",
   "explanation": "`FuturesUnordered` runs many futures concurrently and yields results as each completes (like a stream of completions).",
   "part": 4
  },
  {
   "id": 358,
   "question": "What does `async_trait` crate provide?",
   "options": {
    "A": "A way to define async methods in traits",
    "B": "Automatic async conversion",
    "C": "Async trait objects",
    "D": "Both A and C"
   },
   "correct": "D",
   "explanation": "`async_trait` allows `async fn` in trait definitions (which Rust doesn't support natively yet) and helps with async trait objects.",
   "part": 4
  },
  {
   "id": 359,
   "question": "What is a \"runtime\" in async Rust?",
   "options": {
    "A": "The Rust compiler",
    "B": "The component that drives futures to completion (polls them, schedules tasks)",
    "C": "The operating system",
    "D": "A test framework"
   },
   "correct": "B",
   "explanation": "The runtime (e.g., tokio) is responsible for polling futures, waking tasks, and scheduling work on threads.",
   "part": 4
  },
  {
   "id": 360,
   "question": "Can you mix different async runtimes (e.g., tokio and async-std) in one program?",
   "options": {
    "A": "Yes, easily",
    "B": "Generally no; runtimes have different types and don't interoperate well",
    "C": "Only with special adapters",
    "D": "Only in tests"
   },
   "correct": "B",
   "explanation": "Mixing runtimes is difficult; they have different executor types, and futures are often runtime-specific. Stick to one runtime per program.",
   "part": 4
  },
  {
   "id": 361,
   "question": "What does `tokio::task::yield_now()` do?",
   "options": {
    "A": "Yields the current OS thread",
    "B": "Yields the current async task, allowing other tasks to run",
    "C": "Stops the runtime",
    "D": "Cancels the current task"
   },
   "correct": "B",
   "explanation": "`yield_now()` yields the current task so the runtime can run other tasks. It doesn't block the thread.",
   "part": 4
  },
  {
   "id": 362,
   "question": "What is `LocalSet` in tokio used for?",
   "options": {
    "A": "Running tasks on multiple threads",
    "B": "Running `!Send` tasks on a single thread",
    "C": "Local storage",
    "D": "Process-local state"
   },
   "correct": "B",
   "explanation": "`LocalSet` runs tasks that are `!Send` (e.g., holding `Rc`) on a single thread, so they don't need to cross thread boundaries.",
   "part": 4
  },
  {
   "id": 363,
   "question": "When do you need `unsafe` in Rust?",
   "options": {
    "A": "Never; Rust is always safe",
    "B": "When doing operations the compiler cannot verify (raw pointers, FFI, etc.)",
    "C": "For all I/O operations",
    "D": "Only in `no_std` code"
   },
   "correct": "B",
   "explanation": "`unsafe` is used when you need to do things the type system can't verify: raw pointers, FFI, implementing unsafe traits, etc.",
   "part": 4
  },
  {
   "id": 364,
   "question": "What can you do inside an `unsafe` block that you cannot do in safe Rust?",
   "options": {
    "A": "Use `println!`",
    "B": "Dereference raw pointers, call unsafe functions, implement unsafe traits",
    "C": "Use `mut`",
    "D": "Create references"
   },
   "correct": "B",
   "explanation": "Inside `unsafe` you can dereference raw pointers, call `unsafe fn`, implement `unsafe trait`, access mutable statics, etc.",
   "part": 4
  },
  {
   "id": 365,
   "question": "What are raw pointers `*const T` and `*mut T`?",
   "options": {
    "A": "References that can be null",
    "B": "Pointer types with no automatic cleanup; dereferencing requires `unsafe`",
    "C": "Same as `&T` and `&mut T`",
    "D": "Only used for FFI"
   },
   "correct": "B",
   "explanation": "Raw pointers have no ownership semantics, can be null, and dereferencing them is `unsafe` because it can cause UB.",
   "part": 4
  },
  {
   "id": 366,
   "question": "What does `unsafe fn` mean?",
   "options": {
    "A": "The function may panic",
    "B": "The function can only be called from `unsafe` blocks",
    "C": "The function makes safety guarantees that the compiler cannot verify; callers must ensure preconditions",
    "D": "The function is deprecated"
   },
   "correct": "C",
   "explanation": "An `unsafe fn` has a contract that callers must uphold. Calling it is `unsafe` because the compiler can't check that.",
   "part": 4
  },
  {
   "id": 367,
   "question": "What is an `unsafe trait`?",
   "options": {
    "A": "A trait that may panic",
    "B": "A trait whose implementors must uphold invariants the compiler cannot check",
    "C": "A trait that cannot be used in generic code",
    "D": "A trait with unsafe methods"
   },
   "correct": "B",
   "explanation": "An `unsafe trait` has invariants that implementors must maintain. Implementing it is `unsafe`.",
   "part": 4
  },
  {
   "id": 368,
   "question": "What does `extern \"C\"` indicate?",
   "options": {
    "A": "A C-compatible function (for FFI)",
    "B": "A function written in C",
    "C": "A function that cannot be inlined",
    "D": "A C-style struct"
   },
   "correct": "A",
   "explanation": "`extern \"C\"` defines a function with C calling convention for FFI (calling C from Rust or vice versa).",
   "part": 4
  },
  {
   "id": 369,
   "question": "What is `std::ptr::null()`?",
   "options": {
    "A": "A null reference",
    "B": "A null raw pointer",
    "C": "Invalid; Rust has no null",
    "D": "A default value for `Option`"
   },
   "correct": "B",
   "explanation": "`std::ptr::null()` creates a null raw pointer. References in Rust cannot be null; use `Option<&T>` for optional references.",
   "part": 4
  },
  {
   "id": 370,
   "question": "When implementing `Send` or `Sync` manually, why is it `unsafe`?",
   "options": {
    "A": "Because it's a system trait",
    "B": "Because you are asserting thread-safety invariants the compiler cannot verify",
    "C": "Because it involves raw pointers",
    "D": "It's not unsafe"
   },
   "correct": "B",
   "explanation": "`Send` and `Sync` are `unsafe trait`s. Implementing them means you guarantee thread-safety, which the compiler cannot verify.",
   "part": 4
  },
  {
   "id": 371,
   "question": "What does `#[repr(C)]` do?",
   "options": {
    "A": "Makes a struct faster",
    "B": "Ensures the struct has a C-compatible memory layout for FFI",
    "C": "Enables C inheritance",
    "D": "Marks the struct as unsafe"
   },
   "correct": "B",
   "explanation": "`#[repr(C)]` gives the struct a predictable layout matching C, so it can be shared with C code via FFI.",
   "part": 4
  },
  {
   "id": 372,
   "question": "What is a declarative macro defined with?",
   "options": {
    "A": "`macro`",
    "B": "`macro_rules!`",
    "C": "`decl_macro!`",
    "D": "`define_macro!`"
   },
   "correct": "B",
   "explanation": "Declarative macros are defined with `macro_rules! name { ... }`.",
   "part": 4
  },
  {
   "id": 373,
   "question": "What fragment specifier matches an expression?",
   "options": {
    "A": "`:stmt`",
    "B": "`:expr`",
    "C": "`:ident`",
    "D": "`:block`"
   },
   "correct": "B",
   "explanation": "`:expr` matches an expression. Other specifiers: `:ident` (identifier), `:ty` (type), `:stmt` (statement), etc.",
   "part": 4
  },
  {
   "id": 374,
   "question": "What are the three kinds of procedural macros?",
   "options": {
    "A": "`macro!`, `fn!`, `trait!`",
    "B": "Custom derive, attribute macros, function-like macros",
    "C": "Declarative, procedural, hybrid",
    "D": "`derive`, `attr`, `fn`"
   },
   "correct": "B",
   "explanation": "Procedural macros: (1) Custom derive, (2) Attribute macros, (3) Function-like macros.",
   "part": 4
  },
  {
   "id": 375,
   "question": "What does a custom derive macro do?",
   "options": {
    "A": "Derives a trait implementation from the struct's fields",
    "B": "Creates a new struct",
    "C": "Modifies function bodies",
    "D": "Generates tests"
   },
   "correct": "A",
   "explanation": "A derive macro (e.g., `#[derive(Debug)]`) generates a trait implementation based on the struct's structure.",
   "part": 4
  },
  {
   "id": 376,
   "question": "What does an attribute macro receive as input?",
   "options": {
    "A": "The item's name only",
    "B": "The attributes and the annotated item",
    "C": "Only the attributes",
    "D": "A token stream"
   },
   "correct": "D",
   "explanation": "Attribute macros receive a `TokenStream` of the attribute arguments and the annotated item. They output a new `TokenStream`.",
   "part": 4
  },
  {
   "id": 377,
   "question": "What is macro hygiene?",
   "options": {
    "A": "Keeping macros clean",
    "B": "Macros not accidentally capturing or conflicting with identifiers from the call site",
    "C": "Sanitizing macro inputs",
    "D": "Preventing macro expansion"
   },
   "correct": "B",
   "explanation": "Hygiene means macros use their own namespaces so they don't accidentally capture or conflict with variables at the call site.",
   "part": 4
  },
  {
   "id": 378,
   "question": "Which crate is commonly used for writing procedural macros?",
   "options": {
    "A": "`macro`",
    "B": "`syn` and `quote`",
    "C": "`proc_macro` only",
    "D": "`macro_rules`"
   },
   "correct": "B",
   "explanation": "`syn` parses Rust code into AST; `quote` turns AST back into tokens. Together they're the standard for proc macros.",
   "part": 4
  },
  {
   "id": 379,
   "question": "What does `$($x:expr),*` mean in a macro?",
   "options": {
    "A": "One expression",
    "B": "Zero or more expressions separated by commas",
    "C": "One or more expressions",
    "D": "A tuple of expressions"
   },
   "correct": "B",
   "explanation": "`$($x:expr),*` matches zero or more comma-separated expressions. `*` = zero or more; `+` = one or more.",
   "part": 4
  },
  {
   "id": 380,
   "question": "Where must procedural macros be defined?",
   "options": {
    "A": "In the same crate as the code that uses them",
    "B": "In a separate crate with `proc-macro = true` in Cargo.toml",
    "C": "In lib.rs only",
    "D": "Anywhere"
   },
   "correct": "B",
   "explanation": "Proc macros must be in a crate with `[lib] proc-macro = true` in Cargo.toml. They can't be in the same crate as the code that uses them in some configurations.",
   "part": 4
  },
  {
   "id": 381,
   "question": "What does `#[derive(Clone)]` generate?",
   "options": {
    "A": "A `clone()` method that does a deep copy",
    "B": "A `clone()` method that does a shallow copy (or delegates to field `clone`s)",
    "C": "A `copy()` implementation",
    "D": "A `Clone` trait that must be implemented manually"
   },
   "correct": "B",
   "explanation": "`#[derive(Clone)]` generates a `clone()` that clones each field. For `Copy` types it's a shallow copy; for others it depends on their `clone`.",
   "part": 4
  },
  {
   "id": 382,
   "question": "How do you run tests in a Rust project?",
   "options": {
    "A": "`rustc --test`",
    "B": "`cargo test`",
    "C": "`cargo run --test`",
    "D": "`rust test`"
   },
   "correct": "B",
   "explanation": "`cargo test` compiles and runs all tests (unit and integration).",
   "part": 4
  },
  {
   "id": 383,
   "question": "What attribute marks a function as a test?",
   "options": {
    "A": "`#[test_case]`",
    "B": "`#[test]`",
    "C": "`#[bench]`",
    "D": "`#[unit_test]`"
   },
   "correct": "B",
   "explanation": "`#[test]` marks a function as a test. The function must have signature `fn() -> ()` (or `Result`).",
   "part": 4
  },
  {
   "id": 384,
   "question": "What does `#[should_panic]` do?",
   "options": {
    "A": "Makes the test panic",
    "B": "The test passes only if it panics",
    "C": "Suppresses panic output",
    "D": "Marks the test as expected to fail"
   },
   "correct": "B",
   "explanation": "`#[should_panic]` means the test passes if it panics. If it doesn't panic, the test fails.",
   "part": 4
  },
  {
   "id": 385,
   "question": "Where do integration tests go by default?",
   "options": {
    "A": "In the same file as the code",
    "B": "In `tests/` directory at the crate root",
    "C": "In `src/tests/`",
    "D": "In `benches/`"
   },
   "correct": "B",
   "explanation": "Integration tests go in `tests/` at the project root. Each file is compiled as a separate crate.",
   "part": 4
  },
  {
   "id": 386,
   "question": "How do you run a specific test by name?",
   "options": {
    "A": "`cargo test test_name`",
    "B": "`cargo test -- test_name`",
    "C": "`cargo test -n test_name`",
    "D": "`cargo test --filter test_name`"
   },
   "correct": "A",
   "explanation": "`cargo test test_name` runs tests whose names contain `test_name`. Use `cargo test -- test_name` for more control.",
   "part": 4
  },
  {
   "id": 387,
   "question": "What does `#[ignore]` do on a test?",
   "options": {
    "A": "Fails the test",
    "B": "Skips the test unless run with `cargo test -- --ignored`",
    "C": "Hides the test from output",
    "D": "Marks it as flaky"
   },
   "correct": "B",
   "explanation": "`#[ignore]` skips the test by default. Run with `cargo test -- --ignored` to run only ignored tests.",
   "part": 4
  },
  {
   "id": 388,
   "question": "What is the difference between unit tests and integration tests?",
   "options": {
    "A": "Unit tests are faster",
    "B": "Unit tests are in the same file and can test private items; integration tests are in `tests/` and use the crate as an external user",
    "C": "Integration tests run in separate processes",
    "D": "There is no difference"
   },
   "correct": "B",
   "explanation": "Unit tests live in the source, often in a `#[cfg(test)]` module, and can access private items. Integration tests are in `tests/` and use the crate's public API.",
   "part": 4
  },
  {
   "id": 389,
   "question": "What does `assert_eq!(a, b)` do on failure?",
   "options": {
    "A": "Panics with a message showing `a` and `b`",
    "B": "Returns `Err`",
    "C": "Prints a warning",
    "D": "Continues execution"
   },
   "correct": "A",
   "explanation": "`assert_eq!` panics on failure, printing the values of both arguments (they must implement `Debug`).",
   "part": 4
  },
  {
   "id": 390,
   "question": "How do you test private functions?",
   "options": {
    "A": "You cannot",
    "B": "Use `pub(crate)` or put tests in the same module",
    "C": "Use `#[test]` on the function",
    "D": "Use `cargo test --private`"
   },
   "correct": "B",
   "explanation": "Put tests in the same module (e.g., `#[cfg(test)] mod tests`) to access private items, or use `pub(crate)` for limited visibility.",
   "part": 4
  },
  {
   "id": 391,
   "question": "What does `#[should_panic(expected = \"message\")]` do?",
   "options": {
    "A": "The test must panic with a message containing \"message\"",
    "B": "The test prints \"message\" on panic",
    "C": "The test expects the string \"message\" as input",
    "D": "Invalid attribute"
   },
   "correct": "A",
   "explanation": "`expected = \"message\"` means the panic message must contain that substring. The test fails if it panics with a different message or doesn't panic.",
   "part": 4
  },
  {
   "id": 392,
   "question": "How can a test return a `Result`?",
   "options": {
    "A": "Tests cannot return `Result`",
    "B": "Use `#[test] fn foo() -> Result<(), E> { ... }` and `?` operator",
    "C": "Use `assert!(result.is_ok())`",
    "D": "Wrap in `Ok(())`"
   },
   "correct": "B",
   "explanation": "Since Rust 1.34, tests can return `Result<(), E>`. Returning `Err` fails the test. The `?` operator works for propagating errors.",
   "part": 4
  },
  {
   "id": 393,
   "question": "What does `cargo test --no-run` do?",
   "options": {
    "A": "Runs tests without output",
    "B": "Compiles tests but does not run them",
    "C": "Skips tests",
    "D": "Runs tests in release mode"
   },
   "correct": "B",
   "explanation": "`cargo test --no-run` compiles the test binary but does not execute it.",
   "part": 4
  },
  {
   "id": 394,
   "question": "What is `#[cfg(test)]` used for?",
   "options": {
    "A": "Marking test functions",
    "B": "Including code only when compiling tests",
    "C": "Enabling test mode",
    "D": "Skipping tests in CI"
   },
   "correct": "B",
   "explanation": "`#[cfg(test)]` includes the module or item only when `cargo test` is run. Used for test helpers and test-only code.",
   "part": 4
  },
  {
   "id": 395,
   "question": "What does `doc(test)` do?",
   "options": {
    "A": "Documents tests",
    "B": "Ensures doc comments compile as tests (doctests)",
    "C": "Marks documentation as tested",
    "D": "Generates test docs"
   },
   "correct": "B",
   "explanation": "`doc(test)` (in `#![doc(test(...))]`) configures how doctests are run. Doctests are code blocks in doc comments that get compiled and run as tests.",
   "part": 4
  },
  {
   "id": 396,
   "question": "Which trait is automatically implemented for types that implement `Send + Sync`?",
   "options": {
    "A": "`Send` and `Sync` are independent",
    "B": "`Sync` implies `Send` for references",
    "C": "`&T` is `Send` if `T: Sync`",
    "D": "Both B and C"
   },
   "correct": "C",
   "explanation": "`T: Sync` means `&T: Send`. So sharing `&T` across threads is safe when `T` is `Sync`. `Send` and `Sync` are separate traits.",
   "part": 4
  },
  {
   "id": 397,
   "question": "What does `std::mem::forget` do?",
   "options": {
    "A": "Frees memory",
    "B": "Prevents a value's destructor from running (safe but can leak)",
    "C": "Zeros memory",
    "D": "Drops a value"
   },
   "correct": "B",
   "explanation": "`std::mem::forget` takes ownership and never runs the destructor. It's safe but can cause leaks (e.g., of memory or other resources).",
   "part": 4
  },
  {
   "id": 398,
   "question": "What is `Box::leak` used for?",
   "options": {
    "A": "Causing a memory leak for testing",
    "B": "Converting `Box<T>` to `&'static T` (leaks the allocation)",
    "C": "Releasing memory",
    "D": "Detecting leaks"
   },
   "correct": "B",
   "explanation": "`Box::leak` consumes the `Box` and returns `&'static T`. The allocation is never freed, so it's a deliberate leak for static-like data.",
   "part": 4
  },
  {
   "id": 399,
   "question": "What does `std::hint::spin_loop` do?",
   "options": {
    "A": "Busy-waits indefinitely",
    "B": "Gives a hint to the CPU that we're in a spin-wait (can improve power/performance)",
    "C": "Yields to the scheduler",
    "D": "Sleeps"
   },
   "correct": "B",
   "explanation": "`spin_loop` emits a hint (e.g., `pause` on x86) that can reduce power and improve performance in spin-wait loops.",
   "part": 4
  },
  {
   "id": 400,
   "question": "Which macro is used for compile-time assertion?",
   "options": {
    "A": "`assert!`",
    "B": "`debug_assert!`",
    "C": "`static_assert!`",
    "D": "Rust uses `const_assert!` or `const` with `assert!` in const context"
   },
   "correct": "D",
   "explanation": "Rust doesn't have `static_assert!`. Use `const _: () = assert!(condition);` in a const context, or the `static_assertions` crate's `const_assert!`.",
   "part": 4
  },
  {
   "id": 401,
   "question": "In `Cargo.toml`, what does `[dependencies]` with `serde = { version = \"1.0\", features = [\"derive\"] }` mean?",
   "options": {
    "A": "serde is optional and only compiled when requested",
    "B": "serde version 1.0 is required with the \"derive\" feature enabled",
    "C": "serde has two separate dependencies: 1.0 and derive",
    "D": "The derive feature overrides version 1.0"
   },
   "correct": "B",
   "explanation": "The inline table syntax specifies version 1.0 and enables the \"derive\" feature, which provides `#[derive(Serialize, Deserialize)]`.",
   "part": 5
  },
  {
   "id": 402,
   "question": "What does `cargo publish --dry-run` do?",
   "options": {
    "A": "Publishes to a test registry only",
    "B": "Validates the package without uploading",
    "C": "Publishes with a temporary version",
    "D": "Skips documentation generation"
   },
   "correct": "B",
   "explanation": "`--dry-run` checks the package (validates Cargo.toml, builds, etc.) without actually uploading to the registry.",
   "part": 5
  },
  {
   "id": 403,
   "question": "In a Cargo workspace, how do you add a member crate?\n\n```toml\n[workspace]\nmembers = [\"crate-a\", \"crate-b\"]\n```",
   "options": {
    "A": "The members must be in subdirectories with the same names",
    "B": "The members can be anywhere; paths are relative to the workspace root",
    "C": "Each member needs its own `[workspace]` section",
    "D": "Workspace members cannot have their own Cargo.toml"
   },
   "correct": "A",
   "explanation": "Workspace members are typically subdirectories; each must have a `Cargo.toml` and the path is relative to the workspace root.",
   "part": 5
  },
  {
   "id": 404,
   "question": "Semantic versioning in Rust: a crate goes from `1.2.3` to `1.3.0`. What changed?",
   "options": {
    "A": "Patch: bug fixes only",
    "B": "Minor: new backward-compatible functionality",
    "C": "Major: breaking changes",
    "D": "Pre-release version"
   },
   "correct": "B",
   "explanation": "In semver, MAJOR.MINOR.PATCH: 1.3.0 indicates a minor version bump (new backward-compatible features).",
   "part": 5
  },
  {
   "id": 405,
   "question": "What does `cargo tree` show?",
   "options": {
    "A": "The directory structure of the project",
    "B": "The dependency graph of all crates",
    "C": "The AST of the main binary",
    "D": "Test execution order"
   },
   "correct": "B",
   "explanation": "`cargo tree` displays the dependency graph showing all crates and their versions.",
   "part": 5
  },
  {
   "id": 406,
   "question": "In Cargo.toml, `optional = true` on a dependency means:",
   "options": {
    "A": "The dependency is never compiled",
    "B": "The dependency is only compiled when a feature enables it",
    "C": "The dependency version is flexible",
    "D": "The dependency is for development only"
   },
   "correct": "B",
   "explanation": "Optional dependencies are only compiled when a feature that lists them is enabled.",
   "part": 5
  },
  {
   "id": 407,
   "question": "What is the purpose of `[patch]` in Cargo.toml?",
   "options": {
    "A": "To patch source code before compilation",
    "B": "To override a dependency with a local or git version",
    "C": "To apply security patches automatically",
    "D": "To patch the Rust compiler"
   },
   "correct": "B",
   "explanation": "`[patch]` overrides a dependency, e.g. to use a local path or a git branch for testing fixes.",
   "part": 5
  },
  {
   "id": 408,
   "question": "Which Cargo command builds in release mode with optimizations?",
   "options": {
    "A": "`cargo build --optimize`",
    "B": "`cargo build --release`",
    "C": "`cargo build -O`",
    "D": "`cargo release`"
   },
   "correct": "B",
   "explanation": "`cargo build --release` uses the release profile with optimizations enabled.",
   "part": 5
  },
  {
   "id": 409,
   "question": "What does `cargo doc --open` do?",
   "options": {
    "A": "Opens the project in an editor",
    "B": "Builds documentation and opens it in a browser",
    "C": "Opens crates.io in a browser",
    "D": "Generates and opens a dependency report"
   },
   "correct": "B",
   "explanation": "Builds the documentation for the crate and its dependencies, then opens it in the default browser.",
   "part": 5
  },
  {
   "id": 410,
   "question": "To publish a crate to crates.io, you need:",
   "options": {
    "A": "A GitHub account only",
    "B": "A crates.io account and `cargo login` with an API token",
    "C": "To run `cargo publish` without authentication",
    "D": "A verified email and paid subscription"
   },
   "correct": "B",
   "explanation": "You need a crates.io account, generate an API token, and run `cargo login <token>` before publishing.",
   "part": 5
  },
  {
   "id": 411,
   "question": "What does `pub(crate)` mean?",
   "options": {
    "A": "Public to the entire crate",
    "B": "Public only to the current module",
    "C": "Public to the parent module",
    "D": "Deprecated; use `pub` instead"
   },
   "correct": "A",
   "explanation": "`pub(crate)` makes an item visible to the entire crate but not outside it.",
   "part": 5
  },
  {
   "id": 412,
   "question": "In `mod foo { pub fn bar() {} }`, where is `bar` visible?",
   "options": {
    "A": "Only inside `foo`",
    "B": "Anywhere the `foo` module is visible",
    "C": "Only in the parent of `foo`",
    "D": "Nowhere; it's private"
   },
   "correct": "B",
   "explanation": "`pub fn` is visible wherever the `foo` module is accessible.",
   "part": 5
  },
  {
   "id": 413,
   "question": "What does `use crate::utils::helper;` do?",
   "options": {
    "A": "Imports the `crate` module",
    "B": "Imports `helper` from the `utils` module (crate root relative)",
    "C": "Imports from an external crate named `utils`",
    "D": "Creates a new module `utils::helper`"
   },
   "correct": "B",
   "explanation": "`crate::` is the crate root; this imports `helper` from `utils`.",
   "part": 5
  },
  {
   "id": 414,
   "question": "`pub use self::inner::Item;` is an example of:",
   "options": {
    "A": "Re-export",
    "B": "Circular import",
    "C": "Private use",
    "D": "Module alias"
   },
   "correct": "A",
   "explanation": "Re-exporting makes `Item` available to users of the current module as if it were defined there.",
   "part": 5
  },
  {
   "id": 415,
   "question": "What does `super::` refer to?",
   "options": {
    "A": "The crate root",
    "B": "The parent module",
    "C": "A module named \"super\"",
    "D": "The standard library"
   },
   "correct": "B",
   "explanation": "`super` refers to the parent module (one level up in the hierarchy).",
   "part": 5
  },
  {
   "id": 416,
   "question": "For `src/lib.rs` with `mod foo;`, where does Rust look for the `foo` module?",
   "options": {
    "A": "`src/foo.rs` or `src/foo/mod.rs`",
    "B": "`foo.rs` in the project root",
    "C": "`src/foo/mod.rs` only",
    "D": "`lib/foo.rs`"
   },
   "correct": "A",
   "explanation": "Rust looks for `src/foo.rs` or `src/foo/mod.rs` for `mod foo;`.",
   "part": 5
  },
  {
   "id": 417,
   "question": "What is the default visibility of items in a module?",
   "options": {
    "A": "`pub`",
    "B": "`pub(crate)`",
    "C": "Private (visible only within the module and its children)",
    "D": "`pub(super)`"
   },
   "correct": "C",
   "explanation": "Items are private by default; they're visible only within the module and its submodules.",
   "part": 5
  },
  {
   "id": 418,
   "question": "`use std::collections::{HashMap, HashSet};` does what?",
   "options": {
    "A": "Imports only HashMap",
    "B": "Imports HashMap and HashSet from std::collections",
    "C": "Imports the collections module",
    "D": "Imports HashMap and re-exports HashSet"
   },
   "correct": "B",
   "explanation": "The brace syntax imports multiple items from the same path.",
   "part": 5
  },
  {
   "id": 419,
   "question": "In a binary crate, what is the default entry point?",
   "options": {
    "A": "`src/main.rs` with `fn main()`",
    "B": "`src/lib.rs` with `fn main()`",
    "C": "`main.rs` in project root",
    "D": "Any file with `#![main]` attribute"
   },
   "correct": "A",
   "explanation": "Binary crates use `src/main.rs` and `fn main()` as the entry point.",
   "part": 5
  },
  {
   "id": 420,
   "question": "What does `#[path = \"custom/path.rs\"] mod foo;` do?",
   "options": {
    "A": "Changes the module's logical path",
    "B": "Specifies a custom file path for the module",
    "C": "Imports from an external path",
    "D": "Sets the module's visibility path"
   },
   "correct": "B",
   "explanation": "The `#[path]` attribute overrides the default file location for the module.",
   "part": 5
  },
  {
   "id": 421,
   "question": "`HashMap<K, V>` vs `BTreeMap<K, V>`: when to use BTreeMap?",
   "options": {
    "A": "When you need faster random access",
    "B": "When you need keys in sorted order or range queries",
    "C": "When K doesn't implement Hash",
    "D": "BTreeMap is always slower; avoid it"
   },
   "correct": "B",
   "explanation": "BTreeMap keeps keys sorted and supports range queries; HashMap is faster for simple lookups.",
   "part": 5
  },
  {
   "id": 422,
   "question": "What does `map.entry(key).or_insert(value)` do?",
   "options": {
    "A": "Inserts value and panics if key exists",
    "B": "Returns the value for key, or inserts value if absent",
    "C": "Replaces the value if key exists",
    "D": "Removes the key and returns the old value"
   },
   "correct": "B",
   "explanation": "The Entry API: `or_insert` inserts the value only if the key is absent, then returns a mutable reference.",
   "part": 5
  },
  {
   "id": 423,
   "question": "`VecDeque` is useful when:",
   "options": {
    "A": "You need a sorted vector",
    "B": "You need efficient push/pop from both ends",
    "C": "You need key-value storage",
    "D": "You need a heap structure"
   },
   "correct": "B",
   "explanation": "VecDeque is a double-ended queue with O(1) push/pop at both ends.",
   "part": 5
  },
  {
   "id": 424,
   "question": "`BinaryHeap<T>` returns elements in what order?",
   "options": {
    "A": "Insertion order",
    "B": "Sorted order (ascending)",
    "C": "Max-heap order (largest first, by Ord)",
    "D": "Random order"
   },
   "correct": "C",
   "explanation": "BinaryHeap is a max-heap; `pop()` returns the largest element (by Ord).",
   "part": 5
  },
  {
   "id": 425,
   "question": "What does `HashSet::difference(&other)` return?",
   "options": {
    "A": "Elements in self but not in other",
    "B": "Elements in both sets",
    "C": "Elements in either set",
    "D": "A new HashSet with the difference"
   },
   "correct": "A",
   "explanation": "`difference` yields elements in self that are not in other.",
   "part": 5
  },
  {
   "id": 426,
   "question": "For `let mut v: Vec<i32> = vec![1, 2, 3]; v.reserve(10);`, what happens?",
   "options": {
    "A": "v grows to length 10",
    "B": "Capacity increases by at least 10",
    "C": "v is truncated to 10 elements",
    "D": "Nothing; reserve is a no-op for Vec"
   },
   "correct": "B",
   "explanation": "`reserve` ensures capacity for at least `len + 10` more elements without reallocating.",
   "part": 5
  },
  {
   "id": 427,
   "question": "`BTreeSet` requires its elements to implement:",
   "options": {
    "A": "`Hash + Eq`",
    "B": "`Ord`",
    "C": "`Copy`",
    "D": "`Default`"
   },
   "correct": "B",
   "explanation": "BTreeSet requires Ord for ordering; HashSet requires Hash + Eq.",
   "part": 5
  },
  {
   "id": 428,
   "question": "What does `vec.retain(|x| *x > 0)` do?",
   "options": {
    "A": "Returns a new Vec with filtered elements",
    "B": "Keeps only elements for which the predicate is true (in-place)",
    "C": "Removes the first matching element",
    "D": "Sorts the vector"
   },
   "correct": "B",
   "explanation": "`retain` keeps elements in-place where the predicate returns true.",
   "part": 5
  },
  {
   "id": 429,
   "question": "`HashMap::get(&key)` returns:",
   "options": {
    "A": "`Option<&V>`",
    "B": "`Option<V>`",
    "C": "`&V` (panics if absent)",
    "D": "`Result<V, NotFound>`"
   },
   "correct": "A",
   "explanation": "`get` returns `Option<&V>`; None if the key is absent.",
   "part": 5
  },
  {
   "id": 430,
   "question": "To use a custom type as HashMap key, it must implement:",
   "options": {
    "A": "`Eq + Hash`",
    "B": "`Ord`",
    "C": "`Clone + Copy`",
    "D": "`Serialize + Deserialize`"
   },
   "correct": "A",
   "explanation": "HashMap keys need Eq and Hash; BTreeMap keys need Ord.",
   "part": 5
  },
  {
   "id": 431,
   "question": "What does `iter.zip(other_iter)` produce?",
   "options": {
    "A": "A concatenation of both iterators",
    "B": "An iterator of pairs (a, b) from both",
    "C": "An iterator that alternates elements",
    "D": "The Cartesian product"
   },
   "correct": "B",
   "explanation": "zip pairs elements from two iterators; stops when the shorter one ends.",
   "part": 5
  },
  {
   "id": 432,
   "question": "`flat_map` is equivalent to:",
   "options": {
    "A": "`map` then `flatten`",
    "B": "`filter` then `map`",
    "C": "`map` then `filter`",
    "D": "`chain` of two iterators"
   },
   "correct": "A",
   "explanation": "flat_map(f) is equivalent to map(f).flatten(); it maps each element to an iterator and flattens.",
   "part": 5
  },
  {
   "id": 433,
   "question": "What does `fold(init, |acc, x| ...)` do?",
   "options": {
    "A": "Reduces to a single value by repeatedly applying a function",
    "B": "Folds the iterator in half",
    "C": "Applies a function to each element",
    "D": "Collects into a Vec"
   },
   "correct": "A",
   "explanation": "fold accumulates: starts with init, applies the closure to (acc, x) for each x, returns final acc.",
   "part": 5
  },
  {
   "id": 434,
   "question": "`scan(init, |state, x| ...)` differs from `fold` in that:",
   "options": {
    "A": "scan is lazy, fold is eager",
    "B": "scan yields intermediate results; fold yields only the final value",
    "C": "scan requires Copy",
    "D": "There is no difference"
   },
   "correct": "B",
   "explanation": "scan yields each intermediate state as an Option; fold only returns the final accumulator.",
   "part": 5
  },
  {
   "id": 435,
   "question": "`iter.chain(other)` produces:",
   "options": {
    "A": "Pairs of elements",
    "B": "Elements from iter, then elements from other",
    "C": "Only elements in both",
    "D": "Interleaved elements"
   },
   "correct": "B",
   "explanation": "chain concatenates: first all elements from iter, then all from other.",
   "part": 5
  },
  {
   "id": 436,
   "question": "`peekable()` allows you to:",
   "options": {
    "A": "Look at the next element without consuming it",
    "B": "Skip elements",
    "C": "Reverse the iterator",
    "D": "Clone the iterator"
   },
   "correct": "A",
   "explanation": "peekable() adds peek() to look at the next element without advancing.",
   "part": 5
  },
  {
   "id": 437,
   "question": "`slice.windows(3)` on `[1,2,3,4,5]` yields:",
   "options": {
    "A": "`[1], [2], [3], [4], [5]`",
    "B": "`[1,2,3], [2,3,4], [3,4,5]`",
    "C": "`[1,2,3], [4,5]`",
    "D": "`[1,2,3,4,5]`"
   },
   "correct": "B",
   "explanation": "windows(n) yields overlapping slices of size n: [1,2,3], [2,3,4], [3,4,5].",
   "part": 5
  },
  {
   "id": 438,
   "question": "`enumerate()` on an iterator produces:",
   "options": {
    "A": "(index, value) pairs",
    "B": "(value, index) pairs",
    "C": "Only indices",
    "D": "A counted iterator"
   },
   "correct": "A",
   "explanation": "enumerate() yields (0, first), (1, second), etc.",
   "part": 5
  },
  {
   "id": 439,
   "question": "`iter.rev()` requires the iterator to implement:",
   "options": {
    "A": "`Clone`",
    "B": "`DoubleEndedIterator`",
    "C": "`ExactSizeIterator`",
    "D": "`FusedIterator`"
   },
   "correct": "B",
   "explanation": "rev() requires DoubleEndedIterator to iterate from the back.",
   "part": 5
  },
  {
   "id": 440,
   "question": "What does `try_fold` return?",
   "options": {
    "A": "`Result<Acc, E>` — can short-circuit on Err",
    "B": "Same as fold",
    "C": "`Option<Acc>`",
    "D": "`(Acc, bool)` where bool indicates early exit"
   },
   "correct": "A",
   "explanation": "try_fold short-circuits on Err (or other Try types); used by ? in iterator chains.",
   "part": 5
  },
  {
   "id": 441,
   "question": "`std::fs::read_to_string(path)` returns:",
   "options": {
    "A": "`String`",
    "B": "`Result<String, std::io::Error>`",
    "C": "`Vec<u8>`",
    "D": "`Option<String>`"
   },
   "correct": "B",
   "explanation": "read_to_string returns Result<String, io::Error>; it can fail for I/O or UTF-8 errors.",
   "part": 5
  },
  {
   "id": 442,
   "question": "Why use `BufReader` when reading a file?",
   "options": {
    "A": "To compress the file",
    "B": "To buffer reads and reduce syscalls",
    "C": "To read in reverse",
    "D": "To enable random access"
   },
   "correct": "B",
   "explanation": "BufReader buffers reads to reduce the number of system calls for better performance.",
   "part": 5
  },
  {
   "id": 443,
   "question": "`std::env::args()` returns:",
   "options": {
    "A": "`Vec<String>`",
    "B": "`Args` (iterator of String)",
    "C": "`Option<String>`",
    "D": "`&[String]`"
   },
   "correct": "B",
   "explanation": "args() returns Args, an iterator over the program arguments (including program name).",
   "part": 5
  },
  {
   "id": 444,
   "question": "With clap, `#[arg(short, long)]` on a field means:",
   "options": {
    "A": "The argument is required",
    "B": "The argument can be passed as `-s` or `--long-name`",
    "C": "The argument is short and long",
    "D": "The argument has a default value"
   },
   "correct": "B",
   "explanation": "short enables -s, long enables --long-name for the argument.",
   "part": 5
  },
  {
   "id": 445,
   "question": "`OpenOptions::new().append(true).open(path)` opens the file for:",
   "options": {
    "A": "Reading only",
    "B": "Writing, truncating existing content",
    "C": "Appending to the end",
    "D": "Read and write"
   },
   "correct": "C",
   "explanation": "append(true) opens for appending; writes go to the end without truncating.",
   "part": 5
  },
  {
   "id": 446,
   "question": "`std::io::stdin().lock()` returns:",
   "options": {
    "A": "A locked handle to stdin",
    "B": "A MutexGuard",
    "C": "A static reference",
    "D": "An error if stdin is not available"
   },
   "correct": "A",
   "explanation": "lock() returns StdinLock, a locked handle that implements Read for efficient line-by-line reading.",
   "part": 5
  },
  {
   "id": 447,
   "question": "`fs::metadata(path)` gives you:",
   "options": {
    "A": "File contents",
    "B": "File metadata (size, permissions, etc.) without following symlinks",
    "C": "Only file size",
    "D": "Symlink target"
   },
   "correct": "B",
   "explanation": "metadata returns Metadata (size, permissions, etc.); use symlink_metadata to avoid following symlinks.",
   "part": 5
  },
  {
   "id": 448,
   "question": "`Read` trait's `read_to_string(&mut self, buf: &mut String)` does what?",
   "options": {
    "A": "Replaces buf with file contents",
    "B": "Appends read bytes (as UTF-8) to buf",
    "C": "Reads exactly buf.len() bytes",
    "D": "Reads until newline"
   },
   "correct": "B",
   "explanation": "read_to_string appends all read bytes (interpreted as UTF-8) to the String.",
   "part": 5
  },
  {
   "id": 449,
   "question": "`std::env::var(\"KEY\")` returns:",
   "options": {
    "A": "`String`",
    "B": "`Result<String, VarError>`",
    "C": "`Option<String>`",
    "D": "`&'static str`"
   },
   "correct": "B",
   "explanation": "var returns Result<String, VarError>; Err if the variable is unset or not valid UTF-8.",
   "part": 5
  },
  {
   "id": 450,
   "question": "`fs::create_dir_all(path)`:",
   "options": {
    "A": "Creates only the final directory",
    "B": "Creates the directory and all parent directories",
    "C": "Creates all directories in path as siblings",
    "D": "Fails if any parent doesn't exist"
   },
   "correct": "B",
   "explanation": "create_dir_all creates all directories in the path, like mkdir -p.",
   "part": 5
  },
  {
   "id": 451,
   "question": "To derive `Serialize` and `Deserialize`, you need:",
   "options": {
    "A": "`#[derive(Serialize, Deserialize)]` with serde and the \"derive\" feature",
    "B": "Only `#[derive(Serialize)]`",
    "C": "Manual impl of both traits",
    "D": "The serde_json crate only"
   },
   "correct": "A",
   "explanation": "You need serde with the \"derive\" feature: serde = { version = \"1.0\", features = [\"derive\"] }.",
   "part": 5
  },
  {
   "id": 452,
   "question": "`#[serde(rename = \"snake_case\")]` does what?",
   "options": {
    "A": "Renames the struct",
    "B": "Serializes the field with snake_case name",
    "C": "Converts values to snake_case",
    "D": "Applies to enum variants only"
   },
   "correct": "B",
   "explanation": "rename changes the key used in the serialized format (e.g. \"myField\" -> \"my_field\").",
   "part": 5
  },
  {
   "id": 453,
   "question": "`serde_json::from_str::<T>(s)` returns:",
   "options": {
    "A": "`T`",
    "B": "`Result<T, serde_json::Error>`",
    "C": "`Option<T>`",
    "D": "`String`"
   },
   "correct": "B",
   "explanation": "from_str returns Result<T, Error>; it can fail on invalid JSON or type mismatch.",
   "part": 5
  },
  {
   "id": 454,
   "question": "`#[serde(skip)]` on a field means:",
   "options": {
    "A": "Skip during serialization only",
    "B": "Skip during deserialization only",
    "C": "Skip during both (field not in JSON)",
    "D": "Use default value when missing"
   },
   "correct": "C",
   "explanation": "skip means the field is omitted from serialization and deserialization.",
   "part": 5
  },
  {
   "id": 455,
   "question": "`#[serde(default)]` on a field:",
   "options": {
    "A": "Uses Default::default() when the field is missing during deserialization",
    "B": "Makes the field optional",
    "C": "Uses empty string for strings",
    "D": "Skips the field"
   },
   "correct": "A",
   "explanation": "default uses Default::default() when the key is absent during deserialization.",
   "part": 5
  },
  {
   "id": 456,
   "question": "`toml::to_string(&value)` serializes to:",
   "options": {
    "A": "JSON",
    "B": "TOML format",
    "C": "YAML",
    "D": "Binary"
   },
   "correct": "B",
   "explanation": "toml::to_string produces TOML format; toml::from_str parses it.",
   "part": 5
  },
  {
   "id": 457,
   "question": "For `#[serde(flatten)]`, what happens?",
   "options": {
    "A": "The field is serialized as a nested object",
    "B": "The field's contents are flattened into the parent",
    "C": "The field is ignored",
    "D": "The field is serialized as an array"
   },
   "correct": "B",
   "explanation": "flatten merges the field's keys into the parent object (useful for embedding structs).",
   "part": 5
  },
  {
   "id": 458,
   "question": "`serde_json::Value` represents:",
   "options": {
    "A": "Any valid JSON value",
    "B": "Only JSON objects",
    "C": "Only JSON strings",
    "D": "A parsed JSON document"
   },
   "correct": "A",
   "explanation": "Value is an enum (Null, Bool, Number, String, Array, Object) representing any JSON value.",
   "part": 5
  },
  {
   "id": 459,
   "question": "`#[serde(serialize_with = \"...\")]` allows:",
   "options": {
    "A": "Custom serialization logic for that field",
    "B": "Only built-in formats",
    "C": "Skipping serialization",
    "D": "Renaming the field"
   },
   "correct": "A",
   "explanation": "serialize_with lets you specify a custom function for serializing that field.",
   "part": 5
  },
  {
   "id": 460,
   "question": "To deserialize `\"true\"` (string) into `bool`, you might use:",
   "options": {
    "A": "`#[serde(deserialize_with = \"...\")]` with a custom function",
    "B": "`#[serde(from = \"String\")]`",
    "C": "`TryFrom` implementation",
    "D": "All of the above can work"
   },
   "correct": "D",
   "explanation": "All can work: deserialize_with, From/TryFrom, or custom logic.",
   "part": 5
  },
  {
   "id": 461,
   "question": "In Axum, `Router::new().route(\"/\", get(handler))` does what?",
   "options": {
    "A": "Registers a GET handler for the root path",
    "B": "Registers a POST handler",
    "C": "Creates a redirect",
    "D": "Serves static files"
   },
   "correct": "A",
   "explanation": "route(\"/\", get(handler)) registers a GET handler for \"/\".",
   "part": 5
  },
  {
   "id": 462,
   "question": "`reqwest::get(url).await` returns:",
   "options": {
    "A": "`String`",
    "B": "`Result<Response, Error>`",
    "C": "`Response` directly",
    "D": "`Option<Response>`"
   },
   "correct": "B",
   "explanation": "reqwest is async; get returns a Future that resolves to Result<Response, Error>.",
   "part": 5
  },
  {
   "id": 463,
   "question": "In Axum, an extractor like `Json<T>` in a handler:",
   "options": {
    "A": "Automatically deserializes the request body into T",
    "B": "Serializes the response",
    "C": "Validates headers only",
    "D": "Extracts query parameters"
   },
   "correct": "A",
   "explanation": "Json<T> extracts the body, parses JSON, and deserializes into T.",
   "part": 5
  },
  {
   "id": 464,
   "question": "Axum middleware is typically added via:",
   "options": {
    "A": "`router.layer(middleware)`",
    "B": "`router.middleware(middleware)`",
    "C": "`app.use(middleware)`",
    "D": "In the handler signature"
   },
   "correct": "A",
   "explanation": "layer() adds middleware (tower::Layer) to the router.",
   "part": 5
  },
  {
   "id": 465,
   "question": "`axum::extract::Path(params)` extracts:",
   "options": {
    "A": "Query string parameters",
    "B": "Path parameters (e.g. /users/:id)",
    "C": "Request headers",
    "D": "Form data"
   },
   "correct": "B",
   "explanation": "Path extracts dynamic path segments, e.g. \"/users/:id\" -> Path((id,)).",
   "part": 5
  },
  {
   "id": 466,
   "question": "For a JSON API, `axum::Json` requires the type to implement:",
   "options": {
    "A": "`Serialize` for responses, `Deserialize` for request bodies",
    "B": "`Clone`",
    "C": "`Send + Sync`",
    "D": "`Default`"
   },
   "correct": "A",
   "explanation": "Responses need Serialize; request bodies need Deserialize (both for JSON).",
   "part": 5
  },
  {
   "id": 467,
   "question": "`reqwest::Client::new()` should typically be:",
   "options": {
    "A": "Created per request",
    "B": "Reused (e.g. once per app) for connection pooling",
    "C": "Created in each handler",
    "D": "A global static"
   },
   "correct": "B",
   "explanation": "Reusing Client enables connection pooling and better performance.",
   "part": 5
  },
  {
   "id": 468,
   "question": "In Actix-web, `web::Json<T>` for a handler parameter:",
   "options": {
    "A": "Extracts and deserializes JSON body into T",
    "B": "Returns JSON",
    "C": "Validates JSON schema",
    "D": "Parses query params as JSON"
   },
   "correct": "A",
   "explanation": "web::Json<T> extracts and deserializes the request body.",
   "part": 5
  },
  {
   "id": 469,
   "question": "Axum's `State<S>` extractor:",
   "options": {
    "A": "Extracts application state shared across handlers",
    "B": "Extracts HTTP state headers",
    "C": "Returns the server state",
    "D": "Is for session state only"
   },
   "correct": "A",
   "explanation": "State<S> gives access to shared state passed to Router::with_state.",
   "part": 5
  },
  {
   "id": 470,
   "question": "To return a 404 in Axum, you typically:",
   "options": {
    "A": "`return (StatusCode::NOT_FOUND, \"Not found\")`",
    "B": "panic!",
    "C": "`Err(StatusCode::NOT_FOUND)`",
    "D": "Use `axum::response::NotFound`"
   },
   "correct": "A",
   "explanation": "Return a tuple (StatusCode, impl IntoResponse) or use StatusCode::NOT_FOUND.into_response().",
   "part": 5
  },
  {
   "id": 471,
   "question": "`rusqlite::Connection::open(path)` returns:",
   "options": {
    "A": "`Connection`",
    "B": "`Result<Connection, rusqlite::Error>`",
    "C": "`Option<Connection>`",
    "D": "A file handle"
   },
   "correct": "B",
   "explanation": "Connection::open returns Result<Connection, Error>; it can fail if the file can't be opened.",
   "part": 5
  },
  {
   "id": 472,
   "question": "`tokio::net::TcpListener::bind(addr).await` returns:",
   "options": {
    "A": "`TcpStream`",
    "B": "`Result<TcpListener, std::io::Error>`",
    "C": "`TcpListener` directly",
    "D": "`Option<TcpListener>`"
   },
   "correct": "B",
   "explanation": "bind returns Result<TcpListener, io::Error>; use .await in async context.",
   "part": 5
  },
  {
   "id": 473,
   "question": "To accept incoming TCP connections, you call:",
   "options": {
    "A": "`listener.accept().await`",
    "B": "`listener.recv().await`",
    "C": "`listener.connect().await`",
    "D": "`listener.listen().await`"
   },
   "correct": "A",
   "explanation": "accept() yields (TcpStream, SocketAddr) for each incoming connection.",
   "part": 5
  },
  {
   "id": 474,
   "question": "`TcpStream::connect(addr).await`:",
   "options": {
    "A": "Binds to the address",
    "B": "Initiates a connection to the remote address",
    "C": "Listens on the address",
    "D": "Closes the stream"
   },
   "correct": "B",
   "explanation": "connect() initiates an outbound TCP connection to the given address.",
   "part": 5
  },
  {
   "id": 475,
   "question": "With rusqlite, `conn.execute(\"INSERT INTO t (a) VALUES (?1)\", [value])`:",
   "options": {
    "A": "Uses ?1 as a named parameter",
    "B": "Binds value to the first placeholder",
    "C": "Executes without parameters",
    "D": "Uses value as table name"
   },
   "correct": "B",
   "explanation": "?1, ?2, etc. are positional parameters; the array binds values in order.",
   "part": 5
  },
  {
   "id": 476,
   "question": "`tokio::io::AsyncReadExt::read_to_string` is used to:",
   "options": {
    "A": "Read bytes into a String",
    "B": "Read a file synchronously",
    "C": "Parse JSON",
    "D": "Read headers only"
   },
   "correct": "A",
   "explanation": "read_to_string reads all bytes and interprets them as UTF-8 into a String.",
   "part": 5
  },
  {
   "id": 477,
   "question": "For a simple request-response TCP protocol, you typically:",
   "options": {
    "A": "Send raw bytes with no framing",
    "B": "Use a framing strategy (length-prefix, delimiters, etc.)",
    "C": "Use HTTP only",
    "D": "Use UDP"
   },
   "correct": "B",
   "explanation": "You need framing (e.g. length-prefix or newline-delimited) to know message boundaries.",
   "part": 5
  },
  {
   "id": 478,
   "question": "`rusqlite::params!` macro:",
   "options": {
    "A": "Creates a params array for execute/query",
    "B": "Defines table parameters",
    "C": "Validates SQL",
    "D": "Escapes strings"
   },
   "correct": "A",
   "explanation": "params! creates a value suitable for execute/query parameter binding.",
   "part": 5
  },
  {
   "id": 479,
   "question": "`TcpStream` implements:",
   "options": {
    "A": "`AsyncRead` and `AsyncWrite`",
    "B": "`Read` and `Write` only",
    "C": "`Stream` only",
    "D": "`Future` only"
   },
   "correct": "A",
   "explanation": "TcpStream implements AsyncRead and AsyncWrite for async I/O.",
   "part": 5
  },
  {
   "id": 480,
   "question": "To run SQL with rusqlite and iterate rows:",
   "options": {
    "A": "`conn.prepare(\"SELECT ...\")?.query_map([], |row| ...)`",
    "B": "`conn.query(\"SELECT ...\")`",
    "C": "`conn.execute(\"SELECT ...\")`",
    "D": "`conn.fetch(\"SELECT ...\")`"
   },
   "correct": "A",
   "explanation": "prepare() + query_map() lets you execute and map each row with a closure.",
   "part": 5
  },
  {
   "id": 481,
   "question": "`cargo bench` runs benchmarks if you have:",
   "options": {
    "A": "A `[[bench]]` section in Cargo.toml",
    "B": "Any test functions",
    "C": "A bench.rs file",
    "D": "The criterion crate only"
   },
   "correct": "A",
   "explanation": "[[bench]] defines benchmark targets; cargo bench runs them (or use criterion in tests).",
   "part": 5
  },
  {
   "id": 482,
   "question": "`const fn` can be evaluated:",
   "options": {
    "A": "Only at runtime",
    "B": "At compile time (in const contexts)",
    "C": "Never; it's deprecated",
    "D": "Only in tests"
   },
   "correct": "B",
   "explanation": "const fn can be evaluated at compile time in const contexts (const, static, array lengths).",
   "part": 5
  },
  {
   "id": 483,
   "question": "LTO (Link Time Optimization) in Cargo.toml:",
   "options": {
    "A": "Optimizes across crate boundaries",
    "B": "Only optimizes within a single file",
    "C": "Is enabled by default in debug",
    "D": "Reduces binary size only"
   },
   "correct": "A",
   "explanation": "LTO performs optimizations across compilation units (crate boundaries).",
   "part": 5
  },
  {
   "id": 484,
   "question": "`#[inline(always)]` suggests:",
   "options": {
    "A": "The compiler should never inline",
    "B": "The compiler should always inline (strong hint)",
    "C": "Inline assembly",
    "D": "Inline documentation"
   },
   "correct": "B",
   "explanation": "#[inline(always)] strongly suggests inlining; #[inline] is a hint.",
   "part": 5
  },
  {
   "id": 485,
   "question": "SIMD in Rust is typically used via:",
   "options": {
    "A": "`std::simd` (portable SIMD) or `core::arch`",
    "B": "`simd` crate only",
    "C": "Inline assembly only",
    "D": "LLVM automatically; no explicit API"
   },
   "correct": "A",
   "explanation": "std::simd (nightly) and core::arch for target-specific intrinsics.",
   "part": 5
  },
  {
   "id": 486,
   "question": "`profile.release` in Cargo.toml can set:",
   "options": {
    "A": "`opt-level = 3`, `lto = true`, `codegen-units = 1`",
    "B": "Only opt-level",
    "C": "Only for dev profile",
    "D": "Nothing; profiles are fixed"
   },
   "correct": "A",
   "explanation": "[profile.release] can customize opt-level, lto, codegen-units, etc.",
   "part": 5
  },
  {
   "id": 487,
   "question": "`codegen-units = 1` in release profile:",
   "options": {
    "A": "Enables better optimizations (slower compile)",
    "B": "Speeds up compilation",
    "C": "Reduces binary size only",
    "D": "Is the default"
   },
   "correct": "A",
   "explanation": "codegen-units=1 improves optimization but slows compilation (default is 16).",
   "part": 5
  },
  {
   "id": 488,
   "question": "For profiling Rust programs, common tools include:",
   "options": {
    "A": "perf, flamegraph, cargo-flamegraph",
    "B": "Only gdb",
    "C": "Only println!",
    "D": "valgrind only"
   },
   "correct": "A",
   "explanation": "perf, flamegraph, cargo-flamegraph, and others are commonly used.",
   "part": 5
  },
  {
   "id": 489,
   "question": "`#[cold]` on a function hints:",
   "options": {
    "A": "The function is rarely called (optimize for size)",
    "B": "The function is hot (optimize for speed)",
    "C": "The function uses cold storage",
    "D": "The function is deprecated"
   },
   "correct": "A",
   "explanation": "#[cold] hints the function is unlikely; compiler may optimize for size.",
   "part": 5
  },
  {
   "id": 490,
   "question": "`std::hint::black_box(x)` is used to:",
   "options": {
    "A": "Prevent the compiler from optimizing away x in benchmarks",
    "B": "Convert x to black color",
    "C": "Mark x as unused",
    "D": "Serialize x"
   },
   "correct": "A",
   "explanation": "black_box prevents optimization away of values in benchmarks for accurate timing.",
   "part": 5
  },
  {
   "id": 491,
   "question": "`#![no_std]` means:",
   "options": {
    "A": "The crate does not use the standard library",
    "B": "The crate has no main",
    "C": "The crate is std-only",
    "D": "Disables core library"
   },
   "correct": "A",
   "explanation": "no_std omits the standard library; you use core (and optionally alloc) for embedded/WASM.",
   "part": 5
  },
  {
   "id": 492,
   "question": "For WebAssembly (WASM) targets, you typically use:",
   "options": {
    "A": "`wasm-pack` and `wasm-bindgen`",
    "B": "Only rustc",
    "C": "Only cargo",
    "D": "A separate WASM compiler"
   },
   "correct": "A",
   "explanation": "wasm-pack and wasm-bindgen are the standard tools for Rust-to-WASM with JS interop.",
   "part": 5
  },
  {
   "id": 493,
   "question": "`extern \"C\"` in Rust is used for:",
   "options": {
    "A": "Defining C-callable functions (FFI)",
    "B": "Importing C code",
    "C": "Both declaring external C functions and defining Rust functions callable from C",
    "D": "Only for unsafe blocks"
   },
   "correct": "C",
   "explanation": "extern \"C\" declares C ABI; used for both calling C from Rust and exposing Rust to C.",
   "part": 5
  },
  {
   "id": 494,
   "question": "`PhantomData<T>` is used when:",
   "options": {
    "A": "You need to store a T",
    "B": "You want to express a type relationship without owning T",
    "C": "T is a phantom type",
    "D": "For zero-sized types only"
   },
   "correct": "B",
   "explanation": "PhantomData<T> is zero-sized; it tells the compiler about type relationships (e.g. variance, Send) without storing T.",
   "part": 5
  },
  {
   "id": 495,
   "question": "The builder pattern in Rust is idiomatic when:",
   "options": {
    "A": "You have many optional parameters",
    "B": "You need inheritance",
    "C": "You want to avoid structs",
    "D": "For single-argument constructors"
   },
   "correct": "A",
   "explanation": "Builder pattern is idiomatic for configurable structs with many optional fields.",
   "part": 5
  },
  {
   "id": 496,
   "question": "`impl Trait` in return position means:",
   "options": {
    "A": "Return a concrete type that implements Trait (opaque)",
    "B": "Return the Trait object",
    "C": "Return any type",
    "D": "Return a generic"
   },
   "correct": "A",
   "explanation": "impl Trait in return position returns an opaque type implementing Trait (like a type alias).",
   "part": 5
  },
  {
   "id": 497,
   "question": "`?` operator can be used in functions that return:",
   "options": {
    "A": "`Result<T, E>` or `Option<T>` (or types that implement Try)",
    "B": "Only Result",
    "C": "Any type",
    "D": "Only in main"
   },
   "correct": "A",
   "explanation": "? works with Result, Option, and any type implementing the Try trait.",
   "part": 5
  },
  {
   "id": 498,
   "question": "`Arc<Mutex<T>>` is used when:",
   "options": {
    "A": "Sharing mutable state across threads",
    "B": "Single-threaded only",
    "C": "Immutable shared state",
    "D": "For Send types only"
   },
   "correct": "A",
   "explanation": "Arc enables shared ownership across threads; Mutex provides interior mutability for safe mutation.",
   "part": 5
  },
  {
   "id": 499,
   "question": "In idiomatic Rust, error handling prefers:",
   "options": {
    "A": "Result and ? over unwrap/expect in library code",
    "B": "panic! everywhere",
    "C": "Option only",
    "D": "Exceptions"
   },
   "correct": "A",
   "explanation": "Idiomatic Rust uses Result and ? for recoverable errors; panic for unrecoverable cases.",
   "part": 5
  },
  {
   "id": 500,
   "question": "(Capstone) A production Rust web service uses: Axum for HTTP, tokio for async, serde for JSON, and a shared `Arc<DbPool>` for database connections. Which concept best ties these together?",
   "options": {
    "A": "The service combines async I/O, type-safe extractors, serialization, and thread-safe shared state — showcasing Rust's strengths: zero-cost abstractions, fearless concurrency, and strong typing across the stack",
    "B": "Only async/await",
    "C": "Only the type system",
    "D": "Only memory safety"
   },
   "correct": "A",
   "explanation": "The capstone ties together async I/O, type-safe APIs, serialization, and shared state — demonstrating Rust's ecosystem and design philosophy.",
   "part": 5
  }
 ]
};
