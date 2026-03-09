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
  },
  {
   "index": 6,
   "title": "Advanced Ownership & Memory",
   "range": "Q501–Q600",
   "count": 100
  },
  {
   "index": 7,
   "title": "Closures, Iterators & Functional Patterns",
   "range": "Q601–Q700",
   "count": 100
  },
  {
   "index": 8,
   "title": "Async, Futures & Tokio",
   "range": "Q701–Q800",
   "count": 100
  },
  {
   "index": 9,
   "title": "Macros, Unsafe & FFI",
   "range": "Q801–Q900",
   "count": 100
  },
  {
   "index": 10,
   "title": "Design Patterns, Testing & Ecosystem",
   "range": "Q901–Q1000",
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
  },
  {
   "id": 501,
   "question": "What happens when you partially move from a struct and then use the struct again?\n\n```rust\nstruct Foo { a: String, b: i32 }\nlet f = Foo { a: \"hi\".into(), b: 42 };\nlet x = f.a;  // move\nprintln!(\"{}\", f.b);  // ?\n```",
   "options": {
    "A": "Compiles; only `f.a` was moved, `f.b` is still valid",
    "B": "Does not compile; the entire `f` is considered partially moved and cannot be used",
    "C": "Compiles; Rust automatically copies `f.b`",
    "D": "Does not compile; you must use `std::mem::replace` to avoid the partial move"
   },
   "correct": "B",
   "explanation": "Rust treats a struct as a single unit for borrowing. After a partial move of `f.a`, the struct `f` is in a partially moved state. You cannot access any field of `f` (including `f.b`) because the struct is no longer fully initialized. The compiler rejects this.",
   "part": 6
  },
  {
   "id": 502,
   "question": "In a loop, you move a value in the first iteration. What happens?\n\n```rust\nlet v = vec![1, 2, 3];\nfor i in 0..2 {\n    let _ = v;  // move on first iteration\n}\n```",
   "options": {
    "A": "Compiles; the move happens only once",
    "B": "Does not compile; `v` is moved in the first iteration and unavailable in the second",
    "C": "Compiles; Rust clones `v` for each iteration",
    "D": "Does not compile; you cannot move in a loop at all"
   },
   "correct": "B",
   "explanation": "On the first iteration, `v` is moved into `_`. On the second iteration, `v` is used again but it has already been moved. The compiler detects this and reports an error: use of moved value.",
   "part": 6
  },
  {
   "id": 503,
   "question": "In a `match` expression, moving from an enum variant in one arm affects other arms. Which is valid?",
   "options": {
    "A": "Moving from `Some(x)` in one arm and using `x` in another arm",
    "B": "Moving from different fields of a struct in different match arms",
    "C": "Moving from the same binding in all arms (each arm consumes it)",
    "D": "Moving from `Ok(x)` in one arm and referencing `x` in the `Err` arm"
   },
   "correct": "C",
   "explanation": "In a match, each arm gets its own ownership of the matched value. So moving in each arm is fine—each arm consumes the value independently. A, B, and D describe scenarios where you'd use the same value twice or across arms, which is invalid.",
   "part": 6
  },
  {
   "id": 504,
   "question": "What does this code do?\n\n```rust\nlet mut x = Some(String::from(\"hello\"));\nmatch x {\n    Some(ref s) => println!(\"{}\", s),\n    None => {}\n}\n// Can we use x here?\n```",
   "options": {
    "A": "Does not compile; `ref` in a match arm borrows `x`, so `x` cannot be used after",
    "B": "Compiles; `ref s` borrows the inner String, and `x` remains usable (still `Some(...)`)",
    "C": "Does not compile; `ref` is deprecated",
    "D": "Compiles; `ref s` moves the String out, so `x` becomes `None`"
   },
   "correct": "B",
   "explanation": "`ref s` creates a reference to the inner value without moving it. The `Option` remains intact. After the match, `x` is still `Some(String)` and can be used. No move occurs.",
   "part": 6
  },
  {
   "id": 505,
   "question": "Consider: `let (a, b) = (vec![1], vec![2]);` then `drop(a);` then `drop(b);`. What happens?",
   "options": {
    "A": "Both drops compile; each variable owns its vector",
    "B": "Does not compile; `drop(a)` moves `a`, so `drop(b)` would use a moved value",
    "C": "`drop(a)` consumes `a`; `drop(b)` is fine since `b` is separate",
    "D": "Both A and C are correct"
   },
   "correct": "D",
   "explanation": "`a` and `b` are separate bindings from the destructuring. `drop(a)` consumes `a` and is valid. `drop(b)` consumes `b` and is also valid. Each owns its own value. Both A and C correctly describe this.",
   "part": 6
  },
  {
   "id": 506,
   "question": "What is the result of `let x = (String::new(), 0); let y = x.0;`?",
   "options": {
    "A": "`x` is fully moved; `x.1` is inaccessible",
    "B": "`x` is partially moved; `x.0` is gone but `x.1` is still valid",
    "C": "Does not compile; you cannot move from a tuple field",
    "D": "`x` is copied; both `x.0` and `x.1` remain"
   },
   "correct": "B",
   "explanation": "Moving `x.0` (the String) leaves the tuple in a partially moved state. The tuple type is `(String, i32)`; after moving the String, `x.1` (the i32) is still there. However, you cannot access `x` as a whole or `x.1` through `x` in standard Rust—the struct/tuple is partially moved. Actually in Rust, for tuples, you CAN access `x.1` after moving `x.0`! Let me check: In Rust, for a tuple `(a, b)`, if you do `let y = x.0`, then `x.1` is still accessible. So B is correct—partial move, and the remaining field is valid. The nuance is that `x` as a whole is 'partially moved' but you can still use `x.1`.",
   "part": 6
  },
  {
   "id": 507,
   "question": "In a `for` loop over `vec.into_iter()`, when does the vector get dropped?",
   "options": {
    "A": "After each iteration",
    "B": "When the iterator is exhausted (after the loop ends)",
    "C": "Before the first iteration",
    "D": "Never; the iterator takes ownership and the vector is forgotten"
   },
   "correct": "B",
   "explanation": "`into_iter()` consumes the vector and produces an iterator that owns the elements. The vector's buffer is dropped when the iterator is dropped, which happens when the loop ends (iterator exhausted) or when the iterator goes out of scope.",
   "part": 6
  },
  {
   "id": 508,
   "question": "What happens with `let v = vec![1,2,3]; for x in v { } for x in v { }`?",
   "options": {
    "A": "Compiles; the first loop borrows, the second consumes",
    "B": "Does not compile; `v` is moved in the first `for` (which uses `into_iter()`)",
    "C": "Compiles; `for` uses `iter()` by default",
    "D": "Compiles; Rust implicitly clones `v` for the second loop"
   },
   "correct": "B",
   "explanation": "`for x in v` implicitly calls `v.into_iter()`, which consumes `v`. After the first loop, `v` is moved and no longer valid. The second loop would try to use `v` again, causing a compile error.",
   "part": 6
  },
  {
   "id": 509,
   "question": "`if let Some(x) = option` moves from `option`. How do you match without moving?",
   "options": {
    "A": "`if let Some(ref x) = option`",
    "B": "`if let Some(x) = &option`",
    "C": "`if let Some(ref x) = &option`",
    "D": "Both A and C work"
   },
   "correct": "D",
   "explanation": "`ref x` borrows the inner value. `&option` borrows the Option. `if let Some(ref x) = option` borrows the inner value but consumes the Option (moves it). `if let Some(ref x) = &option` borrows both—no move. For 'match without moving', C is the typical choice. A also avoids moving the inner value but moves the Option. So both can be used depending on whether you need the Option afterward.",
   "part": 6
  },
  {
   "id": 510,
   "question": "After `let (a, _) = (String::new(), 0);`, can you use `a`?",
   "options": {
    "A": "No; `_` means the whole tuple is ignored",
    "B": "Yes; `a` binds to the first element, `_` ignores the second",
    "C": "No; destructuring with `_` consumes the whole tuple",
    "D": "Yes; but only if you use `ref a`"
   },
   "correct": "B",
   "explanation": "`let (a, _) = ...` binds `a` to the first element and ignores the second with `_`. `a` is a valid binding and can be used. The `_` does not affect `a`.",
   "part": 6
  },
  {
   "id": 511,
   "question": "What is reborrowing?",
   "options": {
    "A": "Converting `&mut T` to `&T` to allow multiple readers",
    "B": "Creating a new reference from an existing reference, e.g. `&*r` or `&mut *r`",
    "C": "Converting a shared reference to a mutable reference",
    "D": "Moving a reference into a new binding"
   },
   "correct": "B",
   "explanation": "Reborrowing creates a new reference from an existing one. For `&mut T`, you can reborrow with `&mut *r` to get a shorter-lived mutable reference, allowing the original to be used again later. For `&T`, `&*r` reborrows.",
   "part": 6
  },
  {
   "id": 512,
   "question": "Why does `let r = &mut *v;` sometimes allow `v` to be used again later?",
   "options": {
    "A": "It creates a copy of the reference",
    "B": "The reborrow `&mut *v` has a shorter lifetime; when `r` goes out of scope, `v` is usable again",
    "C": "It doesn't; `v` is always moved",
    "D": "The compiler inserts a clone"
   },
   "correct": "B",
   "explanation": "`&mut *v` reborrows from `v`, creating a new mutable reference with a shorter lifetime. When `r` (the reborrow) goes out of scope, the borrow ends and `v` can be used again. This is key to NLL (Non-Lexical Lifetimes).",
   "part": 6
  },
  {
   "id": 513,
   "question": "What is borrow splitting?",
   "options": {
    "A": "Splitting a `&mut [T]` into two non-overlapping `&mut [T]` slices",
    "B": "Converting `&T` into `&mut T`",
    "C": "Splitting a reference's lifetime in half",
    "D": "Using `split_at_mut` to get two overlapping mutable slices"
   },
   "correct": "A",
   "explanation": "Borrow splitting allows multiple mutable borrows of different parts of the same data. `slice.split_at_mut(mid)` yields `(&mut self[..mid], &mut self[mid..])`—two non-overlapping mutable slices. The borrow checker recognizes they don't alias.",
   "part": 6
  },
  {
   "id": 514,
   "question": "What are two-phase borrows?",
   "options": {
    "A": "A borrow that is first reserved, then activated when the reference is actually used",
    "B": "A borrow that starts as shared and becomes mutable",
    "C": "Two separate borrows of the same data",
    "D": "A borrow that lasts for two function calls"
   },
   "correct": "A",
   "explanation": "Two-phase borrows allow `vec.push(vec.len())` to compile. The mutable borrow for `push` is first 'reserved' (not yet active). The `vec.len()` shared borrow runs, then the mutable borrow is 'activated' for the actual `push`. This enables method call patterns that would otherwise be rejected.",
   "part": 6
  },
  {
   "id": 515,
   "question": "NLL (Non-Lexical Lifetimes) allows:",
   "options": {
    "A": "References to outlive their lexical scope",
    "B": "A borrow to end as soon as the reference is last used, not at the end of the block",
    "C": "Multiple mutable borrows of the same data",
    "D": "References to be used after the borrow ends"
   },
   "correct": "B",
   "explanation": "NLL allows the borrow checker to end a borrow at the point of last use, rather than at the end of the block. This enables code like: use a reference, then use the original value in the same block, without extending the borrow unnecessarily.",
   "part": 6
  },
  {
   "id": 516,
   "question": "Why does this compile?\n\n```rust\nlet mut v = vec![1, 2, 3];\nlet r = &mut v;\nr.push(4);\nlet n = v.len();\n```",
   "options": {
    "A": "`r` is not used after `push`, so the borrow ends before `v.len()`",
    "B": "`v.len()` takes a shared borrow, which is allowed with a mutable borrow",
    "C": "It doesn't compile",
    "D": "`r` and `v` are different names for the same data, so it's fine"
   },
   "correct": "A",
   "explanation": "With NLL, after `r.push(4)`, `r` is no longer used. The borrow of `v` ends at that point. So `v.len()` is valid—the mutable borrow has ended. This is Non-Lexical Lifetimes in action.",
   "part": 6
  },
  {
   "id": 517,
   "question": "What does `#![feature(nll)]` do in modern Rust?",
   "options": {
    "A": "Enables the NLL borrow checker (default since Rust 2018)",
    "B": "Enables a stricter, experimental borrow checker",
    "C": "Disables the borrow checker",
    "D": "Enables polymorphic NLL for higher-ranked lifetimes"
   },
   "correct": "A",
   "explanation": "NLL is enabled by default in Rust 2018 and later. The `#![feature(nll)]` was used in older editions to opt in. In modern Rust, NLL is always on; the feature flag is obsolete.",
   "part": 6
  },
  {
   "id": 518,
   "question": "In `fn foo(x: &mut i32) { let y = &mut *x; }`, what is the relationship between `x` and `y`?",
   "options": {
    "A": "`y` is an independent copy of `x`",
    "B": "`y` is a reborrow of `x`; both point to the same memory",
    "C": "`y` takes ownership of `*x`",
    "D": "`y` is a shared reference to `x`"
   },
   "correct": "B",
   "explanation": "`&mut *x` reborrows from `x`. `y` is a new mutable reference to the same `i32` that `x` points to. They alias the same memory; `y` has a shorter lifetime (the function body).",
   "part": 6
  },
  {
   "id": 519,
   "question": "`fn f(s: &str) -> &str` has an implicit lifetime. What does the compiler infer?",
   "options": {
    "A": "The output lives as long as the input",
    "B": "The output has a static lifetime",
    "C": "The output has a fresh local lifetime",
    "D": "The compiler cannot infer and requires an explicit lifetime"
   },
   "correct": "A",
   "explanation": "Lifetime elision rule: for `fn f(s: &str) -> &str`, the single input reference gets its lifetime applied to the output. So the return type is inferred as `&'a str` where `'a` is the lifetime of `s`.",
   "part": 6
  },
  {
   "id": 520,
   "question": "Can you have two mutable borrows of the same `Vec` at the same time?",
   "options": {
    "A": "Yes, with `unsafe`",
    "B": "Yes, using `split_at_mut` to get non-overlapping slices",
    "C": "No, never",
    "D": "Yes, with `RefCell`"
   },
   "correct": "B",
   "explanation": "`split_at_mut` splits a slice into two non-overlapping mutable parts. The borrow checker treats them as distinct borrows. So you can have `let (a, b) = v.split_at_mut(2);` and use both `a` and `b` mutably. C and D are wrong; A is unnecessary for this pattern.",
   "part": 6
  },
  {
   "id": 521,
   "question": "For `fn f(a: &i32, b: &i32) -> &i32`, what does lifetime elision infer?",
   "options": {
    "A": "All three references share the same lifetime",
    "B": "The output lifetime is the longer of the two inputs",
    "C": "The output lifetime is the shorter of the two inputs",
    "D": "Compiler error; cannot elide with two inputs"
   },
   "correct": "D",
   "explanation": "With two input references, the compiler cannot infer which lifetime applies to the output. Elision rules don't cover this case. You must write explicitly: `fn f<'a>(a: &'a i32, b: &'a i32) -> &'a i32` or similar.",
   "part": 6
  },
  {
   "id": 522,
   "question": "What does `for<'a>` mean in `F: for<'a> Fn(&'a str) -> &'a str`?",
   "options": {
    "A": "The function must work for one specific lifetime `'a`",
    "B": "The function must work for any lifetime `'a` (higher-ranked trait bound)",
    "C": "The function takes a reference with lifetime `'a`",
    "D": "`'a` is a loop variable"
   },
   "correct": "B",
   "explanation": "`for<'a>` is a Higher-Ranked Trait Bound (HRTB). It means the type must implement the trait for every possible lifetime `'a`. The function must be callable with any `&'a str` and return `&'a str`.",
   "part": 6
  },
  {
   "id": 523,
   "question": "`fn foo(x: &i32, y: &i32)` — what are the elided lifetimes?",
   "options": {
    "A": "Both get the same anonymous lifetime",
    "B": "Each gets a distinct lifetime; no relationship",
    "C": "`x` and `y` must outlive the function",
    "D": "The compiler assigns `'static` to both"
   },
   "correct": "B",
   "explanation": "For multiple input references with no output reference, each gets its own distinct anonymous lifetime. There is no constraint that they be the same. The elision rules don't tie them together.",
   "part": 6
  },
  {
   "id": 524,
   "question": "What is the lifetime of the return value in `fn f() -> &str`?",
   "options": {
    "A": "`'static` (elision rule for no inputs)",
    "B": "Compiler error; cannot infer",
    "C": "A fresh local lifetime",
    "D": "The lifetime of the function"
   },
   "correct": "B",
   "explanation": "When there are no input references, the elision rules don't apply. Returning `&str` without any input reference means the compiler cannot infer the lifetime. You must write `-> &'static str` explicitly if that's intended.",
   "part": 6
  },
  {
   "id": 525,
   "question": "`trait Trait { fn f(&self) -> &str; }` — what lifetime does `&str` have?",
   "options": {
    "A": "`'static`",
    "B": "Tied to `&self`'s lifetime (elision: `fn f(&self) -> &str` → output = self)",
    "C": "A new local lifetime",
    "D": "Must be written explicitly"
   },
   "correct": "B",
   "explanation": "In trait methods, the elision rule for `fn f(&self) -> &str` assigns the output lifetime to `&self`. So the returned `&str` lives as long as `self`.",
   "part": 6
  },
  {
   "id": 526,
   "question": "`where for<'a> T: Fn(&'a str)` — what does this constrain?",
   "options": {
    "A": "`T` must implement `Fn` for one specific `'a`",
    "B": "`T` must implement `Fn(&'a str)` for every possible lifetime `'a`",
    "C": "`T` has a lifetime parameter `'a`",
    "D": "`T` outlives `'a`"
   },
   "correct": "B",
   "explanation": "HRTB: `for<'a> T: Fn(&'a str)` means `T` must be callable with `&str` for any lifetime. This is needed when the closure/function is generic over the lifetime of its argument.",
   "part": 6
  },
  {
   "id": 527,
   "question": "Why might you need `impl for<'a> Fn(&'a str) -> &'a str` for a closure?",
   "options": {
    "A": "Closures don't have lifetime parameters",
    "B": "The closure must work when given a reference with any lifetime",
    "C": "To allow the closure to outlive its capture",
    "D": "To satisfy the `Fn` trait's requirements"
   },
   "correct": "B",
   "explanation": "A closure that returns a reference to its argument (e.g. `|s| s`) is generic over the input lifetime. The type system needs `for<'a> Fn(&'a str) -> &'a str` to express that it works for any `'a`.",
   "part": 6
  },
  {
   "id": 528,
   "question": "`fn f<'a: 'b, 'b>(x: &'a i32, y: &'b i32)` — what does `'a: 'b` mean?",
   "options": {
    "A": "`'a` is shorter than `'b`",
    "B": "`'a` outlives `'b` (i.e. `'a` is at least as long as `'b`)",
    "C": "`'b` outlives `'a`",
    "D": "`'a` and `'b` are the same"
   },
   "correct": "B",
   "explanation": "`'a: 'b` is a lifetime bound: `'a` outlives `'b`. Any reference with lifetime `'a` lives at least as long as one with `'b`. It's read as 'a outlives b'.",
   "part": 6
  },
  {
   "id": 529,
   "question": "What does `T: 'static` mean?",
   "options": {
    "A": "`T` contains no references",
    "B": "`T` contains no non-`'static` references (all refs live forever or there are no refs)",
    "C": "`T` is a static variable",
    "D": "`T` has a `'static` lifetime parameter"
   },
   "correct": "B",
   "explanation": "`T: 'static` means every reference in `T` (if any) has `'static` lifetime. Types like `i32`, `String`, `Vec<i32>` are `'static` because they own their data. `&'static str` is also `'static`.",
   "part": 6
  },
  {
   "id": 530,
   "question": "`fn f<T>(x: T) where T: 'static` — what can you pass?",
   "options": {
    "A": "Only `&'static` references",
    "B": "Any owned type (no references) or types with only `'static` refs",
    "C": "Any type",
    "D": "Only `String` and `Vec`"
   },
   "correct": "B",
   "explanation": "`T: 'static` accepts owned types (`i32`, `String`, `Vec<T>`) and types with only `'static` references. You cannot pass `&'a str` where `'a` is not `'static`.",
   "part": 6
  },
  {
   "id": 531,
   "question": "What is the primary use of `Box<T>`?",
   "options": {
    "A": "To share ownership across threads",
    "B": "To allocate `T` on the heap and have a single owner",
    "C": "To allow interior mutability",
    "D": "To create reference cycles"
   },
   "correct": "B",
   "explanation": "`Box<T>` allocates `T` on the heap. There is a single owner; when the `Box` is dropped, the heap allocation is freed. It's for heap allocation and indirection, not sharing or interior mutability.",
   "part": 6
  },
  {
   "id": 532,
   "question": "When would you use `Rc<T>` instead of `Box<T>`?",
   "options": {
    "A": "When you need thread safety",
    "B": "When multiple owners need to share the same value",
    "C": "When you need mutable access from multiple places",
    "D": "When the value is very large"
   },
   "correct": "B",
   "explanation": "`Rc<T>` provides shared ownership via reference counting. Multiple `Rc` clones point to the same allocation. Use it when several parts of the program need to own the value. For thread-safe sharing, use `Arc<T>`.",
   "part": 6
  },
  {
   "id": 533,
   "question": "What is `Weak<T>` used for?",
   "options": {
    "A": "To create a weak reference that doesn't prevent dropping",
    "B": "To allow mutable access without interior mutability",
    "C": "To reduce the size of `Rc`",
    "D": "To break reference cycles and avoid memory leaks"
   },
   "correct": "D",
   "explanation": "`Weak<T>` doesn't contribute to the strong count. When all `Rc`s are dropped, the value is dropped even if `Weak` references remain. `Weak::upgrade()` yields `Option<Rc<T>>`. This breaks cycles: A→Rc(B), B→Rc(A) would leak; B→Weak(A) allows both to be dropped.",
   "part": 6
  },
  {
   "id": 534,
   "question": "`Rc` vs `Arc`: when do you need `Arc`?",
   "options": {
    "A": "Always; `Arc` is the modern replacement for `Rc`",
    "B": "When the value is shared across threads",
    "C": "When you need atomic operations on the value",
    "D": "When the reference count exceeds 2^31"
   },
   "correct": "B",
   "explanation": "`Arc` uses atomic reference counting and is thread-safe. Use it when multiple threads need to share ownership. `Rc` is for single-threaded use only; using it across threads would be undefined behavior.",
   "part": 6
  },
  {
   "id": 535,
   "question": "How do you create a reference cycle with `Rc`?\n\n```rust\nuse std::rc::Rc;\nstruct Node { next: Option<Rc<Node>> }\nlet a = Rc::new(Node { next: None });\nlet b = Rc::new(Node { next: Some(a.clone()) });\n// How to make a cycle?\n```",
   "options": {
    "A": "`a.next = Some(b.clone())` — but you can't mutate through `Rc`",
    "B": "Use `Rc::get_mut` to mutate `a`",
    "C": "Use `RefCell` (or similar) to allow `a` to hold `Rc` to `b`",
    "D": "You cannot create a cycle with `Rc` alone"
   },
   "correct": "C",
   "explanation": "`Rc` is immutable. To create a cycle, you need interior mutability. `Rc<RefCell<Node>>` lets you mutate the `next` field so `a` can point to `b` while `b` points to `a`. That creates a cycle.",
   "part": 6
  },
  {
   "id": 536,
   "question": "What happens when you `clone()` an `Rc<T>`?",
   "options": {
    "A": "Deep copy of `T`",
    "B": "Increments the reference count; both clones point to the same allocation",
    "C": "Moves the value to the new `Rc`",
    "D": "Creates a weak reference"
   },
   "correct": "B",
   "explanation": "`Rc::clone` increments the strong reference count. The new `Rc` points to the same allocation. No copying of `T` occurs. Dropping an `Rc` decrements the count; when it reaches 0, `T` is dropped.",
   "part": 6
  },
  {
   "id": 537,
   "question": "`Box::leak(Box::new(x))` returns `&'static mut T`. What does it do?",
   "options": {
    "A": "Leaks the box and returns a mutable reference that lives forever",
    "B": "Creates a static variable",
    "C": "Returns a reference that will be freed when it goes out of scope",
    "D": "Causes undefined behavior"
   },
   "correct": "A",
   "explanation": "`Box::leak` consumes the `Box` and returns `&'static mut T`. The allocation is never freed (intentional leak). The reference is valid for the rest of the program. Used when you need a `'static` reference (e.g. for `lazy_static`-style initialization).",
   "part": 6
  },
  {
   "id": 538,
   "question": "Why might `Rc<RefCell<T>>` be used?",
   "options": {
    "A": "For thread-safe shared mutable state",
    "B": "For single-threaded shared mutable state (multiple owners, interior mutability)",
    "C": "To avoid reference cycles",
    "D": "To reduce allocation count"
   },
   "correct": "B",
   "explanation": "`Rc` gives shared ownership; `RefCell` gives interior mutability. Together they allow multiple owners to mutate the same value at runtime (with borrow checks at runtime). For threads, you'd use `Arc<Mutex<T>>` or similar.",
   "part": 6
  },
  {
   "id": 539,
   "question": "What is the strong count of a new `Rc::new(x)`?",
   "options": {
    "A": "0",
    "B": "1",
    "C": "2",
    "D": "Depends on `x`"
   },
   "correct": "B",
   "explanation": "A newly created `Rc` has a strong count of 1. Each `clone()` increments it. Each `drop` decrements it. When it reaches 0, the inner value is dropped.",
   "part": 6
  },
  {
   "id": 540,
   "question": "`Arc<T>` requires `T: Send + Sync`. Why?",
   "options": {
    "A": "`Arc` clones can move between threads; `T` may be accessed from multiple threads",
    "B": "`Arc` is always sent across threads",
    "C": "`T` must be `Copy`",
    "D": "To allow `Arc` to be `Clone`"
   },
   "correct": "A",
   "explanation": "`Arc` is designed for shared ownership across threads. Cloning and sending between threads means `T` might be accessed from different threads. So `T: Send + Sync` is required for safe concurrent access.",
   "part": 6
  },
  {
   "id": 541,
   "question": "What does `Cell<T>` provide?",
   "options": {
    "A": "Thread-safe interior mutability",
    "B": "Interior mutability for `Copy` types (or types where you swap whole values)",
    "C": "A shared reference that allows mutation",
    "D": "Mutable static storage"
   },
   "correct": "B",
   "explanation": "`Cell<T>` provides interior mutability by allowing you to replace the whole value with `get()` (for `Copy`) or `set()`/`replace()`/`swap()`. It doesn't give you a `&mut T`; you work with owned values. Not thread-safe.",
   "part": 6
  },
  {
   "id": 542,
   "question": "`RefCell<T>` vs `Cell<T>`: when use `RefCell`?",
   "options": {
    "A": "When `T` is `Copy`",
    "B": "When you need to get `&T` or `&mut T` and mutate through a shared reference",
    "C": "When you need thread safety",
    "D": "When `T` is large"
   },
   "correct": "B",
   "explanation": "`RefCell` lets you obtain `&T` or `&mut T` via `borrow()`/`borrow_mut()` at runtime. It enforces the borrowing rules at runtime (panics on violation). Use it when you need to mutate through a shared reference and can't use `&mut`.",
   "part": 6
  },
  {
   "id": 543,
   "question": "What happens if you call `borrow_mut()` on a `RefCell` while a `borrow()` is active?",
   "options": {
    "A": "Compiles but panics at runtime",
    "B": "Compiles and runs; RefCell allows multiple mutable borrows",
    "C": "Does not compile",
    "D": "Undefined behavior"
   },
   "correct": "A",
   "explanation": "`RefCell` enforces borrowing at runtime. If you `borrow()` and then `borrow_mut()` (or vice versa) while the first is still active, it panics. Same rules as compile-time borrows, but checked at runtime.",
   "part": 6
  },
  {
   "id": 544,
   "question": "What is `UnsafeCell<T>`?",
   "options": {
    "A": "A safe wrapper for interior mutability",
    "B": "The primitive for interior mutability; `Cell` and `RefCell` are built on it",
    "C": "A thread-safe `Cell`",
    "D": "A type that allows arbitrary unsafe mutations"
   },
   "correct": "B",
   "explanation": "`UnsafeCell<T>` is the core primitive. It has `get() -> *mut T` and is the only way to get a mutable pointer from an immutable reference in safe Rust's model. `Cell` and `RefCell` wrap it to provide safe APIs.",
   "part": 6
  },
  {
   "id": 545,
   "question": "What is `OnceCell<T>` (or `std::sync::OnceLock<T>`)?",
   "options": {
    "A": "A cell that can be set only once and then read many times",
    "B": "A cell that can be set multiple times",
    "C": "A thread-safe `Cell`",
    "D": "A lazy static"
   },
   "correct": "A",
   "explanation": "`OnceCell`/`OnceLock` holds a value that can be written at most once. After that, it's read-only. Used for lazy initialization: compute on first access, then cache. `OnceLock` is the thread-safe version in std.",
   "part": 6
  },
  {
   "id": 546,
   "question": "`OnceLock::get_or_init(|| expensive())` — when is `expensive()` called?",
   "options": {
    "A": "Every time `get_or_init` is called",
    "B": "Only the first time; subsequent calls return the cached value",
    "C": "When the `OnceLock` is created",
    "D": "Never; it's lazy"
   },
   "correct": "B",
   "explanation": "`get_or_init` runs the closure only if the cell is empty. The first caller runs it and stores the result. Later callers get the cached value without running the closure again.",
   "part": 6
  },
  {
   "id": 547,
   "question": "Can `Cell<Vec<i32>>` be used to push to the vector through a shared reference?",
   "options": {
    "A": "No; `Cell` doesn't give `&mut Vec`",
    "B": "Yes; `Cell` allows any mutation",
    "C": "Yes; with `get_mut()`",
    "D": "Only with `unsafe`"
   },
   "correct": "A",
   "explanation": "`Cell` provides `get()` (for `Copy`), `set()`, `replace()`, `swap()`. It doesn't give `&mut T`. To push to a `Vec` you need `&mut Vec`. So you'd use `cell.replace(cell.take().into_iter().chain([x]).collect())` or similar—or use `RefCell<Vec<i32>>` instead.",
   "part": 6
  },
  {
   "id": 548,
   "question": "Why is `RefCell` not `Sync`?",
   "options": {
    "A": "It doesn't implement `Send`",
    "B": "Sharing a `RefCell` across threads could allow concurrent `borrow` and `borrow_mut`, causing data races",
    "C": "It's actually `Sync`",
    "D": "It uses non-atomic operations"
   },
   "correct": "B",
   "explanation": "`RefCell` uses non-atomic ref counting for its borrow state. If shared across threads, two threads could `borrow` and `borrow_mut` concurrently, leading to data races. So it's not `Sync`. Use `Mutex` or `RwLock` for thread-safe interior mutability.",
   "part": 6
  },
  {
   "id": 549,
   "question": "`thread_local! { static X: RefCell<i32> = RefCell::new(0); }` — is this safe?",
   "options": {
    "A": "No; RefCell is not thread-safe",
    "B": "Yes; each thread has its own `X`, so no sharing",
    "C": "No; thread_local is unsafe",
    "D": "Only with `Sync`"
   },
   "correct": "B",
   "explanation": "`thread_local!` gives each thread its own instance of `X`. There's no sharing between threads, so `RefCell`'s non-`Sync` nature doesn't matter. Each thread mutates its own copy. Safe.",
   "part": 6
  },
  {
   "id": 550,
   "question": "What does `Cell::from_mut(&mut T)` do?",
   "options": {
    "A": "Creates a `Cell` that borrows `T`",
    "B": "Creates a `Cell` from a mutable reference, treating the referent as a `Cell` (for splitting)",
    "C": "Moves `T` into a `Cell`",
    "D": "Converts `&mut T` to `&Cell<T>`"
   },
   "correct": "B",
   "explanation": "`Cell::from_mut` takes `&mut T` and returns `&Cell<T>`. It's used with `Cell::from_mut(slice).as_slice_of_cells()` to get `&[Cell<T>]` from `&mut [T]`, enabling per-element interior mutability.",
   "part": 6
  },
  {
   "id": 551,
   "question": "What problem does `Pin` solve?",
   "options": {
    "A": "Preventing values from being moved in memory",
    "B": "Enabling self-referential structs (where a field points to another field)",
    "C": "Making async types `Send`",
    "D": "Preventing data races"
   },
   "correct": "B",
   "explanation": "Self-referential structs can have a pointer to their own data. Moving the struct would invalidate that pointer. `Pin` ensures the pointee is not moved, enabling safe self-referential types (e.g. async generators, futures).",
   "part": 6
  },
  {
   "id": 552,
   "question": "What does `Unpin` mean?",
   "options": {
    "A": "The type cannot be pinned",
    "B": "The type is safe to move even when pinned (pinning has no effect)",
    "C": "The type has no self-references",
    "D": "The type is always pinned"
   },
   "correct": "B",
   "explanation": "`Unpin` is an auto trait. Types that implement it (most types) can be moved out of a `Pin<P>`. For `Unpin` types, `Pin` is a no-op. Types with self-references typically don't implement `Unpin`.",
   "part": 6
  },
  {
   "id": 553,
   "question": "`Pin<Box<MyFuture>>` — what guarantee does this provide?",
   "options": {
    "A": "The `Box` cannot be moved",
    "B": "The future inside the `Box` cannot be moved in memory (stable address)",
    "C": "The future cannot be polled",
    "D": "The `Box` is on the stack"
   },
   "correct": "B",
   "explanation": "`Pin<Box<T>>` pins `T` in place. The `Box` allocates on the heap, so the future has a stable address. You can safely hold a pointer to it (e.g. for self-referential futures). The `Box` itself can be moved, but the heap allocation's address is stable.",
   "part": 6
  },
  {
   "id": 554,
   "question": "Can you `mem::swap` two `Pin<Box<T>>` values?",
   "options": {
    "A": "Yes; swapping is always allowed",
    "B": "No; it would move the pinned data",
    "C": "Yes; only if `T: Unpin`",
    "D": "No; `Pin` prevents all operations"
   },
   "correct": "C",
   "explanation": "Swapping would move the inner `T` values. If `T: Unpin`, moving is safe, so swap is allowed. If `T` is not `Unpin` (e.g. self-referential), swapping would invalidate internal pointers, so it's forbidden.",
   "part": 6
  },
  {
   "id": 555,
   "question": "What is `Pin::new_unchecked`?",
   "options": {
    "A": "A safe constructor for `Pin`",
    "B": "An `unsafe` constructor; you must guarantee the pointee will not be moved",
    "C": "A way to unpin a value",
    "D": "A deprecated function"
   },
   "correct": "B",
   "explanation": "`Pin::new_unchecked` is `unsafe`. You must uphold the pinning invariant: the pointee must not be moved until it's dropped. Used when implementing custom pinned types (e.g. futures) where you can guarantee this.",
   "part": 6
  },
  {
   "id": 556,
   "question": "Why do most async futures implement `Unpin`?",
   "options": {
    "A": "They don't; most don't implement `Unpin`",
    "B": "Because they're generated by the compiler and don't have self-references",
    "C": "To allow them to be moved between tasks",
    "D": "For compatibility with `Pin`"
   },
   "correct": "B",
   "explanation": "Simple async blocks that don't hold references into themselves are `Unpin`. The compiler generates a future struct; if it has no self-references, it's `Unpin`. More complex futures (e.g. with `select!` or manual impl) may be `!Unpin`.",
   "part": 6
  },
  {
   "id": 557,
   "question": "`impl !Unpin for MyType` — what does `!Unpin` mean?",
   "options": {
    "A": "MyType does not implement Unpin (opt-out)",
    "B": "MyType explicitly implements Unpin",
    "C": "MyType cannot be pinned",
    "D": "Syntax error"
   },
   "correct": "A",
   "explanation": "`!Unpin` is an opt-out. By default, types are `Unpin`. `impl !Unpin for MyType` explicitly marks `MyType` as not implementing `Unpin`, so it cannot be safely moved when pinned.",
   "part": 6
  },
  {
   "id": 558,
   "question": "What does `Pin::as_mut` do?",
   "options": {
    "A": "Converts `Pin<&mut T>` to `&mut T`",
    "B": "Converts `Pin<P>` to `Pin<&mut T>` where `P: DerefMut`, for method chaining",
    "C": "Unpins the value",
    "D": "Creates a mutable reference to the `Pin`"
   },
   "correct": "B",
   "explanation": "`Pin::as_mut` takes `Pin<&mut P>` (where `P: DerefMut`) and returns `Pin<&mut P::Target>`. It's used to get a pinned projection for method chains, e.g. when polling a future.",
   "part": 6
  },
  {
   "id": 559,
   "question": "When would you use `Box::pin(x)`?",
   "options": {
    "A": "To allocate `x` on the heap",
    "B": "To create a `Pin<Box<T>>` — heap-allocate and pin in one step",
    "C": "To prevent `x` from being dropped",
    "D": "To create a pinned reference"
   },
   "correct": "B",
   "explanation": "`Box::pin(x)` is equivalent to `Pin::from(Box::new(x))`. It allocates on the heap and pins the value. Convenient for creating pinned futures or other self-referential types.",
   "part": 6
  },
  {
   "id": 560,
   "question": "A future that holds `&mut self` in its poll state — is it `Unpin`?",
   "options": {
    "A": "Yes; all futures are Unpin",
    "B": "No; it's self-referential (the future holds a reference into its own state)",
    "C": "Yes; references are Unpin",
    "D": "Only if the reference is `'static`"
   },
   "correct": "B",
   "explanation": "If the future holds a reference that points into its own data (e.g. a field), it's self-referential. Moving the future would invalidate that reference. Such futures are `!Unpin` and must be pinned before polling.",
   "part": 6
  },
  {
   "id": 561,
   "question": "What does `#[repr(C)]` do?",
   "options": {
    "A": "Makes the type `Copy`",
    "B": "Uses C-compatible layout (field order, alignment, padding)",
    "C": "Enables C interop only",
    "D": "Packs the struct with no padding"
   },
   "correct": "B",
   "explanation": "`#[repr(C)]` uses the same layout rules as C: fields in declaration order, platform-specific alignment and padding. Used for FFI and when you need a predictable layout.",
   "part": 6
  },
  {
   "id": 562,
   "question": "`#[repr(packed)]` — what is the trade-off?",
   "options": {
    "A": "Smaller size, potentially unaligned access (slower or UB on some platforms)",
    "B": "Faster access, larger size",
    "C": "No effect in Rust",
    "D": "Guarantees no padding"
   },
   "correct": "A",
   "explanation": "`packed` removes padding, minimizing size. Fields may be unaligned. Unaligned loads can be slower or cause UB on strict architectures. Use with care, especially for types with alignment requirements.",
   "part": 6
  },
  {
   "id": 563,
   "question": "`size_of::<Option<&i32>>()` — what is it?",
   "options": {
    "A": "`size_of::<&i32>() + 1` (pointer + discriminant)",
    "B": "Same as `size_of::<&i32>()` (null pointer optimization)",
    "C": "Twice the size of a pointer",
    "D": "Platform-dependent"
   },
   "correct": "B",
   "explanation": "Rust applies the null pointer optimization: `Option<&T>` has the same size as `&T`. `None` is represented as the null pointer. So `Option<&i32>` is one pointer size.",
   "part": 6
  },
  {
   "id": 564,
   "question": "`align_of::<u64>()` on a 64-bit system?",
   "options": {
    "A": "1",
    "B": "4",
    "C": "8",
    "D": "16"
   },
   "correct": "C",
   "explanation": "`u64` is 8 bytes and typically has 8-byte alignment on 64-bit systems. `align_of` returns the alignment requirement.",
   "part": 6
  },
  {
   "id": 565,
   "question": "What is a ZST (Zero-Sized Type)?",
   "options": {
    "A": "A type with size 0 and alignment 0",
    "B": "A type like `()` or `PhantomData<T>` that has size 0",
    "C": "An empty struct",
    "D": "A type that cannot be instantiated"
   },
   "correct": "B",
   "explanation": "ZSTs have `size_of == 0`. Examples: `()`, `PhantomData<T>`, `std::marker::PhantomPinned`. They take no memory. Arrays of ZSTs can have arbitrary length with no size change.",
   "part": 6
  },
  {
   "id": 566,
   "question": "`size_of::<[u8; 0]>()`?",
   "options": {
    "A": "0",
    "B": "1",
    "C": "Undefined",
    "D": "Platform-dependent"
   },
   "correct": "A",
   "explanation": "A zero-length array is a ZST. `size_of::<[u8; 0]>() == 0`. No elements, no size.",
   "part": 6
  },
  {
   "id": 567,
   "question": "`#[repr(transparent)]` on a struct with one field — what does it guarantee?",
   "options": {
    "A": "The struct has the same layout as its single non-ZST field",
    "B": "The struct is a ZST",
    "C": "The struct has no padding",
    "D": "The struct can be transmuted to the field type"
   },
   "correct": "A",
   "explanation": "`#[repr(transparent)]` means the struct has the same layout and ABI as its single non-zero-sized field. Used for newtype wrappers (e.g. `struct Meters(f64)`) that must be ABI-compatible with the inner type.",
   "part": 6
  },
  {
   "id": 568,
   "question": "Why might a struct have padding between fields?",
   "options": {
    "A": "To optimize cache performance",
    "B": "To satisfy alignment requirements of subsequent fields",
    "C": "Rust never adds padding",
    "D": "To make the struct larger"
   },
   "correct": "B",
   "explanation": "Padding is inserted to align fields. E.g. `struct S { a: u8, b: u64 }` — `b` needs 8-byte alignment, so padding is added after `a`. This avoids unaligned access.",
   "part": 6
  },
  {
   "id": 569,
   "question": "`std::mem::size_of_val(&x)` vs `size_of::<T>()` where `x: T`?",
   "options": {
    "A": "They're always equal",
    "B": "`size_of_val` handles DSTs (e.g. slices, trait objects) by including the length/vtable",
    "C": "`size_of_val` is smaller for large types",
    "D": "`size_of_val` doesn't exist"
   },
   "correct": "B",
   "explanation": "`size_of::<T>()` requires `T: Sized`. `size_of_val` works with references to DSTs: for `&[T]` it includes the slice length; for `&dyn Trait` it includes the vtable. It gives the runtime size.",
   "part": 6
  },
  {
   "id": 570,
   "question": "`#[repr(u8)] enum E { A, B }` — what is the size of `E`?",
   "options": {
    "A": "0 (it's an enum)",
    "B": "1 byte (discriminant)",
    "C": "2 bytes",
    "D": "Same as the largest variant"
   },
   "correct": "B",
   "explanation": "`#[repr(u8)]` makes the discriminant a `u8`. With no data in the variants, the enum is 1 byte. The repr controls the discriminant size and layout.",
   "part": 6
  },
  {
   "id": 571,
   "question": "In what order are struct fields dropped?",
   "options": {
    "A": "Reverse declaration order",
    "B": "Declaration order",
    "C": "Arbitrary",
    "D": "Reverse declaration order (last declared dropped first)"
   },
   "correct": "D",
   "explanation": "Fields are dropped in reverse declaration order: the last field is dropped first, then the second-to-last, etc. This matches how they're constructed.",
   "part": 6
  },
  {
   "id": 572,
   "question": "`mem::forget(x)` — what happens to `x`?",
   "options": {
    "A": "`x` is dropped immediately",
    "B": "`x` is never dropped; its destructor is not run (intentional leak)",
    "C": "`x` is moved and then dropped",
    "D": "Undefined behavior"
   },
   "correct": "B",
   "explanation": "`mem::forget` consumes `x` and never runs its destructor. The memory/resources are leaked. Used when you've transferred ownership to FFI or when you intentionally want to leak (e.g. for `'static` data).",
   "part": 6
  },
  {
   "id": 573,
   "question": "What is `ManuallyDrop<T>` for?",
   "options": {
    "A": "To prevent `T` from being dropped when the `ManuallyDrop` goes out of scope",
    "B": "To manually trigger the drop",
    "C": "To delay the drop",
    "D": "To make `T` `Copy`"
   },
   "correct": "A",
   "explanation": "`ManuallyDrop` wraps `T` and does not run `T`'s destructor when it's dropped. You can use `ManuallyDrop::into_inner` to take ownership and drop it yourself, or use `mem::forget` to never drop.",
   "part": 6
  },
  {
   "id": 574,
   "question": "`mem::replace(&mut dest, src)` — what does it return?",
   "options": {
    "A": "`src`",
    "B": "The old value of `dest`",
    "C": "`(dest, src)`",
    "D": "Nothing; it returns `()`"
   },
   "correct": "B",
   "explanation": "`mem::replace` writes `src` into `dest` and returns the previous value of `dest`. Useful when you need to take a value out of a mutable reference and leave something in its place.",
   "part": 6
  },
  {
   "id": 575,
   "question": "When is `Drop::drop` called?",
   "options": {
    "A": "When the value goes out of scope",
    "B": "Automatically by the compiler when the value is no longer needed",
    "C": "You must call it explicitly",
    "D": "When `drop()` is called"
   },
   "correct": "B",
   "explanation": "The compiler inserts drop glue that runs `Drop::drop` when the value goes out of scope. You never call `Drop::drop` directly (it's `&mut self` and would require special handling). You use `drop(value)` to run the destructor early.",
   "part": 6
  },
  {
   "id": 576,
   "question": "Can you call `drop` on a value twice?",
   "options": {
    "A": "Yes; `drop` borrows",
    "B": "No; `drop` consumes the value",
    "C": "Yes; with `Copy` types",
    "D": "Only with `Rc`"
   },
   "correct": "B",
   "explanation": "`drop` takes ownership. After `drop(x)`, `x` is moved and cannot be used again. Calling `drop(x)` twice would be a use-after-move error.",
   "part": 6
  },
  {
   "id": 577,
   "question": "In a tuple `(a, b)`, which is dropped first?",
   "options": {
    "A": "`a`",
    "B": "`b`",
    "C": "Simultaneously",
    "D": "Depends on drop order"
   },
   "correct": "B",
   "explanation": "Tuples drop in reverse order: `b` (last field) is dropped first, then `a`. Same as struct fields.",
   "part": 6
  },
  {
   "id": 578,
   "question": "`mem::take(&mut x)` where `x: Option<T>` — what does it do?",
   "options": {
    "A": "Returns `x` and leaves `x` as `None`",
    "B": "Returns `x` and leaves `x` unchanged",
    "C": "Replaces `x` with `None` and returns the old value",
    "D": "Same as `x.take()`"
   },
   "correct": "D",
   "explanation": "`mem::take` is equivalent to `mem::replace(x, Default::default())`. For `Option`, that's `replace(x, None)`, returning the old value. Same as `Option::take`.",
   "part": 6
  },
  {
   "id": 579,
   "question": "Why might you use `ManuallyDrop` in unsafe code?",
   "options": {
    "A": "To avoid double-free when transferring ownership to FFI",
    "B": "To make types `Send`",
    "C": "To optimize drop order",
    "D": "To prevent leaks"
   },
   "correct": "A",
   "explanation": "When passing ownership to FFI, the foreign code will eventually free the memory. If Rust also ran the destructor, that would be double-free. `ManuallyDrop` prevents Rust from dropping, so you transfer ownership without double-free.",
   "part": 6
  },
  {
   "id": 580,
   "question": "`let x = vec![1,2,3]; drop(x); println!(\"{:?}\", x);` — what happens?",
   "options": {
    "A": "Prints the vec",
    "B": "Compile error: use of moved value",
    "C": "Prints nothing",
    "D": "Undefined behavior"
   },
   "correct": "B",
   "explanation": "`drop(x)` consumes `x`. After the call, `x` is no longer valid. Using `x` in `println!` is a use-after-move, which the compiler rejects.",
   "part": 6
  },
  {
   "id": 581,
   "question": "What does `Cow<'a, T>` stand for?",
   "options": {
    "A": "Copy on Write",
    "B": "Clone on Write",
    "C": "Copy or Write",
    "D": "Clone or Write"
   },
   "correct": "B",
   "explanation": "`Cow` = Clone on Write. It holds either a borrowed value (`Borrowed`) or an owned value (`Owned`). When you need to mutate, it clones the borrowed data and switches to owned.",
   "part": 6
  },
  {
   "id": 582,
   "question": "When would you use `Cow<str>`?",
   "options": {
    "A": "When you always own the string",
    "B": "When a function might return either a borrowed slice or an owned String",
    "C": "When you need a mutable string",
    "D": "For string literals only"
   },
   "correct": "B",
   "explanation": "`Cow<str>` can be `Cow::Borrowed(&str)` or `Cow::Owned(String)`. Functions that sometimes return a slice (e.g. from a cache) and sometimes an owned string (when they need to allocate) use `Cow` to avoid unnecessary allocation.",
   "part": 6
  },
  {
   "id": 583,
   "question": "`Copy` vs `Clone`: what's the difference?",
   "options": {
    "A": "`Copy` is implicit; `Clone` requires explicit `.clone()`",
    "B": "`Copy` implies `Clone`; `Copy` types are copied implicitly on assignment",
    "C": "`Copy` is for small types only",
    "D": "`Clone` is a superset of `Copy`"
   },
   "correct": "B",
   "explanation": "`Copy` is a marker trait. `Copy` types are implicitly duplicated (bitwise copy) on assignment and when passed by value. No `clone()` needed. `Clone` requires explicit `.clone()`. `Copy: Clone`.",
   "part": 6
  },
  {
   "id": 584,
   "question": "Why doesn't `String` implement `Copy`?",
   "options": {
    "A": "It's too large",
    "B": "Copying would duplicate the heap allocation; both would try to free it (double-free)",
    "C": "It's not `Clone`",
    "D": "It's a pointer"
   },
   "correct": "B",
   "explanation": "`Copy` means implicit bitwise copy. `String` contains a pointer to heap data. Implicit copy would create two `String`s pointing to the same buffer. When both are dropped, both would free it — double-free, undefined behavior. So `String` is `Clone` but not `Copy`.",
   "part": 6
  },
  {
   "id": 585,
   "question": "`let x = 5; let y = x;` — does `x` remain valid?",
   "options": {
    "A": "No; `x` is moved",
    "B": "Yes; `i32` is `Copy`, so `y` gets a copy",
    "C": "Only if we use `clone`",
    "D": "No; integers are special"
   },
   "correct": "B",
   "explanation": "`i32` is `Copy`. `let y = x` copies the value. Both `x` and `y` are valid. No move occurs.",
   "part": 6
  },
  {
   "id": 586,
   "question": "`Cow::to_mut(&mut cow)` — when does it allocate?",
   "options": {
    "A": "Always",
    "B": "Only when the `Cow` is `Borrowed` (converts to owned)",
    "C": "Never",
    "D": "When the borrowed value is large"
   },
   "correct": "B",
   "explanation": "`to_mut` returns `&mut T`. If the `Cow` is `Borrowed`, it must clone the data to get owned mutable storage, then returns a reference to that. If already `Owned`, it just returns `&mut` to the existing data. Allocates only when `Borrowed`.",
   "part": 6
  },
  {
   "id": 587,
   "question": "Can a type implement `Copy` without `Clone`?",
   "options": {
    "A": "Yes",
    "B": "No; `Copy` requires `Clone` (Copy: Clone)",
    "C": "Only for ZSTs",
    "D": "Only with `unsafe`"
   },
   "correct": "B",
   "explanation": "`Copy` is a subtrait of `Clone`: `pub trait Copy: Clone`. So any `Copy` type must also implement `Clone`. You cannot implement `Copy` without `Clone`.",
   "part": 6
  },
  {
   "id": 588,
   "question": "`impl Copy for MyStruct` — what must `MyStruct`'s fields be?",
   "options": {
    "A": "All `Copy`",
    "B": "All `Clone`",
    "C": "All `Sized`",
    "D": "No special requirement"
   },
   "correct": "A",
   "explanation": "For a struct to be `Copy`, every field must be `Copy`. The compiler enforces this. If any field is not `Copy`, you cannot derive or implement `Copy` for the struct.",
   "part": 6
  },
  {
   "id": 589,
   "question": "`fn f(x: Vec<i32>)` and you call `f(v)` — what happens to `v`?",
   "options": {
    "A": "`v` is copied; both caller and callee have a copy",
    "B": "`v` is moved; the caller cannot use `v` after",
    "C": "`v` is borrowed",
    "D": "`v` is cloned"
   },
   "correct": "B",
   "explanation": "`Vec` is not `Copy`. Passing `v` to `f` moves it. Ownership transfers to `f`. The caller cannot use `v` afterward.",
   "part": 6
  },
  {
   "id": 590,
   "question": "`impl Clone for MyType` — what does `clone` typically do?",
   "options": {
    "A": "Bitwise copy",
    "B": "Create a logically independent copy (may allocate, duplicate resources)",
    "C": "Return a reference",
    "D": "Move the value"
   },
   "correct": "B",
   "explanation": "`Clone::clone` should produce an independent copy. For `String`, it allocates a new buffer and copies the bytes. For `Vec`, it allocates and copies elements. The result is a new value that can be dropped independently.",
   "part": 6
  },
  {
   "id": 591,
   "question": "Where does `Box::new(x)` allocate?",
   "options": {
    "A": "On the stack",
    "B": "On the heap (using the global allocator)",
    "C": "In static memory",
    "D": "Depends on `x`'s size"
   },
   "correct": "B",
   "explanation": "`Box` allocates on the heap via the global allocator. The `Box` itself (the pointer) is on the stack; the pointee is on the heap.",
   "part": 6
  },
  {
   "id": 592,
   "question": "What is `std::alloc::Global`?",
   "options": {
    "A": "A thread-local allocator",
    "B": "The default global heap allocator",
    "C": "A no-op allocator",
    "D": "An allocator for static memory"
   },
   "correct": "B",
   "explanation": "`Global` is the default allocator used by `Box`, `Vec`, etc. It's the process's global heap allocator.",
   "part": 6
  },
  {
   "id": 593,
   "question": "Can you have a memory leak in safe Rust?",
   "options": {
    "A": "No; Rust prevents all leaks",
    "B": "Yes; e.g. `Rc` cycles, `Box::leak`, `mem::forget`",
    "C": "Only with `unsafe`",
    "D": "Only with `RefCell`"
   },
   "correct": "B",
   "explanation": "Safe Rust can leak: `Rc` cycles, `Box::leak`, `mem::forget`, or creating an infinite `Vec` in a global. Rust guarantees memory safety (no use-after-free, no data races) but not absence of leaks.",
   "part": 6
  },
  {
   "id": 594,
   "question": "`Box::leak(Box::new(42))` returns `&'static mut i32`. What happens to the allocation?",
   "options": {
    "A": "Freed when the reference goes out of scope",
    "B": "Freed when the program ends",
    "C": "Never freed; intentionally leaked",
    "D": "Freed by the caller"
   },
   "correct": "C",
   "explanation": "`Box::leak` consumes the `Box` and never runs its destructor. The allocation is intentionally leaked. The returned reference is valid for `'static` (rest of program) but the memory is never freed.",
   "part": 6
  },
  {
   "id": 595,
   "question": "Stack vs heap: when is heap allocation necessary?",
   "options": {
    "A": "Always for large data",
    "B": "When the size is unknown at compile time, or when you need to outlive the current frame",
    "C": "Never; stack is always sufficient",
    "D": "Only for `Vec`"
   },
   "correct": "B",
   "explanation": "Heap is needed when: size is dynamic (e.g. `Vec`), data must outlive the current stack frame, or you need shared ownership. Stack is for fixed-size, local data.",
   "part": 6
  },
  {
   "id": 596,
   "question": "What does `alloc::alloc::alloc(layout)` return?",
   "options": {
    "A": "A `Box` to the allocated memory",
    "B": "A `*mut u8` (raw pointer) to the allocated block, or null on failure",
    "C": "A `Vec`",
    "D": "A `Result`"
   },
   "correct": "B",
   "explanation": "The low-level allocator returns a raw pointer `*mut u8` to the allocated memory, or null if allocation fails. You must manually deallocate with `dealloc` and uphold safety invariants.",
   "part": 6
  },
  {
   "id": 597,
   "question": "`#[global_allocator]` — what is it for?",
   "options": {
    "A": "To use a custom allocator for a single crate",
    "B": "To replace the global heap allocator for the entire program",
    "C": "To create a thread-local allocator",
    "D": "To disable allocation"
   },
   "correct": "B",
   "explanation": "`#[global_allocator]` designates a type that implements `GlobalAlloc` as the program's global allocator. All `Box`, `Vec`, etc. use it. Used for custom allocators (jemalloc, tracking allocators, etc.).",
   "part": 6
  },
  {
   "id": 598,
   "question": "Is a `Vec` that grows without bound in a loop a memory leak?",
   "options": {
    "A": "No; it's just large",
    "B": "Yes; if the Vec is never used or freed, it's a leak",
    "C": "Only if it's in a global",
    "D": "Vec cannot leak"
   },
   "correct": "B",
   "explanation": "If you push to a `Vec` in a loop and never use or drop it (e.g. it's stored in a cycle or forgotten), the allocation is leaked. The memory is allocated but never freed. That's a leak.",
   "part": 6
  },
  {
   "id": 599,
   "question": "`Box::into_raw(Box::new(x))` — what do you get?",
   "options": {
    "A": "A `Box` that will not be dropped",
    "B": "A `*mut T`; you must manually drop and deallocate",
    "C": "A leaked `Box`",
    "D": "Ownership of `x`"
   },
   "correct": "B",
   "explanation": "`into_raw` consumes the `Box` and returns `*mut T`. The allocation is not freed. You must call `from_raw` to get a `Box` back and drop it, or manually deallocate. Used for FFI or manual memory management.",
   "part": 6
  },
  {
   "id": 600,
   "question": "Why might you use `Box::leak` in practice?",
   "options": {
    "A": "To avoid double-free",
    "B": "To create `'static` data at runtime (e.g. for lazy_static-style init, or passing to APIs requiring `'static`)",
    "C": "To speed up allocation",
    "D": "To prevent use-after-free"
   },
   "correct": "B",
   "explanation": "`Box::leak` gives you `&'static mut T`. Useful when you need a `'static` reference but the value is created at runtime—e.g. initializing a global, or satisfying APIs that require `'static` (e.g. spawning threads, storing in `lazy_static`).",
   "part": 6
  },
  {
   "id": 601,
   "question": "What is the output of the following code?\n\n```rust\nlet x = 10;\nlet add_x = |y| x + y;\nlet result = add_x(5);\nprintln!(\"{}\", result);\n```",
   "options": {
    "A": "15",
    "B": "Compilation error: closure cannot capture `x`",
    "C": "10",
    "D": "5"
   },
   "correct": "A",
   "explanation": "The closure captures `x` by immutable reference (the default). Since `x` is a Copy type (i32), the closure can use it. The result is 10 + 5 = 15.",
   "part": 7
  },
  {
   "id": 602,
   "question": "Which closure trait is required when a closure must be called multiple times and mutates captured state?\n\n```rust\nlet mut counter = 0;\nlet mut inc = || { counter += 1; counter };\ninc(); inc();\n```",
   "options": {
    "A": "Fn",
    "B": "FnMut",
    "C": "FnOnce",
    "D": "FnRef"
   },
   "correct": "B",
   "explanation": "FnMut is required because the closure mutates `counter`. Fn requires immutable capture; FnOnce can only be called once. FnMut allows mutable borrowing of captured variables and multiple calls.",
   "part": 7
  },
  {
   "id": 603,
   "question": "What happens when you compile this code?\n\n```rust\nlet s = String::from(\"hello\");\nlet f = move || println!(\"{}\", s);\nprintln!(\"{}\", s);\n```",
   "options": {
    "A": "Prints \"hello\" twice",
    "B": "Compilation error: use of moved value `s`",
    "C": "Prints \"hello\" once (from the closure call)",
    "D": "Undefined behavior"
   },
   "correct": "B",
   "explanation": "The `move` keyword transfers ownership of `s` into the closure. After the closure is created, `s` is no longer valid. The second `println!` tries to use the moved `s`, causing a compilation error.",
   "part": 7
  },
  {
   "id": 604,
   "question": "Which trait bound allows a closure to be called only once?\n\n```rust\nfn call_once<F>(f: F) where F: ??? { f(); }\n```",
   "options": {
    "A": "F: Fn",
    "B": "F: FnMut",
    "C": "F: FnOnce",
    "D": "F: Fn + FnMut"
   },
   "correct": "C",
   "explanation": "FnOnce is the most general closure trait—it consumes the closure when called. Closures that move out of their environment (e.g., consuming a String) implement only FnOnce. Fn and FnMut are subtraits of FnOnce.",
   "part": 7
  },
  {
   "id": 605,
   "question": "What does this code output?\n\n```rust\nlet v = vec![1, 2, 3];\nlet c = move || v.len();\nprintln!(\"{}\", c());\nprintln!(\"{}\", v.len());\n```",
   "options": {
    "A": "3, 3",
    "B": "Compilation error: closure may outlive borrowed value",
    "C": "Compilation error: use of moved value `v`",
    "D": "3, then panic"
   },
   "correct": "C",
   "explanation": "The `move` keyword moves `v` into the closure. After the closure is created, `v` is no longer valid in the outer scope. The second `println!` attempts to use the moved `v`, causing a compilation error.",
   "part": 7
  },
  {
   "id": 606,
   "question": "Which statement about closure trait bounds is correct?",
   "options": {
    "A": "Fn is a subtrait of FnMut, which is a subtrait of FnOnce",
    "B": "FnOnce is a subtrait of FnMut, which is a subtrait of Fn",
    "C": "Fn, FnMut, and FnOnce are independent traits",
    "D": "All closures implement Fn"
   },
   "correct": "A",
   "explanation": "The trait hierarchy is Fn: FnMut: FnOnce. FnOnce is the most general (can consume the closure); FnMut allows mutation; Fn allows only immutable borrowing. Every closure implements at least FnOnce.",
   "part": 7
  },
  {
   "id": 607,
   "question": "What is the type of `f` in `let f = |x: i32| x * 2;`?",
   "options": {
    "A": "fn(i32) -> i32",
    "B": "impl Fn(i32) -> i32",
    "C": "A unique anonymous struct implementing Fn(i32) -> i32",
    "D": "dyn Fn(i32) -> i32"
   },
   "correct": "C",
   "explanation": "Each closure has a unique, anonymous type—a struct generated by the compiler. It implements the appropriate Fn traits. It is not a function pointer (fn) or a trait object (dyn Fn); it's a distinct type per closure.",
   "part": 7
  },
  {
   "id": 608,
   "question": "What does this print?\n\n```rust\nlet mut x = 5;\nlet mut f = || { x += 1; x };\nlet a = f();\nlet b = f();\nprintln!(\"{}, {}\", a, b);\n```",
   "options": {
    "A": "5, 6",
    "B": "6, 7",
    "C": "Compilation error",
    "D": "6, 6"
   },
   "correct": "B",
   "explanation": "The closure captures `x` by mutable reference and increments it each time. First call: x becomes 6, returns 6. Second call: x becomes 7, returns 7. So a=6, b=7.",
   "part": 7
  },
  {
   "id": 609,
   "question": "Why does `let y = 1; let f: fn(i32) -> i32 = |x| x + y;` fail to compile?",
   "options": {
    "A": "Closures cannot be assigned to function pointers",
    "B": "y is not in scope inside the closure",
    "C": "Only closures that capture no variables can coerce to fn; this one captures y",
    "D": "Closures are always FnOnce and fn requires Fn"
   },
   "correct": "C",
   "explanation": "A closure that captures no variables can coerce to a function pointer (fn). This closure captures `y`, so it has state and cannot be represented as a plain fn. Function pointers have no state; they're just code addresses.",
   "part": 7
  },
  {
   "id": 610,
   "question": "What is the output?\n\n```rust\nlet s = String::from(\"hi\");\nlet f = || drop(s);\nlet g = || drop(s);\n```",
   "options": {
    "A": "Compiles; both closures can drop s",
    "B": "Compilation error: use of moved value `s`",
    "C": "Compiles; only the first closure to run drops s",
    "D": "Compilation error: cannot move s into multiple closures"
   },
   "correct": "B",
   "explanation": "Both closures would need to take ownership of `s` (to pass to drop). You cannot move `s` into two different closures. The first `let f = || drop(s)` would move s into f. The second would try to use s again, causing a compilation error: use of moved value `s`.",
   "part": 7
  },
  {
   "id": 611,
   "question": "What is the key difference between `impl Fn(i32) -> i32` and `dyn Fn(i32) -> i32` as function parameters?",
   "options": {
    "A": "impl Fn is dynamically dispatched; dyn Fn is statically dispatched",
    "B": "impl Fn is statically dispatched and can inline; dyn Fn is dynamically dispatched and has a vtable",
    "C": "dyn Fn cannot be used as a parameter",
    "D": "impl Fn requires the closure to be Sized"
   },
   "correct": "B",
   "explanation": "impl Fn uses static dispatch—the compiler monomorphizes for each concrete type, enabling inlining. dyn Fn uses dynamic dispatch via a vtable at runtime, which has indirection cost but allows heterogeneous collections of closures.",
   "part": 7
  },
  {
   "id": 612,
   "question": "Which function signature allows returning different closure types from different branches?",
   "options": {
    "A": "fn get() -> impl Fn(i32) -> i32",
    "B": "fn get() -> Box<dyn Fn(i32) -> i32>",
    "C": "fn get() -> fn(i32) -> i32",
    "D": "Both A and B"
   },
   "correct": "B",
   "explanation": "impl Fn in return position means one concrete type for the whole function—all return paths must return the same type. Box<dyn Fn> erases the concrete type, so you can return different closures (e.g., from if/else) as long as they implement Fn(i32) -> i32.",
   "part": 7
  },
  {
   "id": 613,
   "question": "What does this code do?\n\n```rust\nfn apply_twice<F>(f: F, x: i32) -> i32 where F: Fn(i32) -> i32 {\n    f(f(x))\n}\nlet result = apply_twice(|x| x + 1, 0);\n```",
   "options": {
    "A": "result is 1",
    "B": "result is 2",
    "C": "Compilation error",
    "D": "result is 0"
   },
   "correct": "B",
   "explanation": "apply_twice applies f twice: f(f(0)) = f(1) = 2. So result is 2.",
   "part": 7
  },
  {
   "id": 614,
   "question": "Why might `fn foo(f: impl FnOnce() -> String)` be preferable to `fn foo(f: impl Fn() -> String)` when the function only calls f once?",
   "options": {
    "A": "FnOnce is faster",
    "B": "FnOnce accepts more closures—including those that consume their captures (e.g., move a String out)",
    "C": "Fn requires Send",
    "D": "There is no difference"
   },
   "correct": "B",
   "explanation": "FnOnce is the most general. Closures that move values out of their environment implement only FnOnce. If you only need to call once, use FnOnce to accept the widest range of closures.",
   "part": 7
  },
  {
   "id": 615,
   "question": "What is the size of a closure that captures a `String` (on 64-bit)?",
   "options": {
    "A": "0 bytes (closures are zero-sized)",
    "B": "24 bytes (size of String)",
    "C": "At least 24 bytes; may be larger due to alignment and padding",
    "D": "8 bytes (one pointer)"
   },
   "correct": "C",
   "explanation": "A closure is a struct containing its captured variables. Capturing a String (three words: ptr, cap, len = 24 bytes) means the closure is at least that large, plus any alignment/padding. Closures are not zero-sized when they capture.",
   "part": 7
  },
  {
   "id": 616,
   "question": "What does this return?\n\n```rust\nfn make_adder(x: i32) -> impl Fn(i32) -> i32 {\n    move |y| x + y\n}\nlet add5 = make_adder(5);\nadd5(3)\n```",
   "options": {
    "A": "8",
    "B": "Compilation error: x does not live long enough",
    "C": "3",
    "D": "5"
   },
   "correct": "A",
   "explanation": "make_adder returns a closure that captures x by move. The closure adds its argument to the captured x. add5(3) = 5 + 3 = 8.",
   "part": 7
  },
  {
   "id": 617,
   "question": "When would you use `&dyn Fn(i32) -> i32` instead of `impl Fn(i32) -> i32`?",
   "options": {
    "A": "Never; impl is always better",
    "B": "When you need to store multiple different closures in the same collection",
    "C": "When the closure is very large",
    "D": "When you need to clone the closure"
   },
   "correct": "B",
   "explanation": "impl Fn means one concrete type per call site. To store closures of different types in a Vec or similar, you need trait objects: Vec<Box<dyn Fn(i32) -> i32>> or similar. &dyn Fn allows referencing different closure types through one type.",
   "part": 7
  },
  {
   "id": 618,
   "question": "What happens here?\n\n```rust\nfn run<F: FnOnce()>(f: F) { f(); }\nlet s = String::from(\"x\");\nrun(move || println!(\"{}\", s));\nrun(move || println!(\"{}\", s));\n```",
   "options": {
    "A": "Prints \"x\" twice",
    "B": "Compilation error: use of moved value `s`",
    "C": "Prints \"x\" once, then panics",
    "D": "Compilation error: closure may outlive borrowed value"
   },
   "correct": "B",
   "explanation": "The first `move` closure takes ownership of `s`. After the first `run`, `s` has been moved into and consumed by that closure. The second `run` tries to create another closure capturing `s`, but `s` is already moved—compilation error.",
   "part": 7
  },
  {
   "id": 619,
   "question": "What does `impl Fn` in argument position mean for code generation?",
   "options": {
    "A": "One monomorphized version per distinct closure type passed",
    "B": "One version that uses dynamic dispatch",
    "C": "The closure is boxed",
    "D": "The closure is inlined regardless of size"
   },
   "correct": "A",
   "explanation": "impl Trait in argument position is syntactic sugar for a generic parameter. The compiler generates a separate monomorphized version of the function for each concrete type passed. Different closure types produce different instantiations.",
   "part": 7
  },
  {
   "id": 620,
   "question": "What happens when you store a closure in a struct with `impl Fn(i32) -> i32`?",
   "options": {
    "A": "The struct becomes generic over the closure type; each closure type produces a different struct type",
    "B": "The closure is boxed automatically",
    "C": "Compilation error: impl Trait not allowed in struct fields",
    "D": "The struct uses dynamic dispatch"
   },
   "correct": "C",
   "explanation": "impl Trait is not allowed in struct field types—only in function argument and return positions. To store a closure in a struct, use a generic parameter, Box<dyn Fn(...)>, or a concrete closure type.",
   "part": 7
  },
  {
   "id": 621,
   "question": "What does the Iterator trait's `next` method return?",
   "options": {
    "A": "Option<Self::Item>",
    "B": "Self::Item",
    "C": "Result<Self::Item, Error>",
    "D": "bool"
   },
   "correct": "A",
   "explanation": "Iterator::next returns Option<Self::Item>. Some(item) for the next value, None when the iterator is exhausted. This is the core of the iterator protocol.",
   "part": 7
  },
  {
   "id": 622,
   "question": "What is wrong with this custom Iterator implementation?\n\n```rust\nstruct Counter;\nimpl Iterator for Counter {\n    type Item = i32;\n    fn next(&self, n: &mut i32) -> Option<i32> { *n += 1; Some(*n) }\n}\n```",
   "options": {
    "A": "Counter has no state to track position",
    "B": "The next signature is wrong: it should be fn next(&mut self) -> Option<Self::Item>",
    "C": "Iterator requires Default",
    "D": "Item must be a reference"
   },
   "correct": "B",
   "explanation": "Iterator::next has signature `fn next(&mut self) -> Option<Self::Item>`. It takes &mut self because iteration is stateful—each call advances the iterator. The implementation uses a separate n parameter, which is incorrect.",
   "part": 7
  },
  {
   "id": 623,
   "question": "What does `(0..10).into_iter()` produce compared to `0..10`?",
   "options": {
    "A": "They are identical; Range implements IntoIterator by returning itself",
    "B": "into_iter() consumes the range; 0..10 is lazy",
    "C": "0..10 is an iterator; into_iter() creates a different type",
    "D": "into_iter() produces references; 0..10 produces owned values"
   },
   "correct": "A",
   "explanation": "Range implements IntoIterator where into_iter() returns self. Range also implements Iterator directly. So (0..10).into_iter() and 0..10 are effectively the same for iteration purposes—both are iterators over the range.",
   "part": 7
  },
  {
   "id": 624,
   "question": "Which method consumes an iterator and returns the next value or None?",
   "options": {
    "A": "iter()",
    "B": "next()",
    "C": "advance()",
    "D": "get()"
   },
   "correct": "B",
   "explanation": "Iterator::next() advances the iterator and returns Option<Self::Item>. It's the fundamental consuming method. iter() creates an iterator from a collection; it doesn't consume an existing iterator.",
   "part": 7
  },
  {
   "id": 625,
   "question": "What does this implement?\n\n```rust\nstruct MyIter<I>(I);\nimpl<T, I: Iterator<Item = T>> Iterator for MyIter<I> {\n    type Item = T;\n    fn next(&mut self) -> Option<T> { self.0.next() }\n}\n```",
   "options": {
    "A": "A filter",
    "B": "A transparent wrapper that delegates to the inner iterator",
    "C": "A map",
    "D": "Invalid: cannot implement Iterator for a generic type"
   },
   "correct": "B",
   "explanation": "MyIter wraps any iterator I and implements Iterator by delegating next() to the inner iterator. It's a transparent pass-through. This is valid—you can implement Iterator for a generic type as long as the bounds are satisfied.",
   "part": 7
  },
  {
   "id": 626,
   "question": "What is the relationship between `Iter` and `Iterator` when you write `for x in vec.iter()`?",
   "options": {
    "A": "Iter is Iterator; vec.iter() returns an Iter that implements Iterator",
    "B": "Iter is a separate trait",
    "C": "vec.iter() produces a different type for each collection",
    "D": "Iter is IntoIterator"
   },
   "correct": "A",
   "explanation": "vec.iter() returns an Iter<'a, T> (or similar), which is a type that implements Iterator<Item = &'a T>. The for loop uses IntoIterator, and Iter implements IntoIterator by returning self (iterators iterate over themselves).",
   "part": 7
  },
  {
   "id": 627,
   "question": "Why does `let mut it = 0..3; it.next(); it.next();` leave `it` in a partially consumed state?",
   "options": {
    "A": "Ranges cannot be partially consumed",
    "B": "Each next() call mutates the iterator's internal state (e.g., current position)",
    "C": "Iterators are Copy",
    "D": "next() consumes the iterator"
   },
   "correct": "B",
   "explanation": "Iterator::next takes &mut self because it mutates internal state—e.g., a Range's start, or a pointer in a slice iterator. After two next() calls, the iterator has advanced two positions.",
   "part": 7
  },
  {
   "id": 628,
   "question": "What does `impl Iterator<Item = i32>` mean as a return type?",
   "options": {
    "A": "Returns a boxed trait object",
    "B": "Returns some concrete type that implements Iterator, with the concrete type hidden",
    "C": "Returns a generic iterator",
    "D": "Invalid syntax"
   },
   "correct": "B",
   "explanation": "impl Iterator<Item = i32> is opaque return type syntax. The function returns one specific concrete type that implements Iterator, but the caller doesn't know which type—they only see the Iterator interface.",
   "part": 7
  },
  {
   "id": 629,
   "question": "Which is true about `for i in 0..10`?",
   "options": {
    "A": "0..10 is evaluated eagerly, allocating a Vec",
    "B": "0..10 is lazy; values are produced on demand",
    "C": "The range is cloned for each iteration",
    "D": "It requires the Range to be Copy"
   },
   "correct": "B",
   "explanation": "Range is an iterator and is lazy. No allocation happens. Values 0..10 are produced one at a time as the for loop requests them. This is a key benefit of iterators—lazy evaluation.",
   "part": 7
  },
  {
   "id": 630,
   "question": "What is the output of `let v: Vec<_> = (0..5).filter(|x| x % 2 == 0).collect();`?",
   "options": {
    "A": "[0, 2, 4]",
    "B": "[0, 1, 2, 3, 4]",
    "C": "Compilation error",
    "D": "[2, 4]"
   },
   "correct": "A",
   "explanation": "filter keeps elements where the predicate is true. For 0,1,2,3,4: 0%2==0, 1%2!=0, 2%2==0, 3%2!=0, 4%2==0. So we get [0, 2, 4].",
   "part": 7
  },
  {
   "id": 631,
   "question": "What does `vec![1,2,3].iter().map(|x| x * 2).collect::<Vec<_>>()` produce?",
   "options": {
    "A": "[1, 2, 3]",
    "B": "[2, 4, 6]",
    "C": "Compilation error: cannot multiply &i32 by i32",
    "D": "[1, 2, 3, 1, 2, 3]"
   },
   "correct": "B",
   "explanation": "map applies the closure to each element. x is &i32, and x * 2 dereferences (via Deref) and multiplies. Result: [2, 4, 6]. collect gathers into Vec.",
   "part": 7
  },
  {
   "id": 632,
   "question": "What does `filter_map` do compared to `filter` + `map`?",
   "options": {
    "A": "They are identical",
    "B": "filter_map combines filter and map: the closure returns Option, Some(x) keeps and unwraps, None filters out",
    "C": "filter_map is faster but less flexible",
    "D": "filter_map filters the map results"
   },
   "correct": "B",
   "explanation": "filter_map's closure returns Option<T>. Some(value) means keep and yield value; None means skip. It's a single pass that both filters and transforms, more efficient than filter + map when you'd map to Option anyway.",
   "part": 7
  },
  {
   "id": 633,
   "question": "What does `vec![[1,2],[3,4]].into_iter().flat_map(|v| v).collect::<Vec<_>>()` produce?",
   "options": {
    "A": "[[1,2],[3,4]]",
    "B": "[1, 2, 3, 4]",
    "C": "Compilation error",
    "D": "[1, 2], [3, 4]"
   },
   "correct": "B",
   "explanation": "flat_map flattens: for each inner vec v, it iterates over v. So we get 1, 2, 3, 4. collect produces [1, 2, 3, 4].",
   "part": 7
  },
  {
   "id": 634,
   "question": "What does `(0..10).skip(3).take(2)` yield when collected?",
   "options": {
    "A": "[0, 1]",
    "B": "[3, 4]",
    "C": "[2, 3]",
    "D": "[1, 2]"
   },
   "correct": "B",
   "explanation": "skip(3) skips the first 3 elements (0,1,2), then take(2) takes the next 2 (3, 4). Result: [3, 4].",
   "part": 7
  },
  {
   "id": 635,
   "question": "What does `(0..3).chain(10..12).collect::<Vec<_>>()` produce?",
   "options": {
    "A": "[0, 1, 2, 10, 11]",
    "B": "[0, 10, 1, 11, 2]",
    "C": "Compilation error: chain requires same Item type",
    "D": "[0, 1, 2], [10, 11]"
   },
   "correct": "A",
   "explanation": "chain concatenates two iterators. First all of 0..3 (0,1,2), then all of 10..12 (10,11). Result: [0, 1, 2, 10, 11].",
   "part": 7
  },
  {
   "id": 636,
   "question": "What does `(0..3).zip(10..12).collect::<Vec<_>>()` produce?",
   "options": {
    "A": "[(0,10), (1,11)]",
    "B": "[(0,10), (1,11), (2,10)]",
    "C": "[(0,10), (1,11), (2,12)]",
    "D": "Compilation error"
   },
   "correct": "A",
   "explanation": "zip pairs elements from two iterators. It stops when the shorter one ends. 0..3 has 0,1,2; 10..12 has 10,11. Zip produces (0,10), (1,11) and stops. Result: [(0,10), (1,11)].",
   "part": 7
  },
  {
   "id": 637,
   "question": "What does `vec!['a','b','c'].iter().enumerate().collect::<Vec<_>>()` produce?",
   "options": {
    "A": "['a','b','c']",
    "B": "[(0,'a'), (1,'b'), (2,'c')]",
    "C": "[(1,'a'), (2,'b'), (3,'c')]",
    "D": "[(0,&'a'), (1,&'b'), (2,&'c')]"
   },
   "correct": "D",
   "explanation": "enumerate yields (index, item). iter() yields &char. So we get (0, &'a'), (1, &'b'), (2, &'c'). The Item type is (usize, &char). So D—with the references.",
   "part": 7
  },
  {
   "id": 638,
   "question": "What does `(0..).take(5)` produce when collected?",
   "options": {
    "A": "Infinite loop",
    "B": "[0, 1, 2, 3, 4]",
    "C": "Compilation error: RangeFrom has no end",
    "D": "[0, 1, 2, 3, 4, 5]"
   },
   "correct": "B",
   "explanation": "0.. is an infinite range. take(5) limits it to 5 elements. So we get [0, 1, 2, 3, 4]. take short-circuits the infinite iterator.",
   "part": 7
  },
  {
   "id": 639,
   "question": "Which adaptor would you use to transform each element and remove Nones in one pass?",
   "options": {
    "A": "filter then map",
    "B": "filter_map",
    "C": "map_filter",
    "D": "flat_map with Option"
   },
   "correct": "B",
   "explanation": "filter_map is designed for this: closure returns Option<T>; Some(x) yields x, None skips. Both filter and map in one pass. flat_map can do it too (Option implements IntoIterator), but filter_map is the idiomatic choice.",
   "part": 7
  },
  {
   "id": 640,
   "question": "What does `vec![1i32,2,3].iter().map(|x| x as f64).collect::<Vec<_>>()` produce?",
   "options": {
    "A": "[1.0, 2.0, 3.0]",
    "B": "Compilation error: type mismatch",
    "C": "[1, 2, 3]",
    "D": "[1.0, 2.0]"
   },
   "correct": "A",
   "explanation": "map converts each &i32 to f64 via as f64. collect builds Vec<f64>. Result: [1.0, 2.0, 3.0].",
   "part": 7
  },
  {
   "id": 641,
   "question": "What does `vec![1,2,3].into_iter().fold(0, |acc, x| acc + x)` return?",
   "options": {
    "A": "6",
    "B": "0",
    "C": "vec![1,2,3]",
    "D": "Compilation error"
   },
   "correct": "A",
   "explanation": "fold(init, f) starts with 0, then: acc=0+1=1, acc=1+2=3, acc=3+3=6. Returns 6.",
   "part": 7
  },
  {
   "id": 642,
   "question": "What is the difference between `fold` and `reduce`?",
   "options": {
    "A": "They are identical",
    "B": "fold takes an initial value; reduce uses the first element as initial and requires a non-empty iterator",
    "C": "reduce is faster",
    "D": "fold returns Option; reduce returns the value directly"
   },
   "correct": "B",
   "explanation": "fold(init, f) always has an initial accumulator. reduce(f) uses the first element as the initial value and returns Option—None for empty iterators. reduce requires at least one element.",
   "part": 7
  },
  {
   "id": 643,
   "question": "What does `vec![1,2,3,4].iter().any(|x| *x > 3)` return?",
   "options": {
    "A": "true",
    "B": "false",
    "C": "4",
    "D": "Option<bool>"
   },
   "correct": "A",
   "explanation": "any returns true if any element satisfies the predicate. 4 > 3, so it returns true (and short-circuits, not checking further).",
   "part": 7
  },
  {
   "id": 644,
   "question": "What does `vec![2,4,6].iter().all(|x| *x % 2 == 0)` return?",
   "options": {
    "A": "true",
    "B": "false",
    "C": "vec![2,4,6]",
    "D": "6"
   },
   "correct": "A",
   "explanation": "all returns true only if every element satisfies the predicate. 2, 4, 6 are all even, so true.",
   "part": 7
  },
  {
   "id": 645,
   "question": "What does `vec![10,20,30].iter().find(|x| **x > 15)` return?",
   "options": {
    "A": "Some(20)",
    "B": "Some(&20)",
    "C": "20",
    "D": "Some(15)"
   },
   "correct": "B",
   "explanation": "find returns Option<&T> for an iterator of references. The first element where **x > 15 is 20. So we get Some(&20).",
   "part": 7
  },
  {
   "id": 646,
   "question": "What does `vec!['a','b','c'].iter().position(|c| *c == 'b')` return?",
   "options": {
    "A": "Some('b')",
    "B": "Some(1)",
    "C": "1",
    "D": "Some(2)"
   },
   "correct": "B",
   "explanation": "position returns Option<usize>—the index of the first matching element. 'b' is at index 1. So Some(1).",
   "part": 7
  },
  {
   "id": 647,
   "question": "What does `vec![1,2,3].iter().sum::<i32>()` return?",
   "options": {
    "A": "6",
    "B": "Some(6)",
    "C": "vec![1,2,3]",
    "D": "Compilation error: need type annotation"
   },
   "correct": "A",
   "explanation": "sum consumes the iterator and adds all elements. 1+2+3=6. The turbofish ::<i32> specifies the result type. Returns 6.",
   "part": 7
  },
  {
   "id": 648,
   "question": "What does `[1,2,3].iter().product::<i32>()` return?",
   "options": {
    "A": "6",
    "B": "1",
    "C": "Some(6)",
    "D": "vec![1,2,3]"
   },
   "correct": "A",
   "explanation": "product multiplies all elements: 1*2*3=6.",
   "part": 7
  },
  {
   "id": 649,
   "question": "What does `vec![1,2,3].into_iter().reduce(|a, b| a + b)` return?",
   "options": {
    "A": "6",
    "B": "Some(6)",
    "C": "None",
    "D": "Compilation error"
   },
   "correct": "B",
   "explanation": "reduce returns Option<T>. For non-empty iterator, it combines all elements. 1+2+3=6. So Some(6). For empty, it would return None.",
   "part": 7
  },
  {
   "id": 650,
   "question": "What does `Vec::<i32>::new().into_iter().reduce(|a, b| a + b)` return?",
   "options": {
    "A": "0",
    "B": "Some(0)",
    "C": "None",
    "D": "Panics"
   },
   "correct": "C",
   "explanation": "reduce on an empty iterator has no first element to use as initial value, so it returns None.",
   "part": 7
  },
  {
   "id": 651,
   "question": "What does `scan` do compared to `fold`?",
   "options": {
    "A": "They are identical",
    "B": "scan yields intermediate accumulator values as an iterator; fold returns only the final value",
    "C": "scan is lazy; fold is eager",
    "D": "scan requires the accumulator to be Clone"
   },
   "correct": "B",
   "explanation": "scan(state, f) is like fold but produces an iterator. Each step can yield Some(value) to output, or None to stop. It yields intermediate results; fold only returns the final accumulator.",
   "part": 7
  },
  {
   "id": 652,
   "question": "What is `peekable()` used for?",
   "options": {
    "A": "To make an iterator faster",
    "B": "To look at the next element without consuming it via peek()",
    "C": "To collect into a Vec",
    "D": "To reverse the iterator"
   },
   "correct": "B",
   "explanation": "Peekable wraps an iterator and adds peek() which returns Option<&Item>—a reference to the next item without advancing. Useful for parsing when you need to look ahead.",
   "part": 7
  },
  {
   "id": 653,
   "question": "What does `vec![1,2,3,4].windows(2)` produce when collected?",
   "options": {
    "A": "[[1,2], [3,4]]",
    "B": "[[1,2], [2,3], [3,4]]",
    "C": "[[1,2], [2,3]]",
    "D": "Compilation error: windows requires slice"
   },
   "correct": "B",
   "explanation": "windows(2) yields overlapping slices of size 2: [1,2], [2,3], [3,4]. Each window steps by one.",
   "part": 7
  },
  {
   "id": 654,
   "question": "What does `vec![1,2,3,4].chunks(2)` produce when collected?",
   "options": {
    "A": "[[1,2], [3,4]]",
    "B": "[[1,2], [2,3], [3,4]]",
    "C": "[[1,2], [2,3]]",
    "D": "Iterates over &[i32]"
   },
   "correct": "A",
   "explanation": "chunks(2) yields non-overlapping chunks: [1,2], [3,4]. Last chunk may be smaller if length isn't divisible.",
   "part": 7
  },
  {
   "id": 655,
   "question": "What does `(0..10).step_by(2)` produce when collected?",
   "options": {
    "A": "[0, 2, 4, 6, 8]",
    "B": "[0, 1, 2, 3, 4]",
    "C": "[2, 4, 6, 8]",
    "D": "[0, 2, 4, 6, 8, 10]"
   },
   "correct": "A",
   "explanation": "step_by(2) yields every 2nd element: 0, 2, 4, 6, 8. The range 0..10 excludes 10.",
   "part": 7
  },
  {
   "id": 656,
   "question": "What does `vec![1,2].iter().cycle().take(5)` produce when collected?",
   "options": {
    "A": "[1, 2, 1, 2, 1]",
    "B": "Infinite loop",
    "C": "[1, 2]",
    "D": "Compilation error"
   },
   "correct": "A",
   "explanation": "cycle repeats the iterator infinitely. take(5) limits to 5 elements. So we get 1, 2, 1, 2, 1.",
   "part": 7
  },
  {
   "id": 657,
   "question": "What does `std::iter::repeat(42).take(3).collect::<Vec<_>>()` produce?",
   "options": {
    "A": "[42, 42, 42]",
    "B": "Compilation error",
    "C": "[3, 3, 3]",
    "D": "Infinite loop"
   },
   "correct": "A",
   "explanation": "repeat(42) yields 42 forever. take(3) takes the first 3. Result: [42, 42, 42].",
   "part": 7
  },
  {
   "id": 658,
   "question": "Which iterator adaptor would you use to implement a running total?",
   "options": {
    "A": "fold",
    "B": "scan",
    "C": "reduce",
    "D": "map"
   },
   "correct": "B",
   "explanation": "scan maintains state (the running total) and can yield each intermediate value. fold only returns the final value. scan is ideal for running totals, cumulative sums, etc.",
   "part": 7
  },
  {
   "id": 659,
   "question": "What does `vec![1,2,3,4].array_chunks::<2>()` produce when collected?",
   "options": {
    "A": "[[1,2], [3,4]]",
    "B": "[[1,2], [2,3], [3,4]]",
    "C": "Compilation error: array_chunks is unstable",
    "D": "Iterator of [i32; 2]"
   },
   "correct": "A",
   "explanation": "array_chunks yields fixed-size arrays [T; N]. For [1,2,3,4] with N=2: [[1,2], [3,4]]. When collected into Vec<[i32; 2]>, the result is [[1,2], [3,4]]. array_chunks was stabilized in Rust 1.77.",
   "part": 7
  },
  {
   "id": 660,
   "question": "What is the difference between `chunks` and `chunks_exact`?",
   "options": {
    "A": "They are identical",
    "B": "chunks_exact ignores the remainder; chunks includes a possibly smaller last chunk",
    "C": "chunks_exact is faster",
    "D": "chunks_exact requires exact divisibility"
   },
   "correct": "B",
   "explanation": "chunks(n) yields all chunks, with the last possibly smaller (e.g., 7 elements in chunks(3) gives [..],[..],[.]). chunks_exact(n) yields only full-sized chunks and discards the remainder; use remainder() to get the rest.",
   "part": 7
  },
  {
   "id": 661,
   "question": "What does `vec![1,2,3,4,5].windows(3).collect::<Vec<_>>()` produce?",
   "options": {
    "A": "[[1,2,3], [2,3,4], [3,4,5]]",
    "B": "[[1,2,3], [4,5]]",
    "C": "Compilation error: windows returns references",
    "D": "[[1,2], [3,4], [5]]"
   },
   "correct": "A",
   "explanation": "windows(3) on a slice yields overlapping windows of size 3. For [1,2,3,4,5]: [1,2,3], [2,3,4], [3,4,5]. Each window is &[T]. Collected into Vec<&[i32]> gives the three slices.",
   "part": 7
  },
  {
   "id": 662,
   "question": "What trait does the `for` loop use to obtain an iterator?",
   "options": {
    "A": "Iterator",
    "B": "IntoIterator",
    "C": "Iter",
    "D": "FromIterator"
   },
   "correct": "B",
   "explanation": "for x in expr uses IntoIterator. expr.into_iter() is called to get an iterator. Iterator is what the loop drives; IntoIterator is the bridge from the value to the iterator.",
   "part": 7
  },
  {
   "id": 663,
   "question": "What does `collect()` rely on?",
   "options": {
    "A": "Iterator",
    "B": "FromIterator",
    "C": "IntoIterator",
    "D": "Collect"
   },
   "correct": "B",
   "explanation": "collect() is defined as collecting an Iterator into a type that implements FromIterator. Vec::from_iter is the FromIterator implementation. So collect::<Vec<_>>() uses FromIterator.",
   "part": 7
  },
  {
   "id": 664,
   "question": "What does `vec.extend(iter)` do in terms of traits?",
   "options": {
    "A": "Uses Iterator",
    "B": "Uses Extend trait; the iterator is consumed and items added to the collection",
    "C": "Uses FromIterator",
    "D": "Uses IntoIterator"
   },
   "correct": "B",
   "explanation": "extend takes an IntoIterator and adds all its items to the collection. It uses the Extend trait. The iterator is consumed (not borrowed).",
   "part": 7
  },
  {
   "id": 665,
   "question": "Why does `for x in &vec` work?",
   "options": {
    "A": "&Vec implements IntoIterator yielding references",
    "B": "Vec implements Copy",
    "C": "for automatically borrows",
    "D": "Iterator is implemented for &Vec"
   },
   "correct": "A",
   "explanation": "IntoIterator is implemented for &Vec<T>, &mut Vec<T>, and Vec<T>. for x in &vec uses (&vec).into_iter() which yields &T. So we iterate over references without consuming.",
   "part": 7
  },
  {
   "id": 666,
   "question": "What does `Vec::from_iter(0..5)` produce?",
   "options": {
    "A": "[0, 1, 2, 3, 4]",
    "B": "[0, 1, 2, 3, 4, 5]",
    "C": "Compilation error",
    "D": "(0, 1, 2, 3, 4)"
   },
   "correct": "A",
   "explanation": "from_iter consumes the iterator and builds a Vec. 0..5 yields 0,1,2,3,4 (5 is exclusive). Result: [0, 1, 2, 3, 4].",
   "part": 7
  },
  {
   "id": 667,
   "question": "Which allows `let v: Vec<_> = iter.collect()`?",
   "options": {
    "A": "Iterator",
    "B": "FromIterator on Vec",
    "C": "Both Iterator (on iter) and FromIterator (on Vec)",
    "D": "IntoIterator"
   },
   "correct": "C",
   "explanation": "collect is an Iterator method. It requires the target type (Vec) to implement FromIterator. So both: the source must be an Iterator, and the target must implement FromIterator.",
   "part": 7
  },
  {
   "id": 668,
   "question": "What does `chain` require of its two arguments?",
   "options": {
    "A": "Both must be the same concrete type",
    "B": "Both must implement Iterator with the same Item type",
    "C": "Both must be IntoIterator",
    "D": "The first must be Iterator, the second IntoIterator"
   },
   "correct": "B",
   "explanation": "chain takes two iterators (or IntoIterator for the second). Both must produce the same Item type so the chained iterator has a consistent Item. They can be different concrete iterator types.",
   "part": 7
  },
  {
   "id": 669,
   "question": "What is the result of `(0..3).rev().collect::<Vec<_>>()`?",
   "options": {
    "A": "[2, 1, 0]",
    "B": "[0, 1, 2]",
    "C": "Compilation error: Range doesn't implement Rev",
    "D": "[3, 2, 1]"
   },
   "correct": "A",
   "explanation": "rev() reverses the iterator. 0..3 yields 0,1,2. Reversed: 2,1,0. So [2, 1, 0]. Range implements DoubleEndedIterator, which rev() requires.",
   "part": 7
  },
  {
   "id": 670,
   "question": "What does `vec![1,2].into_iter().chain(vec![3,4])` produce when collected?",
   "options": {
    "A": "[1, 2, 3, 4]",
    "B": "Compilation error: different iterator types",
    "C": "[1, 3, 2, 4]",
    "D": "[[1,2], [3,4]]"
   },
   "correct": "A",
   "explanation": "chain concatenates. First iterator yields 1,2; second yields 3,4. Result: [1, 2, 3, 4]. Both produce i32, so Item types match.",
   "part": 7
  },
  {
   "id": 671,
   "question": "When does `(0..1000000).map(|x| x * 2).filter(|x| x % 3 == 0).take(5)` actually compute?",
   "options": {
    "A": "Immediately when the expression is evaluated",
    "B": "Only when consumed (e.g., collect, for loop)—lazily, and only 5 elements",
    "C": "It allocates a Vec of 1000000 elements first",
    "D": "At compile time"
   },
   "correct": "B",
   "explanation": "Iterators are lazy. No work happens until a consumer drives the iterator. take(5) means only 5 elements are ever requested. The chain will pull 5 items through map and filter, not process the whole range.",
   "part": 7
  },
  {
   "id": 672,
   "question": "What is 'iterator fusion'?",
   "options": {
    "A": "Combining multiple iterators into one",
    "B": "The compiler merging adjacent adaptors so intermediate allocations are avoided",
    "C": "Using chain to fuse iterators",
    "D": "Converting iterators to arrays"
   },
   "correct": "B",
   "explanation": "Iterator fusion refers to the compiler (or the iterator design) avoiding intermediate collections. Adaptors like map and filter don't allocate—they're lazy. When you chain them, elements flow through without intermediate Vecs. The term often describes this zero-allocation chaining.",
   "part": 7
  },
  {
   "id": 673,
   "question": "Why might a loop be faster than an equivalent iterator chain in some cases?",
   "options": {
    "A": "Loops are always faster",
    "B": "Iterators have overhead that loops don't",
    "C": "With optimizations, they're usually equivalent; but complex iterator chains can prevent optimizations or have different branch patterns",
    "D": "Iterators allocate more"
   },
   "correct": "C",
   "explanation": "With -O, iterators often compile to the same machine code as loops (zero-cost abstraction). In complex cases, loop structure might be easier for the optimizer, or the iterator version might have different behavior. Generally they're equivalent; 'some cases' acknowledges edge cases.",
   "part": 7
  },
  {
   "id": 674,
   "question": "What does `by_ref()` do on an iterator?",
   "options": {
    "A": "Borrows the iterator so you can use it again after partial consumption",
    "B": "Creates a reference to each element",
    "C": "Converts to &Iterator",
    "D": "Nothing; it's a no-op"
   },
   "correct": "A",
   "explanation": "by_ref() borrows the iterator mutably. After a consuming operation on the borrowed iterator, you still have the original iterator (partially consumed). Useful when you want to consume part of an iterator and keep the rest.",
   "part": 7
  },
  {
   "id": 675,
   "question": "Does `iter.map(|x| x + 1).map(|x| x * 2)` allocate intermediate storage?",
   "options": {
    "A": "Yes, two Vecs",
    "B": "No; each map is lazy and composes—elements flow through both maps on demand",
    "C": "Yes, one Vec between the maps",
    "D": "Only when collect is called"
   },
   "correct": "B",
   "explanation": "map is lazy and doesn't allocate. The two maps compose into one iterator. When you pull an element, it goes through both closures. No intermediate storage.",
   "part": 7
  },
  {
   "id": 676,
   "question": "What is the complexity of `vec.iter().find(|x| **x == target)`?",
   "options": {
    "A": "O(n log n)",
    "B": "O(n) worst case, O(1) best case (if target is first)",
    "C": "O(1)",
    "D": "O(n^2)"
   },
   "correct": "B",
   "explanation": "find scans until it finds a match. Worst case: O(n) if target is last or absent. Best case: O(1) if target is first. It short-circuits on first match.",
   "part": 7
  },
  {
   "id": 677,
   "question": "What does `iter.size_hint()` return?",
   "options": {
    "A": "The exact length",
    "B": "(lower, upper) where upper is Option<usize>—bounds on remaining length",
    "C": "Whether the iterator is finite",
    "D": "The number of elements consumed"
   },
   "correct": "B",
   "explanation": "size_hint() returns (usize, Option<usize>)—a lower bound and optional upper bound on the number of remaining elements. Used by collect to preallocate. Many iterators give exact bounds.",
   "part": 7
  },
  {
   "id": 678,
   "question": "When you `collect::<Vec<_>>()` from a mapped iterator, how many allocations does Vec typically do?",
   "options": {
    "A": "One per element",
    "B": "One (Vec grows as needed, may reallocate)",
    "C": "Two: one for the iterator, one for the Vec",
    "D": "Zero; it uses stack allocation"
   },
   "correct": "B",
   "explanation": "collect builds one Vec. It may use size_hint to preallocate. As elements are pushed, the Vec may reallocate to grow. So typically one Vec allocation (possibly with reallocations during growth).",
   "part": 7
  },
  {
   "id": 679,
   "question": "What is `iter.inspect(|x| println!(\"{:?}\", x))` useful for?",
   "options": {
    "A": "Filtering",
    "B": "Debugging—observing values as they flow through without consuming or changing them",
    "C": "Collecting",
    "D": "Transforming"
   },
   "correct": "B",
   "explanation": "inspect passes each element through a closure (for side effects like logging) and yields the same element unchanged. Useful for debugging iterator pipelines.",
   "part": 7
  },
  {
   "id": 680,
   "question": "Does `(0..10).filter(|_| true).collect::<Vec<_>>()` allocate?",
   "options": {
    "A": "No allocations",
    "B": "One Vec allocation; filter doesn't allocate",
    "C": "Filter allocates a temporary Vec",
    "D": "Two allocations"
   },
   "correct": "B",
   "explanation": "filter is lazy—no allocation. collect allocates one Vec and fills it. So one Vec allocation total.",
   "part": 7
  },
  {
   "id": 681,
   "question": "What is the type of `std::ops::Add::add`?",
   "options": {
    "A": "impl Fn(i32, i32) -> i32",
    "B": "fn(i32, i32) -> i32 (for i32)",
    "C": "A closure",
    "D": "dyn Fn"
   },
   "correct": "B",
   "explanation": "Add::add is a function pointer (or associated function). For i32, it's fn(i32, i32) -> i32. Function pointers are zero-sized and don't capture state.",
   "part": 7
  },
  {
   "id": 682,
   "question": "Can you pass a closure to a function that expects `fn(i32) -> i32`?",
   "options": {
    "A": "Never",
    "B": "Only if the closure captures no variables (zero-capture closures coerce to fn)",
    "C": "Only with Box::new",
    "D": "Only with async closures"
   },
   "correct": "B",
   "explanation": "Closures that capture nothing have no state and can coerce to the corresponding fn type. Capturing closures cannot—they have state (the captured variables).",
   "part": 7
  },
  {
   "id": 683,
   "question": "What is the difference between `fn` and `impl Fn` when used as a parameter?",
   "options": {
    "A": "fn is a function pointer; impl Fn accepts closures and functions",
    "B": "They are the same",
    "C": "impl Fn is a trait object",
    "D": "fn cannot be used as a parameter"
   },
   "correct": "A",
   "explanation": "fn(T) -> U is a function pointer type—only bare functions or zero-capture closures. impl Fn(T) -> U accepts any callable: functions, closures (including capturing ones). impl Fn is more flexible.",
   "part": 7
  },
  {
   "id": 684,
   "question": "What does `fn apply<F: FnOnce(i32) -> i32>(f: F, x: i32) -> i32 { f(x) }` allow?",
   "options": {
    "A": "Only function pointers",
    "B": "Any closure or function that takes i32 and returns i32, including those that consume their captures",
    "C": "Only Fn closures, not FnMut",
    "D": "Only closures that implement Copy"
   },
   "correct": "B",
   "explanation": "F: FnOnce accepts the widest range: functions, Fn closures, FnMut, and FnOnce-only closures (e.g., those that move out of their environment). Maximum flexibility when you only call once.",
   "part": 7
  },
  {
   "id": 685,
   "question": "Why might you use `fn` instead of `impl Fn` for a callback?",
   "options": {
    "A": "fn is always faster",
    "B": "When you need a function pointer for FFI or to store in a struct without generics",
    "C": "fn allows more closures",
    "D": "impl Fn cannot be used in structs"
   },
   "correct": "B",
   "explanation": "fn is a concrete type—useful for FFI (C expects function pointers), or when you want to avoid generic parameters on a struct. impl Fn is more flexible but adds generics. fn is more restrictive but simpler in some contexts.",
   "part": 7
  },
  {
   "id": 686,
   "question": "What does `fn foo() -> impl Fn(i32) -> i32` mean for the caller?",
   "options": {
    "A": "The caller receives a Box<dyn Fn>",
    "B": "The caller receives some concrete type implementing Fn, but doesn't know which",
    "C": "The caller must specify the closure type",
    "D": "Invalid: cannot return impl Fn"
   },
   "correct": "B",
   "explanation": "impl Fn in return position means the function returns one concrete type that implements Fn(i32) -> i32. The caller sees only the Fn interface. The concrete type is hidden (opaque).",
   "part": 7
  },
  {
   "id": 687,
   "question": "What is a 'higher-order function' in Rust?",
   "options": {
    "A": "A function that takes or returns another function",
    "B": "A function that uses iterators",
    "C": "A function with generic parameters",
    "D": "A function in a trait"
   },
   "correct": "A",
   "explanation": "Higher-order functions take functions as arguments or return functions. Examples: map, filter, fold, or a function like apply_twice that takes a closure.",
   "part": 7
  },
  {
   "id": 688,
   "question": "Can a closure implement Fn and FnMut?",
   "options": {
    "A": "No; a closure implements exactly one",
    "B": "Yes; Fn is a subtrait of FnMut, so Fn closures also implement FnMut",
    "C": "Only if it doesn't capture",
    "D": "Only with #[derive]"
   },
   "correct": "B",
   "explanation": "The hierarchy is Fn: FnMut: FnOnce. So Fn implies FnMut implies FnOnce. A closure that only immutably borrows implements all three. One that mutably borrows implements FnMut and FnOnce.",
   "part": 7
  },
  {
   "id": 689,
   "question": "What does `type Callback = fn(i32) -> i32;` store when you assign a closure to it?",
   "options": {
    "A": "The closure's environment",
    "B": "A function pointer—only works if the closure captures nothing",
    "C": "A Box<dyn Fn>",
    "D": "Nothing; it's invalid"
   },
   "correct": "B",
   "explanation": "Callback is a function pointer type. You can only assign a zero-capture closure or a bare function. Capturing closures have state and cannot be represented as fn.",
   "part": 7
  },
  {
   "id": 690,
   "question": "What does `Some(2).and_then(|x| Some(x * 2))` return?",
   "options": {
    "A": "Some(2)",
    "B": "Some(4)",
    "C": "4",
    "D": "None"
   },
   "correct": "B",
   "explanation": "and_then passes the inner value to the closure. If Some, the closure runs; if it returns Some(y), we get Some(y). Some(2) -> closure gets 2 -> Some(4). Result: Some(4).",
   "part": 7
  },
  {
   "id": 691,
   "question": "What does `None::<i32>.map(|x| x + 1)` return?",
   "options": {
    "A": "Some(1)",
    "B": "None",
    "C": "0",
    "D": "Compilation error"
   },
   "correct": "B",
   "explanation": "map on None returns None without calling the closure. The closure is never invoked.",
   "part": 7
  },
  {
   "id": 692,
   "question": "What does `Err::<i32, &str>(\"error\").unwrap_or_else(|e| e.len())` return?",
   "options": {
    "A": "5",
    "B": "\"error\"",
    "C": "Err(\"error\")",
    "D": "Compilation error"
   },
   "correct": "A",
   "explanation": "unwrap_or_else on Err calls the closure with the error value. |e| e.len() with e=\"error\" gives \"error\".len() = 5. Returns 5.",
   "part": 7
  },
  {
   "id": 693,
   "question": "What does `Some(10).filter(|x| *x > 5)` return?",
   "options": {
    "A": "Some(10)",
    "B": "Some(5)",
    "C": "None",
    "D": "10"
   },
   "correct": "A",
   "explanation": "filter keeps Some if the predicate is true. 10 > 5 is true. So Some(10).",
   "part": 7
  },
  {
   "id": 694,
   "question": "What does `Ok(1).and_then(|x| Err(\"fail\"))` return?",
   "options": {
    "A": "Ok(1)",
    "B": "Err(\"fail\")",
    "C": "Ok(2)",
    "D": "Compilation error"
   },
   "correct": "B",
   "explanation": "and_then on Ok passes the value to the closure. The closure returns Err(\"fail\"), so the whole result is Err(\"fail\"). Short-circuits to the error.",
   "part": 7
  },
  {
   "id": 695,
   "question": "What does `vec![Some(1), None, Some(3)].into_iter().filter_map(|x| x).collect::<Vec<_>>()` produce?",
   "options": {
    "A": "[1, 3]",
    "B": "[Some(1), Some(3)]",
    "C": "[1, None, 3]",
    "D": "Compilation error"
   },
   "correct": "A",
   "explanation": "filter_map with |x| x: for Some(v), yields v; for None, yields nothing. So we get 1 and 3. Result: [1, 3].",
   "part": 7
  },
  {
   "id": 696,
   "question": "What does `Option::<i32>::None.or_else(|| Some(42))` return?",
   "options": {
    "A": "None",
    "B": "Some(42)",
    "C": "42",
    "D": "Some(None)"
   },
   "correct": "B",
   "explanation": "or_else: if None, calls the closure. The closure returns Some(42). So we get Some(42).",
   "part": 7
  },
  {
   "id": 697,
   "question": "What does `Result::<i32, &str>::Ok(1).map_err(|e| e.to_string())` return?",
   "options": {
    "A": "Ok(\"1\")",
    "B": "Ok(1)",
    "C": "Err(\"1\")",
    "D": "Compilation error: map_err doesn't change Ok"
   },
   "correct": "B",
   "explanation": "map_err only runs on Err. For Ok(1), it returns Ok(1) unchanged. The closure is never called.",
   "part": 7
  },
  {
   "id": 698,
   "question": "What is the purpose of `?` in `fn foo() -> Result<i32, E> { let x = bar()?; Ok(x) }`?",
   "options": {
    "A": "Unwraps Ok or returns Err early",
    "B": "Converts Option to Result",
    "C": "Marks the function as fallible",
    "D": "Propagates the error without returning"
   },
   "correct": "A",
   "explanation": "? on a Result: if Ok(x), unwraps to x; if Err(e), returns Err(e) from the function (early return). It's the standard error propagation operator.",
   "part": 7
  },
  {
   "id": 699,
   "question": "What does `vec![Ok(1), Err(\"e\"), Ok(3)].into_iter().collect::<Result<Vec<_>, _>>()` return?",
   "options": {
    "A": "Ok([1, 3])",
    "B": "Err(\"e\")",
    "C": "Ok([1, 2, 3])",
    "D": "Compilation error"
   },
   "correct": "B",
   "explanation": "collect for Result collects all Ok values, but stops at the first Err and returns that Err. So we get Err(\"e\")—the first error short-circuits.",
   "part": 7
  },
  {
   "id": 700,
   "question": "What does `Some(5).map(|x| x * 2).unwrap_or_else(|| 0)` return?",
   "options": {
    "A": "Some(10)",
    "B": "10",
    "C": "5",
    "D": "0"
   },
   "correct": "B",
   "explanation": "map(|x| x * 2) on Some(5) produces Some(10). unwrap_or_else takes a closure for the None case; since we have Some(10), it unwraps to 10 without calling the closure. Result: 10.",
   "part": 7
  },
  {
   "id": 701,
   "question": "What does the `Future` trait's `poll` method return?",
   "options": {
    "A": "Option<Output>",
    "B": "Result<Output, Error>",
    "C": "Poll<Output>",
    "D": "impl Future"
   },
   "correct": "C",
   "explanation": "Future::poll returns Poll<Output>, which is an enum: Ready(T) when complete, or Pending when not yet ready. The executor calls poll repeatedly until Ready.",
   "part": 8
  },
  {
   "id": 702,
   "question": "What is the role of `Context` in `Future::poll(&mut self, cx: &mut Context<'_>)`?",
   "options": {
    "A": "It provides the future's output type",
    "B": "It provides a Waker to notify the executor when the future can make progress",
    "C": "It holds the future's state",
    "D": "It is used for cancellation"
   },
   "correct": "B",
   "explanation": "Context wraps a Waker. When an async operation (e.g., I/O) completes, it calls waker.wake() so the executor knows to poll the future again. Without this, the executor would have to busy-poll.",
   "part": 8
  },
  {
   "id": 703,
   "question": "What does this async function desugar to?\n\n```rust\nasync fn foo() -> i32 { 42 }\n```",
   "options": {
    "A": "A function that returns i32",
    "B": "A function that returns impl Future<Output = i32>",
    "C": "A function that returns Pin<Box<dyn Future<Output = i32>>>",
    "D": "A synchronous function"
   },
   "correct": "B",
   "explanation": "async fn desugars to a regular function returning impl Future<Output = T>. The body becomes a future that, when polled, eventually yields T. The compiler generates a state machine.",
   "part": 8
  },
  {
   "id": 704,
   "question": "When you write `async { x.await }`, what is the type of the block?",
   "options": {
    "A": "The type of x",
    "B": "impl Future<Output = T> where T is the output of x",
    "C": "Pin<Box<dyn Future>>",
    "D": "Option<T>"
   },
   "correct": "B",
   "explanation": "An async block is an anonymous future. Its Output type is whatever the last await (or expression) produces. The block itself is impl Future<Output = T>.",
   "part": 8
  },
  {
   "id": 705,
   "question": "Why must `Future::poll` take `Pin<&mut Self>` rather than `&mut Self`?",
   "options": {
    "A": "Pin is required for thread safety",
    "B": "Futures may contain self-referential data; moving them could invalidate pointers",
    "C": "Pin enables cancellation",
    "D": "It's a historical artifact"
   },
   "correct": "B",
   "explanation": "Async/await generates state machines with self-referential structs (e.g., a future holding a reference into its own buffer). Moving such a value would invalidate the reference. Pin prevents moving, ensuring memory safety.",
   "part": 8
  },
  {
   "id": 706,
   "question": "What happens if a future returns `Poll::Pending` but never calls `waker.wake()`?",
   "options": {
    "A": "The executor will panic",
    "B": "The future will never be polled again; it effectively hangs",
    "C": "The executor will poll it again after a fixed delay",
    "D": "The future is automatically cancelled"
   },
   "correct": "B",
   "explanation": "Returning Pending without waking the waker means the executor has no way to know when to poll again. The task will never complete. Correct async code must call waker.wake() when progress becomes possible.",
   "part": 8
  },
  {
   "id": 707,
   "question": "What does `Waker::wake()` do?",
   "options": {
    "A": "Immediately runs the associated task",
    "B": "Schedules the task to be polled again by the executor",
    "C": "Cancels the task",
    "D": "Blocks until the task completes"
   },
   "correct": "B",
   "explanation": "wake() notifies the executor that the task is ready to make progress. The executor will (eventually) poll the future again. It does not run the task synchronously; it schedules it.",
   "part": 8
  },
  {
   "id": 708,
   "question": "In the desugared form of `async fn bar() { foo().await }`, what does `.await` become?",
   "options": {
    "A": "A direct function call",
    "B": "A loop that polls the future until Ready, passing the Context",
    "C": "A thread spawn",
    "D": "A yield point that returns immediately"
   },
   "correct": "B",
   "explanation": ".await desugars to a poll loop: repeatedly poll the future with the current Context until Poll::Ready. Each await point is a suspension point where the future can return Pending.",
   "part": 8
  },
  {
   "id": 709,
   "question": "Which is true about `Future` and `Send`?",
   "options": {
    "A": "All futures are Send",
    "B": "Futures that hold non-Send types across await points are not Send",
    "C": "Futures are never Send because they use raw pointers",
    "D": "Send is only required for multi-threaded executors"
   },
   "correct": "B",
   "explanation": "A future is Send only if all data held across await points is Send. If you hold an Rc (not Send) across an await, the future is !Send. Multi-threaded runtimes like Tokio require Send futures to move tasks between threads.",
   "part": 8
  },
  {
   "id": 710,
   "question": "What does `poll` returning `Poll::Ready` imply?",
   "options": {
    "A": "The future will be polled again",
    "B": "The future has produced its final output and will not be polled again",
    "C": "The task is cancelled",
    "D": "The Waker was invoked"
   },
   "correct": "B",
   "explanation": "Poll::Ready(output) means the future is complete. The executor consumes the output and will not poll this future again. The future's contract is that poll is not called again after Ready.",
   "part": 8
  },
  {
   "id": 711,
   "question": "What is the difference between `tokio::runtime::Runtime::new()` and `tokio::runtime::Builder::new_current_thread()`?",
   "options": {
    "A": "They are identical",
    "B": "new() creates a multi-threaded runtime; new_current_thread() uses a single thread",
    "C": "new_current_thread() is faster but cannot spawn tasks",
    "D": "new() is deprecated"
   },
   "correct": "B",
   "explanation": "Runtime::new() defaults to a multi-threaded work-stealing scheduler. new_current_thread() creates a single-threaded runtime—simpler, lower overhead, but no parallelism. Use current_thread for simple or embedded use cases.",
   "part": 8
  },
  {
   "id": 712,
   "question": "What does `tokio::spawn` return?",
   "options": {
    "A": "The task's output",
    "B": "JoinHandle<Output>",
    "C": "impl Future",
    "D": "()"
   },
   "correct": "B",
   "explanation": "spawn returns JoinHandle<T> where T is the future's output type. You can await the handle to get the result, or drop it to detach the task. The handle also allows aborting the task.",
   "part": 8
  },
  {
   "id": 713,
   "question": "What happens if you drop a `JoinHandle` without awaiting it?",
   "options": {
    "A": "The task is cancelled immediately",
    "B": "The task continues running in the background (detached)",
    "C": "The program panics",
    "D": "The task is moved to the main thread"
   },
   "correct": "B",
   "explanation": "Dropping a JoinHandle detaches the task—it keeps running, but you can no longer retrieve its output. The task is not cancelled. Use JoinHandle::abort() to cancel.",
   "part": 8
  },
  {
   "id": 714,
   "question": "Can you call `tokio::spawn` outside of a Tokio runtime?",
   "options": {
    "A": "Yes; it spawns a new runtime",
    "B": "No; it panics if no runtime is in context",
    "C": "Yes; it uses the global executor",
    "D": "Only with #[tokio::main]"
   },
   "correct": "B",
   "explanation": "tokio::spawn requires a runtime to be current. If called outside (e.g., from a non-async main without #[tokio::main]), it panics. You must be inside a runtime or have one configured.",
   "part": 8
  },
  {
   "id": 715,
   "question": "What does `JoinHandle::abort()` do?",
   "options": {
    "A": "Waits for the task to finish",
    "B": "Cancels the task; the next poll will see a cancelled result",
    "C": "Pauses the task",
    "D": "Moves the task to another thread"
   },
   "correct": "B",
   "explanation": "abort() cancels the task. The task's future will receive a cancellation signal (typically via Drop or a cancelled result when polled). Awaiting the JoinHandle after abort yields JoinError::Cancelled.",
   "part": 8
  },
  {
   "id": 716,
   "question": "When using `#[tokio::main(flavor = \"current_thread\")]`, what happens if a spawned task blocks the thread?",
   "options": {
    "A": "Other tasks run on a different thread",
    "B": "All other tasks on that runtime are blocked until the blocking call completes",
    "C": "The runtime spawns a new thread automatically",
    "D": "Tokio detects blocking and yields"
   },
   "correct": "B",
   "explanation": "current_thread runtime has only one thread. If any task blocks (e.g., std::thread::sleep, CPU-bound work), no other tasks can run. Use tokio::task::spawn_blocking for blocking work.",
   "part": 8
  },
  {
   "id": 717,
   "question": "What is `tokio::task::spawn_blocking` for?",
   "options": {
    "A": "Spawning tasks that run on a separate thread pool for blocking/sync code",
    "B": "Spawning more async tasks",
    "C": "Spawning tasks with higher priority",
    "D": "Spawning tasks that cannot be cancelled"
   },
   "correct": "A",
   "explanation": "spawn_blocking runs synchronous/blocking code (e.g., file I/O, CPU work) on a dedicated thread pool so it doesn't block the async runtime. Returns a JoinHandle to a future that completes when the blocking work finishes.",
   "part": 8
  },
  {
   "id": 718,
   "question": "What does `JoinError::is_cancelled()` indicate?",
   "options": {
    "A": "The task panicked",
    "B": "The task was aborted via JoinHandle::abort()",
    "C": "The runtime was shut down",
    "D": "The task is still running"
   },
   "correct": "B",
   "explanation": "JoinError can represent cancellation (from abort()) or panic. is_cancelled() returns true when the task was explicitly aborted, as opposed to panicking.",
   "part": 8
  },
  {
   "id": 719,
   "question": "How do you get the output of a spawned task?",
   "options": {
    "A": "The output is returned to the spawner automatically",
    "B": "Await the JoinHandle: `handle.await`",
    "C": "Use a channel passed to the task",
    "D": "Both B and C work"
   },
   "correct": "D",
   "explanation": "You can await the JoinHandle to get Result<T, JoinError>. Alternatively, the task can send results through a channel. Awaiting the handle is the direct way; channels are useful for streaming or multiple results.",
   "part": 8
  },
  {
   "id": 720,
   "question": "What is `tokio::task::yield_now()` used for?",
   "options": {
    "A": "To cancel the current task",
    "B": "To voluntarily yield to the scheduler so other tasks can run",
    "C": "To sleep for one tick",
    "D": "To spawn a new task"
   },
   "correct": "B",
   "explanation": "yield_now() returns a future that completes on the next scheduler tick. It lets long-running CPU-bound async code cooperatively yield so other tasks get a chance to run. Prevents starving other tasks.",
   "part": 8
  },
  {
   "id": 721,
   "question": "Why does this fail to compile?\n\n```rust\nasync fn foo(x: &i32) -> i32 { *x }\nfn bar() -> impl Future<Output = i32> { foo(&42) }\n```",
   "options": {
    "A": "&42 does not live long enough",
    "B": "The future returned by foo captures a reference; the future's lifetime is tied to x, but bar returns it without x",
    "C": "async fn cannot take references",
    "D": "42 is not a valid reference"
   },
   "correct": "B",
   "explanation": "foo(&42) produces a future that holds a reference to a temporary. The future's Output = i32 is fine, but the future itself contains &i32. When bar returns, the temporary is gone. The future would outlive the reference—lifetime error.",
   "part": 8
  },
  {
   "id": 722,
   "question": "What does `async move` do in an async block?",
   "options": {
    "A": "Moves the block to another thread",
    "B": "Moves all captured variables into the future, transferring ownership",
    "C": "Makes the future Send",
    "D": "Moves the future to the heap"
   },
   "correct": "B",
   "explanation": "async move is like move on closures—it takes ownership of captured variables into the future. Without move, the future holds references; with move, it holds owned values. Use move when you need the future to own its data (e.g., for spawning).",
   "part": 8
  },
  {
   "id": 723,
   "question": "When does an `async fn` that takes `&self` produce a future that is not `Send`?",
   "options": {
    "A": "Never; &self is always Send",
    "B": "When the future holds &self across an await point and Self is not Send",
    "C": "When the function is generic",
    "D": "When it returns a reference"
   },
   "correct": "B",
   "explanation": "The generated future holds &self across await points. For the future to be Send, &self (and any other held data) must be Send. If Self contains Rc (not Send), &self across await makes the future !Send.",
   "part": 8
  },
  {
   "id": 724,
   "question": "What is the effect of `#[tokio::main(flavor = \"multi_thread\")]` on spawned task types?",
   "options": {
    "A": "All spawned futures must be Send",
    "B": "Futures need not be Send",
    "C": "Only Sync types are allowed",
    "D": "It has no effect on types"
   },
   "correct": "A",
   "explanation": "The multi-threaded runtime can move tasks between worker threads. Therefore, spawned futures must be Send so they can be safely moved. current_thread does not have this requirement.",
   "part": 8
  },
  {
   "id": 725,
   "question": "Why might `async fn get_string() -> &str` be problematic?",
   "options": {
    "A": "async fn cannot return references",
    "B": "It would require a named lifetime for the return type; the future would need to capture something with that lifetime",
    "C": "&str is not Send",
    "D": "It works fine"
   },
   "correct": "B",
   "explanation": "Returning &str from async fn means the future must produce a reference. That reference must outlive the future. Typically you'd need something like async fn get_string<'a>(s: &'a str) -> &'a str—the future holds &'a str. Complex lifetime constraints often lead to using owned types (String) instead.",
   "part": 8
  },
  {
   "id": 726,
   "question": "What does `Send` bound on a future ensure?",
   "options": {
    "A": "The future can be cloned",
    "B": "The future can be safely transferred between threads",
    "C": "The future can be shared via Arc",
    "D": "The future is thread-safe for concurrent polling"
   },
   "correct": "B",
   "explanation": "Send means the value can be transferred to another thread. For futures, this allows a multi-threaded runtime to move tasks between worker threads. The future must not hold non-Send data (e.g., Rc, raw pointers) across await points.",
   "part": 8
  },
  {
   "id": 727,
   "question": "How do you fix a future that is not Send due to holding Rc across await?",
   "options": {
    "A": "Use Arc instead of Rc",
    "B": "Add #[derive(Send)]",
    "C": "Use Box::pin",
    "D": "Wrap in Mutex"
   },
   "correct": "A",
   "explanation": "Rc is !Send (not thread-safe). Arc is Send (and Sync). Replacing Rc with Arc allows the future to be Send, as long as the inner type is also Send. Mutex can help with interior mutability but doesn't fix Rc.",
   "part": 8
  },
  {
   "id": 728,
   "question": "What is the type of `async { 1 + 2 }.await`?",
   "options": {
    "A": "i32",
    "B": "impl Future<Output = i32>",
    "C": "Poll<i32>",
    "D": "()"
   },
   "correct": "A",
   "explanation": "The async block produces a future. .await polls it until Ready. The output of the future is i32 (from 1+2). So the whole expression has type i32.",
   "part": 8
  },
  {
   "id": 729,
   "question": "Can you implement Future for a type that holds a raw pointer?",
   "options": {
    "A": "No; raw pointers make it unsafe",
    "B": "Yes; you must ensure the future is never moved after being pinned, and that the pointer remains valid",
    "C": "Only if the pointer is null",
    "D": "Raw pointers are not allowed in async"
   },
   "correct": "B",
   "explanation": "You can implement Future with raw pointers, but you must uphold Pin's invariants: once pinned, the value must not be moved. Self-referential structs (common in async) use raw pointers; the compiler-generated state machines do this. It requires careful unsafe code.",
   "part": 8
  },
  {
   "id": 730,
   "question": "What does `Unpin` mean for a future?",
   "options": {
    "A": "The future can be unpinned",
    "B": "The future is safe to move after being pinned (it has no self-references that would be invalidated)",
    "C": "The future cannot be pinned",
    "D": "The future is thread-safe"
   },
   "correct": "B",
   "explanation": "Unpin is an auto trait. Types that don't contain Pin<P> (or similar) are Unpin. For Unpin futures, Pin<&mut T> is essentially &mut T—moving is safe. Most types are Unpin; async/await generates !Unpin when there are self-references.",
   "part": 8
  },
  {
   "id": 731,
   "question": "What does `tokio::select!` do?",
   "options": {
    "A": "Runs multiple branches in parallel and returns all results",
    "B": "Runs multiple futures and returns when the first one completes",
    "C": "Selects one future to run based on a condition",
    "D": "Runs futures sequentially"
   },
   "correct": "B",
   "explanation": "select! runs several futures concurrently and completes when the first one does. The other branches are cancelled. It's like a race—first to finish wins. Useful for timeouts, cancellation, or choosing between multiple async operations.",
   "part": 8
  },
  {
   "id": 732,
   "question": "What does `tokio::join!` do?",
   "options": {
    "A": "Runs futures one after another",
    "B": "Runs all futures concurrently and waits for all to complete, returning a tuple of results",
    "C": "Joins two futures into one",
    "D": "Runs the first future that completes"
   },
   "correct": "B",
   "explanation": "join! runs all branches concurrently and waits for every one to finish. Returns a tuple of all outputs. Unlike select!, nothing is cancelled—all must complete.",
   "part": 8
  },
  {
   "id": 733,
   "question": "In `tokio::select!`, what happens to the non-completed branches?",
   "options": {
    "A": "They are dropped and their tasks cancelled",
    "B": "They continue running in the background",
    "C": "They are paused and can be resumed",
    "D": "They are joined"
   },
   "correct": "A",
   "explanation": "When one branch of select! completes, the others are dropped. Dropping an incomplete future typically cancels it (the future's Drop runs). So only one branch \"wins\"; the rest are cancelled.",
   "part": 8
  },
  {
   "id": 734,
   "question": "What is `biased` in `tokio::select!`?",
   "options": {
    "A": "It biases toward the first branch",
    "B": "Branches are polled in order; the first ready branch wins, avoiding random selection",
    "C": "It makes the select deterministic",
    "D": "Both B and C"
   },
   "correct": "D",
   "explanation": "Without biased, select! may poll branches in a random order (to prevent starvation). biased makes it poll in source order—the first branch that is ready wins. This gives predictable behavior and can avoid starvation of earlier branches.",
   "part": 8
  },
  {
   "id": 735,
   "question": "What is a potential pitfall when using `select!` with a loop?",
   "options": {
    "A": "The loop never terminates",
    "B": "Creating new futures in each iteration can cause issues if you don't properly handle the previous iteration's futures",
    "C": "select! cannot be used in loops",
    "D": "Only one branch can be in a loop"
   },
   "correct": "B",
   "explanation": "A common bug: using `loop { select! { ... } }` where a branch creates a new future (e.g., a new TCP connection). If the future is created inside the branch and not stored, you might be selecting on a fresh future each time, or have borrow/lifetime issues. Need to structure the loop carefully.",
   "part": 8
  },
  {
   "id": 736,
   "question": "In `select! { a = fut1 => ..., b = fut2 => ... }`, when both futures are ready, which branch runs?",
   "options": {
    "A": "Both run",
    "B": "The first one in source order (with biased) or randomly (without biased)",
    "C": "Neither; it's a race condition",
    "D": "The one that became ready first"
   },
   "correct": "B",
   "explanation": "When multiple branches are ready, biased select! picks the first in source order. Without biased, Tokio randomizes to prevent starvation. Only one branch runs; the other is dropped.",
   "part": 8
  },
  {
   "id": 737,
   "question": "What does `tokio::try_join!` do compared to `tokio::join!`?",
   "options": {
    "A": "They are identical",
    "B": "try_join! short-circuits on the first Err, returning that error",
    "C": "try_join! only works with Result types",
    "D": "try_join! joins Option types"
   },
   "correct": "B",
   "explanation": "try_join! is for futures that return Result. It runs them concurrently but returns Err immediately if any returns Err, cancelling the rest. If all Ok, returns Ok((a, b, ...)).",
   "part": 8
  },
  {
   "id": 738,
   "question": "Why might `select!` cause a branch to \"starve\"?",
   "options": {
    "A": "Without biased, random polling can favor a branch that is always ready",
    "B": "A branch that is always ready (e.g., an already-received channel) can repeatedly win before others get a chance",
    "C": "Both A and B",
    "D": "select! prevents starvation by design"
   },
   "correct": "C",
   "explanation": "If one branch is always ready (e.g., receiving from a channel that already has data), it can keep winning. Without biased, randomization helps. With biased, the first always-ready branch wins every time—could starve later branches. Structure your branches or use fairness mechanisms.",
   "part": 8
  },
  {
   "id": 739,
   "question": "What does `fut.or(timeout)` do conceptually in a select!?",
   "options": {
    "A": "Runs fut, and if it times out, runs timeout",
    "B": "Runs both; the first to complete wins; typically timeout is a sleep that fires after a duration",
    "C": "Runs fut with a timeout parameter",
    "D": "Runs timeout after fut completes"
   },
   "correct": "B",
   "explanation": "In select!, you'd have something like `result = fut => ...` and `_ = tokio::time::sleep(duration) => ...`. Whichever completes first wins. The sleep branch implements a timeout—if the sleep fires first, you handle the timeout case.",
   "part": 8
  },
  {
   "id": 740,
   "question": "Can you use `select!` with more than 2 branches?",
   "options": {
    "A": "No; only 2",
    "B": "Yes; any number of branches",
    "C": "Up to 4",
    "D": "Only with a macro"
   },
   "correct": "B",
   "explanation": "select! accepts any number of branches. It runs all of them concurrently and completes when the first one does. Common to have 3+ (e.g., request, timeout, cancellation signal).",
   "part": 8
  },
  {
   "id": 741,
   "question": "What is the difference between `tokio::sync::mpsc::channel(1)` and `channel(100)`?",
   "options": {
    "A": "They are identical",
    "B": "The number is the buffer size; 1 means backpressure after one message",
    "C": "100 is the number of senders",
    "D": "1 is unbounded, 100 is bounded"
   },
   "correct": "B",
   "explanation": "The argument is the channel capacity. With 1, the sender blocks (or returns an error for try_send) when the buffer is full—backpressure. With 100, up to 100 messages can be buffered before backpressure.",
   "part": 8
  },
  {
   "id": 742,
   "question": "When does `mpsc::Sender::send()` return a future that completes?",
   "options": {
    "A": "Immediately",
    "B": "When the message has been received by the receiver",
    "C": "When the message has been buffered (or when there is space in the buffer)",
    "D": "When the receiver is dropped"
   },
   "correct": "C",
   "explanation": "send().await completes when the message can be buffered (or passed to the receiver if unbounded). It does not wait for the receiver to process the message. Backpressure: if the buffer is full, send blocks until space is available.",
   "part": 8
  },
  {
   "id": 743,
   "question": "What is `oneshot` channel used for?",
   "options": {
    "A": "Sending multiple messages",
    "B": "Single producer, single consumer, one message only",
    "C": "Broadcasting to many receivers",
    "D": "Synchronous communication"
   },
   "correct": "B",
   "explanation": "oneshot is for a single message: one sender, one receiver. Common for request-response patterns (e.g., spawn a task, send a oneshot sender; the task sends the result back). After one send, the channel is done.",
   "part": 8
  },
  {
   "id": 744,
   "question": "What does `broadcast` channel provide?",
   "options": {
    "A": "Multiple senders, one receiver",
    "B": "Multiple senders, multiple receivers; each message goes to all receivers",
    "C": "One sender, multiple receivers",
    "D": "Unbounded buffering"
   },
   "correct": "B",
   "explanation": "broadcast allows many senders and many receivers. Each sent message is cloned and delivered to every receiver. Useful for pub/sub, event broadcasting. Receivers that lag may miss messages (they get RecvError::Lagged).",
   "part": 8
  },
  {
   "id": 745,
   "question": "What is the `watch` channel used for?",
   "options": {
    "A": "Sending a stream of values",
    "B": "Holding a single value that can be updated; receivers see the current value",
    "C": "Watching file changes",
    "D": "Multiple consumers of one message"
   },
   "correct": "B",
   "explanation": "watch holds one value. The sender can update it. Receivers get the current value and can wait for changes. When the value changes, receivers are notified. Useful for configuration, state that multiple tasks need to observe.",
   "part": 8
  },
  {
   "id": 746,
   "question": "What happens when all `Receiver`s for an mpsc channel are dropped?",
   "options": {
    "A": "The channel is closed; senders' send() will fail",
    "B": "Nothing; the channel continues",
    "C": "The senders panic",
    "D": "The channel becomes unbounded"
   },
   "correct": "A",
   "explanation": "When all receivers are dropped, the channel is closed. Senders' send().await will return an error (the channel is closed). This allows graceful shutdown—receivers drop, senders detect it.",
   "part": 8
  },
  {
   "id": 747,
   "question": "What is backpressure in the context of async channels?",
   "options": {
    "A": "Pressure from the OS",
    "B": "When the receiver is slow, the sender blocks (or gets an error) instead of unbounded buffering",
    "C": "A type of channel",
    "D": "When the sender is dropped"
   },
   "correct": "B",
   "explanation": "Backpressure means slow consumers slow down producers. With a bounded channel, when the buffer is full, send blocks. This prevents fast producers from overwhelming memory. Unbounded channels have no backpressure.",
   "part": 8
  },
  {
   "id": 748,
   "question": "How do you get the latest value from a `watch::Receiver` without waiting?",
   "options": {
    "A": "receiver.recv().await",
    "B": "receiver.borrow() or receiver.get()—receiver has a .borrow() that gives &T",
    "C": "receiver.try_recv()",
    "D": "watch::Receiver has a .get() or .borrow() method for the current value"
   },
   "correct": "D",
   "explanation": "watch::Receiver has .borrow() (or in some versions, direct access) to get the current value without awaiting. .recv().await waits for the next change. So you can read the latest value synchronously.",
   "part": 8
  },
  {
   "id": 749,
   "question": "What does `mpsc::Sender::try_send()` return?",
   "options": {
    "A": "Result<(), Error>",
    "B": "Option<()>",
    "C": "Result<(), SendError<T>>—Err contains the message if it couldn't be sent",
    "D": "bool"
   },
   "correct": "C",
   "explanation": "try_send returns Result<(), SendError<T>>. Ok(()) on success. Err(SendError(msg)) if the channel is full or closed—the message is returned so you don't lose it.",
   "part": 8
  },
  {
   "id": 750,
   "question": "When using `broadcast`, what does `RecvError::Lagged` mean?",
   "options": {
    "A": "The channel is closed",
    "B": "The receiver fell behind; it missed some messages and was reset to the latest",
    "C": "The sender was dropped",
    "D": "The buffer overflowed"
   },
   "correct": "B",
   "explanation": "In broadcast, if the receiver is slow and the buffer overwrites, the receiver gets Lagged. It means messages were skipped. The receiver is typically reset to the newest value. You can detect and handle this.",
   "part": 8
  },
  {
   "id": 751,
   "question": "What does the `Stream` trait provide compared to `Future`?",
   "options": {
    "A": "Stream is the same as Future",
    "B": "Stream yields multiple values over time (like async Iterator)",
    "C": "Stream is faster",
    "D": "Stream handles errors"
   },
   "correct": "B",
   "explanation": "Stream::poll_next returns Poll<Option<Item>>. It yields a sequence of values, one at a time. Like Iterator but async. Future yields one value; Stream yields many.",
   "part": 8
  },
  {
   "id": 752,
   "question": "What does `StreamExt::next()` return?",
   "options": {
    "A": "Option<Self::Item>",
    "B": "impl Future<Output = Option<Self::Item>>",
    "C": "Self::Item",
    "D": "Vec<Self::Item>"
   },
   "correct": "B",
   "explanation": "next() returns a future that, when awaited, produces Option<Item>. Some(item) for the next value, None when the stream is exhausted. It consumes one item from the stream.",
   "part": 8
  },
  {
   "id": 753,
   "question": "How do you iterate over a Stream in async code?",
   "options": {
    "A": "for await item in stream",
    "B": "while let Some(item) = stream.next().await",
    "C": "stream.for_each(|item| ...).await",
    "D": "Both B and C work"
   },
   "correct": "D",
   "explanation": "Rust doesn't have for await yet. You use while let Some(x) = stream.next().await { } or for_each from StreamExt. for_each applies a closure to each item.",
   "part": 8
  },
  {
   "id": 754,
   "question": "What does `buffered(n)` do on a stream of futures?",
   "options": {
    "A": "Buffers n items from the stream",
    "B": "Runs up to n futures from the stream concurrently, preserving order of results",
    "C": "Buffers the stream output",
    "D": "Runs n streams in parallel"
   },
   "correct": "B",
   "explanation": "buffered(n) is for Stream<Item = impl Future>. It polls up to n futures at a time. Results are yielded in the same order as the stream's items. Like a concurrent map but ordered.",
   "part": 8
  },
  {
   "id": 755,
   "question": "What does `buffer_unordered(n)` do compared to `buffered(n)`?",
   "options": {
    "A": "They are identical",
    "B": "buffer_unordered yields results as they complete, not in stream order",
    "C": "buffer_unordered uses less memory",
    "D": "buffer_unordered is for unordered streams"
   },
   "correct": "B",
   "explanation": "buffer_unordered also runs up to n futures concurrently, but yields results in completion order (whichever future finishes first). buffered preserves the order of the stream. Use buffer_unordered when order doesn't matter and you want faster completion.",
   "part": 8
  },
  {
   "id": 756,
   "question": "What does `for_each_concurrent(n, f)` do?",
   "options": {
    "A": "Runs the stream sequentially",
    "B": "Applies f to up to n items concurrently as they're produced",
    "C": "Runs n streams",
    "D": "Buffers n items"
   },
   "correct": "B",
   "explanation": "for_each_concurrent limits concurrency. It pulls items from the stream and applies the async closure f to up to n at a time. When one finishes, the next is started. Useful for limiting concurrent work (e.g., HTTP requests).",
   "part": 8
  },
  {
   "id": 757,
   "question": "What does `StreamExt::collect` produce?",
   "options": {
    "A": "A future that collects all items into a collection",
    "B": "A Vec immediately",
    "C": "The first item only",
    "D": "A stream of collections"
   },
   "correct": "A",
   "explanation": "collect() returns a future. When awaited, it consumes the stream and collects all items into a type that implements FromStream (e.g., Vec). Like Iterator::collect but async.",
   "part": 8
  },
  {
   "id": 758,
   "question": "How do you convert an `Iterator` into a `Stream`?",
   "options": {
    "A": "iterator.into_stream()",
    "B": "Use futures::stream::iter() to wrap the iterator",
    "C": "Stream::from(iterator)",
    "D": "iterator.stream()"
   },
   "correct": "B",
   "explanation": "futures::stream::iter(iterator) creates a Stream that yields the iterator's items. Each item is produced as a future that is immediately ready. Useful for mixing sync data with async pipelines.",
   "part": 8
  },
  {
   "id": 759,
   "question": "What does `StreamExt::filter` return?",
   "options": {
    "A": "A filtered Vec",
    "B": "A new Stream that yields only items matching the predicate",
    "C": "Option<Item>",
    "D": "A Future"
   },
   "correct": "B",
   "explanation": "filter takes a predicate and returns a Stream. Only items for which the predicate returns true are yielded. Lazy—like Iterator::filter. The predicate can be async (filter with async predicate exists in some APIs).",
   "part": 8
  },
  {
   "id": 760,
   "question": "What is `StreamExt::take(n)` for?",
   "options": {
    "A": "Taking ownership",
    "B": "Limiting the stream to at most n items",
    "C": "Taking the nth item",
    "D": "Taking items until a condition"
   },
   "correct": "B",
   "explanation": "take(n) limits the stream to the first n elements. After n items, the stream ends. Like Iterator::take. Useful for limiting how much you process.",
   "part": 8
  },
  {
   "id": 761,
   "question": "What does `AsyncReadExt::read_to_string` do?",
   "options": {
    "A": "Reads a single character",
    "B": "Reads until EOF and appends to a String",
    "C": "Reads a fixed number of bytes",
    "D": "Reads a line"
   },
   "correct": "B",
   "explanation": "read_to_string reads all bytes until EOF and appends them to the given String, as valid UTF-8. Returns the number of bytes read. Used for reading a whole file or stream into a string.",
   "part": 8
  },
  {
   "id": 762,
   "question": "What is the purpose of `tokio::io::BufReader`?",
   "options": {
    "A": "To make reads faster by buffering",
    "B": "To provide line-by-line reading (read_line) and reduce syscalls",
    "C": "To compress data",
    "D": "To encrypt data"
   },
   "correct": "B",
   "explanation": "BufReader wraps an AsyncRead and buffers input. This reduces syscalls (read in chunks) and enables methods like read_line that need to look ahead. Similar to std::io::BufReader but for async.",
   "part": 8
  },
  {
   "id": 763,
   "question": "What does `AsyncWriteExt::write_all` do?",
   "options": {
    "A": "Writes one byte",
    "B": "Writes the entire buffer, retrying until all bytes are written or an error occurs",
    "C": "Writes to stdout",
    "D": "Writes and flushes"
   },
   "correct": "B",
   "explanation": "write_all takes a &[u8] and writes until all bytes are written. It handles partial writes (retries). Returns an error if the write fails. Does not flush—use flush() separately if needed.",
   "part": 8
  },
  {
   "id": 764,
   "question": "When should you use `tokio::fs` instead of `std::fs`?",
   "options": {
    "A": "Always; std::fs is deprecated",
    "B": "When you need to perform file I/O without blocking the async runtime",
    "C": "Only for network I/O",
    "D": "std::fs is faster"
   },
   "correct": "B",
   "explanation": "std::fs blocks the thread. In an async context, blocking a worker thread stalls other tasks. tokio::fs uses blocking thread pools or async file APIs so the runtime stays responsive. Use tokio::fs in async code.",
   "part": 8
  },
  {
   "id": 765,
   "question": "What does `AsyncBufReadExt::read_line` return?",
   "options": {
    "A": "String",
    "B": "Result<String, Error>",
    "C": "usize (number of bytes read, including newline)",
    "D": "Option<String>"
   },
   "correct": "C",
   "explanation": "read_line appends to the given String and returns usize—the number of bytes read (including the newline). The String is passed by reference. Returns 0 on EOF. The method signature is read_line(&mut self, buf: &mut String) -> Result<usize>.",
   "part": 8
  },
  {
   "id": 766,
   "question": "What is `tokio::io::split` used for?",
   "options": {
    "A": "Splitting a file",
    "B": "Splitting a type implementing AsyncRead + AsyncWrite (e.g., TcpStream) into separate read and write halves for concurrent use",
    "C": "Splitting a stream",
    "D": "Splitting bytes"
   },
   "correct": "B",
   "explanation": "split takes a duplex type (Read + Write) and returns (ReadHalf, WriteHalf). Each half can be used independently, possibly in different tasks. Useful for full-duplex protocols where one task reads and another writes.",
   "part": 8
  },
  {
   "id": 767,
   "question": "Why might you wrap a `TcpStream` in `BufReader`?",
   "options": {
    "A": "To encrypt the connection",
    "B": "To use line-based or framed protocols (e.g., read_line, read_until) efficiently",
    "C": "To make it faster for large transfers",
    "D": "BufReader doesn't work with TcpStream"
   },
   "correct": "B",
   "explanation": "BufReader buffers input. For line-based protocols (HTTP headers, Redis, etc.), read_line and read_until need to peek ahead. BufReader provides that and reduces syscalls. For raw byte streaming, it may add latency.",
   "part": 8
  },
  {
   "id": 768,
   "question": "What does `AsyncWriteExt::flush` do?",
   "options": {
    "A": "Clears the buffer",
    "B": "Ensures all buffered data has been written to the underlying writer",
    "C": "Closes the stream",
    "D": "Resets the writer"
   },
   "correct": "B",
   "explanation": "flush() writes any buffered data to the underlying I/O. BufWriter and similar hold data in a buffer; flush ensures it's all sent. Important before closing or when you need data to be sent immediately.",
   "part": 8
  },
  {
   "id": 769,
   "question": "What is `tokio::io::copy` for?",
   "options": {
    "A": "Copying files",
    "B": "Copying bytes from an AsyncRead to an AsyncWrite (e.g., proxy data between streams)",
    "C": "Cloning handles",
    "D": "Copying buffers"
   },
   "correct": "B",
   "explanation": "copy(read, write) reads from the reader and writes to the writer until EOF. Returns the number of bytes copied. Useful for proxying (e.g., TCP relay), piping streams, or saving a download to a file.",
   "part": 8
  },
  {
   "id": 770,
   "question": "Can you use `std::net::TcpStream` with Tokio?",
   "options": {
    "A": "Yes; it works directly",
    "B": "No; you must use tokio::net::TcpStream",
    "C": "Yes; wrap it with tokio::net::TcpStream::from_std",
    "D": "Only for reading"
   },
   "correct": "C",
   "explanation": "tokio::net::TcpStream::from_std converts a std TcpStream to Tokio's. You might do this when integrating with sync code or when you obtain a std stream (e.g., from a library). The Tokio stream is non-blocking and works with the async runtime.",
   "part": 8
  },
  {
   "id": 771,
   "question": "What is the key difference between `tokio::sync::Mutex` and `std::sync::Mutex` in async code?",
   "options": {
    "A": "They are identical",
    "B": "tokio::sync::Mutex is async-aware; locking it yields to the runtime instead of blocking the thread",
    "C": "std::sync::Mutex is faster",
    "D": "tokio::sync::Mutex cannot deadlock"
   },
   "correct": "B",
   "explanation": "std::sync::Mutex::lock() blocks the thread. In async, blocking a worker thread stalls other tasks. tokio::sync::Mutex::lock() returns a future that yields when the lock is contended—other tasks can run. Use Tokio's Mutex in async code.",
   "part": 8
  },
  {
   "id": 772,
   "question": "When might you use `std::sync::Mutex` in async code?",
   "options": {
    "A": "Never",
    "B": "When the critical section is very short and you're sure it won't block (e.g., updating a counter)",
    "C": "Always; it's faster",
    "D": "Only with spawn_blocking"
   },
   "correct": "B",
   "explanation": "If the critical section is tiny (e.g., a few nanoseconds) and never does I/O or awaits, std::sync::Mutex can be acceptable—the lock is held so briefly that blocking is negligible. For longer holds or any await, use tokio::sync::Mutex.",
   "part": 8
  },
  {
   "id": 773,
   "question": "What is `tokio::sync::Semaphore` used for?",
   "options": {
    "A": "Replacing Mutex",
    "B": "Limiting concurrent access to a resource (e.g., max N tasks at a time)",
    "C": "Signaling between tasks",
    "D": "Lock-free programming"
   },
   "correct": "B",
   "explanation": "Semaphore has a permit count. acquire() takes a permit (waits if none available). release() returns one. Used to limit concurrency: e.g., max 10 concurrent HTTP requests. Also useful for rate limiting.",
   "part": 8
  },
  {
   "id": 774,
   "question": "What does `tokio::sync::Notify` provide?",
   "options": {
    "A": "A mutex",
    "B": "A one-shot or repeated wake-up signal; one or more tasks can wait, another can notify",
    "C": "A channel",
    "D": "A semaphore"
   },
   "correct": "B",
   "explanation": "Notify is a simple notification primitive. Tasks call notified().await to wait. Another task calls notify_one() or notify_waiters() to wake them. Useful for custom synchronization, e.g., \"wake me when X is ready.\"",
   "part": 8
  },
  {
   "id": 775,
   "question": "What is `tokio::sync::RwLock` for?",
   "options": {
    "A": "Replacing Mutex with a faster lock",
    "B": "Allowing multiple readers or a single writer",
    "C": "Read-only locks",
    "D": "Write-only locks"
   },
   "correct": "B",
   "explanation": "RwLock allows many concurrent readers or one writer. read() for shared access, write() for exclusive. Better than Mutex when reads are common and writes rare. tokio::sync::RwLock is async-aware (yields when contended).",
   "part": 8
  },
  {
   "id": 776,
   "question": "Why can holding a `std::sync::MutexGuard` across an `.await` be problematic?",
   "options": {
    "A": "The guard might be dropped",
    "B": "It blocks the async worker thread; if another task needs the lock, you can deadlock",
    "C": "The guard is not Send",
    "D": "Both B and C"
   },
   "correct": "D",
   "explanation": "Holding a MutexGuard across await blocks the thread—no other task can run on that worker. If another task needs the same lock, deadlock. Also, MutexGuard may not be Send, so the future might not be Send (required for multi-threaded runtimes).",
   "part": 8
  },
  {
   "id": 777,
   "question": "What does `Semaphore::acquire_many(5)` do?",
   "options": {
    "A": "Acquires 5 semaphores",
    "B": "Acquires 5 permits from the semaphore in one call",
    "C": "Acquires from 5 different semaphores",
    "D": "Increases the permit count by 5"
   },
   "correct": "B",
   "explanation": "acquire_many(n) acquires n permits at once. Useful when a task needs multiple \"slots\" (e.g., a batch operation). The semaphore's available count decreases by n. Release the same number when done.",
   "part": 8
  },
  {
   "id": 778,
   "question": "How does `Notify` differ from a oneshot channel?",
   "options": {
    "A": "Notify is faster",
    "B": "Notify doesn't carry data; it's just a signal. Oneshot sends a value",
    "C": "Notify can wake multiple waiters; oneshot is single consumer",
    "D": "Both B and C"
   },
   "correct": "D",
   "explanation": "Notify is a bare signal—no data. Oneshot sends one value. Notify can notify_one or notify_waiters (wake all). Oneshot has one sender, one receiver, one value. Use Notify when you just need to wake tasks; use oneshot for request-response.",
   "part": 8
  },
  {
   "id": 779,
   "question": "What is `tokio::sync::MutexGuard` across await points?",
   "options": {
    "A": "It is Send, so holding it across await is fine",
    "B": "It is not Send; holding it across await can make the future !Send",
    "C": "It automatically releases at await",
    "D": "It causes a compile error"
   },
   "correct": "B",
   "explanation": "tokio::sync::MutexGuard is Send (unlike std's in some cases). But the key point: holding any lock across await extends the hold time. With tokio::Mutex, the future yields while waiting, so it's designed for this. The guard itself is Send. The main issue with std::Mutex is blocking + potential !Send.",
   "part": 8
  },
  {
   "id": 780,
   "question": "What is 'structured concurrency' in the context of async?",
   "options": {
    "A": "Using structs for concurrency",
    "B": "Ensuring child tasks are contained within a parent's lifetime; when the parent is cancelled, children are too",
    "C": "A Tokio-specific feature",
    "D": "Using select! only"
   },
   "correct": "B",
   "explanation": "Structured concurrency means child tasks don't outlive their parent. When the parent scope ends (or is cancelled), all children are cancelled. tokio::spawn doesn't enforce this—tasks can outlive the spawner. Scopes (e.g., tokio::task::scope in some runtimes) provide it.",
   "part": 8
  },
  {
   "id": 781,
   "question": "What is `tokio::task::LocalKey` (task-local storage) used for?",
   "options": {
    "A": "Storing data in a global variable",
    "B": "Storing data that is local to each task, like thread-local but per-task",
    "C": "Storing data in a Mutex",
    "D": "Storing data in a channel"
   },
   "correct": "B",
   "explanation": "Task-local storage holds data per task. Each task has its own copy. Useful for request IDs, tracing context, or other per-task state without passing it through every function. Similar to thread_local but for async tasks.",
   "part": 8
  },
  {
   "id": 782,
   "question": "Why is async Drop challenging in Rust?",
   "options": {
    "A": "Drop is synchronous; you cannot await in drop",
    "B": "Drop must complete synchronously; async cleanup (e.g., flushing, closing connections) cannot be awaited",
    "C": "Drop cannot be implemented for async types",
    "D": "Drop is automatically async"
   },
   "correct": "B",
   "explanation": "Drop::drop is sync and cannot be async. If a type needs async cleanup (flush a writer, close a connection gracefully), you can't do it in Drop. You need explicit async close methods (e.g., close().await) that callers must use before dropping.",
   "part": 8
  },
  {
   "id": 783,
   "question": "What does 'cancellation safety' mean for a future?",
   "options": {
    "A": "The future cannot be cancelled",
    "B": "If the future is dropped (cancelled) at an await point, no invariants are violated and resources are properly cleaned up",
    "C": "The future uses a CancellationToken",
    "D": "The future is in a select!"
   },
   "correct": "B",
   "explanation": "When a future is dropped (e.g., by select! when another branch wins), it may be at an await point. Cancellation-safe code ensures that dropping doesn't leave things in a bad state (e.g., half-written data, leaked resources). Some operations are not cancellation-safe.",
   "part": 8
  },
  {
   "id": 784,
   "question": "Which operation is typically NOT cancellation-safe?",
   "options": {
    "A": "Reading from a channel",
    "B": "Writing to a file with a series of write() calls—if cancelled mid-write, data may be partially written",
    "C": "Sleeping",
    "D": "Receiving from mpsc"
   },
   "correct": "B",
   "explanation": "A sequence of writes can leave partial data if cancelled between writes. Channel send/recv are usually atomic. Sleep is trivially safe (nothing to clean up). Multi-step I/O operations that must be atomic are problematic when cancelled.",
   "part": 8
  },
  {
   "id": 785,
   "question": "How can you make cleanup run when a task is cancelled?",
   "options": {
    "A": "Implement Drop—it always runs",
    "B": "Use a guard type with Drop; when the future is dropped, the guard's Drop runs",
    "C": "Use CancellationToken::cancelled().await",
    "D": "Both B and C are valid approaches"
   },
   "correct": "D",
   "explanation": "Drop runs when the future is dropped, so a guard struct with Drop can run cleanup. Alternatively, use a CancellationToken and have the task poll cancelled().await; when cancelled, run cleanup before exiting. Both work.",
   "part": 8
  },
  {
   "id": 786,
   "question": "What does `tokio::task::scope` (or similar) provide?",
   "options": {
    "A": "A scope for variables",
    "B": "Structured concurrency: spawned tasks are joined or cancelled when the scope exits",
    "C": "A new runtime",
    "D": "Task-local storage"
   },
   "correct": "B",
   "explanation": "Scoped spawning ensures child tasks don't outlive the scope. When the scope block ends, you either await all children or they're cancelled. Prevents orphaned tasks. Note: tokio's API has evolved; the exact name may vary.",
   "part": 8
  },
  {
   "id": 787,
   "question": "Why might you use `CancellationToken` instead of `JoinHandle::abort()`?",
   "options": {
    "A": "CancellationToken is faster",
    "B": "CancellationToken allows cooperative cancellation; the task can run cleanup when it observes cancellation",
    "C": "abort() doesn't work",
    "D": "CancellationToken works with select!"
   },
   "correct": "B",
   "explanation": "abort() forcefully drops the future—cleanup in Drop runs, but the task doesn't get to run arbitrary code. CancellationToken lets the task poll token.cancelled().await and, when triggered, run cleanup (flush, close) before exiting. Cooperative cancellation.",
   "part": 8
  },
  {
   "id": 788,
   "question": "What is a common pattern for async resource cleanup?",
   "options": {
    "A": "Rely only on Drop",
    "B": "Provide an explicit async close() or shutdown() method; document that callers should await it before dropping",
    "C": "Use Arc::strong_count",
    "D": "Never drop async types"
   },
   "correct": "B",
   "explanation": "Since Drop can't await, the pattern is: provide close().await (or similar). Callers must call it before dropping. Drop can log a warning if close wasn't called. Some types use a background task for cleanup.",
   "part": 8
  },
  {
   "id": 789,
   "question": "When a future in `select!` is dropped, what runs?",
   "options": {
    "A": "Nothing",
    "B": "The future's Drop implementation, if any",
    "C": "A cancellation handler",
    "D": "The runtime panics"
   },
   "correct": "B",
   "explanation": "When the losing branch's future is dropped, its Drop runs. Any guard types or resources with Drop get cleaned up. The future doesn't get to run more async code—Drop is sync. Design your futures so Drop leaves things in a safe state.",
   "part": 8
  },
  {
   "id": 790,
   "question": "What is connection pooling in async Rust?",
   "options": {
    "A": "A pool of threads",
    "B": "Reusing a set of connections (e.g., DB, HTTP) instead of creating new ones for each request",
    "C": "A memory pool",
    "D": "A channel"
   },
   "correct": "B",
   "explanation": "Connection pooling maintains a pool of pre-established connections. Requests check out a connection, use it, and return it. Avoids the overhead of connecting for every request. Common for databases, HTTP clients.",
   "part": 8
  },
  {
   "id": 791,
   "question": "What does exponential backoff mean for retries?",
   "options": {
    "A": "Retry immediately",
    "B": "Wait time doubles (or scales) after each failure: 1s, 2s, 4s, 8s...",
    "C": "Retry at random intervals",
    "D": "Retry a fixed number of times"
   },
   "correct": "B",
   "explanation": "Exponential backoff increases delay between retries: e.g., 1s, 2s, 4s, 8s. Reduces load on a failing service. Often combined with jitter (randomization) to avoid thundering herd.",
   "part": 8
  },
  {
   "id": 792,
   "question": "How do you add a timeout to an async operation in Tokio?",
   "options": {
    "A": "tokio::time::timeout(duration, future).await",
    "B": "future.timeout(duration)",
    "C": "tokio::sleep(duration).await",
    "D": "select! with sleep is the only way"
   },
   "correct": "A",
   "explanation": "tokio::time::timeout(duration, future) runs the future and returns Ok(result) if it completes in time, or Err(Elapsed) if it times out. The future is cancelled on timeout. Clean and idiomatic.",
   "part": 8
  },
  {
   "id": 793,
   "question": "What is graceful shutdown?",
   "options": {
    "A": "Killing the process immediately",
    "B": "Stopping acceptance of new work, finishing in-flight work, then exiting",
    "C": "Restarting the server",
    "D": "Closing all connections immediately"
   },
   "correct": "B",
   "explanation": "Graceful shutdown: stop accepting new connections/requests, let current work finish (or wait with a timeout), release resources, then exit. Ensures no in-flight requests are cut off. Often uses signals (SIGTERM) and cancellation tokens.",
   "part": 8
  },
  {
   "id": 794,
   "question": "How might you implement graceful shutdown with Tokio?",
   "options": {
    "A": "Use tokio::signal::ctrl_c() to listen for SIGINT, then set a cancellation token or close a channel that tasks await",
    "B": "Call std::process::exit",
    "C": "Use spawn_blocking",
    "D": "There is no way"
   },
   "correct": "A",
   "explanation": "Listen for ctrl_c() (or other signals). When received, set a CancellationToken or close a shutdown channel. Tasks that await this will wake up and exit. Optionally wait for them with a timeout, then exit.",
   "part": 8
  },
  {
   "id": 795,
   "question": "What does `tokio::time::interval` produce?",
   "options": {
    "A": "A one-shot delay",
    "B": "A stream that yields at fixed intervals (first tick immediate, then every period)",
    "C": "A timeout",
    "D": "A timer"
   },
   "correct": "B",
   "explanation": "interval(period) creates an Interval. tick().await yields immediately the first time, then every period. Used for periodic tasks (heartbeats, cleanup). Missed ticks can be skipped or batched depending on configuration.",
   "part": 8
  },
  {
   "id": 796,
   "question": "Why add jitter to retry backoff?",
   "options": {
    "A": "To make it faster",
    "B": "To avoid thundering herd—many clients retrying at the same time",
    "C": "To reduce memory",
    "D": "To improve security"
   },
   "correct": "B",
   "explanation": "Without jitter, many clients retry at the same time (e.g., all at 1s, 2s, 4s). This can overwhelm a recovering service. Jitter randomizes the delay so retries are spread out.",
   "part": 8
  },
  {
   "id": 797,
   "question": "What is a common pattern for a connection pool's `get()` method?",
   "options": {
    "A": "Always create a new connection",
    "B": "Try to get an idle connection from the pool; if none, create one (or wait); return the connection; on drop, return it to the pool",
    "C": "Use a Mutex only",
    "D": "Use a broadcast channel"
   },
   "correct": "B",
   "explanation": "get() checks for an idle connection. If available, return it. If not, create a new one (up to max) or wait. The returned connection often uses a guard that, when dropped, returns the connection to the pool. Semaphore can limit pool size.",
   "part": 8
  },
  {
   "id": 798,
   "question": "What does `tokio::join!` return when all branches complete successfully?",
   "options": {
    "A": "Vec of results",
    "B": "A tuple of the outputs, one per branch",
    "C": "The first result",
    "D": "()"
   },
   "correct": "B",
   "explanation": "join!(a, b, c) returns (result_a, result_b, result_c) when all complete. Each result is the output of that future. Order matches the order of the branches.",
   "part": 8
  },
  {
   "id": 799,
   "question": "When using `timeout()` with a database query, what happens to the query on timeout?",
   "options": {
    "A": "The query completes in the background",
    "B": "The future is dropped; the query may still run on the server, but the client stops waiting",
    "C": "The database cancels the query",
    "D": "The connection is closed"
   },
   "correct": "B",
   "explanation": "timeout drops the future when it fires. The future's Drop runs. The underlying operation (e.g., TCP request) may still be in flight—the server might still execute the query. The client just stops waiting. True cancellation requires protocol support (e.g., cancel message).",
   "part": 8
  },
  {
   "id": 800,
   "question": "What does `tokio::time::Instant::now()` plus `Duration` give you when used with `sleep_until`?",
   "options": {
    "A": "A future that sleeps until an absolute instant in time",
    "B": "A relative delay",
    "C": "An interval",
    "D": "A timeout"
   },
   "correct": "A",
   "explanation": "sleep_until(instant) sleeps until that absolute Instant. Instant::now() + duration gives a future instant. Useful when you need to sleep until a specific wall-clock time (e.g., next midnight) rather than a relative duration. sleep(duration) is relative; sleep_until is absolute.",
   "part": 8
  },
  {
   "id": 801,
   "question": "What fragment specifier matches an expression like `1 + 2` or `foo()`?",
   "options": {
    "A": "expr",
    "B": "ty",
    "C": "ident",
    "D": "stmt"
   },
   "correct": "A",
   "explanation": "The `expr` fragment specifier matches Rust expressions: literals, function calls, binary ops, blocks, etc. `ty` matches types; `ident` matches identifiers; `stmt` matches statements.",
   "part": 9
  },
  {
   "id": 802,
   "question": "In `macro_rules! foo { ($x:expr) => { $x }; }`, what does `$x:expr` mean?",
   "options": {
    "A": "x is a variable that must be an expression; expr is the fragment specifier",
    "B": "x is a type named expr",
    "C": "expr is a metavariable",
    "D": "x and expr are both identifiers"
   },
   "correct": "A",
   "explanation": "In macro patterns, `$name:specifier` binds input to `$name`; the specifier (expr, ty, ident, etc.) constrains what the macro accepts. `expr` means the match must be a valid expression.",
   "part": 9
  },
  {
   "id": 803,
   "question": "What does the `tt` (token tree) fragment specifier match?",
   "options": {
    "A": "Only identifiers",
    "B": "Any single token or delimited token tree (e.g., `(a + b)` or `foo`)",
    "C": "Only type expressions",
    "D": "Only statements"
   },
   "correct": "B",
   "explanation": "`tt` is the most general fragment—it matches a single token or a balanced delimited group `(...)`, `{...}`, `[...]`. Used in TT munchers and when you need maximum flexibility.",
   "part": 9
  },
  {
   "id": 804,
   "question": "What does this macro produce when invoked as `repeat!(3, x + 1)`?\n\n```rust\nmacro_rules! repeat {\n    ($n:expr, $e:expr) => { (0..$n).map(|_| $e).collect::<Vec<_>>() };\n}\n```",
   "options": {
    "A": "[1, 1, 1]",
    "B": "[1, 2, 3]",
    "C": "Compilation error",
    "D": "[x+1, x+1, x+1]"
   },
   "correct": "A",
   "explanation": "The macro expands to (0..3).map(|_| x+1).collect::<Vec<_>>(). For each of 0,1,2, it evaluates x+1. If x is in scope and e.g. 0, we get [1,1,1]. The key is $e is repeated and evaluated each time.",
   "part": 9
  },
  {
   "id": 805,
   "question": "Which repetition operator means 'one or more' in macro_rules!?",
   "options": {
    "A": "*",
    "B": "+",
    "C": "?",
    "D": "Rust macros don't support 'one or more'"
   },
   "correct": "B",
   "explanation": "In macro repetitions: `*` = zero or more, `+` = one or more, `?` is not a repetition operator in macro_rules (it's in regex). So `+` is correct for one or more.",
   "part": 9
  },
  {
   "id": 806,
   "question": "What fragment specifier would you use to match a pattern like `Some(x)` or `Foo { a, b }`?",
   "options": {
    "A": "expr",
    "B": "pat",
    "C": "tt",
    "D": "ident"
   },
   "correct": "B",
   "explanation": "`pat` matches Rust patterns: identifiers, struct patterns, tuple patterns, `Some(x)`, `_`, etc. Used in match arms and pattern contexts.",
   "part": 9
  },
  {
   "id": 807,
   "question": "In `macro_rules! m { ($($x:expr),*) => { ... }; }`, what does `$($x:expr),*` mean?",
   "options": {
    "A": "Exactly one expression",
    "B": "Zero or more expressions separated by commas",
    "C": "One or more expressions",
    "D": "A tuple of expressions"
   },
   "correct": "B",
   "explanation": "`$(...),*` is a repetition: `$x:expr` matches an expression, `,` is the separator, `*` means zero or more. So we match a comma-separated list of expressions.",
   "part": 9
  },
  {
   "id": 808,
   "question": "What does `block` fragment specifier match?",
   "options": {
    "A": "A `{ ... }` block (block expression)",
    "B": "Any statement",
    "C": "A function body",
    "D": "A module"
   },
   "correct": "A",
   "explanation": "`block` matches block expressions: `{ stmt; stmt; expr }`. It's more specific than `expr` for blocks. `stmt` matches statements (including trailing semicolons).",
   "part": 9
  },
  {
   "id": 809,
   "question": "Why does `macro_rules! bad { ($e:expr) => { let x = $e; }; }` cause issues when used twice in the same scope?",
   "options": {
    "A": "Macros cannot contain let bindings",
    "B": "Each expansion introduces `x`, causing a duplicate definition",
    "C": "expr cannot be used in let",
    "D": "Macros are hygienic so it would work"
   },
   "correct": "B",
   "explanation": "Declarative macros have hygiene for identifiers in the *output*, but `x` here is a literal in the output—not a macro variable. So both expansions emit `let x = ...`, causing a duplicate definition error.",
   "part": 9
  },
  {
   "id": 810,
   "question": "What does `ident` fragment specifier match?",
   "options": {
    "A": "Any token",
    "B": "A Rust identifier (variable/type name, keyword)",
    "C": "An expression",
    "D": "A path"
   },
   "correct": "B",
   "explanation": "`ident` matches identifiers: `foo`, `Bar`, `self`, and keywords. It does not match multi-token paths like `std::vec::Vec` (use `path` for that in some contexts).",
   "part": 9
  },
  {
   "id": 811,
   "question": "What is a 'TT muncher' in Rust macros?",
   "options": {
    "A": "A macro that recursively processes token trees one at a time",
    "B": "A macro that consumes types",
    "C": "A procedural macro",
    "D": "A macro that uses only tt specifiers"
   },
   "correct": "A",
   "explanation": "A TT muncher is a recursive macro that matches `$first:tt $rest:tt*`, processes `$first`, and recursively invokes itself on `$rest`. Used to parse variable-length input without fixed patterns.",
   "part": 9
  },
  {
   "id": 812,
   "question": "What does `$crate` refer to in a macro?",
   "options": {
    "A": "The standard library",
    "B": "The crate where the macro was defined (for hygiene when macro is used from other crates)",
    "C": "The current module",
    "D": "The crate that invokes the macro"
   },
   "correct": "B",
   "explanation": "`$crate` expands to the crate path where the macro is defined. When your macro is used from another crate, `$crate::foo` correctly refers to your crate's `foo`, not the caller's. Essential for macro hygiene across crates.",
   "part": 9
  },
  {
   "id": 813,
   "question": "In macro hygiene, what is 'hygienic'?",
   "options": {
    "A": "All identifiers",
    "B": "Local variables and labels introduced by the macro; not paths or type names",
    "C": "Only the macro's input",
    "D": "Nothing; declarative macros have no hygiene"
   },
   "correct": "B",
   "explanation": "Rust's macro hygiene means identifiers *introduced* by the macro (e.g., a temp variable) don't conflict with caller's names. But paths and types from the macro expansion are resolved in the caller's scope. It's partial hygiene.",
   "part": 9
  },
  {
   "id": 814,
   "question": "What does this recursive macro do when given `sum!(1, 2, 3)`?\n\n```rust\nmacro_rules! sum {\n    ($first:expr) => { $first };\n    ($first:expr, $($rest:expr),*) => { $first + sum!($($rest),*) };\n}\n```",
   "options": {
    "A": "6",
    "B": "Compilation error: recursive macro",
    "C": "1 + 2 + 3 (expands to that expression)",
    "D": "Panics at compile time"
   },
   "correct": "C",
   "explanation": "The macro recursively expands: sum!(1,2,3) -> 1 + sum!(2,3) -> 1 + 2 + sum!(3) -> 1 + 2 + 3. So it produces the expression 1+2+3, which evaluates to 6. The expansion works; recursion terminates on the base case.",
   "part": 9
  },
  {
   "id": 815,
   "question": "Why might you use `$($x:expr),+` instead of `$($x:expr),*`?",
   "options": {
    "A": "+ is faster than *",
    "B": "+ requires at least one element; * allows empty",
    "C": "They are identical",
    "D": "* is deprecated"
   },
   "correct": "B",
   "explanation": "`*` = zero or more; `+` = one or more. Use `+` when the macro needs at least one item (e.g., building a non-empty list). Use `*` when empty input is valid.",
   "part": 9
  },
  {
   "id": 816,
   "question": "What is the purpose of `#[macro_export]`?",
   "options": {
    "A": "Makes the macro public to other crates",
    "B": "Exports the macro at the crate root (so users write `crate::foo!` not `crate::mymod::foo!`)",
    "C": "Marks the macro as stable",
    "D": "Required for all macros"
   },
   "correct": "B",
   "explanation": "`#[macro_export]` puts the macro at the crate root. Without it, `use mycrate::mymod::foo` is needed. With it, `use mycrate::foo` works. It also affects `$crate` resolution.",
   "part": 9
  },
  {
   "id": 817,
   "question": "In a macro, how do you use a repetition variable in the output?",
   "options": {
    "A": "$($x)* in the output repeats the expansion for each $x",
    "B": "You cannot",
    "C": "Only with procedural macros",
    "D": "Using $$ to escape"
   },
   "correct": "A",
   "explanation": "In the transcriber, `$($x)*` (or `$($x),*` with separator) repeats the expansion for each captured `$x`. The repetition in the output must match the repetition in the pattern (same count).",
   "part": 9
  },
  {
   "id": 818,
   "question": "What does `path` fragment specifier match?",
   "options": {
    "A": "File system paths",
    "B": "Rust path expressions (e.g., `std::vec::Vec`, `foo::bar`)",
    "C": "Only single identifiers",
    "D": "URL paths"
   },
   "correct": "B",
   "explanation": "`path` matches Rust paths: `std::vec::Vec`, `super::foo`, `crate::mymod::Bar`. Used when the macro needs to accept type or value paths.",
   "part": 9
  },
  {
   "id": 819,
   "question": "What happens if a macro has multiple matching arms and the input matches more than one?",
   "options": {
    "A": "Compilation error: ambiguous macro",
    "B": "The first matching arm wins",
    "C": "The most specific arm wins",
    "D": "Random selection"
   },
   "correct": "B",
   "explanation": "Macro arms are tried in order. The first pattern that matches wins. Order matters—put more specific patterns before more general ones (e.g., `$($x:expr),+` before `$($x:expr),*`).",
   "part": 9
  },
  {
   "id": 820,
   "question": "What does `stmt` fragment specifier match?",
   "options": {
    "A": "Only `let` statements",
    "B": "A statement (e.g., `let x = 1;`, `foo();`)",
    "C": "Any expression",
    "D": "A block"
   },
   "correct": "B",
   "explanation": "`stmt` matches statements: `let x = 1;`, `x += 1;`, `return;`, etc. Statements typically end with `;`. Differs from `expr` which doesn't require the semicolon in the same way.",
   "part": 9
  },
  {
   "id": 821,
   "question": "What are the three kinds of procedural macros?",
   "options": {
    "A": "macro_rules!, proc_macro, proc_macro2",
    "B": "Derive macros, attribute macros, function-like macros",
    "C": "Declarative, imperative, hybrid",
    "D": "syn, quote, proc-macro"
   },
   "correct": "B",
   "explanation": "Procedural macros: (1) Derive macros `#[derive(MyTrait)]`, (2) Attribute macros `#[my_attr]`, (3) Function-like macros `my_macro!(...)`. All are implemented in a separate crate with `proc-macro = true`.",
   "part": 9
  },
  {
   "id": 822,
   "question": "What crate is commonly used to parse Rust code in procedural macros?",
   "options": {
    "A": "regex",
    "B": "syn",
    "C": "parse",
    "D": "ast"
   },
   "correct": "B",
   "explanation": "`syn` parses Rust code into an AST. It handles the full Rust grammar. Procedural macros receive TokenStream and use syn to parse it into structured types (e.g., DeriveInput, ItemFn).",
   "part": 9
  },
  {
   "id": 823,
   "question": "What does a derive macro receive as input?",
   "options": {
    "A": "The struct/enum definition as a TokenStream",
    "B": "The struct name only",
    "C": "A string",
    "D": "The trait name"
   },
   "correct": "A",
   "explanation": "A derive macro receives a TokenStream of the item the attribute is applied to (e.g., the full `struct Foo { x: i32 }`). It parses this with syn::parse::<DeriveInput> and generates code to implement the trait.",
   "part": 9
  },
  {
   "id": 824,
   "question": "What is the signature of a function-like procedural macro?",
   "options": {
    "A": "fn my_macro(input: TokenStream) -> TokenStream",
    "B": "fn my_macro(input: &str) -> String",
    "C": "fn my_macro(input: AST) -> AST",
    "D": "macro_rules! my_macro"
   },
   "correct": "A",
   "explanation": "Function-like proc macros take `TokenStream` (the tokens inside the macro invocation) and return `TokenStream` (the generated code). They're declared with `#[proc_macro]`.",
   "part": 9
  },
  {
   "id": 825,
   "question": "What does an attribute macro receive?",
   "options": {
    "A": "Only the attribute arguments",
    "B": "The attribute arguments and the item the attribute is applied to",
    "C": "The item only",
    "D": "A string of the whole line"
   },
   "correct": "B",
   "explanation": "Attribute macros receive two TokenStreams: (1) the attribute's arguments (e.g., `#[my_attr(foo, bar)]` -> `foo, bar`), (2) the item (struct, fn, etc.) the attribute is on.",
   "part": 9
  },
  {
   "id": 826,
   "question": "Why must procedural macros be in a separate crate with `proc-macro = true`?",
   "options": {
    "A": "They run at compile time and cannot link with runtime crates",
    "B": "It's just a convention",
    "C": "They need special compiler support",
    "D": "To avoid name conflicts"
   },
   "correct": "A",
   "explanation": "Proc macros are compiled as a separate compiler plugin and run during compilation. They cannot share the same crate as normal code that gets linked into the final binary—the compiler loads the proc-macro crate differently.",
   "part": 9
  },
  {
   "id": 827,
   "question": "What does the `quote!` macro do?",
   "options": {
    "A": "Parses Rust code",
    "B": "Generates TokenStream from a template with interpolations like #var",
    "C": "Escapes strings",
    "D": "Imports the quote crate"
   },
   "correct": "B",
   "explanation": "`quote!` from the quote crate lets you write Rust-like code as a template. `#var` interpolates variables. It produces a `proc_macro2::TokenStream` that you convert to `proc_macro::TokenStream` for return.",
   "part": 9
  },
  {
   "id": 828,
   "question": "In `quote! { impl #trait_name for #name { ... } }`, what does `#name` do?",
   "options": {
    "A": "Comments out name",
    "B": "Interpolates the variable `name` into the output",
    "C": "Creates a new variable",
    "D": "References a type"
   },
   "correct": "B",
   "explanation": "In quote!, `#var` interpolates the value of `var` into the generated code. `#name` would insert whatever `name` is (e.g., an Ident for the type name) at that position.",
   "part": 9
  },
  {
   "id": 829,
   "question": "What is the difference between `proc_macro` and `proc_macro2`?",
   "options": {
    "A": "proc_macro2 is for procedural macros only",
    "B": "proc_macro is the compiler interface; proc_macro2 works in proc-macro crates and supports Span, can be used in tests",
    "C": "They are identical",
    "D": "proc_macro2 is deprecated"
   },
   "correct": "B",
   "explanation": "proc_macro is the compiler-provided API (TokenStream, Span). proc_macro2 is a wrapper that works in proc-macro crates, preserves span information, and can be used in tests (unlike proc_macro which only works when the compiler invokes the macro).",
   "part": 9
  },
  {
   "id": 830,
   "question": "When would you use a derive macro vs an attribute macro?",
   "options": {
    "A": "Derive for implementing traits on types; attribute for custom annotations that transform items",
    "B": "They are interchangeable",
    "C": "Derive only for structs; attribute for functions",
    "D": "Attribute is for #[derive] only"
   },
   "correct": "A",
   "explanation": "Derive macros implement a trait (e.g., `#[derive(Serialize)]`). Attribute macros are more general: they take an item and can transform it arbitrarily (e.g., `#[tokio::main]` transforms a fn).",
   "part": 9
  },
  {
   "id": 831,
   "question": "What does `syn::parse::<DeriveInput>(input)` return?",
   "options": {
    "A": "TokenStream",
    "B": "Result<DeriveInput, syn::Error>",
    "C": "DeriveInput",
    "D": "Option<DeriveInput>"
   },
   "correct": "B",
   "explanation": "syn::parse returns `Result<T, syn::Error>`. Parsing can fail (invalid syntax). You typically `.unwrap()` or `.expect()` in proc macros, or use `syn::parse2` for proc_macro2::TokenStream.",
   "part": 9
  },
  {
   "id": 832,
   "question": "How do you iterate over struct fields in a DeriveInput?",
   "options": {
    "A": "input.fields",
    "B": "Match input.data; for structs, use Data::Struct(s) then s.fields",
    "C": "input.attrs",
    "D": "DeriveInput has no fields"
   },
   "correct": "B",
   "explanation": "DeriveInput has `ident`, `data`, `attrs`, etc. For structs, `data` is `Data::Struct(data_struct)` and `data_struct.fields` gives the fields. For enums, it's `Data::Enum(data_enum)` with variants.",
   "part": 9
  },
  {
   "id": 833,
   "question": "In quote!, how do you repeat a block for each element of a Vec?",
   "options": {
    "A": "#vec.iter()",
    "B": "#(#body)* where body uses the iterator",
    "C": "for loop",
    "D": "#vec"
   },
   "correct": "B",
   "explanation": "quote! supports repetition: `#(#body)*` where `body` is something that implements IntoIterator of TokenStreams. E.g., `#(impl Debug for #names { })*` for a list of names.",
   "part": 9
  },
  {
   "id": 834,
   "question": "What does `TokenStream::from_iter` do?",
   "options": {
    "A": "Parses a string",
    "B": "Combines multiple TokenStreams into one",
    "C": "Splits a TokenStream",
    "D": "Converts to String"
   },
   "correct": "B",
   "explanation": "`TokenStream::from_iter(iter)` takes an iterator of TokenStream (or TokenTree) and concatenates them into a single TokenStream. Useful when building output from multiple quote! invocations.",
   "part": 9
  },
  {
   "id": 835,
   "question": "How do you convert proc_macro2::TokenStream to proc_macro::TokenStream?",
   "options": {
    "A": "TokenStream::from(proc_macro2_stream)",
    "B": ".into()",
    "C": "Both A and B work",
    "D": "You cannot; they are incompatible"
   },
   "correct": "C",
   "explanation": "proc_macro2::TokenStream implements `Into<proc_macro::TokenStream>`. So both `TokenStream::from(t2)` and `t2.into()` work. The proc_macro crate re-exports TokenStream from the compiler.",
   "part": 9
  },
  {
   "id": 836,
   "question": "What does `syn::parse_str::<syn::File>(\"fn foo() {}\")` do?",
   "options": {
    "A": "Parses a string into a full file AST",
    "B": "Compiles the code",
    "C": "Runs the code",
    "D": "Validates syntax only"
   },
   "correct": "A",
   "explanation": "parse_str parses a &str into a syn type. `syn::File` represents a full Rust file (items). Useful for testing proc macros or parsing Rust code from strings.",
   "part": 9
  },
  {
   "id": 837,
   "question": "In quote! `#(#field: #ty,)*`, what does the trailing `,` in `#ty,` do?",
   "options": {
    "A": "Adds a comma after each interpolated ty",
    "B": "Syntax error",
    "C": "Removes commas",
    "D": "Marks the end of repetition"
   },
   "correct": "A",
   "explanation": "In `#(#field: #ty,)*`, the `,` is part of the repeated template. So output is `field1: ty1, field2: ty2,`. The separator goes after each repetition. Use `#(#x),*` for comma-separated list.",
   "part": 9
  },
  {
   "id": 838,
   "question": "What is `Span::call_site()`?",
   "options": {
    "A": "The span of the macro definition",
    "B": "The span of the macro invocation (where the macro was called)",
    "C": "A null span",
    "D": "The span of the generated code"
   },
   "correct": "B",
   "explanation": "Span::call_site() gives the location of the macro invocation. When you create new identifiers in quote!, you often use `Span::call_site()` so errors point to the call site. `span_resolved_at` can use a different span.",
   "part": 9
  },
  {
   "id": 839,
   "question": "Why might you use `quote_spanned!` instead of `quote!`?",
   "options": {
    "A": "It's faster",
    "B": "To attach specific span information to generated tokens for better error messages",
    "C": "For async macros",
    "D": "quote! doesn't support spans"
   },
   "correct": "B",
   "explanation": "quote_spanned!(span => ...) attaches the given span to all tokens generated in the block. When the compiler reports an error in the generated code, it will point to that span (e.g., a field) instead of the whole macro expansion.",
   "part": 9
  },
  {
   "id": 840,
   "question": "What does `syn::Ident::new(name, span)` create?",
   "options": {
    "A": "A new identifier with the given string and span",
    "B": "A new struct",
    "C": "A parsed identifier",
    "D": "A type alias"
   },
   "correct": "A",
   "explanation": "Ident::new creates an identifier for use in generated code. The span is used for error reporting. Useful when you need to create an Ident from a string (e.g., a prefixed field name) in proc macro output.",
   "part": 9
  },
  {
   "id": 841,
   "question": "What can you do inside an `unsafe` block that you cannot do in safe Rust?",
   "options": {
    "A": "Dereference raw pointers, call unsafe functions, access mutable statics, implement unsafe traits",
    "B": "Use references",
    "C": "Define functions",
    "D": "Use loops"
   },
   "correct": "A",
   "explanation": "Unsafe blocks allow: dereferencing raw pointers, calling unsafe functions, accessing/modifying mutable statics, and implementing unsafe traits. The programmer guarantees safety invariants.",
   "part": 9
  },
  {
   "id": 842,
   "question": "What is the difference between `*const T` and `*mut T`?",
   "options": {
    "A": "They are identical",
    "B": "*const T is read-only; *mut T allows writes (but both are unsafe to dereference)",
    "C": "*const is for shared refs; *mut is for Box",
    "D": "*mut is faster"
   },
   "correct": "B",
   "explanation": "*const T and *mut T are raw pointers. *const suggests read-only (no write through it); *mut allows writes. Both ignore borrow checker. The distinction helps document intent; the compiler doesn't enforce it at runtime.",
   "part": 9
  },
  {
   "id": 843,
   "question": "Can you create a raw pointer from a reference in safe Rust?",
   "options": {
    "A": "No; it requires unsafe",
    "B": "Yes; `&x as *const T` and `&mut x as *mut T` are safe",
    "C": "Only for *const",
    "D": "Only with transmute"
   },
   "correct": "B",
   "explanation": "Creating a raw pointer from a reference is safe: `&x as *const T`, `&mut x as *mut T`. The unsafe part is dereferencing. Creating the pointer doesn't violate memory safety by itself.",
   "part": 9
  },
  {
   "id": 844,
   "question": "What does `unsafe fn` mean?",
   "options": {
    "A": "The function cannot be called",
    "B": "The function body is implicitly wrapped in unsafe; callers must use unsafe to call it",
    "C": "The function may panic",
    "D": "The function is deprecated"
   },
   "correct": "B",
   "explanation": "unsafe fn means calling it requires an unsafe block. The function can perform unsafe operations. The caller takes responsibility that the preconditions hold. The body is an implicit unsafe block.",
   "part": 9
  },
  {
   "id": 845,
   "question": "What is an unsafe trait?",
   "options": {
    "A": "A trait that cannot be used",
    "B": "A trait whose impl must be marked unsafe (implementer guarantees invariants)",
    "C": "A trait with unsafe methods only",
    "D": "A trait in an unsafe block"
   },
   "correct": "B",
   "explanation": "Unsafe traits require `unsafe impl`—the implementer guarantees certain invariants (e.g., Send, Sync). The compiler can't verify these; the programmer asserts them. Used for Send, Sync, and other trust boundaries.",
   "part": 9
  },
  {
   "id": 846,
   "question": "When is it sound to dereference a raw pointer?",
   "options": {
    "A": "Always",
    "B": "When the pointer is non-null, properly aligned, and points to valid initialized memory",
    "C": "Only for *const",
    "D": "When it was created from a reference"
   },
   "correct": "B",
   "explanation": "Dereferencing is sound only when: (1) pointer is non-null, (2) properly aligned for T, (3) points to valid memory (initialized, not freed). The programmer must uphold these—the compiler doesn't check.",
   "part": 9
  },
  {
   "id": 847,
   "question": "What does `addr_of!` do?",
   "options": {
    "A": "Gets the address of a variable",
    "B": "Creates a raw pointer without creating a reference first (avoids UB from uninitialized)",
    "C": "Converts to usize",
    "D": "Allocates memory"
   },
   "correct": "B",
   "explanation": "addr_of!(expr) creates a *const _ to the place of expr without creating a reference. Useful when expr might be uninitialized—creating &expr would be UB, but addr_of! is safe. Similarly addr_of_mut!.",
   "part": 9
  },
  {
   "id": 848,
   "question": "Can you implement Send for a type containing raw pointers?",
   "options": {
    "A": "No; raw pointers are !Send",
    "B": "Yes, but it requires unsafe impl (you guarantee it's safe to send)",
    "C": "Only if the pointer is *const",
    "D": "Raw pointers are always Send"
   },
   "correct": "B",
   "explanation": "Raw pointers don't implement Send/Sync by default (they're !Send !Sync). If you have a type with raw pointers that is actually safe to send across threads, you must `unsafe impl Send` and uphold the invariant.",
   "part": 9
  },
  {
   "id": 849,
   "question": "What is the purpose of `unsafe` blocks?",
   "options": {
    "A": "To make code faster",
    "B": "To delineate and minimize the scope of unsafe code; everything outside is guaranteed safe",
    "C": "To disable the borrow checker",
    "D": "To allow panics"
   },
   "correct": "B",
   "explanation": "Unsafe blocks create a boundary: inside, you can do unsafe things; outside, the rest of the code is safe. Minimizing the unsafe surface makes auditing easier and reduces risk of mistakes.",
   "part": 9
  },
  {
   "id": 850,
   "question": "What does `core::ptr::null()` return?",
   "options": {
    "A": "A zero-sized type",
    "B": "A null raw pointer (*const T for type T)",
    "C": "Option::None",
    "D": "Panics"
   },
   "correct": "B",
   "explanation": "ptr::null() and ptr::null_mut() return null raw pointers. They're const fn. Dereferencing a null pointer is UB. Used when you need to represent 'no value' in FFI or low-level code.",
   "part": 9
  },
  {
   "id": 851,
   "question": "What does `std::mem::transmute<A, B>(x)` do?",
   "options": {
    "A": "Converts x from type A to B with a runtime check",
    "B": "Reinterprets the bits of x as type B (no conversion; both must be same size)",
    "C": "Copies x",
    "D": "Creates a reference"
   },
   "correct": "B",
   "explanation": "transmute reinterprets the bits of a value as another type. Size of A and B must be equal. No runtime cost. Extremely dangerous—can easily cause UB (e.g., transmute::<&T, &U> when T != U breaks aliasing).",
   "part": 9
  },
  {
   "id": 852,
   "question": "What is 'type punning'?",
   "options": {
    "A": "Using generics",
    "B": "Interpreting the same memory as different types (e.g., f32 bits as u32)",
    "C": "Type aliases",
    "D": "Trait objects"
   },
   "correct": "B",
   "explanation": "Type punning is treating the same memory as different types. In Rust, this typically requires unsafe (transmute, union, or raw pointers). Must respect alignment and validity. Can be UB if done wrong.",
   "part": 9
  },
  {
   "id": 853,
   "question": "Is pointer arithmetic on raw pointers safe Rust?",
   "options": {
    "A": "Yes",
    "B": "No; it requires unsafe (offset, add, sub, etc.)",
    "C": "Only for *const",
    "D": "Only within array bounds"
   },
   "correct": "B",
   "explanation": "Methods like ptr.add(1), ptr.offset(1), ptr.sub(1) are unsafe—they can create invalid pointers. You must ensure the result is within bounds of the same allocation. Safe Rust doesn't allow raw pointer arithmetic.",
   "part": 9
  },
  {
   "id": 854,
   "question": "What does `ptr.wrapping_add(n)` do vs `ptr.add(n)`?",
   "options": {
    "A": "They are identical",
    "B": "wrapping_add wraps overflow; add is unsafe and assumes no overflow",
    "C": "add is faster",
    "D": "wrapping_add is deprecated"
   },
   "correct": "B",
   "explanation": "ptr.add(n) is unsafe—overflow is UB. ptr.wrapping_add(n) wraps on overflow (e.g., for circular buffers). Use wrapping when you intentionally want wrap-around; add when you've verified bounds.",
   "part": 9
  },
  {
   "id": 855,
   "question": "When is `transmute_copy` useful?",
   "options": {
    "A": "When types have different sizes",
    "B": "When you want to copy bytes from a smaller type to a larger (reads extra bytes—dangerous)",
    "C": "For Copy types only",
    "D": "Never; use transmute"
   },
   "correct": "B",
   "explanation": "transmute_copy<T, U>(src: &T) reads size_of::<U>() bytes from src and reinterprets as U. If U is larger than T, it reads past the end—UB. Rarely correct; transmute is usually preferred when sizes match.",
   "part": 9
  },
  {
   "id": 856,
   "question": "What does `read_unaligned` do?",
   "options": {
    "A": "Reads from unaligned memory (e.g., ptr to byte buffer); avoids alignment UB",
    "B": "Reads faster",
    "C": "Reads from network",
    "D": "Skips alignment"
   },
   "correct": "A",
   "explanation": "read_unaligned(ptr) reads a T from ptr without requiring alignment. Normal dereference or read() requires proper alignment. When parsing bytes from a buffer, the offset might be unaligned—read_unaligned is safe for that.",
   "part": 9
  },
  {
   "id": 857,
   "question": "What is the purpose of `write_volatile`?",
   "options": {
    "A": "Faster writes",
    "B": "Writes to memory-mapped I/O; prevents compiler from optimizing away the write",
    "C": "Atomic writes",
    "D": "Writes to disk"
   },
   "correct": "B",
   "explanation": "write_volatile(ptr, value) writes to memory and prevents the compiler from optimizing it away (e.g., 'this write has no effect'). Essential for memory-mapped hardware where each write has side effects.",
   "part": 9
  },
  {
   "id": 858,
   "question": "Can you create a &T from a *const T in safe Rust?",
   "options": {
    "A": "Yes; `&*ptr`",
    "B": "No; dereferencing a raw pointer is unsafe",
    "C": "Only if ptr is null",
    "D": "Yes with as_ref()"
   },
   "correct": "B",
   "explanation": "`&*ptr` dereferences the raw pointer, which is unsafe. You must use unsafe { &*ptr }. The resulting reference must satisfy the usual validity (non-null, aligned, valid). There's no safe way to go from raw pointer to reference.",
   "part": 9
  },
  {
   "id": 859,
   "question": "What does `ptr::read(ptr)` do?",
   "options": {
    "A": "Reads and discards",
    "B": "Moves the value from *ptr (ptr must be valid; leaves memory uninitialized)",
    "C": "Copies the value",
    "D": "Checks if ptr is null"
   },
   "correct": "B",
   "explanation": "ptr::read(ptr) reads the value at ptr and returns it. The memory at ptr becomes uninitialized (not dropped). Used when you're manually managing memory—e.g., moving out of a buffer. Unsafe.",
   "part": 9
  },
  {
   "id": 860,
   "question": "In `unsafe { *ptr }`, what must you guarantee?",
   "options": {
    "A": "ptr is not null",
    "B": "ptr is valid, dereferenceable, properly aligned",
    "C": "ptr was created from a reference",
    "D": "Nothing; unsafe allows anything"
   },
   "correct": "B",
   "explanation": "Dereferencing requires: non-null, aligned, valid (initialized, within allocation). 'Unsafe' doesn't mean 'no rules'—it means the compiler trusts you to uphold the rules. Violating them is UB.",
   "part": 9
  },
  {
   "id": 861,
   "question": "What does `extern \"C\"` do in a function declaration?",
   "options": {
    "A": "Makes the function callable from C",
    "B": "Specifies the C calling convention (how args are passed/returned)",
    "C": "Links to a C library",
    "D": "Disables name mangling"
   },
   "correct": "B",
   "explanation": "extern \"C\" specifies the C ABI (calling convention). For calling C from Rust: `extern \"C\" { fn foo(x: c_int); }`. For exposing Rust to C: `extern \"C\" fn bar() {}`. The C ABI is the common lingua franca for FFI.",
   "part": 9
  },
  {
   "id": 862,
   "question": "What is `#[link(name = \"foo\")]` used for?",
   "options": {
    "A": "Importing a module",
    "B": "Linking against a native library (e.g., libfoo.so)",
    "C": "Linking to a Rust crate",
    "D": "Creating a link"
   },
   "correct": "B",
   "explanation": "#[link(name = \"foo\")] tells the linker to link against the native library libfoo. Used with extern blocks. The library must be found at link time (e.g., in system paths or via cargo build config).",
   "part": 9
  },
  {
   "id": 863,
   "question": "Why use `CString` when passing strings to C?",
   "options": {
    "A": "CString is faster",
    "B": "C expects null-terminated strings; CString ensures null termination and no interior nuls",
    "C": "CString is required by the C standard",
    "D": "Rust strings don't work"
   },
   "correct": "B",
   "explanation": "C strings are null-terminated and have no interior nuls. Rust's str/String can have nuls. CString::new(s) checks for interior nuls and adds the terminator. CStr is for reading C strings (borrowed).",
   "part": 9
  },
  {
   "id": 864,
   "question": "What does `c_void` represent?",
   "options": {
    "A": "Rust's () type",
    "B": "C's void type (opaque pointer, like void*)",
    "C": "A null pointer",
    "D": "Uninitialized memory"
   },
   "correct": "B",
   "explanation": "c_void (from std::ffi) represents C's void—typically used for void* in C. In Rust, you'd use *mut c_void or Option<*mut c_void> for opaque C pointers. std::os::raw::c_void or core::ffi::c_void.",
   "part": 9
  },
  {
   "id": 865,
   "question": "What is the correct way to call an extern C function that might not exist at runtime?",
   "options": {
    "A": "Use Option<extern \"C\" fn(...)>",
    "B": "Use libloading or similar to dynamically load the symbol",
    "C": "Wrap in unsafe",
    "D": "C functions always exist"
   },
   "correct": "B",
   "explanation": "Statically linked extern functions must exist at link time. For optional/plugin libraries, use libloading (or similar) to load the .so/.dll at runtime and get the function pointer. Then call through the pointer.",
   "part": 9
  },
  {
   "id": 866,
   "question": "What does `CStr::from_ptr(ptr)` require?",
   "options": {
    "A": "ptr is null",
    "B": "ptr points to valid null-terminated C string (no interior nuls)",
    "C": "ptr is a Rust &str",
    "D": "ptr is aligned"
   },
   "correct": "B",
   "explanation": "CStr::from_ptr(ptr) is unsafe. It requires ptr to point to a valid null-terminated C string. It reads until the first null. If ptr is invalid or not null-terminated, UB. The resulting CStr borrows that memory.",
   "part": 9
  },
  {
   "id": 867,
   "question": "Which types in std::ffi correspond to C's int, long, and pointer?",
   "options": {
    "A": "i32, i64, *mut T",
    "B": "c_int, c_long, *mut c_void (or similar—platform-dependent)",
    "C": "int, long, ptr",
    "D": "i32, i64, usize"
   },
   "correct": "B",
   "explanation": "std::os::raw defines c_int, c_long, c_ulong, etc., which match C's types (platform-dependent). For pointers, *mut c_void or *const c_void. Rust's i32/i64 may not match C's int/long on all platforms.",
   "part": 9
  },
  {
   "id": 868,
   "question": "What can go wrong if you panic while holding a resource that C code expects to be valid?",
   "options": {
    "A": "Nothing; Rust catches panics",
    "B": "Unwinding across FFI is UB; use catch_unwind or abort",
    "C": "The C code will panic too",
    "D": "Rust prevents this"
   },
   "correct": "B",
   "explanation": "Unwinding (panic) across an extern \"C\" boundary is undefined behavior. If C calls Rust and Rust panics, you must catch_unwind at the boundary or use panic=abort. Same when Rust calls C that calls back into Rust.",
   "part": 9
  },
  {
   "id": 869,
   "question": "How do you pass a Rust callback to C?",
   "options": {
    "A": "Pass a closure directly",
    "B": "Pass a function pointer (extern \"C\" fn) and a context pointer; C calls the fn with the context",
    "C": "Use async",
    "D": "C cannot call Rust"
   },
   "correct": "B",
   "explanation": "C expects a function pointer. You define `extern \"C\" fn callback(ctx: *mut c_void, ...)` and pass it. The ctx can point to your Rust state. The callback must not panic (catch_unwind) and must use the C ABI.",
   "part": 9
  },
  {
   "id": 870,
   "question": "What does `#[repr(C)]` on a struct ensure?",
   "options": {
    "A": "The struct is Copy",
    "B": "Layout matches C struct layout (field order, alignment, padding)",
    "C": "The struct is packed",
    "D": "No padding"
   },
   "correct": "B",
   "explanation": "repr(C) gives the struct a layout compatible with C. Field order, alignment, and padding match what C would expect. Required when passing structs to/from C. repr(Rust) is the default and is unspecified.",
   "part": 9
  },
  {
   "id": 871,
   "question": "What does `#[no_mangle]` do on a function?",
   "options": {
    "A": "Prevents optimization",
    "B": "Keeps the symbol name as-is (no Rust name mangling) so C can find it",
    "C": "Makes the function public",
    "D": "Exports the function"
   },
   "correct": "B",
   "explanation": "Rust mangles symbol names. #[no_mangle] keeps the function's symbol as the bare name (e.g., my_rust_fn). C code can then link to it by name. Required for C-callable Rust functions.",
   "part": 9
  },
  {
   "id": 872,
   "question": "What tool can generate C headers from Rust code for FFI?",
   "options": {
    "A": "rustfmt",
    "B": "cbindgen",
    "C": "rustdoc",
    "D": "clippy"
   },
   "correct": "B",
   "explanation": "cbindgen parses Rust code and generates C/C++ headers. It understands #[repr(C)], extern blocks, etc. Useful so C code can include the header and call Rust. Alternatives: manual headers, bindgen for the reverse (C to Rust).",
   "part": 9
  },
  {
   "id": 873,
   "question": "When exposing a Rust function to C, what return type should you use for 'no value'?",
   "options": {
    "A": "()",
    "B": "c_void",
    "C": "Option<()>",
    "D": "C expects void; use () with extern \"C\""
   },
   "correct": "D",
   "explanation": "C's void return corresponds to Rust's (). So `extern \"C\" fn foo() -> ()` or just `extern \"C\" fn foo()`. c_void is for void* (pointers), not return type. () is the correct choice.",
   "part": 9
  },
  {
   "id": 874,
   "question": "How should you handle panics in Rust code that C might call?",
   "options": {
    "A": "Let them unwind",
    "B": "Use std::panic::catch_unwind at the boundary; return an error code to C",
    "C": "Panics cannot cross FFI",
    "D": "Use unwrap()"
   },
   "correct": "B",
   "explanation": "Unwinding across FFI is UB. At the C-callable entry point, wrap the body in catch_unwind. On panic, log/abort and return an error code to C. Never let a panic propagate across the extern boundary.",
   "part": 9
  },
  {
   "id": 875,
   "question": "What does `#[repr(transparent)]` do for FFI?",
   "options": {
    "A": "Makes the type invisible",
    "B": "Ensures a single-field newtype has the same layout as its inner type (for C compatibility)",
    "C": "Removes padding",
    "D": "Makes it Copy"
   },
   "correct": "B",
   "explanation": "repr(transparent) on a struct with one field guarantees the struct has the same layout as that field. Useful for type-safe wrappers over C types (e.g., struct Foo(c_int)) that you pass to C.",
   "part": 9
  },
  {
   "id": 876,
   "question": "Why might you use `#[no_mangle] pub extern \"C\"` instead of just `pub extern \"C\"`?",
   "options": {
    "A": "pub is required",
    "B": "no_mangle prevents name mangling; C needs the unmangled symbol",
    "C": "extern \"C\" implies no_mangle",
    "D": "For visibility"
   },
   "correct": "B",
   "explanation": "extern \"C\" only specifies the ABI. Without #[no_mangle], Rust still mangles the name. C links by symbol name, so you need no_mangle for C to find your function. Both are typically used together.",
   "part": 9
  },
  {
   "id": 877,
   "question": "What is a common pattern for returning a Rust-allocated object to C?",
   "options": {
    "A": "Return the raw struct",
    "B": "Return *mut T (opaque pointer); provide C-callable functions to operate on it; C passes the pointer back",
    "C": "Return Box",
    "D": "Use global state"
   },
   "correct": "B",
   "explanation": "C can't understand Rust's Box, Vec, etc. You allocate in Rust (Box::new), return *mut T to C. C stores the pointer and passes it back to your Rust functions. You convert back to &mut T when C calls. Rust owns the allocation; C holds an opaque handle.",
   "part": 9
  },
  {
   "id": 878,
   "question": "How do you expose a Rust `String` to C?",
   "options": {
    "A": "Pass &str directly",
    "B": "Use CString::new(s).into_raw() and return *mut c_char; document that C must call a Rust free function",
    "C": "Use as_ptr()",
    "D": "C cannot use Rust strings"
   },
   "correct": "B",
   "explanation": "C needs null-terminated *mut c_char. CString::new(s).into_raw() gives you *mut c_char. You must provide a C-callable free function that takes the pointer and drops the CString. Document the ownership transfer.",
   "part": 9
  },
  {
   "id": 879,
   "question": "What does `#[export_name = \"custom_name\"]` do?",
   "options": {
    "A": "Exports a module",
    "B": "Sets the exact symbol name for the function (alternative to no_mangle with custom name)",
    "C": "Renames the function in Rust",
    "D": "Creates an alias"
   },
   "correct": "B",
   "explanation": "export_name sets the linker symbol name. #[no_mangle] uses the Rust function name. #[export_name = \"foo\"] uses \"foo\" as the symbol. Useful when you need a specific C API name different from the Rust name.",
   "part": 9
  },
  {
   "id": 880,
   "question": "When passing a Rust Vec to C, what is a common approach?",
   "options": {
    "A": "Pass &Vec directly",
    "B": "Pass (ptr, len) as two arguments; C uses the pointer and length; Rust retains ownership",
    "C": "Convert to C array",
    "D": "Use slice"
   },
   "correct": "B",
   "explanation": "C doesn't know Vec. You pass vec.as_ptr() and vec.len() (and cap if needed). Document that C must not free the pointer and must not use it after the Rust function returns (unless you've transferred ownership). Or allocate with malloc in Rust and pass that.",
   "part": 9
  },
  {
   "id": 881,
   "question": "What is the key principle when building safe abstractions over unsafe code?",
   "options": {
    "A": "Hide all unsafe in private functions; expose only a safe API that upholds invariants",
    "B": "Use unsafe everywhere",
    "C": "Document that it's unsafe",
    "D": "Avoid raw pointers"
   },
   "correct": "A",
   "explanation": "The goal is to encapsulate unsafe in a minimal layer. The public API should be safe—callers can't cause UB. All invariants must be upheld by the implementation. This is how Vec, Rc, etc. work.",
   "part": 9
  },
  {
   "id": 882,
   "question": "When can you `unsafe impl Send` for a type?",
   "options": {
    "A": "Never",
    "B": "When it is safe to transfer the type across thread boundaries (no shared mutable state, or properly synchronized)",
    "C": "Only for Copy types",
    "D": "When it contains no references"
   },
   "correct": "B",
   "explanation": "Send means: transferring ownership to another thread is safe. If the type has interior mutability (e.g., Rc) or raw pointers to non-Send data, it might be !Send. You unsafe impl Send when you've verified it's safe.",
   "part": 9
  },
  {
   "id": 883,
   "question": "What does `Sync` mean?",
   "options": {
    "A": "The type can be sent to another thread",
    "B": "&T is Send (safe to share references across threads)",
    "C": "The type is thread-safe",
    "D": "The type uses atomics"
   },
   "correct": "B",
   "explanation": "Sync: T is Sync iff &T is Send. So sharing immutable references across threads is safe. Most types are Sync; exceptions include Rc (not atomic), Cell (interior mutability without sync).",
   "part": 9
  },
  {
   "id": 884,
   "question": "Why is `Rc` not `Send`?",
   "options": {
    "A": "It uses raw pointers",
    "B": "Its reference count is not atomic; concurrent modification from different threads would be data race",
    "C": "It's a smart pointer",
    "D": "Rust doesn't allow it"
   },
   "correct": "B",
   "explanation": "Rc uses a non-atomic refcount. If two threads could hold Rcs and drop them, the count could be corrupted. Arc uses atomic refcount and is Send+Sync. Rc is for single-threaded use.",
   "part": 9
  },
  {
   "id": 885,
   "question": "What is an 'invariant' in the context of unsafe Rust?",
   "options": {
    "A": "A compile-time check",
    "B": "A condition that must always hold for the code to be sound (e.g., 'this ptr is valid')",
    "C": "A runtime assertion",
    "D": "A type constraint"
   },
   "correct": "B",
   "explanation": "Invariants are conditions the code assumes. For unsafe code, the programmer guarantees them. E.g., 'this raw pointer is non-null and valid'. Violating an invariant can cause UB. Document and uphold invariants.",
   "part": 9
  },
  {
   "id": 886,
   "question": "How does `Vec` use unsafe internally?",
   "options": {
    "A": "It doesn't",
    "B": "Raw pointer arithmetic, allocator calls, ptr::read/write; the safe API ensures correct use",
    "C": "Only for allocation",
    "D": "Only for capacity"
   },
   "correct": "B",
   "explanation": "Vec uses raw pointers to the buffer, ptr::read/write for moving elements, and the allocator API. The public methods (push, pop, etc.) maintain invariants (len <= cap, valid elements in 0..len). The unsafe is encapsulated.",
   "part": 9
  },
  {
   "id": 887,
   "question": "What is the relationship between `Send` and `Sync`?",
   "options": {
    "A": "They are independent",
    "B": "Sync is a subtrait of Send",
    "C": "T: Sync implies T: Send for most T",
    "D": "&T: Send is equivalent to T: Sync"
   },
   "correct": "D",
   "explanation": "T: Sync is defined as &T: Send. So Sync is about sharing (immutable refs across threads). Send is about ownership transfer. They're related but distinct. E.g., Rc is !Send and !Sync; Arc is both.",
   "part": 9
  },
  {
   "id": 888,
   "question": "When implementing a safe wrapper over a raw pointer, what must you guarantee?",
   "options": {
    "A": "The pointer is never null",
    "B": "Lifetime: the wrapper doesn't outlive the referent; validity: the pointer is always valid when dereferenced",
    "C": "The pointer is aligned",
    "D": "Nothing; the wrapper is safe"
   },
   "correct": "B",
   "explanation": "A safe wrapper (e.g., a type holding *mut T) must ensure: (1) the pointer is valid whenever the user gets a reference, (2) the lifetime is correct (no use-after-free). This might require PhantomData, custom Drop, or not implementing Clone.",
   "part": 9
  },
  {
   "id": 889,
   "question": "What does `PhantomData` do in unsafe code?",
   "options": {
    "A": "Marks types as phantom",
    "B": "Instructs the compiler about ownership/lifetime without adding a real field (for variance, drop check)",
    "C": "Adds a zero-sized field",
    "D": "Prevents Send"
   },
   "correct": "B",
   "explanation": "PhantomData<T> is zero-sized. It tells the compiler your type 'acts like' it contains T—for drop check (must not drop T if you don't own it), variance, and Send/Sync. Used in unsafe wrappers (e.g., Vec uses PhantomData for the element type).",
   "part": 9
  },
  {
   "id": 890,
   "question": "Why might you use `MaybeUninit<T>` instead of `Option<T>` for uninitialized memory?",
   "options": {
    "A": "MaybeUninit is faster",
    "B": "MaybeUninit doesn't require T to be valid until you assume_init; Option requires valid bit pattern for None",
    "C": "Option doesn't support uninit",
    "D": "They are the same"
   },
   "correct": "B",
   "explanation": "Option<T> uses a discriminant; for some T, there might not be a valid bit pattern for None. MaybeUninit<T> reserves space without requiring T to be constructed. You write into it, then call assume_init() when ready. Lower-level, for allocators and buffers.",
   "part": 9
  },
  {
   "id": 891,
   "question": "What is `UnsafeCell<T>`?",
   "options": {
    "A": "A thread-safe cell",
    "B": "The only way to get interior mutability at the memory level; tells the compiler 'this can mutate through a shared ref'",
    "C": "A mutable static",
    "D": "A replacement for RefCell"
   },
   "correct": "B",
   "explanation": "UnsafeCell<T> is the core of interior mutability. It has get() returning *mut T. The compiler treats &UnsafeCell<T> as allowing mutation (no immutability guarantee). Cell, RefCell, Mutex are built on it.",
   "part": 9
  },
  {
   "id": 892,
   "question": "What are Rust's aliasing rules (for unsafe code)?",
   "options": {
    "A": "There are no rules",
    "B": "A single mutable reference XOR many immutable references; raw pointers must respect this for validity",
    "C": "Only for references",
    "D": "Aliasing is always allowed"
   },
   "correct": "B",
   "explanation": "For references: either one &mut or many &, never both. For raw pointers used to create references: the same rules apply. Creating &mut and & to the same memory is UB. This is the 'stacked borrows' / aliasing model.",
   "part": 9
  },
  {
   "id": 893,
   "question": "What is Miri?",
   "options": {
    "A": "A Rust compiler",
    "B": "An interpreter that detects undefined behavior in Rust code (runs with cargo miri)",
    "C": "A macro expander",
    "D": "A debugger"
   },
   "correct": "B",
   "explanation": "Miri interprets Rust MIR and checks for UB: use-after-free, data races, invalid reads, etc. Run with `cargo miri test`. Catches many bugs that unsafe code might have. Doesn't catch everything but very useful.",
   "part": 9
  },
  {
   "id": 894,
   "question": "When is it UB to create a reference from a raw pointer?",
   "options": {
    "A": "Never",
    "B": "When the pointer is invalid, unaligned, or when it would violate aliasing (e.g., &mut while & exists)",
    "C": "Only for *mut",
    "D": "When the pointer is null"
   },
   "correct": "B",
   "explanation": "Creating & or &mut from a raw pointer requires: valid, aligned, dereferenceable memory, and the resulting reference must respect aliasing. No overlapping &mut and &. Violating this is UB.",
   "part": 9
  },
  {
   "id": 895,
   "question": "What does 'stacked borrows' refer to?",
   "options": {
    "A": "Stack allocation",
    "B": "A model for when raw pointer/reference operations are valid (tracks permissions)",
    "C": "Recursive borrows",
    "D": "A borrow checker algorithm"
   },
   "correct": "B",
   "explanation": "Stacked borrows is an operational model for Rust's memory model. It tracks 'permissions' (read/write) for memory. Creating a reference from a raw pointer grants permissions; using another pointer might invalidate them. Used to define UB.",
   "part": 9
  },
  {
   "id": 896,
   "question": "Why might you use `NonNull<T>` instead of `*mut T`?",
   "options": {
    "A": "NonNull is faster",
    "B": "NonNull guarantees non-null; enables Option<NonNull<T>> to have null pointer optimization",
    "C": "NonNull is Send",
    "D": "NonNull is required for references"
   },
   "correct": "B",
   "explanation": "NonNull<T> is like *mut T but guaranteed non-null. Option<NonNull<T>> has the same size as *mut T (null is the None representation). Useful for custom allocators and collections. Doesn't add runtime cost.",
   "part": 9
  },
  {
   "id": 897,
   "question": "What is the purpose of `read()` on a raw pointer?",
   "options": {
    "A": "Reads without moving",
    "B": "Reads and leaves the memory uninitialized (moves out without dropping)",
    "C": "Copies the value",
    "D": "Validates the pointer"
   },
   "correct": "B",
   "explanation": "ptr.read() copies the value from *ptr and returns it. The memory at ptr becomes uninitialized (not dropped). Used when manually moving values out of a buffer. Must not double-drop. Unsafe.",
   "part": 9
  },
  {
   "id": 898,
   "question": "When using raw pointers, what does 'dereferenceable' mean?",
   "options": {
    "A": "The pointer can be written",
    "B": "The memory is valid to read (and write for *mut) for at least size_of::<T>() bytes",
    "C": "The pointer is aligned",
    "D": "The pointer is not null"
   },
   "correct": "B",
   "explanation": "Dereferenceable means the memory the pointer points to is valid and allocated. You can read (and for *mut, write) size_of::<T>() bytes. It implies non-null and properly aligned. A freed pointer is not dereferenceable.",
   "part": 9
  },
  {
   "id": 899,
   "question": "What does `write()` on a raw pointer do?",
   "options": {
    "A": "Appends to a buffer",
    "B": "Overwrites the memory at ptr with the value; does not drop the old value",
    "C": "Copies to the pointer",
    "D": "Allocates memory"
   },
   "correct": "B",
   "explanation": "ptr.write(value) overwrites *ptr with value. It does not drop the previous value—if the memory had a value, that's a leak (or you must read/drop it first). Used when initializing uninitialized memory. Unsafe.",
   "part": 9
  },
  {
   "id": 900,
   "question": "What is the difference between `ptr::copy` and `ptr::copy_nonoverlapping`?",
   "options": {
    "A": "They are identical",
    "B": "copy_nonoverlapping requires src and dst ranges to not overlap; copy allows overlap (slower, handles overlap)",
    "C": "copy is deprecated",
    "D": "copy_nonoverlapping is for Copy types only"
   },
   "correct": "B",
   "explanation": "Both copy count bytes from src to dst. copy_nonoverlapping is like memcpy—UB if ranges overlap. ptr::copy is like memmove—handles overlapping regions correctly but may be slower. Use copy_nonoverlapping when you know they don't overlap for potential optimization.",
   "part": 9
  },
  {
   "id": 901,
   "question": "In the Builder pattern, why do builder methods typically take and return `self` by value rather than `&mut self`?",
   "options": {
    "A": "So the builder can be consumed and ownership transferred to the final `build()` method",
    "B": "Because Rust doesn't allow mutable references in method chains",
    "C": "To enable Copy semantics on the builder",
    "D": "It's required for the typestate pattern"
   },
   "correct": "A",
   "explanation": "Builder methods return `self` by value to enable method chaining. The final `build()` consumes the builder and returns the constructed type. Using `&mut self` would require `build(&mut self)` and the builder would remain after build, which is often undesirable.",
   "part": 10
  },
  {
   "id": 902,
   "question": "What is the primary purpose of the newtype pattern (e.g., `struct Meters(f64)`)?",
   "options": {
    "A": "To add methods to external types",
    "B": "To create distinct types with the same representation for type safety and to implement traits",
    "C": "To reduce memory usage",
    "D": "To enable Copy for the inner type"
   },
   "correct": "B",
   "explanation": "Newtype wraps a type to create a distinct type. You can implement traits (including From/Into) for the newtype, add methods, and prevent mixing values (e.g., Meters vs Feet). Zero-cost abstraction—same layout as inner type.",
   "part": 10
  },
  {
   "id": 903,
   "question": "In the typestate pattern, how do you typically prevent invalid state transitions at compile time?",
   "options": {
    "A": "Using runtime checks in every method",
    "B": "By making invalid states unrepresentable—each state is a different type, and methods consume/transform types",
    "C": "Using #[deny(dead_code)]",
    "D": "By wrapping everything in Option"
   },
   "correct": "B",
   "explanation": "Typestate encodes state as types. E.g., `Connection<Open>` vs `Connection<Closed>`. Methods like `send()` take `Connection<Open>` and return `Connection<Open>`. You cannot call `send` on `Connection<Closed>`—the type system forbids it.",
   "part": 10
  },
  {
   "id": 904,
   "question": "Given this builder, what happens if you call `build()` without setting `name`?\n\n```rust\nstruct User { name: String, age: u32 }\nstruct UserBuilder { name: Option<String>, age: u32 }\nimpl UserBuilder {\n  fn name(mut self, n: impl Into<String>) -> Self { self.name = Some(n.into()); self }\n  fn build(self) -> Result<User, &'static str> {\n    Ok(User { name: self.name.ok_or(\"name required\")?, age: self.age })\n  }\n}\n```",
   "options": {
    "A": "Compilation error",
    "B": "Returns Err(\"name required\") at runtime",
    "C": "Panics",
    "D": "Uses empty string as default"
   },
   "correct": "B",
   "explanation": "The builder uses Option<String> for name. build() calls ok_or(\"name required\")? which returns Err if name is None. So calling build() without name yields Err at runtime. Compile-time enforcement would require typestate (different builder types).",
   "part": 10
  },
  {
   "id": 905,
   "question": "Why might you use `impl Into<String>` instead of `String` in a builder's `name()` method?",
   "options": {
    "A": "Into is faster",
    "B": "To accept both &str and String without requiring the caller to call .to_string()",
    "C": "Into is required for builders",
    "D": "To enable Copy"
   },
   "correct": "B",
   "explanation": "impl Into<String> accepts any type that implements Into<String>: String, &str, Cow<str>, etc. Callers can pass \"hello\" or String::from(\"hello\") without explicit conversion. More ergonomic API.",
   "part": 10
  },
  {
   "id": 906,
   "question": "In a typestate API, `fn close(self) -> Connection<Closed>` consumes `Connection<Open>`. What prevents calling `send()` after `close()`?",
   "options": {
    "A": "Runtime panic",
    "B": "The Connection<Closed> type has no send method; only Connection<Open> does",
    "C": "Drop implementation",
    "D": "The compiler inserts runtime checks"
   },
   "correct": "B",
   "explanation": "Typestate encodes state in the type. Connection<Closed> is a different type from Connection<Open>. impl blocks provide send() only for Connection<Open>. After close(), you have Connection<Closed>—send() doesn't exist. Compile-time guarantee.",
   "part": 10
  },
  {
   "id": 907,
   "question": "What does the newtype pattern give you that a type alias does not?",
   "options": {
    "A": "Smaller binary size",
    "B": "A distinct type that can have its own trait implementations and prevents mixing with the inner type",
    "C": "Faster compilation",
    "D": "Automatic Deref to the inner type"
   },
   "correct": "B",
   "explanation": "type Meters = f64 is just an alias—Meters and f64 are interchangeable. struct Meters(f64) is a new type. You can impl traits for Meters, add methods, and the type checker prevents passing f64 where Meters is expected.",
   "part": 10
  },
  {
   "id": 908,
   "question": "For a builder with optional fields, which approach gives compile-time enforcement that required fields are set?",
   "options": {
    "A": "Using Option and checking at build() time",
    "B": "Typestate: separate builder types for each required field (Builder0, Builder1, etc.), where build() only exists on the final state",
    "C": "Using default values",
    "D": "Using #[must_use]"
   },
   "correct": "B",
   "explanation": "Typestate builders use different types: Builder, BuilderWithName, BuilderWithNameAndAge. build() is only on BuilderWithNameAndAge. You cannot call build() until you've chained through all required setters. Compile-time guarantee.",
   "part": 10
  },
  {
   "id": 909,
   "question": "When using `#[derive(Clone)]` on a newtype, what gets cloned?",
   "options": {
    "A": "Only the newtype wrapper",
    "B": "The inner value (Clone is derived to clone the inner type)",
    "C": "Nothing—Clone cannot be derived for newtypes",
    "D": "A shallow copy of the pointer"
   },
   "correct": "B",
   "explanation": "derive(Clone) on struct Foo(T) generates impl Clone for Foo that clones the inner T. So Foo(x).clone() gives Foo(x.clone()). The newtype is transparent for Clone.",
   "part": 10
  },
  {
   "id": 910,
   "question": "In a typestate state machine, why is `fn transition(self) -> StateB` preferred over `fn transition(&mut self)`?",
   "options": {
    "A": "It's faster",
    "B": "Consuming self ensures the old state is no longer accessible; you cannot accidentally use the old state after transitioning",
    "C": "&mut self would require Clone",
    "D": "Rust requires it for typestate"
   },
   "correct": "B",
   "explanation": "Taking self by value consumes the old state. The caller receives StateB and the old StateA is gone. With &mut self, you'd mutate in place—both states could be accessible or you'd need to track manually. Consuming self makes invalid states unrepresentable.",
   "part": 10
  },
  {
   "id": 911,
   "question": "What happens when a MutexGuard goes out of scope?",
   "options": {
    "A": "The mutex is locked again",
    "B": "The guard's Drop implementation releases the lock",
    "C": "A panic occurs",
    "D": "The mutex is destroyed"
   },
   "correct": "B",
   "explanation": "MutexGuard implements Drop. When the guard is dropped (goes out of scope, or explicitly with drop(guard)), Drop::drop runs and releases the lock. This is RAII—resource acquisition is initialization, release is destruction.",
   "part": 10
  },
  {
   "id": 912,
   "question": "Why can't you store a MutexGuard in a struct and return that struct from a function?",
   "options": {
    "A": "MutexGuard is not Send",
    "B": "MutexGuard holds a reference/lifetime tied to the Mutex; returning it would require the struct to outlive the Mutex, which may not be expressible",
    "C": "MutexGuard is Copy",
    "D": "MutexGuard cannot be dropped"
   },
   "correct": "B",
   "explanation": "MutexGuard<'a> has a lifetime tying it to the Mutex. When you return a struct containing it, the struct's lifetime must not exceed the Mutex. Often the Mutex is local—you can't return a guard that outlives it. The guard must be dropped before the Mutex is dropped.",
   "part": 10
  },
  {
   "id": 913,
   "question": "What is the relationship between RAII and the Drop trait?",
   "options": {
    "A": "They are unrelated",
    "B": "Drop is the Rust mechanism that implements RAII—cleanup runs when a value goes out of scope",
    "C": "RAII replaces Drop",
    "D": "Drop is only for async code"
   },
   "correct": "B",
   "explanation": "RAII = Resource Acquisition Is Initialization. In Rust, Drop::drop is called when a value goes out of scope. So acquiring a resource (e.g., lock) in the constructor and releasing it in Drop implements RAII. MutexGuard, File, etc. use this.",
   "part": 10
  },
  {
   "id": 914,
   "question": "Why does RwLockReadGuard need to be held for the duration of the read?",
   "options": {
    "A": "To prevent the RwLock from being dropped",
    "B": "The guard ensures the lock is held; dropping it releases the read lock. Holding it prevents writers from acquiring the write lock",
    "C": "To satisfy Send",
    "D": "To enable Sync"
   },
   "correct": "B",
   "explanation": "RwLockReadGuard holds the read lock. While held, other readers can acquire, but writers block. When the guard is dropped, the read lock is released. You must hold it for the entire duration you're reading to prevent data races.",
   "part": 10
  },
  {
   "id": 915,
   "question": "What can go wrong if you implement Drop and also use #[may_dangle] (dropck) incorrectly?",
   "options": {
    "A": "Nothing—#[may_dangle] is safe",
    "B": "Use-after-free: Drop may access borrowed data that was already dropped",
    "C": "Double free",
    "D": "Stack overflow"
   },
   "correct": "B",
   "explanation": "dropck (drop check) ensures Drop doesn't access dangling references. #[may_dangle] opts out of the check for a lifetime. If you use it incorrectly, Drop might run and access data that was already dropped—use-after-free, UB.",
   "part": 10
  },
  {
   "id": 916,
   "question": "In `let guard = mutex.lock().unwrap();`, when is the lock released?",
   "options": {
    "A": "Immediately after the statement",
    "B": "When guard goes out of scope (at the end of the block or when dropped)",
    "C": "When unwrap() returns",
    "D": "Never—unwrap consumes it"
   },
   "correct": "B",
   "explanation": "lock() returns LockResult<MutexGuard>. unwrap() gives MutexGuard. The guard holds the lock. When guard goes out of scope, its Drop runs and releases the lock. The scope of guard determines how long the lock is held.",
   "part": 10
  },
  {
   "id": 917,
   "question": "Why might you use scopeguard or similar instead of implementing Drop for simple cleanup?",
   "options": {
    "A": "scopeguard is faster",
    "B": "For one-off cleanup without defining a new type; you can run a closure on scope exit",
    "C": "Drop cannot run cleanup",
    "D": "scopeguard is required for locks"
   },
   "correct": "B",
   "explanation": "scopeguard::defer(|| cleanup()) runs the closure when the scope ends. Useful when you don't want to create a wrapper type just for Drop. Also supports different behaviors (always run vs. run on success/failure).",
   "part": 10
  },
  {
   "id": 918,
   "question": "What happens if Drop::drop panics?",
   "options": {
    "A": "The program aborts (double panic)",
    "B": "The panic is ignored",
    "C": "The rest of Drop runs",
    "D": "Undefined behavior"
   },
   "correct": "A",
   "explanation": "If a panic is already in progress and Drop panics, Rust aborts (double panic). Panicking in Drop is generally discouraged—it can cause aborts and makes cleanup unpredictable.",
   "part": 10
  },
  {
   "id": 919,
   "question": "How does RefCell differ from Mutex in terms of RAII?",
   "options": {
    "A": "RefCell doesn't use RAII",
    "B": "RefCell's Ref/RefMut guards implement RAII—they release the borrow when dropped. Mutex uses MutexGuard; both use guard types",
    "C": "RefCell has no guards",
    "D": "Mutex doesn't use RAII"
   },
   "correct": "B",
   "explanation": "Both use guard types. MutexGuard holds the lock; Ref and RefMut hold the RefCell borrow. When the guard is dropped, the lock/borrow is released. RefCell is single-threaded; Mutex is for multi-threaded. Both are RAII.",
   "part": 10
  },
  {
   "id": 920,
   "question": "Why is it problematic to have a type that implements both Drop and Copy?",
   "options": {
    "A": "Rust forbids it",
    "B": "Copy creates duplicates without running Drop on the 'original'; when each copy is dropped, Drop runs multiple times on logically the same resource—double free or similar",
    "C": "Copy is slower with Drop",
    "D": "Drop cannot be implemented for Copy types"
   },
   "correct": "B",
   "explanation": "Copy types are implicitly duplicated. If the type owns a resource (file handle, allocation), each copy thinks it owns it. When each is dropped, Drop runs multiple times—double free, double close. Copy should only be for types that don't own resources.",
   "part": 10
  },
  {
   "id": 921,
   "question": "Where does Cargo look for integration tests by default?",
   "options": {
    "A": "In src/",
    "B": "In tests/ directory at the crate root",
    "C": "In test/",
    "D": "Alongside the source files"
   },
   "correct": "B",
   "explanation": "Integration tests go in tests/ at the crate root. Each .rs file is compiled as a separate crate that links your library. Unit tests go in the same file with #[cfg(test)] or in a tests module.",
   "part": 10
  },
  {
   "id": 922,
   "question": "What does #[cfg(test)] do?",
   "options": {
    "A": "Runs the test",
    "B": "Includes the item only when compiling for tests (cargo test)",
    "C": "Marks the item as a test function",
    "D": "Enables test features in dependencies"
   },
   "correct": "B",
   "explanation": "#[cfg(test)] means the item is compiled only when cfg(test) is true—i.e., when running cargo test. Used for test-only modules, helpers, or code that shouldn't be in the release binary.",
   "part": 10
  },
  {
   "id": 923,
   "question": "What is the difference between #[test] and a regular function in a #[cfg(test)] module?",
   "options": {
    "A": "No difference",
    "B": "#[test] marks a function as a test case; Cargo runs it when you run cargo test. A regular function is just a helper",
    "C": "#[test] is for integration tests only",
    "D": "Regular functions cannot be in #[cfg(test)]"
   },
   "correct": "B",
   "explanation": "#[test] marks a function as a test. cargo test discovers and runs them. Regular functions in the same module are test helpers—they run only when called by a test. Both are compiled only with #[cfg(test)].",
   "part": 10
  },
  {
   "id": 924,
   "question": "What does #[should_panic] do?",
   "options": {
    "A": "Makes the test panic",
    "B": "The test passes only if it panics; if it doesn't panic, the test fails",
    "C": "Catches panics",
    "D": "Skips the test"
   },
   "correct": "B",
   "explanation": "#[should_panic] inverts success: the test passes if it panics. If the test completes without panicking, it fails. Used for testing that invalid inputs or states correctly cause a panic. Can add expected = \"substring\" to check panic message.",
   "part": 10
  },
  {
   "id": 925,
   "question": "How do you run a specific test by name?",
   "options": {
    "A": "cargo test test_name",
    "B": "cargo test <pattern> — runs tests whose names contain the pattern",
    "C": "cargo test --name test_name",
    "D": "You cannot run a single test"
   },
   "correct": "B",
   "explanation": "cargo test foo runs all tests whose names contain 'foo'. cargo test test_module::test_fn runs that specific test. The argument is a filter pattern, not an exact match.",
   "part": 10
  },
  {
   "id": 926,
   "question": "In integration tests, how do you access your library's public API?",
   "options": {
    "A": "Use crate::",
    "B": "Add your crate as a dependency; each test file is a separate crate, so use `use your_crate_name::...`",
    "C": "Use super::",
    "D": "Integration tests cannot use the library"
   },
   "correct": "B",
   "explanation": "Integration tests are separate crates. In Cargo.toml they get your lib as a dev-dependency. In the test file, you use `use your_crate::function` or `your_crate::module::item`. They only see the public API.",
   "part": 10
  },
  {
   "id": 927,
   "question": "What does #[ignore] do on a test?",
   "options": {
    "A": "Fails the test",
    "B": "The test is not run by default; use cargo test --ignored to run it",
    "C": "Hides the test",
    "D": "Marks it as flaky"
   },
   "correct": "B",
   "explanation": "#[ignore] skips the test in normal cargo test. Use cargo test --ignored to run only ignored tests, or cargo test --include-ignored to run all. Useful for slow or environment-specific tests.",
   "part": 10
  },
  {
   "id": 928,
   "question": "Why might you put test helpers in a common module (e.g., tests/common/mod.rs)?",
   "options": {
    "A": "To make them run first",
    "B": "Cargo treats files in tests/ as separate test crates; common/mod.rs is not compiled as a test, so you can share helpers across test files by including it",
    "C": "To reduce compile time",
    "D": "common is a special Cargo directory"
   },
   "correct": "B",
   "explanation": "Each file in tests/ is a separate crate. To share code, use tests/common/mod.rs. Files named common*.rs are not compiled as tests. In each test file, use `mod common;` and then `common::helper()`.",
   "part": 10
  },
  {
   "id": 929,
   "question": "What does `cargo test --no-run` do?",
   "options": {
    "A": "Runs tests without output",
    "B": "Compiles tests but does not run them",
    "C": "Skips tests",
    "D": "Runs tests in parallel"
   },
   "correct": "B",
   "explanation": "-no-run compiles the test binary but doesn't execute it. Useful for checking that tests compile, or to get the path to the test binary for debugging (e.g., under gdb).",
   "part": 10
  },
  {
   "id": 930,
   "question": "In a #[test] function, what type does a Result return value indicate?",
   "options": {
    "A": "The test framework ignores it",
    "B": "Ok(()) means pass, Err means fail (the test fails with the error)",
    "C": "Result is not allowed in tests",
    "D": "It enables ? in tests"
   },
   "correct": "B",
   "explanation": "A test can return Result<(), E> where E: Debug. Ok(()) passes; Err(e) fails and prints e. This lets you use ? in tests: fn test() -> Result<(), Box<dyn Error>> { ... }.",
   "part": 10
  },
  {
   "id": 931,
   "question": "What is the main idea behind property-based testing (e.g., proptest)?",
   "options": {
    "A": "Testing with fixed inputs",
    "B": "Defining properties that should hold for all inputs; the framework generates random inputs and checks the property",
    "C": "Testing only edge cases",
    "D": "Mutation testing"
   },
   "correct": "B",
   "explanation": "Property-based testing: you state invariants (e.g., reverse(reverse(x)) == x). The framework generates many random inputs and verifies the property. Finds edge cases you might not have thought of. proptest and quickcheck do this in Rust.",
   "part": 10
  },
  {
   "id": 932,
   "question": "How does proptest typically shrink failing inputs?",
   "options": {
    "A": "It doesn't shrink",
    "B": "It tries to find a smaller input that still fails, making the failure easier to debug",
    "C": "It expands the input",
    "D": "Shrinking is only in quickcheck"
   },
   "correct": "B",
   "explanation": "When a property fails, proptest tries to shrink the input (e.g., smaller numbers, shorter vecs) while keeping the failure. The goal is a minimal failing case. Helps identify the root cause.",
   "part": 10
  },
  {
   "id": 933,
   "question": "What is libfuzzer (cargo-fuzz) used for?",
   "options": {
    "A": "Unit testing",
    "B": "Fuzzing: generating random inputs to find crashes, panics, or UB",
    "C": "Benchmarking",
    "D": "Documentation"
   },
   "correct": "B",
   "explanation": "Fuzzing feeds random/corpus inputs to your code to find bugs. cargo-fuzz uses libFuzzer. You write a fuzz target; the fuzzer mutates inputs to maximize coverage and find crashes. Great for parsers, decoders, etc.",
   "part": 10
  },
  {
   "id": 934,
   "question": "What does mockall typically provide?",
   "options": {
    "A": "Property-based testing",
    "B": "Mock implementations of traits—you define expected calls and return values for testing",
    "C": "Fuzzing",
    "D": "Code coverage"
   },
   "correct": "B",
   "explanation": "mockall generates mock implementations of traits. You set expectations (this method will be called with X, return Y). Useful for isolating units under test by replacing dependencies with mocks.",
   "part": 10
  },
  {
   "id": 935,
   "question": "In proptest, what does `proptest!` macro do?",
   "options": {
    "A": "Defines a single test",
    "B": "Defines a property-based test: generates inputs from the strategy and runs the test body for each",
    "C": "Configures the test runner",
    "D": "Enables shrinking"
   },
   "correct": "B",
   "explanation": "proptest! { strategy => |input| { ... } } runs the closure with many generated inputs. The strategy (e.g., 0u32..100) defines the input space. The closure must hold for all inputs (or proptest finds a failing case).",
   "part": 10
  },
  {
   "id": 936,
   "question": "Why might you use a fuzz corpus directory?",
   "options": {
    "A": "To store test results",
    "B": "To seed the fuzzer with interesting inputs that improve coverage and help find new paths",
    "C": "To disable fuzzing",
    "D": "To run unit tests"
   },
   "correct": "B",
   "explanation": "A corpus is a set of inputs the fuzzer has found. Storing them lets the fuzzer start from known-interesting inputs and mutate them. Improves coverage and finds bugs faster. Often committed to the repo.",
   "part": 10
  },
  {
   "id": 937,
   "question": "What is the main limitation of mocking (e.g., mockall) compared to integration tests?",
   "options": {
    "A": "Mocks are slower",
    "B": "Mocks test against a fake implementation; they don't catch bugs in the real dependency or integration issues",
    "C": "Mocks cannot be used with traits",
    "D": "Mocks require async"
   },
   "correct": "B",
   "explanation": "Mocks replace real dependencies. You test your code in isolation, but you don't test the real interaction. Integration tests use real dependencies and catch more bugs. Use both: mocks for unit tests, integration tests for E2E.",
   "part": 10
  },
  {
   "id": 938,
   "question": "In quickcheck, what trait must your type implement to be used as a random test input?",
   "options": {
    "A": "Debug",
    "B": "Arbitrary",
    "C": "Clone",
    "D": "Default"
   },
   "correct": "B",
   "explanation": "quickcheck uses the Arbitrary trait to generate random values. impl Arbitrary for MyType defines arbitrary(). proptest uses Strategy instead of Arbitrary, but the idea is similar—a way to generate random test data.",
   "part": 10
  },
  {
   "id": 939,
   "question": "What does `#[derive(Arbitrary)]` (in quickcheck) do?",
   "options": {
    "A": "Makes the type Copy",
    "B": "Generates an Arbitrary implementation that recursively uses Arbitrary for fields",
    "C": "Enables fuzzing",
    "D": "Adds Default"
   },
   "correct": "B",
   "explanation": "derive(Arbitrary) implements Arbitrary by generating each field with its Arbitrary impl. For enums, it picks a variant. Lets you quickly get random instances of structs for property-based tests.",
   "part": 10
  },
  {
   "id": 940,
   "question": "When using test fixtures (setup/teardown), what Rust pattern is commonly used?",
   "options": {
    "A": "Fixtures are not possible in Rust",
    "B": "A struct that implements Drop for teardown; the constructor does setup. Use in a scope so Drop runs",
    "C": "Global mutable state",
    "D": "Macros only"
   },
   "correct": "B",
   "explanation": "RAII again: create a fixture struct in a block. Constructor does setup (create temp file, start server). Drop does teardown (delete file, stop server). When the struct goes out of scope, cleanup runs. No special test framework needed.",
   "part": 10
  },
  {
   "id": 941,
   "question": "What is the main advantage of cargo-nextest over cargo test?",
   "options": {
    "A": "It runs tests in a single thread",
    "B": "Faster test runs via parallelization, test grouping, and better failure output",
    "C": "It replaces proptest",
    "D": "It only runs integration tests"
   },
   "correct": "B",
   "explanation": "cargo-nextest runs tests in parallel by default, groups related tests, and provides clearer failure output. Drop-in replacement for cargo test. Speeds up large test suites significantly.",
   "part": 10
  },
  {
   "id": 942,
   "question": "In a Cargo workspace, how do workspace members share the same lockfile?",
   "options": {
    "A": "They don't",
    "B": "The lockfile (Cargo.lock) is at the workspace root; all members use it",
    "C": "Each member has its own lockfile",
    "D": "You must run cargo update in each member"
   },
   "correct": "B",
   "explanation": "A workspace has a root Cargo.toml. Cargo.lock lives at the root. All workspace members resolve dependencies against this single lockfile, ensuring consistent versions across the workspace.",
   "part": 10
  },
  {
   "id": 943,
   "question": "What does a default feature in Cargo do?",
   "options": {
    "A": "Enables the feature by default when the crate is used as a dependency",
    "B": "Disables the feature",
    "C": "Makes the feature required",
    "D": "Runs at startup"
   },
   "correct": "A",
   "explanation": "default = [\"feature1\"] in [features] means when someone adds your crate, feature1 is enabled unless they opt out with default-features = false. Use for optional but commonly wanted functionality.",
   "part": 10
  },
  {
   "id": 944,
   "question": "What does #[cfg(feature = \"foo\")] do?",
   "options": {
    "A": "Enables the feature",
    "B": "Includes the item only when the \"foo\" feature is enabled",
    "C": "Checks at runtime",
    "D": "Requires the feature"
   },
   "correct": "B",
   "explanation": "#[cfg(feature = \"foo\")] compiles the item only when the crate is built with --features foo (or foo in default features). Used for optional code—e.g., serde support behind a feature.",
   "part": 10
  },
  {
   "id": 945,
   "question": "What is the difference between [dependencies] and [dev-dependencies]?",
   "options": {
    "A": "No difference",
    "B": "dev-dependencies are only used for tests, benchmarks, and examples; not in the main build",
    "C": "dev-dependencies are faster",
    "D": "dev-dependencies cannot have features"
   },
   "correct": "B",
   "explanation": "dev-dependencies are used when compiling tests, benches, examples. They're not linked into the main library/binary. Use for test-only crates (e.g., proptest, mockall) to keep the main build lean.",
   "part": 10
  },
  {
   "id": 946,
   "question": "How do you add an optional dependency that enables a feature when present?",
   "options": {
    "A": "optional = true in the dependency; then list it in [features]",
    "B": "Use [optional-dependencies]",
    "C": "Put it in dev-dependencies",
    "D": "Use cfg"
   },
   "correct": "A",
   "explanation": "serde = { version = \"1.0\", optional = true } and [features] serde = [\"dep:serde\"] or serde = [\"serde\"]. When the user enables your \"serde\" feature, the serde dependency is included.",
   "part": 10
  },
  {
   "id": 947,
   "question": "What does #[cfg(target_os = \"windows\")] do?",
   "options": {
    "A": "Runs only on Windows",
    "B": "Includes the item only when compiling for Windows target",
    "C": "Checks at runtime",
    "D": "Enables Windows APIs"
   },
   "correct": "B",
   "explanation": "cfg(target_os = \"windows\") is a compile-time check. The code is included only when building for Windows. For other targets, the code is not compiled at all. Used for platform-specific implementations.",
   "part": 10
  },
  {
   "id": 948,
   "question": "In a workspace, can a member depend on another member?",
   "options": {
    "A": "No",
    "B": "Yes, using path = \"../other-member\" and the member's package name",
    "C": "Only if they're in the same directory",
    "D": "Only for dev-dependencies"
   },
   "correct": "B",
   "explanation": "my-package = { path = \"../other-crate\" }. The workspace member is a path dependency. Cargo resolves it within the workspace. Common for splitting a project into multiple crates.",
   "part": 10
  },
  {
   "id": 949,
   "question": "What does cfg(all(feature = \"a\", not(feature = \"b\"))) mean?",
   "options": {
    "A": "Feature a or not b",
    "B": "Feature a is enabled AND feature b is disabled",
    "C": "Either condition",
    "D": "Invalid syntax"
   },
   "correct": "B",
   "explanation": "all(...) requires all conditions. So: a enabled and b disabled. any(...) would mean at least one. not(...) inverts. Used for mutually exclusive features or complex gating.",
   "part": 10
  },
  {
   "id": 950,
   "question": "What is the purpose of [patch] in Cargo.toml?",
   "options": {
    "A": "To patch the Rust compiler",
    "B": "To override a dependency with a local path or git repo (e.g., for testing a fix)",
    "C": "To enable all features",
    "D": "To patch features"
   },
   "correct": "B",
   "explanation": "[patch] lets you replace a dependency. E.g., patch crates.io version with a git branch or local path. Useful for trying upstream fixes before release, or forking a crate with local changes.",
   "part": 10
  },
  {
   "id": 951,
   "question": "What does cfg(debug_assertions) mean?",
   "options": {
    "A": "Always true",
    "B": "True in debug builds (dev), false in release builds",
    "C": "True when running tests",
    "D": "Runtime check"
   },
   "correct": "B",
   "explanation": "debug_assertions is enabled in dev (cargo build) and disabled in release (cargo build --release). Use for extra checks in dev that you don't want in production (e.g., debug_assert!, expensive validation).",
   "part": 10
  },
  {
   "id": 952,
   "question": "What does #[serde(rename = \"foo\")] on a struct field do?",
   "options": {
    "A": "Renames the field at runtime",
    "B": "When serializing/deserializing, use \"foo\" as the key instead of the Rust field name",
    "C": "Creates a new field",
    "D": "Only affects serialization"
   },
   "correct": "B",
   "explanation": "rename changes the key in the serialized format. struct Foo { #[serde(rename = \"bar\")] x: i32 } serializes as {\"bar\": 0} not {\"x\": 0}. Works for both serialize and deserialize.",
   "part": 10
  },
  {
   "id": 953,
   "question": "What is the purpose of serde's externally_tagged enum representation?",
   "options": {
    "A": "No tags",
    "B": "The enum variant is the key; the value is the variant's data. E.g. {\"Foo\": {\"a\": 1}}",
    "C": "Internal tags only",
    "D": "Adjacently tagged"
   },
   "correct": "B",
   "explanation": "externally_tagged (default for enums): variant name is the key, content is the value. {\"Unit\": null}, {\"Tuple\": [1,2]}, {\"Struct\": {\"x\":1}}. Good for JSON. internally_tagged uses a single object with a tag field.",
   "part": 10
  },
  {
   "id": 954,
   "question": "What does serde's #[serde(skip)] do?",
   "options": {
    "A": "Skips serialization only",
    "B": "Skips the field for both serialize and deserialize; deserialize uses Default",
    "C": "Skips deserialization only",
    "D": "Causes an error"
   },
   "correct": "B",
   "explanation": "skip omits the field. Serialize: field not written. Deserialize: field gets Default::default() (or use skip_deserializing/skip_serializing for one-way). Useful for computed or redundant fields.",
   "part": 10
  },
  {
   "id": 955,
   "question": "What is zero-copy deserialization (e.g., serde's borrow)?",
   "options": {
    "A": "Deserialization without allocation",
    "B": "Deserializing into borrowed references (e.g., &str) that point into the input buffer, avoiding allocation",
    "C": "Copying the input",
    "D": "Skipping deserialization"
   },
   "correct": "B",
   "explanation": "With &'a str or &'a [u8], serde can deserialize by borrowing from the input. The output references the input—no allocation. Requires the input to outlive the output. Used in serde_json::Value with borrow, or in custom Deserialize impls.",
   "part": 10
  },
  {
   "id": 956,
   "question": "When implementing Deserialize manually, what does the 'de lifetime in DeserializeSeed<'de> represent?",
   "options": {
    "A": "The deserializer's lifetime",
    "B": "The lifetime of the data being deserialized (input buffer); borrowed output can live at most this long",
    "C": "The seed's lifetime",
    "D": "The output lifetime"
   },
   "correct": "B",
   "explanation": "'de is the lifetime of the input. When deserializing into &'de str, the output borrows from the input. The 'de ties the output lifetime to the input, enabling zero-copy deserialization.",
   "part": 10
  },
  {
   "id": 957,
   "question": "What does #[serde(flatten)] do?",
   "options": {
    "A": "Flattens nested structs: fields of the inner struct appear at the same level in the serialized output",
    "B": "Nests the struct",
    "C": "Skips the field",
    "D": "Renames the field"
   },
   "correct": "A",
   "explanation": "flatten on a field embeds its fields into the parent. struct Outer { a: i32, #[serde(flatten)] inner: Inner } with Inner { b: i32 } serializes as {\"a\":0,\"b\":0}. Useful for combining configs or API responses.",
   "part": 10
  },
  {
   "id": 958,
   "question": "What is the untagged enum representation?",
   "options": {
    "A": "No variant info; try each variant in order until one deserializes successfully",
    "B": "Uses a tag field",
    "C": "Same as externally tagged",
    "D": "Invalid"
   },
   "correct": "A",
   "explanation": "untagged: no variant marker. Deserializer tries each variant in order; first success wins. Useful when the data shape uniquely identifies the variant (e.g., single field vs object). Can be ambiguous.",
   "part": 10
  },
  {
   "id": 959,
   "question": "Why might custom Serialize/Deserialize implementations be needed instead of derive?",
   "options": {
    "A": "Derive is never sufficient",
    "B": "For non-standard formats, custom logic, or when the Rust structure doesn't map 1:1 to the format",
    "C": "Only for performance",
    "D": "Only for zero-copy"
   },
   "correct": "B",
   "explanation": "Derive works for straightforward mappings. Custom impls for: different format shapes, validation during deserialize, conditional fields, or formats serde doesn't support out of the box.",
   "part": 10
  },
  {
   "id": 960,
   "question": "What does #[serde(default)] on a field do?",
   "options": {
    "A": "Uses Default::default() when the field is missing during deserialization",
    "B": "Makes the field optional",
    "C": "Only for Option",
    "D": "Skips the field"
   },
   "correct": "A",
   "explanation": "default: if the key is absent in the input, use Default::default() for the field. Lets you add new optional fields without breaking old data. Can use default = \"path::to::function\" for custom default.",
   "part": 10
  },
  {
   "id": 961,
   "question": "In serde, what is the relationship between Serialize and Serializer?",
   "options": {
    "A": "They are the same",
    "B": "Serialize is implemented by your type (data); Serializer is implemented by the format (JSON, etc.). Your type calls serializer methods to emit its data",
    "C": "Serializer is for deserialization",
    "D": "Only Serialize exists"
   },
   "correct": "B",
   "explanation": "Serialize: your type implements this. It receives a Serializer and calls methods like serialize_i32, serialize_struct, etc. Serializer: the format (serde_json, etc.) implements this. It receives the calls and writes bytes. Data and format are separate.",
   "part": 10
  },
  {
   "id": 962,
   "question": "What does thiserror typically provide?",
   "options": {
    "A": "Panic handling",
    "B": "Derive macro for Error, Display, and From impls to create ergonomic error types",
    "C": "Logging",
    "D": "Result type"
   },
   "correct": "B",
   "explanation": "thiserror::Error derive implements std::error::Error, Display (from #[error(\"...\")]), and From (from #[from]). Reduces boilerplate for library error types. anyhow is for applications (easy ? conversion).",
   "part": 10
  },
  {
   "id": 963,
   "question": "What is anyhow primarily used for?",
   "options": {
    "A": "Library error types",
    "B": "Application error handling: easy Result propagation with ? and context, without defining custom error types",
    "C": "Panic recovery",
    "D": "Logging errors"
   },
   "correct": "B",
   "explanation": "anyhow::Result<T> and anyhow::Error let you ? any Error into them. .context(\"msg\") adds context. Good for applications where you want to bubble errors and add context without defining a custom error enum.",
   "part": 10
  },
  {
   "id": 964,
   "question": "When does the ? operator NOT work for propagating errors?",
   "options": {
    "A": "Always works",
    "B": "When the function return type doesn't implement From for the error type, or in main (unless main returns Result)",
    "C": "Only in async",
    "D": "Only for Option"
   },
   "correct": "B",
   "explanation": "? requires From<E> for the function's error type. If your function returns Result<T, MyError>, ? only works for errors that impl Into<MyError>. main() can return Result for ? to work; otherwise use .unwrap() or match.",
   "part": 10
  },
  {
   "id": 965,
   "question": "What does #[from] in thiserror do?",
   "options": {
    "A": "Marks the field as the source",
    "B": "Generates a From impl so you can ? that error type into your error",
    "C": "Converts to String",
    "D": "Enables Display"
   },
   "correct": "B",
   "explanation": "#[from] on a variant field generates impl From<ThatError> for YourError. So ? can convert that error into your type. #[source] marks the field for Error::source(); #[from] implies #[source] and adds From.",
   "part": 10
  },
  {
   "id": 966,
   "question": "Why might you implement From<OtherError> for YourError?",
   "options": {
    "A": "To convert your error to OtherError",
    "B": "To allow ? to convert OtherError into YourError automatically",
    "C": "To enable Clone",
    "D": "For Display"
   },
   "correct": "B",
   "explanation": "impl From<OtherError> for YourError lets you use ? on functions that return OtherError when your function returns Result<_, YourError>. The ? will automatically convert. Reduces boilerplate at call sites.",
   "part": 10
  },
  {
   "id": 967,
   "question": "What is the purpose of .context() in anyhow?",
   "options": {
    "A": "To catch errors",
    "B": "To add contextual information to the error chain (e.g., \"while parsing config\")",
    "C": "To log",
    "D": "To convert to String"
   },
   "correct": "B",
   "explanation": "err.context(\"while parsing config\") wraps the error with a message. When you print the error (or use {:?}), you see the chain. Helps debug: \"failed to read file\" -> \"while parsing config\" -> \"invalid UTF-8\".",
   "part": 10
  },
  {
   "id": 968,
   "question": "In a custom Error type, why implement Error::source()?",
   "options": {
    "A": "It's required",
    "B": "To allow error reporters to walk the cause chain and display the full error story",
    "C": "For From",
    "D": "For Display"
   },
   "correct": "B",
   "explanation": "source() returns the underlying error. Tools can iterate: error.source().and_then(|e| e.source())... to print the full chain. thiserror's #[source] generates this. Helps debugging and error reporting.",
   "part": 10
  },
  {
   "id": 969,
   "question": "What happens if you use ? on an Err in main() when main returns ()?",
   "options": {
    "A": "It works",
    "B": "Compilation error: ? can only be used in functions that return Result or Option",
    "C": "Runtime panic",
    "D": "The error is ignored"
   },
   "correct": "B",
   "explanation": "? requires the function to return Result<T, E> (or Option, etc.). main() -> () doesn't. Use main() -> Result<(), Box<dyn Error>> or main() -> Result<(), E> to use ?. Or handle errors manually.",
   "part": 10
  },
  {
   "id": 970,
   "question": "When would you use Box<dyn Error> as an error type?",
   "options": {
    "A": "Never",
    "B": "When you want to accept any error type (e.g., in main or a generic handler) without defining a custom enum",
    "C": "Only for libraries",
    "D": "For performance"
   },
   "correct": "B",
   "explanation": "Result<T, Box<dyn Error>> accepts any error. ? works for any E: Into<Box<dyn Error>>. Good for applications where you don't care about the exact type. anyhow::Error is often better (context, etc.).",
   "part": 10
  },
  {
   "id": 971,
   "question": "What does map_err do?",
   "options": {
    "A": "Maps the Ok value",
    "B": "Maps the Err value to a different error type (e.g., for conversion before ?)",
    "C": "Ignores the error",
    "D": "Unwraps"
   },
   "correct": "B",
   "explanation": "result.map_err(|e| MyError::from(e)) converts Err(E) to Err(MyError). Used when you need to convert an error before ? (e.g., your function returns Result<T, MyError> but the inner call returns Result<T, IoError>).",
   "part": 10
  },
  {
   "id": 972,
   "question": "Why does `fn foo() -> Result<T, Box<dyn Error>>` allow `?` on any error type?",
   "options": {
    "A": "Box<dyn Error> implements From for all types",
    "B": "Any type implementing Error implements From for Box<dyn Error> via the blanket impl From<E: Error> for Box<dyn Error>",
    "C": "? converts all errors to String",
    "D": "It doesn't—you must use map_err"
   },
   "correct": "B",
   "explanation": "The standard library has impl From<E> for Box<dyn Error> where E: Error. So any Error can be converted to Box<dyn Error>. The ? operator uses From for conversion, so ? works for any error type.",
   "part": 10
  },
  {
   "id": 973,
   "question": "What is the main difference between the log crate and the tracing crate?",
   "options": {
    "A": "They are identical",
    "B": "tracing adds spans (structured context), async support, and richer metadata; log is simpler, level-based",
    "C": "log is for async only",
    "D": "tracing replaces log"
   },
   "correct": "B",
   "explanation": "log: log::info!(\"msg\") with levels. tracing: spans (enter/exit), structured fields, works with async. tracing can emit to log. tracing is more powerful for distributed and async systems.",
   "part": 10
  },
  {
   "id": 974,
   "question": "What is a span in tracing?",
   "options": {
    "A": "A log level",
    "B": "A period of time/scope with a name and optional fields; events can be associated with spans",
    "C": "A subscriber",
    "D": "A filter"
   },
   "correct": "B",
   "explanation": "A span represents a unit of work (e.g., \"handle_request\", \"query_db\"). You enter/exit spans. Events inside a span are associated with it. Subscribers can track span hierarchy and timing.",
   "part": 10
  },
  {
   "id": 975,
   "question": "What does tracing::instrument on a function do?",
   "options": {
    "A": "Measures execution time",
    "B": "Creates a span for the function's execution with the function name and optionally its arguments as fields",
    "C": "Logs the return value",
    "D": "Enables async"
   },
   "correct": "B",
   "explanation": "#[instrument] creates a span when the function is called. By default the span name is the function name. Arguments can be included as fields (skip to exclude). Simplifies adding tracing to functions.",
   "part": 10
  },
  {
   "id": 976,
   "question": "What is a tracing Subscriber?",
   "options": {
    "A": "A log level",
    "B": "The backend that receives spans and events and decides what to do (e.g., format and write to stdout)",
    "C": "A span",
    "D": "A filter"
   },
   "correct": "B",
   "explanation": "Subscriber is the trait for the consumer. tracing_subscriber provides implementations: fmt (human-readable), json, etc. You set the subscriber with set_global_default. It receives all spans and events.",
   "part": 10
  },
  {
   "id": 977,
   "question": "What does log::Record contain?",
   "options": {
    "A": "Only the message",
    "B": "Level, target (module path), message, and optional key-value metadata",
    "C": "Spans",
    "D": "Subscriber config"
   },
   "correct": "B",
   "explanation": "Record has level, target (e.g., \"my_crate::module\"), args (the message), and metadata. Loggers use this to format and output. Simpler than tracing's Event which has span context.",
   "part": 10
  },
  {
   "id": 978,
   "question": "Why might you use tracing's structured fields instead of string interpolation?",
   "options": {
    "A": "Strings are faster",
    "B": "Structured fields can be queried, filtered, and exported to systems that understand key-value data (e.g., OpenTelemetry, JSON logs)",
    "C": "Only for debugging",
    "D": "They are required"
   },
   "correct": "B",
   "explanation": "info!(user_id = %id, \"user logged in\") emits structured data. Log aggregators can filter by user_id. JSON exporters get {\"user_id\": 123}. Better than \"user 123 logged in\" for machine processing.",
   "part": 10
  },
  {
   "id": 979,
   "question": "What does tracing_subscriber::fmt::init() do?",
   "options": {
    "A": "Initializes the log crate",
    "B": "Sets up a default fmt subscriber and installs it as the global default for tracing",
    "C": "Enables all levels",
    "D": "Configures logging"
   },
   "correct": "B",
   "explanation": "init() creates a fmt subscriber (human-readable output to stderr) and sets it as the global subscriber. After this, tracing::info! etc. will work. Simple way to get started.",
   "part": 10
  },
  {
   "id": 980,
   "question": "What is the purpose of EnvFilter?",
   "options": {
    "A": "To filter by environment variable",
    "B": "To filter spans/events by target (crate/module) and level (e.g., my_crate=debug, info)",
    "C": "To set the log level",
    "D": "To enable tracing"
   },
   "correct": "B",
   "explanation": "EnvFilter parses RUST_LOG-style filters: \"crate=debug,other=info\" means debug for crate, info for other. Used with with_env_filter on the subscriber. Controls verbosity per module.",
   "part": 10
  },
  {
   "id": 981,
   "question": "In tracing, what does Span::enter do?",
   "options": {
    "A": "Exits the span",
    "B": "Enters the span: creates a guard that, when dropped, exits the span. The span is the current context until the guard is dropped",
    "C": "Creates the span",
    "D": "Closes the span"
   },
   "correct": "B",
   "explanation": "span.enter() returns a Guard. While the guard is held, the span is the current span (events are associated with it). Dropping the guard exits the span. RAII for span scope.",
   "part": 10
  },
  {
   "id": 982,
   "question": "In axum, what is an Extractor?",
   "options": {
    "A": "A middleware",
    "B": "A type that extracts data from the request (path params, query, JSON body, etc.) and can be used as a handler parameter",
    "C": "A router",
    "D": "A response type"
   },
   "correct": "B",
   "explanation": "Extractors like Path, Query, Json, State are types you add as handler parameters. Axum extracts them from the request. E.g., fn handler(Path(id): Path<u32>, Json(body): Json<Body>) { ... }.",
   "part": 10
  },
  {
   "id": 983,
   "question": "What is Tower?",
   "options": {
    "A": "A web framework",
    "B": "A library of composable service abstractions (Service, Layer) used by hyper and axum for middleware and clients",
    "C": "A database driver",
    "D": "A templating engine"
   },
   "correct": "B",
   "explanation": "Tower provides Service (async request/response) and Layer (middleware). Hyper uses it; axum builds on it. Middleware like timeout, rate limit are Tower layers. Composable and reusable.",
   "part": 10
  },
  {
   "id": 984,
   "question": "In axum, how do you share state (e.g., a database pool) with handlers?",
   "options": {
    "A": "Global static",
    "B": "State<T>: add it to the router with .with_state(state), then use State<MyState> as an extractor in handlers",
    "C": "Thread-local",
    "D": "Request extensions only"
   },
   "correct": "B",
   "explanation": "Router::new().with_state(shared_state). State<T> extractor gives handlers access. T must be Clone (or Arc). Common for DbPool, Config, etc. Cloned per request, no locking for read-only.",
   "part": 10
  },
  {
   "id": 985,
   "question": "What is the relationship between hyper and axum?",
   "options": {
    "A": "They are unrelated",
    "B": "Axum is built on top of hyper; hyper provides the HTTP implementation, axum adds routing, extractors, etc.",
    "C": "Hyper is built on axum",
    "D": "They are the same"
   },
   "correct": "B",
   "explanation": "Hyper is the low-level HTTP library (client and server). Axum uses hyper as its transport and adds routing, extractors, middleware, and ergonomics. Tower sits between for middleware.",
   "part": 10
  },
  {
   "id": 986,
   "question": "In Tower, what does a Layer do?",
   "options": {
    "A": "Handles requests",
    "B": "Wraps a Service and returns a new Service (e.g., adding logging, timeout). Composable middleware",
    "C": "Routes requests",
    "D": "Parses bodies"
   },
   "correct": "B",
   "explanation": "Layer wraps a Service and returns another Service. E.g., TimeoutLayer wraps your handler and adds a timeout. Layers compose: layer1.layer(layer2).stack(). Used for middleware.",
   "part": 10
  },
  {
   "id": 987,
   "question": "What does axum's Json extractor do if the body is invalid JSON?",
   "options": {
    "A": "Panics",
    "B": "Returns 422 Unprocessable Entity with the parse error",
    "C": "Returns 500",
    "D": "Ignores the body"
   },
   "correct": "B",
   "explanation": "Json<T> deserializes the body. If it fails, axum returns 422 with the error. The handler is not called. You can customize with a custom extractor or rejection handling.",
   "part": 10
  },
  {
   "id": 988,
   "question": "In axum, how do you add middleware to a specific route?",
   "options": {
    "A": "Middleware cannot be route-specific",
    "B": "Use .layer() on the route or a group; layers apply to the routes they wrap",
    "C": "Use #[middleware]",
    "D": "Use route_middleware"
   },
   "correct": "B",
   "explanation": "router.route(\"/api\", api_routes.layer(my_layer)) applies the layer only to /api. Or nest routes and apply layers to the nested router. Layer order matters (first added = outermost).",
   "part": 10
  },
  {
   "id": 989,
   "question": "What is the purpose of axum's Router?",
   "options": {
    "A": "To parse JSON",
    "B": "To compose routes and middleware; you build a tree of routes and merge/nest them",
    "C": "To run the server",
    "D": "To extract state"
   },
   "correct": "B",
   "explanation": "Router combines routes (get, post, etc.), nests routers, and applies layers. .merge() and .nest() compose routers. The final router is passed to axum::serve. Central abstraction for routing.",
   "part": 10
  },
  {
   "id": 990,
   "question": "In hyper, what is the role of the Service trait?",
   "options": {
    "A": "To define routes",
    "B": "To represent an async function from Request to Result<Response, Error>; the core abstraction for handlers and middleware",
    "C": "To parse requests",
    "D": "To manage connections"
   },
   "correct": "B",
   "explanation": "Service is async fn(Request) -> Result<Response, E>. Your handler implements it (via axum's IntoService or similar). Middleware wraps Services. Tower's core abstraction.",
   "part": 10
  },
  {
   "id": 991,
   "question": "What does #![no_std] do?",
   "options": {
    "A": "Disables the standard library; the crate uses only core (and optionally alloc) for embedded or kernel code",
    "B": "Removes all allocations",
    "C": "Enables std",
    "D": "Reduces binary size only"
   },
   "correct": "A",
   "explanation": "no_std means no std crate. You get core (and alloc if you use it). No threads, files, network, etc. Required for embedded, kernel, some WASM. You provide panic handler, allocator if needed.",
   "part": 10
  },
  {
   "id": 992,
   "question": "What is a target triple?",
   "options": {
    "A": "A build flag",
    "B": "A string identifying the target platform (e.g., x86_64-unknown-linux-gnu, thumbv7em-none-eabihf)",
    "C": "A test",
    "D": "A feature"
   },
   "correct": "B",
   "explanation": "Target triple: arch-vendor-os-abi. E.g., x86_64-unknown-linux-gnu, wasm32-unknown-unknown. rustup target add <triple>. cargo build --target <triple>. Identifies the compilation target.",
   "part": 10
  },
  {
   "id": 993,
   "question": "How do you conditionally use std only when available?",
   "options": {
    "A": "You cannot",
    "B": "#[cfg(feature = \"std\")] use std; and have a default \"std\" feature; use core when std is disabled",
    "C": "Use std always",
    "D": "Use #[no_std] only in release"
   },
   "correct": "B",
   "explanation": "Many crates have default = [\"std\"] and use std by default. With default-features = false, they use core. Code uses #[cfg(feature = \"std\")] for std-only code. Enables use in both std and no_std environments.",
   "part": 10
  },
  {
   "id": 994,
   "question": "What does wasm-bindgen primarily do?",
   "options": {
    "A": "Compiles Rust to WASM",
    "B": "Provides bindings between Rust and JavaScript: export Rust functions to JS, import JS in Rust, convert types",
    "C": "Runs WASM",
    "D": "Optimizes WASM"
   },
   "correct": "B",
   "explanation": "wasm-bindgen generates the glue: Rust fn -> JS callable, JS types -> Rust. #[wasm_bindgen] on functions/structs. Handles ABI, type conversion. rustc/LLVM does the actual WASM compilation.",
   "part": 10
  },
  {
   "id": 995,
   "question": "For embedded Rust, what does the cortex-m crate provide?",
   "options": {
    "A": "A web framework",
    "B": "Peripheral access, startup code, and utilities for ARM Cortex-M microcontrollers",
    "C": "A HAL",
    "D": "Only types"
   },
   "correct": "B",
   "explanation": "cortex-m provides low-level access: registers, interrupts, startup (reset handler, stack), delay. Often used with a HAL (hardware abstraction) for a specific chip. Foundation for embedded Rust on ARM.",
   "part": 10
  },
  {
   "id": 996,
   "question": "What is the purpose of [target.'cfg(...)'.dependencies] in Cargo.toml?",
   "options": {
    "A": "To add features",
    "B": "To add dependencies only when building for specific targets (e.g., different deps for wasm vs native)",
    "C": "To patch",
    "D": "To enable std"
   },
   "correct": "B",
   "explanation": "[target.'cfg(target_arch = \"wasm32\")'.dependencies] adds deps only for WASM. Useful when a crate has different implementations per target (e.g., wasm-bindgen for WASM, something else for native).",
   "part": 10
  },
  {
   "id": 997,
   "question": "In no_std, how do you allocate (e.g., Vec, String)?",
   "options": {
    "A": "You cannot",
    "B": "Use the alloc crate and a global allocator (e.g., alloc::alloc::Global); implement the allocator for your platform",
    "C": "Use std",
    "D": "Use Box only"
   },
   "correct": "B",
   "explanation": "alloc provides Vec, String, Box, etc. You need a global allocator (#[global_allocator]). On embedded, you might use a bump allocator or linked list allocator. core has no heap; alloc adds it.",
   "part": 10
  },
  {
   "id": 998,
   "question": "What does wasm32-unknown-unknown target produce?",
   "options": {
    "A": "Native binary",
    "B": "WebAssembly module that runs in browsers/Node without a JS runtime (no Emscripten)",
    "C": "JavaScript",
    "D": "Asm.js"
   },
   "correct": "B",
   "explanation": "wasm32-unknown-unknown: pure WASM. No libc, no OS. Runs in browser or wasmtime/wasmer. For Emscripten (JS glue, libc), use wasm32-unknown-emscripten. unknown-unknown is the common target.",
   "part": 10
  },
  {
   "id": 999,
   "question": "Why might an embedded crate use #[no_main]?",
   "options": {
    "A": "To disable main",
    "B": "The platform provides its own entry point (e.g., cortex-m's reset handler); the crate defines handlers, not main",
    "C": "To enable main",
    "D": "For testing"
   },
   "correct": "B",
   "explanation": "Embedded often has no main(). The MCU starts at a reset vector. cortex-m-rt provides the entry. Your code has #[entry] or interrupt handlers. #[no_main] says don't use the standard main.",
   "part": 10
  },
  {
   "id": 1000,
   "question": "What does the `critical-section` crate provide for no_std embedded code?",
   "options": {
    "A": "A web framework",
    "B": "A way to obtain a critical section (disable interrupts) for shared mutable state without a full RTOS",
    "C": "Memory allocation",
    "D": "Async support"
   },
   "correct": "B",
   "explanation": "critical-section provides a way to run code with interrupts disabled. Used for shared mutable state in no_std. The implementation is platform-specific (cortex-m, etc.). Simpler than a full mutex for single-core embedded.",
   "part": 10
  }
 ]
};
