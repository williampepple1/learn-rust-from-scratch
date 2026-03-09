const GUIDES_DATA = [
 {
  "order": 1,
  "slug": "variables-and-types",
  "emoji": "📦",
  "title": "Variables & Data Types",
  "sections": [
   {
    "heading": "What Are Variables and Why Do They Matter?",
    "blocks": [
     {
      "type": "markdown",
      "content": "Variables let you store and reuse values in your program. In Rust, variables are **immutable by default** — once you assign a value, it cannot change unless you explicitly opt in. This design prevents many bugs and makes your code easier to reason about."
     }
    ]
   },
   {
    "heading": "Basic Syntax: `let` Bindings",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use `let` to create a variable binding. The name is bound to a value."
     },
     {
      "type": "code",
      "content": "let x = 42;\nprintln!(\"x = {}\", x);"
     }
    ]
   },
   {
    "heading": "Mutability with `mut`",
    "blocks": [
     {
      "type": "markdown",
      "content": "By default, variables are immutable. To allow changes, add the `mut` keyword."
     },
     {
      "type": "code",
      "content": "let mut count = 0;\ncount += 1;\ncount += 1;\nprintln!(\"count = {}\", count);"
     }
    ]
   },
   {
    "heading": "Type Inference and Type Annotations",
    "blocks": [
     {
      "type": "markdown",
      "content": "Rust infers types from how you use variables. You can also annotate types explicitly when you want clarity or when the compiler needs a hint."
     },
     {
      "type": "code",
      "content": "let inferred = 100;           // Compiler infers i32\nlet explicit: i64 = 100;      // We specify i64\nlet float: f64 = 3.14;       // Must annotate for floats (default is f64)\nprintln!(\"inferred: {}, explicit: {}, float: {}\", inferred, explicit, float);"
     }
    ]
   },
   {
    "heading": "Integer Types",
    "blocks": [
     {
      "type": "markdown",
      "content": "Rust has signed (`i`) and unsigned (`u`) integers in sizes 8, 16, 32, 64, and 128 bits. `isize` and `usize` match the pointer size on your machine (32 or 64 bits)."
     },
     {
      "type": "code",
      "content": "let small: i8 = -128;\nlet medium: i32 = 1_000_000;\nlet big: u64 = 18_446_744_073_709_551_615;\nlet index: usize = 42;  // Common for array indices\nprintln!(\"i8: {}, i32: {}, u64: {}, usize: {}\", small, medium, big, index);"
     }
    ]
   },
   {
    "heading": "Floating-Point Types",
    "blocks": [
     {
      "type": "markdown",
      "content": "Rust has `f32` (32-bit) and `f64` (64-bit). The default for literals like `3.14` is `f64`."
     },
     {
      "type": "code",
      "content": "let pi: f64 = 3.14159;\nlet small_float: f32 = 2.5;\nprintln!(\"pi = {}, small_float = {}\", pi, small_float);"
     }
    ]
   },
   {
    "heading": "Booleans and Characters",
    "blocks": [
     {
      "type": "markdown",
      "content": "`bool` is `true` or `false`. `char` is a single Unicode scalar value (4 bytes), not a single byte like in C."
     },
     {
      "type": "code",
      "content": "let is_rust_fun: bool = true;\nlet letter: char = 'R';\nlet emoji: char = '🦀';\nprintln!(\"bool: {}, letter: {}, emoji: {}\", is_rust_fun, letter, emoji);"
     }
    ]
   },
   {
    "heading": "`&str` vs `String`",
    "blocks": [
     {
      "type": "markdown",
      "content": "`&str` is a **string slice** — a view into existing string data (immutable). `String` is an owned, growable string stored on the heap."
     },
     {
      "type": "code",
      "content": "let slice: &str = \"hello\";           // Immutable view\nlet owned: String = String::from(\"world\");  // Owned, growable\nlet mut growable = String::from(\"Hi\");\ngrowable.push_str(\" there!\");\nprintln!(\"slice: {}, owned: {}, growable: {}\", slice, owned, growable);"
     }
    ]
   },
   {
    "heading": "Tuples and Arrays",
    "blocks": [
     {
      "type": "markdown",
      "content": "**Tuples** group values of different types. **Arrays** hold a fixed number of values of the same type."
     },
     {
      "type": "code",
      "content": "let tuple: (i32, f64, &str) = (42, 3.14, \"hello\");\nprintln!(\"tuple: {:?}\", tuple);\nprintln!(\"First: {}, Second: {}\", tuple.0, tuple.1);\n\nlet arr: [i32; 5] = [1, 2, 3, 4, 5];\nprintln!(\"array: {:?}\", arr);\nprintln!(\"arr[2] = {}\", arr[2]);"
     }
    ]
   },
   {
    "heading": "Type Casting with `as`",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use `as` to convert between compatible types. Be careful with truncation!"
     },
     {
      "type": "code",
      "content": "let x: i32 = 100;\nlet y: f64 = x as f64;\nlet z: u8 = 255;\nlet w: i32 = z as i32;  // 255 fits in i32\nprintln!(\"x as f64: {}, z as i32: {}\", y, w);"
     }
    ]
   },
   {
    "heading": "Numeric Literals: Hex, Octal, Binary, Underscores",
    "blocks": [
     {
      "type": "markdown",
      "content": "Rust supports readable number formats. Underscores are ignored and help with readability."
     },
     {
      "type": "code",
      "content": "let decimal = 1_000_000;\nlet hex = 0xFF;\nlet octal = 0o77;\nlet binary = 0b1111_0000;\nprintln!(\"decimal: {}, hex: {}, octal: {}, binary: {}\", decimal, hex, octal, binary);"
     }
    ]
   },
   {
    "heading": "Constants vs Statics",
    "blocks": [
     {
      "type": "markdown",
      "content": "**Constants** (`const`) are compile-time values, inlined everywhere. **Statics** (`static`) have a fixed memory location and can be mutable (with `unsafe`). Prefer `const` for simple values."
     },
     {
      "type": "code",
      "content": "const MAX_POINTS: u32 = 100_000;\nstatic GREETING: &str = \"Hello, Rust!\";\nprintln!(\"MAX_POINTS: {}, GREETING: {}\", MAX_POINTS, GREETING);"
     }
    ]
   },
   {
    "heading": "Shadowing vs Mutability",
    "blocks": [
     {
      "type": "markdown",
      "content": "**Shadowing** lets you reuse a variable name with a new binding. The old value is hidden. This is different from `mut` — shadowing creates a new variable and can change the type."
     },
     {
      "type": "code",
      "content": "let x = 5;\nlet x = x + 1;   // Shadowing: new x = 6\nlet x = \"six\";  // Can even change type!\nprintln!(\"x = {}\", x);"
     }
    ]
   },
   {
    "heading": "Common Mistakes Beginners Make",
    "blocks": [
     {
      "type": "markdown",
      "content": "1. **Forgetting `mut`** when you need to modify a variable\n2. **Confusing `&str` and `String`** — use `&str` for function parameters when you don't need ownership\n3. **Integer overflow** — debug builds panic, release builds wrap\n4. **Using `const` for computed values** — `const` must be evaluable at compile time"
     }
    ]
   },
   {
    "heading": "Key Rules to Remember",
    "blocks": [
     {
      "type": "markdown",
      "content": "- Variables are **immutable by default** — use `mut` when you need to change them\n- Rust infers types, but you can annotate when needed\n- `&str` is a slice; `String` is owned and growable\n- Tuples group mixed types; arrays are fixed-size and same-type\n- Shadowing creates a new variable; it's not the same as mutability\n- Use `const` for compile-time constants; `static` for global state"
     }
    ]
   }
  ],
  "sectionCount": 15
 },
 {
  "order": 2,
  "slug": "functions",
  "emoji": "⚙️",
  "title": "Functions",
  "sections": [
   {
    "heading": "What Are Functions and Why Do They Matter?",
    "blocks": [
     {
      "type": "markdown",
      "content": "Functions help you avoid repetition, organize code, and make programs easier to understand and test. In Rust, functions are first-class citizens — you can pass them around, store them, and return them."
     }
    ]
   },
   {
    "heading": "Basic `fn` Syntax",
    "blocks": [
     {
      "type": "markdown",
      "content": "Define a function with `fn`, a name, parentheses for parameters, and optionally a return type."
     },
     {
      "type": "code",
      "content": "fn greet() {\n    println!(\"Hello, Rust!\");\n}\ngreet();"
     }
    ]
   },
   {
    "heading": "Parameters and Return Types",
    "blocks": [
     {
      "type": "markdown",
      "content": "Parameters go inside parentheses with type annotations. The return type comes after `->`."
     },
     {
      "type": "code",
      "content": "fn add(a: i32, b: i32) -> i32 {\n    a + b\n}\nlet sum = add(3, 7);\nprintln!(\"3 + 7 = {}\", sum);"
     }
    ]
   },
   {
    "heading": "Expressions vs Statements",
    "blocks": [
     {
      "type": "markdown",
      "content": "In Rust, **expressions** produce a value; **statements** do not. The last expression in a function (no semicolon!) is the return value. A semicolon turns it into a statement, which returns `()`."
     },
     {
      "type": "code",
      "content": "fn double(x: i32) -> i32 {\n    x * 2   // No semicolon = expression, this is returned\n}\n// BAD: fn bad_double(x: i32) -> i32 { x * 2; }  // Semicolon = statement, returns () — type error!\nprintln!(\"double(5) = {}\", double(5));"
     }
    ]
   },
   {
    "heading": "The Unit Type `()`",
    "blocks": [
     {
      "type": "markdown",
      "content": "Functions that don't return a value implicitly return `()`, the unit type. It's like \"nothing\" but as a type."
     },
     {
      "type": "code",
      "content": "fn do_nothing() {\n    println!(\"Doing nothing useful\");\n}\nlet result = do_nothing();\nprintln!(\"Result of do_nothing: {:?}\", result);"
     }
    ]
   },
   {
    "heading": "Early Return with `return`",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use `return` to exit a function early with a value. Most of the time, the trailing expression is preferred."
     },
     {
      "type": "code",
      "content": "fn abs(n: i32) -> i32 {\n    if n < 0 {\n        return -n;\n    }\n    n\n}\nprintln!(\"abs(-10) = {}, abs(10) = {}\", abs(-10), abs(10));"
     }
    ]
   },
   {
    "heading": "Multiple Return Values with Tuples",
    "blocks": [
     {
      "type": "markdown",
      "content": "Return multiple values by packing them in a tuple."
     },
     {
      "type": "code",
      "content": "fn min_max(a: i32, b: i32) -> (i32, i32) {\n    if a < b { (a, b) } else { (b, a) }\n}\nlet (min, max) = min_max(42, 17);\nprintln!(\"min = {}, max = {}\", min, max);"
     }
    ]
   },
   {
    "heading": "Nested Functions",
    "blocks": [
     {
      "type": "markdown",
      "content": "You can define functions inside other functions. Useful for small helpers that don't need to be visible elsewhere."
     },
     {
      "type": "code",
      "content": "fn outer() {\n    fn inner(x: i32) -> i32 {\n        x + 1\n    }\n    println!(\"inner(10) = {}\", inner(10));\n}\nouter();"
     }
    ]
   },
   {
    "heading": "Function Pointers: The `fn` Type",
    "blocks": [
     {
      "type": "markdown",
      "content": "Functions have a type: `fn(ArgTypes) -> ReturnType`. You can pass functions as arguments or store them in variables."
     },
     {
      "type": "code",
      "content": "fn apply_twice(f: fn(i32) -> i32, x: i32) -> i32 {\n    f(f(x))\n}\nfn add_one(x: i32) -> i32 { x + 1 }\nlet result = apply_twice(add_one, 5);\nprintln!(\"apply_twice(add_one, 5) = {}\", result);"
     }
    ]
   },
   {
    "heading": "Diverging Functions `-> !`",
    "blocks": [
     {
      "type": "markdown",
      "content": "A diverging function never returns. It has the \"never\" type `!`. Examples: `panic!()`, infinite loops."
     },
     {
      "type": "code",
      "content": "fn forever() -> ! {\n    loop {\n        // Never returns\n    }\n}\n// forever();  // Uncomment to run forever!\nfn panic_example() -> ! {\n    panic!(\"This function never returns normally\");\n}\n// panic_example();  // Uncomment to panic\nprintln!(\"Diverging functions never return — we skip calling them here.\");"
     }
    ]
   },
   {
    "heading": "Documentation Comments `///`",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use `///` for doc comments that appear in generated documentation. They support Markdown!"
     },
     {
      "type": "code",
      "content": "/// Computes the square of a number.\n/// # Examples\n/// ```\n/// assert_eq!(square(4), 16);\n/// ```\nfn square(x: i32) -> i32 {\n    x * x\n}\nprintln!(\"square(4) = {}\", square(4));"
     }
    ]
   },
   {
    "heading": "The `main` Function",
    "blocks": [
     {
      "type": "markdown",
      "content": "Every executable Rust program has a `main` function. It's the entry point. In Jupyter/EvCxR, we don't need `main` — cells run directly."
     }
    ]
   },
   {
    "heading": "Passing by Value vs by Reference",
    "blocks": [
     {
      "type": "markdown",
      "content": "By default, Rust **moves** or **copies** values. Use `&` to pass a reference (borrow) so the caller keeps ownership. Use `&mut` for mutable references."
     },
     {
      "type": "code",
      "content": "fn by_value(x: i32) {\n    println!(\"Received copy: {}\", x);\n}\nfn by_reference(s: &str) {\n    println!(\"Borrowed: {}\", s);\n}\nfn by_mut_ref(n: &mut i32) {\n    *n += 10;\n}\n\nlet num = 5;\nby_value(num);\nprintln!(\"num still usable (Copy): {}\", num);\n\nlet text = String::from(\"hello\");\nby_reference(&text);\nprintln!(\"text still owned: {}\", text);\n\nlet mut value = 7;\nby_mut_ref(&mut value);\nprintln!(\"value after mutation: {}\", value);"
     }
    ]
   },
   {
    "heading": "Common Mistakes Beginners Make",
    "blocks": [
     {
      "type": "markdown",
      "content": "1. **Adding a semicolon** to the last expression — it becomes a statement returning `()`\n2. **Forgetting return type** when the function returns something other than `()`\n3. **Confusing `fn` type with closures** — `fn` is for function pointers, not closures\n4. **Passing by value when you need the original** — use `&` to borrow"
     }
    ]
   },
   {
    "heading": "Key Rules to Remember",
    "blocks": [
     {
      "type": "markdown",
      "content": "- The last expression (no semicolon) is the return value\n- Use `return` for early exits\n- `()` is the unit type for \"no value\"\n- Tuples let you return multiple values\n- `fn(A, B) -> C` is the type of a function\n- `-> !` means the function never returns\n- Use `&` and `&mut` to pass by reference and avoid moving"
     }
    ]
   }
  ],
  "sectionCount": 15
 },
 {
  "order": 3,
  "slug": "control-flow",
  "emoji": "🔀",
  "title": "Control Flow",
  "sections": [
   {
    "heading": "What Is Control Flow and Why Does It Matter?",
    "blocks": [
     {
      "type": "markdown",
      "content": "Control flow determines which code runs and how many times. Without it, programs would execute top-to-bottom with no branching or loops. Rust's design — making `if` and `match` expressions — encourages clear, value-producing code."
     }
    ]
   },
   {
    "heading": "`if` / `else` Basics",
    "blocks": [
     {
      "type": "markdown",
      "content": "Conditions must be `bool` — no implicit conversion from numbers. Use `if`, `else if`, and `else`."
     },
     {
      "type": "code",
      "content": "let x = 7;\nif x < 5 {\n    println!(\"x is small\");\n} else if x < 10 {\n    println!(\"x is medium\");\n} else {\n    println!(\"x is large\");\n}"
     }
    ]
   },
   {
    "heading": "`if` as an Expression (in `let`)",
    "blocks": [
     {
      "type": "markdown",
      "content": "Because `if` is an expression, you can use it to assign a value. All branches must produce the same type."
     },
     {
      "type": "code",
      "content": "let condition = true;\nlet number = if condition { 5 } else { 6 };\nprintln!(\"number = {}\", number);"
     }
    ]
   },
   {
    "heading": "`match` — Exhaustive Pattern Matching",
    "blocks": [
     {
      "type": "markdown",
      "content": "`match` compares a value against patterns and runs the first matching arm. The compiler enforces **exhaustiveness** — you must handle all possible cases."
     },
     {
      "type": "code",
      "content": "let value = 3;\nlet description = match value {\n    1 => \"one\",\n    2 => \"two\",\n    3 => \"three\",\n    _ => \"something else\",  // _ catches everything\n};\nprintln!(\"{} is {}\", value, description);"
     }
    ]
   },
   {
    "heading": "Match Guards and Bindings",
    "blocks": [
     {
      "type": "markdown",
      "content": "**Guards** add extra conditions with `if`. **Bindings** capture values with `@`."
     },
     {
      "type": "code",
      "content": "let pair = (0, 5);\nmatch pair {\n    (0, y) => println!(\"x is 0, y is {}\", y),\n    (x, 0) => println!(\"x is {}, y is 0\", x),\n    (x, y) if x == y => println!(\"equal: {}\", x),\n    (x, y) => println!(\"x={}, y={}\", x, y),\n}\n\nlet n = 10;\nmatch n {\n    x @ 1..=5 => println!(\"Small: {}\", x),\n    x @ 6..=10 => println!(\"Medium: {}\", x),\n    _ => println!(\"Large\"),\n}"
     }
    ]
   },
   {
    "heading": "Loops: `loop`, `while`, `for`",
    "blocks": [
     {
      "type": "markdown",
      "content": "**`loop`** runs forever until `break`. **`while`** runs while a condition is true. **`for`** iterates over a collection."
     },
     {
      "type": "code",
      "content": "let mut count = 0;\nloop {\n    count += 1;\n    if count >= 3 { break; }\n}\nprintln!(\"Broke after {} iterations\", count);"
     },
     {
      "type": "code",
      "content": "let mut i = 0;\nwhile i < 3 {\n    println!(\"i = {}\", i);\n    i += 1;\n}"
     },
     {
      "type": "code",
      "content": "for item in [10, 20, 30] {\n    println!(\"item = {}\", item);\n}"
     }
    ]
   },
   {
    "heading": "Loop Labels and `break` with Values",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use labels like `'outer:` to break from nested loops. `loop` can return a value with `break value`."
     },
     {
      "type": "code",
      "content": "let result = loop {\n    break 42;\n};\nprintln!(\"loop returned: {}\", result);\n\n'outer: for i in 0..3 {\n    for j in 0..3 {\n        if i == 1 && j == 1 {\n            break 'outer;\n        }\n        println!(\"i={}, j={}\", i, j);\n    }\n}"
     }
    ]
   },
   {
    "heading": "Ranges: `..` and `..=`",
    "blocks": [
     {
      "type": "markdown",
      "content": "`..` is exclusive of the end; `..=` is inclusive."
     },
     {
      "type": "code",
      "content": "for i in 0..5 {\n    print!(\"{} \", i);\n}\nprintln!();\nfor i in 0..=5 {\n    print!(\"{} \", i);\n}\nprintln!();"
     }
    ]
   },
   {
    "heading": "`if let` — Match One Pattern",
    "blocks": [
     {
      "type": "markdown",
      "content": "When you only care about one pattern, `if let` is shorter than `match`."
     },
     {
      "type": "code",
      "content": "let some_value: Option<i32> = Some(7);\nif let Some(x) = some_value {\n    println!(\"Got value: {}\", x);\n}\n\nlet none_value: Option<i32> = None;\nif let Some(x) = none_value {\n    println!(\"Got value: {}\", x);\n} else {\n    println!(\"Got None\");\n}"
     }
    ]
   },
   {
    "heading": "`while let` — Loop While Pattern Matches",
    "blocks": [
     {
      "type": "markdown",
      "content": "Useful for draining iterators or popping from a stack until empty."
     },
     {
      "type": "code",
      "content": "let mut stack = vec![1, 2, 3];\nwhile let Some(top) = stack.pop() {\n    println!(\"Popped: {}\", top);\n}"
     }
    ]
   },
   {
    "heading": "`?` Operator for Early Return",
    "blocks": [
     {
      "type": "markdown",
      "content": "The `?` operator propagates errors: if the value is `Err`, return early; otherwise unwrap the `Ok`."
     },
     {
      "type": "code",
      "content": "fn might_fail() -> Result<i32, String> {\n    let x: Result<i32, String> = Ok(10);\n    let y = x?;  // If Err, return early; else y = 10\n    Ok(y * 2)\n}\nprintln!(\"Result: {:?}\", might_fail());"
     }
    ]
   },
   {
    "heading": "Iterating with `for`-in",
    "blocks": [
     {
      "type": "markdown",
      "content": "`for` works with any type that implements `IntoIterator`: ranges, arrays, vectors, iterators."
     },
     {
      "type": "code",
      "content": "let v = vec![\"a\", \"b\", \"c\"];\nfor (i, s) in v.iter().enumerate() {\n    println!(\"{}: {}\", i, s);\n}"
     }
    ]
   },
   {
    "heading": "Common Mistakes Beginners Make",
    "blocks": [
     {
      "type": "markdown",
      "content": "1. **Using `if x` when x is a number** — Rust requires `bool`; use `if x != 0`\n2. **Forgetting `_` in match** — exhaustiveness is required\n3. **Using `break` without a value** in a `loop` when you want to return something\n4. **Confusing `..` and `..=`** — 0..5 is 0–4; 0..=5 is 0–5"
     }
    ]
   },
   {
    "heading": "Key Rules to Remember",
    "blocks": [
     {
      "type": "markdown",
      "content": "- `if` conditions must be `bool`\n- `if` and `match` are expressions — they produce values\n- `match` must be exhaustive; use `_` as a catch-all\n- `loop` can return a value with `break value`\n- Use `'label:` for breaking out of nested loops\n- `if let` and `while let` simplify single-pattern matching\n- `?` propagates errors in `Result` and `Option`"
     }
    ]
   }
  ],
  "sectionCount": 14
 },
 {
  "order": 4,
  "slug": "structs",
  "emoji": "🏗️",
  "title": "Structs",
  "sections": [
   {
    "heading": "What Are Structs and Why Do They Matter?",
    "blocks": [
     {
      "type": "markdown",
      "content": "Structs bundle data with clear, named fields. Instead of passing five separate parameters, you pass one struct. They make code more readable, self-documenting, and easier to extend."
     }
    ]
   },
   {
    "heading": "Named Structs",
    "blocks": [
     {
      "type": "markdown",
      "content": "The most common kind: define fields with names and types, then create instances by assigning values to each field."
     },
     {
      "type": "code",
      "content": "struct User {\n    username: String,\n    email: String,\n    active: bool,\n}\n\nlet user = User {\n    username: String::from(\"alice\"),\n    email: String::from(\"alice@example.com\"),\n    active: true,\n};\nprintln!(\"User: {} ({})\", user.username, user.email);"
     }
    ]
   },
   {
    "heading": "Tuple Structs",
    "blocks": [
     {
      "type": "markdown",
      "content": "Structs without named fields — just types. Useful when you want a distinct type but don't need field names. Access with `.0`, `.1`, etc."
     },
     {
      "type": "code",
      "content": "struct Color(i32, i32, i32);\nstruct Point(i32, i32);\n\nlet red = Color(255, 0, 0);\nlet origin = Point(0, 0);\nprintln!(\"Red: ({}, {}, {}), Origin: ({}, {})\", red.0, red.1, red.2, origin.0, origin.1);"
     }
    ]
   },
   {
    "heading": "Unit Structs",
    "blocks": [
     {
      "type": "markdown",
      "content": "Structs with no fields. Useful as markers or for implementing traits without storing data."
     },
     {
      "type": "code",
      "content": "struct AlwaysEqual;\nlet subject = AlwaysEqual;\n// No data to access — it's a type-level marker"
     }
    ]
   },
   {
    "heading": "Field Init Shorthand",
    "blocks": [
     {
      "type": "markdown",
      "content": "When a struct field and a variable have the same name, you can omit the repetition."
     },
     {
      "type": "code",
      "content": "struct Person {\n    name: String,\n    age: u32,\n}\n\nlet name = String::from(\"Bob\");\nlet age = 30;\nlet person = Person { name, age };  // shorthand for name: name, age: age\nprintln!(\"{} is {} years old\", person.name, person.age);"
     }
    ]
   },
   {
    "heading": "Struct Update Syntax `..`",
    "blocks": [
     {
      "type": "markdown",
      "content": "Create a new struct from an existing one, changing only some fields. Use `..other` to copy the rest."
     },
     {
      "type": "code",
      "content": "struct Config {\n    host: String,\n    port: u16,\n    debug: bool,\n}\n\nlet default = Config {\n    host: String::from(\"localhost\"),\n    port: 8080,\n    debug: false,\n};\nlet dev = Config {\n    debug: true,\n    ..default\n};\nprintln!(\"Dev config: {}:{}, debug={}\", dev.host, dev.port, dev.debug);"
     }
    ]
   },
   {
    "heading": "`impl` Blocks and Methods",
    "blocks": [
     {
      "type": "markdown",
      "content": "Methods are functions defined on a type. Use `&self` for read-only, `&mut self` for mutation, `self` when you consume the value."
     },
     {
      "type": "code",
      "content": "struct Rectangle {\n    width: u32,\n    height: u32,\n}\n\nimpl Rectangle {\n    fn area(&self) -> u32 {\n        self.width * self.height\n    }\n    fn scale(&mut self, factor: u32) {\n        self.width *= factor;\n        self.height *= factor;\n    }\n}\n\nlet mut rect = Rectangle { width: 3, height: 4 };\nprintln!(\"Area: {}\", rect.area());\nrect.scale(2);\nprintln!(\"Scaled area: {}\", rect.area());"
     }
    ]
   },
   {
    "heading": "Associated Functions (Constructors)",
    "blocks": [
     {
      "type": "markdown",
      "content": "Functions in `impl` without `self` are **associated functions**. Call with `Type::name()`. The convention `::new()` is the standard constructor."
     },
     {
      "type": "code",
      "content": "struct Counter {\n    value: u32,\n}\n\nimpl Counter {\n    fn new() -> Counter {\n        Counter { value: 0 }\n    }\n    fn with_start(start: u32) -> Counter {\n        Counter { value: start }\n    }\n}\n\nlet c = Counter::new();\nlet c2 = Counter::with_start(10);\nprintln!(\"Counter::new() and Counter::with_start(10)\");"
     }
    ]
   },
   {
    "heading": "Derived Traits: `#[derive(Debug, Clone)]`",
    "blocks": [
     {
      "type": "markdown",
      "content": "The compiler can auto-implement common traits. `Debug` lets you print with `{:?}`; `Clone` lets you duplicate values."
     },
     {
      "type": "code",
      "content": "#[derive(Debug, Clone)]\nstruct Item {\n    name: String,\n    count: i32,\n}\n\nlet item = Item { name: String::from(\"apple\"), count: 5 };\nprintln!(\"Item: {:?}\", item);\nlet copy = item.clone();\nprintln!(\"Clone: {:?}\", copy);"
     }
    ]
   },
   {
    "heading": "Visibility with `pub`",
    "blocks": [
     {
      "type": "markdown",
      "content": "By default, struct fields are private. Use `pub` to make them (or the struct itself) visible outside the module."
     },
     {
      "type": "code",
      "content": "pub struct PublicStruct {\n    pub name: String,\n    id: i32,  // private by default\n}\n\nlet s = PublicStruct { name: String::from(\"test\"), id: 1 };\nprintln!(\"name (public): {}\", s.name);"
     }
    ]
   },
   {
    "heading": "Structs vs Tuples",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use **structs** when you have named, meaningful fields. Use **tuples** for quick grouping of a few values or when order matters more than names."
     },
     {
      "type": "code",
      "content": "// Tuple: fine for (x, y) coordinates\nlet point = (10, 20);\n\n// Struct: better when fields have distinct roles\nstruct UserProfile {\n    username: String,\n    score: u32,\n}\nlet profile = UserProfile { username: String::from(\"alice\"), score: 100 };\nprintln!(\"{} has score {}\", profile.username, profile.score);"
     }
    ]
   },
   {
    "heading": "Builder Pattern Intro",
    "blocks": [
     {
      "type": "markdown",
      "content": "When a struct has many optional fields, a builder lets you set only what you need. Methods return `&mut self` for chaining."
     },
     {
      "type": "code",
      "content": "#[derive(Debug)]\nstruct Query {\n    table: String,\n    limit: Option<u32>,\n}\n\nimpl Query {\n    fn new(table: &str) -> Query {\n        Query { table: table.to_string(), limit: None }\n    }\n    fn limit(mut self, n: u32) -> Query {\n        self.limit = Some(n);\n        self\n    }\n}\n\nlet q = Query::new(\"users\").limit(10);\nprintln!(\"Query: {:?}\", q);"
     }
    ]
   },
   {
    "heading": "Printing with Debug and Display",
    "blocks": [
     {
      "type": "markdown",
      "content": "`Debug` (`{:?}`) is for developers. `Display` (`{}`) is for user-facing output. `Debug` can be derived; `Display` must be implemented manually."
     },
     {
      "type": "code",
      "content": "use std::fmt;\n\n#[derive(Debug)]\nstruct Coords {\n    x: i32,\n    y: i32,\n}\n\nimpl fmt::Display for Coords {\n    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {\n        write!(f, \"({}, {})\", self.x, self.y)\n    }\n}\n\nlet c = Coords { x: 3, y: 4 };\nprintln!(\"Debug: {:?}\", c);\nprintln!(\"Display: {}\", c);"
     }
    ]
   },
   {
    "heading": "Common Mistakes Beginners Make",
    "blocks": [
     {
      "type": "markdown",
      "content": "1. **Forgetting `#[derive(Debug)]`** when you want to print a struct\n2. **Using `self` instead of `&self`** when you don't need to consume\n3. **Making all fields `pub`** — prefer methods for controlled access\n4. **Confusing tuple structs with tuples** — `Point(i32, i32)` is a type, not `(i32, i32)`"
     }
    ]
   },
   {
    "heading": "Key Rules to Remember",
    "blocks": [
     {
      "type": "markdown",
      "content": "- Named structs have named fields; tuple structs use `.0`, `.1`\n- Use field init shorthand when names match\n- `..other` copies remaining fields in struct update\n- `&self` = borrow, `&mut self` = mutable borrow, `self` = consume\n- Associated functions (no `self`) are called with `Type::name()`\n- `#[derive(Debug)]` enables `{:?}`; implement `Display` for `{}`\n- Use `pub` to expose structs and fields across module boundaries"
     }
    ]
   }
  ],
  "sectionCount": 15
 },
 {
  "order": 5,
  "slug": "enums",
  "emoji": "🎯",
  "title": "Enums & Pattern Matching",
  "sections": [
   {
    "heading": "What Are Enums and Why Do They Matter?",
    "blocks": [
     {
      "type": "markdown",
      "content": "In many languages, you might use strings or magic numbers to represent different states (e.g., `\"red\"`, `\"yellow\"`, `\"green\"`). Rust's enums are **type-safe**: the compiler knows exactly which values are valid and forces you to handle every possibility. No more \"what if someone passes an invalid value?\" — it simply cannot happen."
     }
    ]
   },
   {
    "heading": "Basic Enums: Variants with No Data",
    "blocks": [
     {
      "type": "markdown",
      "content": "The simplest enum has variants that don't carry any extra data. Think of it like a list of named options."
     },
     {
      "type": "code",
      "content": "#[derive(Debug)]\nenum TrafficLight {\n    Red,\n    Yellow,\n    Green,\n}\n\nlet light = TrafficLight::Green;\nprintln!(\"We have a traffic light: {:?}\", light);"
     }
    ]
   },
   {
    "heading": "Variants with Tuple Data",
    "blocks": [
     {
      "type": "markdown",
      "content": "Enum variants can hold data! Tuple-style variants store values in order, like a tuple."
     },
     {
      "type": "code",
      "content": "enum Message {\n    Quit,\n    Move { x: i32, y: i32 },\n    Write(String),\n    ChangeColor(i32, i32, i32),\n}\n\nlet msg1 = Message::Write(String::from(\"Hello!\"));\nlet msg2 = Message::ChangeColor(255, 0, 128);\nlet msg3 = Message::Move { x: 10, y: 20 };\n\nprintln!(\"Messages created successfully!\");"
     }
    ]
   },
   {
    "heading": "Variants with Struct Data",
    "blocks": [
     {
      "type": "markdown",
      "content": "You can use named fields (like a struct) for clarity when a variant has multiple pieces of data."
     },
     {
      "type": "code",
      "content": "#[derive(Debug)]\nenum Shape {\n    Circle { radius: f64 },\n    Rectangle { width: f64, height: f64 },\n}\n\nlet circle = Shape::Circle { radius: 5.0 };\nlet rect = Shape::Rectangle { width: 10.0, height: 4.0 };\nprintln!(\"circle: {:?}, rect: {:?}\", circle, rect);"
     }
    ]
   },
   {
    "heading": "Option&lt;T&gt;: Some and None",
    "blocks": [
     {
      "type": "markdown",
      "content": "`Option<T>` is Rust's way of representing \"maybe there's a value.\" Instead of `null` (which causes null pointer bugs), Rust uses:\n- `Some(value)` — there is a value\n- `None` — there is no value\n\nThe compiler forces you to handle both cases!"
     },
     {
      "type": "code",
      "content": "fn find_first_even(numbers: &[i32]) -> Option<i32> {\n    for &n in numbers {\n        if n % 2 == 0 { return Some(n); }\n    }\n    None\n}\n\nlet nums = vec![1, 3, 5, 8, 9];\nmatch find_first_even(&nums) {\n    Some(n) => println!(\"First even: {}\", n),\n    None => println!(\"No even number found\"),\n}"
     }
    ]
   },
   {
    "heading": "Result&lt;T, E&gt;: Ok and Err",
    "blocks": [
     {
      "type": "markdown",
      "content": "`Result<T, E>` represents either success (`Ok(value)`) or failure (`Err(error)`). It's the standard way to handle recoverable errors in Rust."
     },
     {
      "type": "code",
      "content": "fn divide(a: i32, b: i32) -> Result<i32, String> {\n    if b == 0 {\n        Err(String::from(\"Cannot divide by zero\"))\n    } else {\n        Ok(a / b)\n    }\n}\n\nprintln!(\"{:?}\", divide(10, 2));\nprintln!(\"{:?}\", divide(10, 0));"
     }
    ]
   },
   {
    "heading": "Match: Exhaustive Pattern Matching",
    "blocks": [
     {
      "type": "markdown",
      "content": "`match` is like a supercharged switch. It must be **exhaustive** — you must handle every possible variant. The compiler will error if you forget one!"
     },
     {
      "type": "code",
      "content": "enum Coin {\n    Penny,\n    Nickel,\n    Dime,\n    Quarter,\n}\n\nfn value_in_cents(coin: Coin) -> u8 {\n    match coin {\n        Coin::Penny => 1,\n        Coin::Nickel => 5,\n        Coin::Dime => 10,\n        Coin::Quarter => 25,\n    }\n}\n\nprintln!(\"A dime is worth {} cents\", value_in_cents(Coin::Dime));"
     }
    ]
   },
   {
    "heading": "Match with Data: Extracting Values",
    "blocks": [
     {
      "type": "markdown",
      "content": "When variants carry data, you can extract and use it in the match arms."
     },
     {
      "type": "code",
      "content": "fn area(shape: &Shape) -> f64 {\n    match shape {\n        Shape::Circle { radius } => std::f64::consts::PI * radius * radius,\n        Shape::Rectangle { width, height } => width * height,\n    }\n}\n\nlet c = Shape::Circle { radius: 3.0 };\nlet r = Shape::Rectangle { width: 4.0, height: 5.0 };\nprintln!(\"Circle area: {:.2}\", area(&c));\nprintln!(\"Rectangle area: {}\", area(&r));"
     }
    ]
   },
   {
    "heading": "if let: Matching One Variant",
    "blocks": [
     {
      "type": "markdown",
      "content": "When you only care about one variant, `if let` is more concise than `match`."
     },
     {
      "type": "code",
      "content": "let some_value: Option<i32> = Some(42);\n\nif let Some(x) = some_value {\n    println!(\"We got the value: {}\", x);\n}\n\nlet none_value: Option<i32> = None;\nif let Some(x) = none_value {\n    println!(\"This won't run\");\n} else {\n    println!(\"It was None\");\n}"
     }
    ]
   },
   {
    "heading": "while let: Looping Until a Pattern Fails",
    "blocks": [
     {
      "type": "markdown",
      "content": "`while let` keeps looping as long as the pattern matches. Great for popping from a stack!"
     },
     {
      "type": "code",
      "content": "let mut stack = vec![1, 2, 3];\n\nwhile let Some(top) = stack.pop() {\n    println!(\"Popped: {}\", top);\n}\nprintln!(\"Stack is empty\");"
     }
    ]
   },
   {
    "heading": "Methods on Enums with impl",
    "blocks": [
     {
      "type": "markdown",
      "content": "Enums can have methods, just like structs. Use `impl` to add behavior."
     },
     {
      "type": "code",
      "content": "impl TrafficLight {\n    fn next(&self) -> TrafficLight {\n        match self {\n            TrafficLight::Red => TrafficLight::Green,\n            TrafficLight::Yellow => TrafficLight::Red,\n            TrafficLight::Green => TrafficLight::Yellow,\n        }\n    }\n}\n\nlet light = TrafficLight::Red;\nlet next = light.next();\nprintln!(\"After Red comes: {:?}\", next);"
     }
    ]
   },
   {
    "heading": "Common Standard Library Enums",
    "blocks": [
     {
      "type": "markdown",
      "content": "Besides `Option` and `Result`, you'll see enums like `std::cmp::Ordering` (Less, Equal, Greater), `IpAddr` (V4, V6), and `Option`/`Result` everywhere in the standard library."
     },
     {
      "type": "code",
      "content": "use std::cmp::Ordering;\n\nlet x = 5;\nlet y = 10;\nlet ordering = x.cmp(&y);\n\nmatch ordering {\n    Ordering::Less => println!(\"x is less than y\"),\n    Ordering::Equal => println!(\"x equals y\"),\n    Ordering::Greater => println!(\"x is greater than y\"),\n}"
     }
    ]
   },
   {
    "heading": "When to Use Enums vs Structs",
    "blocks": [
     {
      "type": "markdown",
      "content": "- **Use enums** when a value can be *one of* several variants (traffic light, message type, optional value).\n- **Use structs** when you have a fixed set of fields that always exist together (a point, a user).\n\nEnums and structs work great together — enum variants can hold structs!"
     }
    ]
   },
   {
    "heading": "Enum Sizing and the Never Type",
    "blocks": [
     {
      "type": "markdown",
      "content": "Rust enums are sized to fit their largest variant. The **never type** `!` (also written as `std::convert::Infallible`) represents computations that never finish — useful for `Result<T, !>` when failure is impossible."
     }
    ]
   },
   {
    "heading": "Enums for State Machines",
    "blocks": [
     {
      "type": "markdown",
      "content": "Enums are perfect for modeling state machines: each variant is a state, and transitions are just creating a new variant. The compiler ensures invalid states are unrepresentable!"
     },
     {
      "type": "code",
      "content": "#[derive(Debug)]\nenum ConnectionState {\n    Disconnected,\n    Connecting,\n    Connected { user_id: u32 },\n}\n\nlet state = ConnectionState::Connected { user_id: 42 };\nprintln!(\"State: {:?}\", state);"
     }
    ]
   },
   {
    "heading": "Common Mistakes Beginners Make",
    "blocks": [
     {
      "type": "markdown",
      "content": "1. **Forgetting to handle all match arms** — use `_` or `other` as a catch-all if needed\n2. **Confusing `Option` with default values** — `Option` means \"maybe absent\"; use `unwrap_or` for defaults\n3. **Overusing `unwrap()`** — prefer `match` or `?` for proper error handling\n4. **Not using `#[derive(Debug)]`** — add it to enums you want to print with `{:?}`"
     }
    ]
   },
   {
    "heading": "Key Rules to Remember",
    "blocks": [
     {
      "type": "markdown",
      "content": "- Enums define a type with multiple variants; each variant can carry data\n- `Option<T>` = Some(value) or None; `Result<T,E>` = Ok(value) or Err(error)\n- `match` must be exhaustive — handle every variant\n- Use `if let` for single-variant checks; `while let` for loop-until-fail\n- Enums can have methods via `impl`\n- Enums are ideal for state machines and \"one of many\" data"
     }
    ]
   }
  ],
  "sectionCount": 17
 },
 {
  "order": 6,
  "slug": "ownership-and-borrowing",
  "emoji": "🔑",
  "title": "Ownership & Borrowing",
  "sections": [
   {
    "heading": "The Three Ownership Rules",
    "blocks": [
     {
      "type": "markdown",
      "content": "1. **Each value has exactly one owner.**\n2. **When the owner goes out of scope, the value is dropped (freed).**\n3. **You can have either one mutable reference or many immutable references, but not both at once.**\n\nThese rules are checked at compile time. Violate them, and the compiler won't let your code run."
     }
    ]
   },
   {
    "heading": "Stack vs Heap",
    "blocks": [
     {
      "type": "markdown",
      "content": "Rust values live in one of two places:\n- **Stack**: Fixed-size data, fast allocation. Local variables, primitives, small structs.\n- **Heap**: Dynamic-size data, slower. `String`, `Vec`, and other growable types.\n\nOwnership determines who is responsible for freeing heap memory when it's no longer needed."
     },
     {
      "type": "code",
      "content": "let x = 5;           // Stack: i32\nlet s = String::from(\"hello\");  // Heap: String owns its buffer\nprintln!(\"x = {}, s = {}\", x, s);"
     }
    ]
   },
   {
    "heading": "Move Semantics",
    "blocks": [
     {
      "type": "markdown",
      "content": "When you assign a heap-allocated value to another variable, **ownership moves**. The original variable is no longer valid — it's like handing over a key to a house. You can't use the old variable after the move."
     },
     {
      "type": "code",
      "content": "let s1 = String::from(\"hello\");\nlet s2 = s1;  // s1's ownership moves to s2\n// println!(\"{}\", s1);  // ERROR: s1 is no longer valid!\nprintln!(\"s2 = {}\", s2);"
     }
    ]
   },
   {
    "heading": "Copy Types vs Non-Copy",
    "blocks": [
     {
      "type": "markdown",
      "content": "Types that implement `Copy` are **copied** instead of moved. Primitives like `i32`, `bool`, `char` are `Copy`. `String`, `Vec`, and most heap-allocated types are **not** `Copy` — they use move semantics."
     },
     {
      "type": "code",
      "content": "let x = 42;\nlet y = x;  // x is COPIED, both are valid\nprintln!(\"x = {}, y = {}\", x, y);\n\nlet s = String::from(\"hi\");\nlet t = s.clone();  // Explicit clone: both s and t are valid\nprintln!(\"s = {}, t = {}\", s, t);"
     }
    ]
   },
   {
    "heading": "References: Borrowing with &amp;T and &amp;mut T",
    "blocks": [
     {
      "type": "markdown",
      "content": "Instead of moving, you can **borrow** with a reference. `&T` is an immutable reference (read-only). `&mut T` is a mutable reference (can modify). The borrower doesn't own the data — the owner still does."
     },
     {
      "type": "code",
      "content": "fn calculate_length(s: &String) -> usize {\n    s.len()  // We borrow, we don't take ownership\n}\n\nlet s = String::from(\"hello\");\nlet len = calculate_length(&s);\nprintln!(\"'{}' has length {}\", s, len);  // s is still valid!"
     },
     {
      "type": "code",
      "content": "fn append_world(s: &mut String) {\n    s.push_str(\" world\");\n}\n\nlet mut s = String::from(\"hello\");\nappend_world(&mut s);\nprintln!(\"{}\", s);"
     }
    ]
   },
   {
    "heading": "The Borrowing Rules",
    "blocks": [
     {
      "type": "markdown",
      "content": "1. **Many immutable references** (`&T`) are allowed at the same time.\n2. **Only one mutable reference** (`&mut T`) at a time — and no immutable refs while it exists.\n3. References must always be valid (no dangling references).\n\nThis prevents data races and use-after-free at compile time!"
     },
     {
      "type": "code",
      "content": "let s = String::from(\"hello\");\nlet r1 = &s;\nlet r2 = &s;  // Multiple immutable refs: OK!\nprintln!(\"r1: {}, r2: {}\", r1, r2);"
     },
     {
      "type": "code",
      "content": "let mut s = String::from(\"hello\");\nlet r1 = &mut s;\nr1.push_str(\"!\");\n// let r2 = &mut s;  // ERROR: can't have two mutable refs\n// let r3 = &s;      // ERROR: can't have immutable while mutable exists\nprintln!(\"{}\", s);"
     }
    ]
   },
   {
    "heading": "Dangling References: Why Rust Prevents Them",
    "blocks": [
     {
      "type": "markdown",
      "content": "A dangling reference points to memory that has been freed. Rust's borrow checker ensures references never outlive their data. If you try to return a reference to a local variable, the compiler will stop you."
     }
    ]
   },
   {
    "heading": "Slices: &amp;str and &amp;[T]",
    "blocks": [
     {
      "type": "markdown",
      "content": "A **slice** is a reference to a contiguous sequence of elements. `&str` is a string slice (view into UTF-8 text). `&[T]` is a slice of elements of type `T`. Slices don't own data — they borrow it."
     },
     {
      "type": "code",
      "content": "let s = String::from(\"hello world\");\nlet hello: &str = &s[0..5];   // Slice of first 5 bytes\nlet world: &str = &s[6..11];  // Slice of \"world\"\nprintln!(\"{} | {}\", hello, world);"
     },
     {
      "type": "code",
      "content": "let arr = [1, 2, 3, 4, 5];\nlet slice: &[i32] = &arr[1..4];  // [2, 3, 4]\nprintln!(\"slice: {:?}\", slice);"
     }
    ]
   },
   {
    "heading": "Ownership in Function Calls and Returns",
    "blocks": [
     {
      "type": "markdown",
      "content": "Passing a value to a function **moves** it (unless it's `Copy` or you pass a reference). Returning a value **moves** it to the caller. Design your functions to take references when you don't need ownership."
     },
     {
      "type": "code",
      "content": "fn take_ownership(s: String) {\n    println!(\"I own: {}\", s);\n}  // s is dropped here\n\nfn give_ownership() -> String {\n    String::from(\"hello\")\n}\n\nlet s1 = give_ownership();\ntake_ownership(s1);\n// s1 is no longer valid\nlet s2 = give_ownership();\nprintln!(\"s2 = {}\", s2);"
     }
    ]
   },
   {
    "heading": "String vs &amp;str in Practice",
    "blocks": [
     {
      "type": "markdown",
      "content": "- **`String`**: Owned, growable, heap-allocated. Use when you need to build or modify strings.\n- **`&str`**: Borrowed slice, immutable. Use for function parameters when you don't need ownership — it accepts both `&str` and `&String` via deref coercion.\n\nPrefer `&str` for function parameters when you only need to read."
     },
     {
      "type": "code",
      "content": "fn print_greeting(name: &str) {\n    println!(\"Hello, {}!\", name);\n}\n\nlet s = String::from(\"Alice\");\nprint_greeting(&s);       // &String coerces to &str\nprint_greeting(\"Bob\");     // String literal is &str"
     }
    ]
   },
   {
    "heading": "Common Ownership Patterns",
    "blocks": [
     {
      "type": "markdown",
      "content": "1. **Borrow when possible** — use `&T` or `&mut T` to avoid moves\n2. **Clone when needed** — use `.clone()` when you truly need a copy\n3. **Return owned data** — functions that create data return it (e.g., `String::from`)\n4. **Use references in structs** — `struct Foo { s: &str }` requires a lifetime when the struct holds a reference"
     }
    ]
   },
   {
    "heading": "Common Mistakes Beginners Make",
    "blocks": [
     {
      "type": "markdown",
      "content": "1. **Using a value after move** — the compiler will tell you; fix by borrowing or cloning\n2. **Mixing mutable and immutable borrows** — remember: many shared OR one exclusive\n3. **Overusing `.clone()`** — often you can borrow instead\n4. **Taking `String` when `&str` would work** — prefer `&str` for read-only parameters"
     }
    ]
   },
   {
    "heading": "Key Rules to Remember",
    "blocks": [
     {
      "type": "markdown",
      "content": "- Each value has one owner; ownership moves on assignment (for non-Copy types)\n- `&T` = immutable borrow; `&mut T` = mutable borrow\n- Borrowing rules: many shared OR one mutable, never both\n- Slices (`&str`, `&[T]`) are references; they don't own data\n- Prefer `&str` for function parameters when you only need to read\n- The borrow checker is your friend — it catches bugs before they run!"
     }
    ]
   }
  ],
  "sectionCount": 13
 },
 {
  "order": 7,
  "slug": "traits",
  "emoji": "🧩",
  "title": "Traits",
  "sections": [
   {
    "heading": "What Are Traits and Why Do They Matter?",
    "blocks": [
     {
      "type": "markdown",
      "content": "Traits let you:\n- Define shared behavior across different types\n- Write generic code that works with any type implementing a trait\n- Use the `derive` macro to auto-implement common traits\n\nThink of traits as contracts: \"if you implement this trait, you promise to provide these methods.\""
     }
    ]
   },
   {
    "heading": "Defining a Trait",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use the `trait` keyword to define a trait. Methods can have default implementations or just signatures (which implementors must provide)."
     },
     {
      "type": "code",
      "content": "trait Greet {\n    fn greet(&self) -> String;\n}\n\nstruct Person { name: String }\nstruct Robot { id: u32 }\n\nimpl Greet for Person {\n    fn greet(&self) -> String {\n        format!(\"Hello, I'm {}\", self.name)\n    }\n}\n\nimpl Greet for Robot {\n    fn greet(&self) -> String {\n        format!(\"Beep. I am robot #{}\", self.id)\n    }\n}\n\nlet p = Person { name: String::from(\"Alice\") };\nlet r = Robot { id: 42 };\nprintln!(\"{}\", p.greet());\nprintln!(\"{}\", r.greet());"
     }
    ]
   },
   {
    "heading": "Default Methods",
    "blocks": [
     {
      "type": "markdown",
      "content": "Traits can provide default implementations. Implementors can override them or use the default."
     },
     {
      "type": "code",
      "content": "trait Describable {\n    fn describe(&self) -> String {\n        String::from(\"(no description)\")\n    }\n}\n\nstruct Item { name: String }\n\nimpl Describable for Item {\n    fn describe(&self) -> String {\n        format!(\"Item: {}\", self.name)\n    }\n}\n\nstruct Mystery;\nimpl Describable for Mystery {}  // Uses default!\n\nlet item = Item { name: String::from(\"Sword\") };\nlet mystery = Mystery;\nprintln!(\"{}\", item.describe());\nprintln!(\"{}\", mystery.describe());"
     }
    ]
   },
   {
    "heading": "Trait Bounds: T: Display",
    "blocks": [
     {
      "type": "markdown",
      "content": "When writing generic code, you can restrict `T` to types that implement a trait using `T: TraitName`. This lets you call trait methods on `T`."
     },
     {
      "type": "code",
      "content": "use std::fmt::Display;\n\nfn print_twice<T: Display>(t: T) {\n    println!(\"{}\", t);\n    println!(\"{}\", t);\n}\n\nprint_twice(42);\nprint_twice(\"hello\");"
     }
    ]
   },
   {
    "heading": "Where Clauses",
    "blocks": [
     {
      "type": "markdown",
      "content": "When you have many trait bounds, `where` clauses keep the function signature readable."
     },
     {
      "type": "code",
      "content": "use std::fmt::Debug;\n\nfn compare<T, U>(a: T, b: U)\nwhere\n    T: Display + Debug,\n    U: Display + Debug,\n{\n    println!(\"a: {:?}, b: {:?}\", a, b);\n}\n\ncompare(1, \"two\");"
     }
    ]
   },
   {
    "heading": "impl Trait: Argument and Return",
    "blocks": [
     {
      "type": "markdown",
      "content": "`impl Trait` lets you say \"some type that implements this trait\" without naming the type. Use it for return types when you want to hide the concrete type, or for parameters when you want flexibility."
     },
     {
      "type": "code",
      "content": "fn greet_something(g: impl Greet) {\n    println!(\"{}\", g.greet());\n}\n\nfn get_greeter(is_human: bool) -> Box<dyn Greet> {\n    if is_human {\n        Box::new(Person { name: String::from(\"Bob\") })\n    } else {\n        Box::new(Robot { id: 99 })\n    }\n}\n\ngreet_something(get_greeter(true));"
     }
    ]
   },
   {
    "heading": "Supertraits",
    "blocks": [
     {
      "type": "markdown",
      "content": "A trait can require that implementors also implement another trait. Use `trait Foo: Bar` — \"to implement Foo, you must implement Bar first.\""
     },
     {
      "type": "code",
      "content": "trait Named {\n    fn name(&self) -> &str;\n}\n\ntrait NamedGreet: Named + Greet {\n    fn named_greet(&self) -> String {\n        format!(\"{} says: {}\", self.name(), self.greet())\n    }\n}\n\nimpl Named for Person {\n    fn name(&self) -> &str { &self.name }\n}\n\nimpl NamedGreet for Person {}\n\nlet p = Person { name: String::from(\"Carol\") };\nprintln!(\"{}\", p.named_greet());"
     }
    ]
   },
   {
    "heading": "Common Standard Library Traits",
    "blocks": [
     {
      "type": "markdown",
      "content": "| Trait | Purpose |\n|-------|--------|\n| `Debug` | `{:?}` formatting |\n| `Display` | `{}` user-facing formatting |\n| `Clone` | `.clone()` for explicit copies |\n| `Copy` | Implicit copy (must also be Clone) |\n| `PartialEq` / `Eq` | `==` and `!=` |\n| `PartialOrd` / `Ord` | `<`, `>`, ordering |\n| `Hash` | Hashing for HashMap keys |\n| `Default` | `T::default()` |\n| `From` / `Into` | Type conversion |\n| `Iterator` | Iteration over collections |"
     },
     {
      "type": "code",
      "content": "#[derive(Debug, Clone, PartialEq)]\nstruct Point { x: i32, y: i32 }\n\nlet p1 = Point { x: 1, y: 2 };\nlet p2 = p1.clone();\nprintln!(\"{:?}\", p1);\nprintln!(\"p1 == p2: {}\", p1 == p2);"
     }
    ]
   },
   {
    "heading": "The Derive Macro",
    "blocks": [
     {
      "type": "markdown",
      "content": "`#[derive(Trait)]` auto-implements common traits. The compiler generates the implementation for you. Available for: `Debug`, `Clone`, `Copy`, `PartialEq`, `Eq`, `PartialOrd`, `Ord`, `Hash`, `Default`."
     },
     {
      "type": "code",
      "content": "#[derive(Debug, Default)]\nstruct Config {\n    timeout: u32,\n    retries: u32,\n}\n\nlet config = Config::default();\nprintln!(\"{:?}\", config);"
     }
    ]
   },
   {
    "heading": "The Orphan Rule",
    "blocks": [
     {
      "type": "markdown",
      "content": "You can only implement a trait for a type if either the trait or the type is defined in your crate. This prevents breaking others' code by implementing their traits for their types. It keeps the ecosystem stable."
     }
    ]
   },
   {
    "heading": "Trait Objects (dyn Trait) vs Generics",
    "blocks": [
     {
      "type": "markdown",
      "content": "- **Generics** (`fn foo<T: Trait>(t: T)`): Compile-time polymorphism. Each concrete type gets its own code. No runtime cost.\n- **Trait objects** (`fn foo(t: &dyn Trait)`): Runtime polymorphism. One function handles any implementor via a vtable. Slight runtime cost, but allows heterogeneous collections.\n\nUse generics when you know the type at compile time. Use `dyn Trait` when you need to store different types in the same collection or pass \"any implementor\" at runtime."
     },
     {
      "type": "code",
      "content": "fn greet_all(items: &[&dyn Greet]) {\n    for item in items {\n        println!(\"{}\", item.greet());\n    }\n}\n\nlet p = Person { name: String::from(\"Dave\") };\nlet r = Robot { id: 1 };\nlet greeters: &[&dyn Greet] = &[&p, &r];\ngreet_all(greeters);"
     }
    ]
   },
   {
    "heading": "When to Use Each",
    "blocks": [
     {
      "type": "markdown",
      "content": "- **Generics + trait bounds**: Default choice. Zero-cost abstraction, compiler optimizes.\n- **impl Trait**: Simpler syntax when you don't need to name the type. Good for return types.\n- **dyn Trait**: When you need a collection of different types (e.g., `Vec<Box<dyn Drawable>`) or dynamic dispatch."
     }
    ]
   },
   {
    "heading": "Common Mistakes Beginners Make",
    "blocks": [
     {
      "type": "markdown",
      "content": "1. **Forgetting to import the trait** — you need `use std::fmt::Display` (or similar) to use trait methods\n2. **Confusing `impl Trait` and `dyn Trait`** — `impl` is static dispatch; `dyn` is dynamic\n3. **Trait objects and `Sized`** — trait objects are unsized; use `&dyn Trait` or `Box<dyn Trait>`\n4. **Over-deriving** — only derive traits you actually need"
     }
    ]
   },
   {
    "heading": "Key Rules to Remember",
    "blocks": [
     {
      "type": "markdown",
      "content": "- Traits define shared behavior; implement them with `impl Trait for Type`\n- Use trait bounds (`T: Trait`) to constrain generics\n- `impl Trait` = \"some type implementing this trait\" (static dispatch)\n- `dyn Trait` = trait object for runtime polymorphism\n- `#[derive(...)]` auto-implements common traits\n- The orphan rule: implement a trait only if you own the trait or the type"
     }
    ]
   }
  ],
  "sectionCount": 14
 },
 {
  "order": 8,
  "slug": "error-handling",
  "emoji": "🛡️",
  "title": "Error Handling",
  "sections": [
   {
    "heading": "panic! vs Recoverable Errors",
    "blocks": [
     {
      "type": "markdown",
      "content": "- **`panic!`**: Unrecoverable. The program stops. Use when continuing would be meaningless (e.g., out-of-bounds array access, invariant violated).\n- **Recoverable errors**: Return `Result<T, E>` or `Option<T>`. The caller can handle the failure (retry, log, show a message, etc.)."
     },
     {
      "type": "code",
      "content": "// panic!(\"Something went wrong!\");  // Uncomment to see a panic\n\nfn might_fail(x: i32) -> Result<i32, String> {\n    if x >= 0 { Ok(x * 2) } else { Err(\"negative input\".to_string()) }\n}\n\nmatch might_fail(5) {\n    Ok(v) => println!(\"Success: {}\", v),\n    Err(e) => println!(\"Error: {}\", e),\n}"
     }
    ]
   },
   {
    "heading": "Result&lt;T, E&gt; and Option&lt;T&gt;",
    "blocks": [
     {
      "type": "markdown",
      "content": "- **`Result<T, E>`**: Either `Ok(value)` or `Err(error)`. Use for operations that can fail (I/O, parsing, network).\n- **`Option<T>`**: Either `Some(value)` or `None`. Use when \"no value\" is a valid outcome (e.g., \"key not in map\")."
     },
     {
      "type": "code",
      "content": "fn divide(a: f64, b: f64) -> Result<f64, String> {\n    if b == 0.0 { Err(\"division by zero\".into()) }\n    else { Ok(a / b) }\n}\n\nfn first_even(v: &[i32]) -> Option<i32> {\n    v.iter().find(|&&x| x % 2 == 0).copied()\n}\n\nprintln!(\"divide: {:?}\", divide(10.0, 2.0));\nprintln!(\"first_even: {:?}\", first_even(&[1, 3, 4, 5]));"
     }
    ]
   },
   {
    "heading": "unwrap and expect",
    "blocks": [
     {
      "type": "markdown",
      "content": "- **`unwrap()`**: Returns the value if `Ok`/`Some`, **panics** if `Err`/`None`. Quick and dirty — use only in prototypes or when you're 100% sure.\n- **`expect(msg)`**: Same as `unwrap`, but lets you provide a custom panic message. Slightly better for debugging."
     },
     {
      "type": "code",
      "content": "let some_val: Option<i32> = Some(42);\nlet v = some_val.unwrap();  // 42\nprintln!(\"v = {}\", v);\n\nlet ok_val: Result<i32, &str> = Ok(100);\nlet n = ok_val.expect(\"should always be Ok here\");\nprintln!(\"n = {}\", n);\n// let bad = Err(\"oops\").unwrap();  // Would panic!"
     }
    ]
   },
   {
    "heading": "The ? Operator",
    "blocks": [
     {
      "type": "markdown",
      "content": "`?` is a shorthand for \"if Err, return the error immediately.\" It only works in functions that return `Result` (or `Option`). It propagates errors up the call stack — no more manual `match` and `return Err` everywhere!"
     },
     {
      "type": "code",
      "content": "fn step1() -> Result<i32, String> {\n    Ok(1)\n}\n\nfn step2() -> Result<i32, String> {\n    Err(\"step2 failed\".into())\n}\n\nfn do_work() -> Result<i32, String> {\n    let a = step1()?;  // If Err, return immediately\n    let b = step2()?;  // This will return Err\n    Ok(a + b)\n}\n\nmatch do_work() {\n    Ok(v) => println!(\"Result: {}\", v),\n    Err(e) => println!(\"Error: {}\", e),\n}"
     }
    ]
   },
   {
    "heading": "map, and_then, unwrap_or",
    "blocks": [
     {
      "type": "markdown",
      "content": "These methods let you transform and handle `Result` and `Option` without explicit `match`:\n- **`map`**: Transform the inner value (if Ok/Some)\n- **`and_then`**: Chain operations that return Result/Option\n- **`unwrap_or`**: Provide a default if Err/None"
     },
     {
      "type": "code",
      "content": "let opt: Option<i32> = Some(5);\nlet doubled = opt.map(|x| x * 2);\nprintln!(\"doubled: {:?}\", doubled);\n\nlet none: Option<i32> = None;\nlet with_default = none.unwrap_or(0);\nprintln!(\"with_default: {}\", with_default);\n\nlet res: Result<i32, &str> = Ok(10);\nlet squared = res.map(|x| x * x);\nprintln!(\"squared: {:?}\", squared);"
     },
     {
      "type": "code",
      "content": "fn parse_and_double(s: &str) -> Option<i32> {\n    s.parse::<i32>().ok().and_then(|n| Some(n * 2))\n}\n\nprintln!(\"{:?}\", parse_and_double(\"21\"));\nprintln!(\"{:?}\", parse_and_double(\"abc\"));"
     }
    ]
   },
   {
    "heading": "Custom Error Types",
    "blocks": [
     {
      "type": "markdown",
      "content": "For real applications, define your own error type. It can hold context (what failed, where) and implement `std::error::Error` for compatibility with the ecosystem."
     },
     {
      "type": "code",
      "content": "use std::fmt;\n\n#[derive(Debug)]\nenum AppError {\n    InvalidInput(String),\n    Overflow,\n}\n\nimpl fmt::Display for AppError {\n    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {\n        match self {\n            AppError::InvalidInput(s) => write!(f, \"Invalid input: {}\", s),\n            AppError::Overflow => write!(f, \"Overflow occurred\"),\n        }\n    }\n}\n\nimpl std::error::Error for AppError {}\n\nfn validate(x: i32) -> Result<i32, AppError> {\n    if x < 0 { return Err(AppError::InvalidInput(\"must be non-negative\".into())); }\n    if x > 1000 { return Err(AppError::Overflow); }\n    Ok(x)\n}\n\nprintln!(\"{:?}\", validate(50));\nprintln!(\"{:?}\", validate(-1));"
     }
    ]
   },
   {
    "heading": "From Trait for Error Conversion",
    "blocks": [
     {
      "type": "markdown",
      "content": "Implementing `From<E> for YourError` lets you use `?` to automatically convert other error types into yours. Then `other_error?` becomes `Err(YourError::from(other_error))`."
     },
     {
      "type": "code",
      "content": "impl From<std::num::ParseIntError> for AppError {\n    fn from(err: std::num::ParseIntError) -> Self {\n        AppError::InvalidInput(err.to_string())\n    }\n}\n\nfn parse_positive(s: &str) -> Result<i32, AppError> {\n    let n: i32 = s.parse()?;  // ParseIntError converts to AppError\n    if n < 0 { Err(AppError::InvalidInput(\"negative\".into())) }\n    else { Ok(n) }\n}\n\nprintln!(\"{:?}\", parse_positive(\"42\"));\nprintln!(\"{:?}\", parse_positive(\"abc\"));"
     }
    ]
   },
   {
    "heading": "thiserror and anyhow: Conceptual Overview",
    "blocks": [
     {
      "type": "markdown",
      "content": "- **`thiserror`**: Derive macro for error types. Reduces boilerplate for `Display`, `Error`, and `From` implementations. Great for library authors defining error types.\n- **`anyhow`**: For applications. `anyhow::Result<T>` = `Result<T, anyhow::Error>`. Easy to convert and chain errors, add context. Use in `main()` and application code.\n\nLibraries: prefer custom errors (with thiserror). Applications: consider anyhow for flexibility."
     }
    ]
   },
   {
    "heading": "When to panic! vs Return Result",
    "blocks": [
     {
      "type": "markdown",
      "content": "- **panic!**: Programming bugs (index out of bounds, unwrap on None), invariants that must never be violated, or when recovery is impossible (e.g., missing config file in a critical service).\n- **Result**: User input errors, I/O failures, network timeouts, parsing errors — anything the caller might reasonably handle."
     }
    ]
   },
   {
    "heading": "Error Handling in main()",
    "blocks": [
     {
      "type": "markdown",
      "content": "`main()` can return `Result<(), E>` where `E` implements `std::error::Error`. If you return `Err`, the program exits with a non-zero code and prints the error. This lets you use `?` in main!"
     },
     {
      "type": "code",
      "content": "// In a real program, main could be:\n// fn main() -> Result<(), Box<dyn std::error::Error>> {\n//     let content = std::fs::read_to_string(\"file.txt\")?;\n//     println!(\"{}\", content);\n//     Ok(())\n// }\n\nfn run() -> Result<(), String> {\n    let x = might_fail(10)?;\n    println!(\"Got: {}\", x);\n    Ok(())\n}\n\nlet _ = run();"
     }
    ]
   },
   {
    "heading": "Best Practices",
    "blocks": [
     {
      "type": "markdown",
      "content": "1. **Prefer `Result` over `panic!`** for recoverable failures\n2. **Use `?` to propagate errors** — keeps code clean\n3. **Add context** when propagating (e.g., `anyhow::Context`, or custom wrappers)\n4. **Use `expect` with a helpful message** when you unwrap but want a clear panic\n5. **Avoid `unwrap` in library code** — let callers decide how to handle errors\n6. **Implement `Error` for custom errors** so they work with `?` and `Box<dyn Error>`"
     }
    ]
   },
   {
    "heading": "Common Mistakes Beginners Make",
    "blocks": [
     {
      "type": "markdown",
      "content": "1. **Overusing `unwrap()`** — leads to panics in production; use `?` or proper `match`\n2. **Ignoring `Result`** — `let _ = result;` or forgetting to handle errors\n3. **Using `panic!` for user errors** — return `Result` and let the caller handle it\n4. **Mixing error types** — use `From` or `map_err` to unify error types in a function"
     }
    ]
   },
   {
    "heading": "Key Rules to Remember",
    "blocks": [
     {
      "type": "markdown",
      "content": "- `panic!` = unrecoverable; `Result`/`Option` = recoverable\n- Use `?` to propagate errors in functions that return `Result`/`Option`\n- `map`, `and_then`, `unwrap_or` help chain and transform Result/Option\n- Custom errors: implement `Display` and `Error`; use `From` for conversion\n- `main()` can return `Result<(), E>` to use `?` and exit with an error code\n- Prefer returning `Result` in libraries; use `expect` sparingly with good messages"
     }
    ]
   }
  ],
  "sectionCount": 13
 },
 {
  "order": 9,
  "slug": "collections",
  "emoji": "📚",
  "title": "Collections",
  "sections": [
   {
    "heading": "What Are Collections and Why Do They Matter?",
    "blocks": [
     {
      "type": "markdown",
      "content": "Collections store data on the **heap** (except when optimized away). They're essential when you don't know the size at compile time or need dynamic data structures. Rust's standard library provides several collections, each optimized for different use cases."
     }
    ]
   },
   {
    "heading": "Vec&lt;T&gt; — The Dynamic Array",
    "blocks": [
     {
      "type": "markdown",
      "content": "`Vec` is a growable, heap-allocated array. It's one of the most used collections in Rust. You can create it, push and pop elements, index into it, slice it, and iterate over it."
     },
     {
      "type": "code",
      "content": "// Creating a Vec\nlet v1: Vec<i32> = Vec::new();\nlet v2 = vec![1, 2, 3];           // macro for convenience\nlet v3 = vec![0; 5];              // [0, 0, 0, 0, 0]\nprintln!(\"v2: {:?}, v3: {:?}\", v2, v3);"
     },
     {
      "type": "code",
      "content": "// push and pop\nlet mut nums = vec![10, 20];\nnums.push(30);\nnums.push(40);\nprintln!(\"After push: {:?}\", nums);\nlet last = nums.pop();\nprintln!(\"Popped: {:?}, remaining: {:?}\", last, nums);"
     },
     {
      "type": "code",
      "content": "// Indexing and slicing\nlet v = vec![10, 20, 30, 40, 50];\nprintln!(\"v[2] = {}\", v[2]);\nlet slice: &[i32] = &v[1..4];    // [20, 30, 40]\nprintln!(\"slice: {:?}\", slice);\n// v[99] would panic! Use get() for safe access:\nprintln!(\"v.get(99) = {:?}\", v.get(99));"
     },
     {
      "type": "code",
      "content": "// Iterating over a Vec\nlet v = vec![\"a\", \"b\", \"c\"];\nfor s in &v {\n    println!(\"  {}\", s);\n}\n// Mutable iteration\nlet mut nums = vec![1, 2, 3];\nfor n in &mut nums {\n    *n += 10;\n}\nprintln!(\"After +10: {:?}\", nums);"
     }
    ]
   },
   {
    "heading": "Capacity vs Length",
    "blocks": [
     {
      "type": "markdown",
      "content": "A `Vec` has a **length** (how many elements) and a **capacity** (how much space is allocated). When you push beyond capacity, the Vec reallocates. Use `with_capacity(n)` when you know the size in advance to avoid reallocations."
     },
     {
      "type": "code",
      "content": "let mut v = Vec::with_capacity(10);\nprintln!(\"len: {}, cap: {}\", v.len(), v.capacity());\nv.push(1); v.push(2); v.push(3);\nprintln!(\"len: {}, cap: {}\", v.len(), v.capacity());"
     }
    ]
   },
   {
    "heading": "String — Growable UTF-8 Text",
    "blocks": [
     {
      "type": "markdown",
      "content": "`String` is a growable, owned UTF-8 encoded string. It's like `Vec<u8>` but guaranteed to be valid UTF-8. You can create, push, concatenate, and slice strings."
     },
     {
      "type": "code",
      "content": "// Creating strings\nlet s1 = String::new();\nlet s2 = String::from(\"hello\");\nlet s3 = \"world\".to_string();\nlet s4 = \"rust\".to_owned();\nprintln!(\"{}, {}, {}, {}\", s1, s2, s3, s4);"
     },
     {
      "type": "code",
      "content": "// Pushing and concatenation\nlet mut s = String::from(\"foo\");\ns.push_str(\"bar\");\ns.push('!');\nprintln!(\"s = {}\", s);\n// Concatenation with +\nlet a = String::from(\"Hello, \");\nlet b = String::from(\"world!\");\nlet c = a + &b;  // a is moved, b is borrowed\nprintln!(\"c = {}\", c);"
     },
     {
      "type": "code",
      "content": "// Slicing strings — be careful! Indices are byte positions, not char positions\nlet s = \"hello\";\nlet slice = &s[0..2];  // \"he\"\nprintln!(\"slice: {}\", slice);\n// &s[0..1] on \" café \" would panic (é is 2 bytes in UTF-8)\n// Use chars() or char_indices() for character-level access"
     },
     {
      "type": "code",
      "content": "// chars vs bytes\nlet s = \"café\";\nprintln!(\"chars: {:?}\", s.chars().collect::<Vec<_>>());\nprintln!(\"bytes: {:?}\", s.bytes().collect::<Vec<_>>());"
     }
    ]
   },
   {
    "heading": "HashMap&lt;K, V&gt; — Key-Value Storage",
    "blocks": [
     {
      "type": "markdown",
      "content": "A `HashMap` stores key-value pairs. Keys must be unique. Lookup is fast (average O(1)). You need `use std::collections::HashMap;`."
     },
     {
      "type": "code",
      "content": "use std::collections::HashMap;\n\nlet mut scores = HashMap::new();\nscores.insert(\"Alice\", 100);\nscores.insert(\"Bob\", 85);\nscores.insert(\"Charlie\", 92);\nprintln!(\"scores: {:?}\", scores);"
     },
     {
      "type": "code",
      "content": "// get returns Option<&V>\nlet alice_score = scores.get(\"Alice\");\nprintln!(\"Alice: {:?}\", alice_score);\n// entry API: insert or update\nscores.entry(\"Alice\").or_insert(0);\nscores.entry(\"Dave\").or_insert(70);\nprintln!(\"scores: {:?}\", scores);"
     },
     {
      "type": "code",
      "content": "// Default values with entry\nlet text = \"hello world wonderful world\";\nlet mut word_count: HashMap<&str, u32> = HashMap::new();\nfor word in text.split_whitespace() {\n    let count = word_count.entry(word).or_insert(0);\n    *count += 1;\n}\nprintln!(\"word_count: {:?}\", word_count);"
     },
     {
      "type": "code",
      "content": "// Iterating over a HashMap\nfor (name, score) in &scores {\n    println!(\"{}: {}\", name, score);\n}"
     }
    ]
   },
   {
    "heading": "HashSet&lt;T&gt; — Unique Values",
    "blocks": [
     {
      "type": "markdown",
      "content": "A `HashSet` stores unique values (no duplicates). It's built on `HashMap<T, ()>`. Great for membership tests and deduplication."
     },
     {
      "type": "code",
      "content": "use std::collections::HashSet;\n\nlet mut seen = HashSet::new();\nseen.insert(1);\nseen.insert(2);\nseen.insert(1);  // duplicate, ignored\nprintln!(\"seen: {:?}\", seen);\nprintln!(\"contains 2: {}\", seen.contains(&2));"
     }
    ]
   },
   {
    "heading": "BTreeMap and BTreeSet",
    "blocks": [
     {
      "type": "markdown",
      "content": "`BTreeMap` and `BTreeSet` keep keys in sorted order. Use them when you need ordering or range queries. Lookup is O(log n) instead of O(1) average."
     },
     {
      "type": "code",
      "content": "use std::collections::BTreeMap;\n\nlet mut map = BTreeMap::new();\nmap.insert(3, \"three\");\nmap.insert(1, \"one\");\nmap.insert(2, \"two\");\nprintln!(\"BTreeMap (sorted): {:?}\", map);"
     }
    ]
   },
   {
    "heading": "VecDeque — Double-Ended Queue",
    "blocks": [
     {
      "type": "markdown",
      "content": "`VecDeque` allows efficient push and pop from both ends. Use it when you need a queue or a sliding window."
     },
     {
      "type": "code",
      "content": "use std::collections::VecDeque;\n\nlet mut deque: VecDeque<i32> = VecDeque::new();\ndeque.push_back(1);\ndeque.push_back(2);\ndeque.push_front(0);\nprintln!(\"deque: {:?}\", deque);\nprintln!(\"pop_front: {:?}\", deque.pop_front());"
     }
    ]
   },
   {
    "heading": "When to Use Which Collection?",
    "blocks": [
     {
      "type": "markdown",
      "content": "| Need | Use |\n|------|-----|\n| Dynamic list, indexed access | `Vec<T>` |\n| Key-value lookup, no order | `HashMap<K,V>` |\n| Unique values, membership | `HashSet<T>` |\n| Sorted keys, range queries | `BTreeMap<K,V>` / `BTreeSet<T>` |\n| Queue, push/pop both ends | `VecDeque<T>` |\n| Growable text | `String` |"
     }
    ]
   },
   {
    "heading": "Common Iterator Methods on Collections",
    "blocks": [
     {
      "type": "markdown",
      "content": "Collections implement `IntoIterator` and often have `.iter()`, `.iter_mut()`, `.into_iter()`. You can chain adaptors and collect back into collections."
     },
     {
      "type": "code",
      "content": "let v = vec![1, 2, 3, 4, 5];\nlet doubled: Vec<i32> = v.iter().map(|x| x * 2).collect();\nlet evens: Vec<&i32> = v.iter().filter(|x| **x % 2 == 0).collect();\nlet sum: i32 = v.iter().sum();\nprintln!(\"doubled: {:?}, evens: {:?}, sum: {}\", doubled, evens, sum);"
     }
    ]
   },
   {
    "heading": "Common Mistakes Beginners Make",
    "blocks": [
     {
      "type": "markdown",
      "content": "1. **Indexing with `[]` on Option** — use `.get()` or match on the result\n2. **String slicing at invalid byte boundaries** — UTF-8 means one char ≠ one byte\n3. **Forgetting that `HashMap::get` returns `Option<&V>`** — you need to handle `None`\n4. **Using `Vec` when you need a queue** — `VecDeque` is better for FIFO\n5. **Not reserving capacity** — use `with_capacity` when you know the size"
     }
    ]
   },
   {
    "heading": "Key Rules to Remember",
    "blocks": [
     {
      "type": "markdown",
      "content": "- `Vec<T>`: growable array, push/pop, indexing, slicing\n- `String`: owned UTF-8 text; slice with care (byte indices)\n- `HashMap<K,V>`: key-value, `insert`, `get`, `entry` API\n- `HashSet<T>`: unique values, `insert`, `contains`\n- Choose the right collection for your access pattern\n- Use iterator methods (`map`, `filter`, `collect`) for clean, idiomatic code"
     }
    ]
   }
  ],
  "sectionCount": 12
 },
 {
  "order": 10,
  "slug": "generics",
  "emoji": "🔷",
  "title": "Generics",
  "sections": [
   {
    "heading": "What Are Generics and Why Do They Matter?",
    "blocks": [
     {
      "type": "markdown",
      "content": "Without generics, you'd need separate functions for `largest_i32`, `largest_f64`, `largest_char`, etc. With generics, one `largest<T>` handles all of them. The same idea applies to structs, enums, and impl blocks."
     }
    ]
   },
   {
    "heading": "Generic Functions",
    "blocks": [
     {
      "type": "markdown",
      "content": "Declare type parameters in angle brackets after the function name. The parameter `T` can be used in the signature and body."
     },
     {
      "type": "code",
      "content": "fn largest<T: PartialOrd>(list: &[T]) -> Option<&T> {\n    let mut largest = list.get(0)?;\n    for item in list.iter() {\n        if item > largest {\n            largest = item;\n        }\n    }\n    Some(largest)\n}\n\nlet nums = [3, 1, 4, 1, 5];\nlet chars = ['x', 'a', 'm'];\nprintln!(\"largest nums: {:?}\", largest(&nums));\nprintln!(\"largest chars: {:?}\", largest(&chars));"
     }
    ]
   },
   {
    "heading": "Generic Structs",
    "blocks": [
     {
      "type": "markdown",
      "content": "Structs can have type parameters too. Each field can use a different generic type."
     },
     {
      "type": "code",
      "content": "struct Point<T> {\n    x: T,\n    y: T,\n}\n\nlet int_point = Point { x: 1, y: 2 };\nlet float_point = Point { x: 1.0, y: 2.0 };\nprintln!(\"int: ({}, {}), float: ({}, {})\",\n    int_point.x, int_point.y, float_point.x, float_point.y);"
     },
     {
      "type": "code",
      "content": "// Multiple type parameters\nstruct Pair<T, U> {\n    first: T,\n    second: U,\n}\n\nlet p = Pair { first: \"hello\", second: 42 };\nprintln!(\"Pair: {} and {}\", p.first, p.second);"
     }
    ]
   },
   {
    "heading": "Generic Enums: Option&lt;T&gt; and Result&lt;T, E&gt;",
    "blocks": [
     {
      "type": "markdown",
      "content": "Rust's standard library uses generics everywhere. `Option<T>` represents \"maybe a value\"; `Result<T, E>` represents \"success with T or error with E\"."
     },
     {
      "type": "code",
      "content": "// Option<T> = Some(T) | None\nlet some_int: Option<i32> = Some(42);\nlet none_val: Option<i32> = None;\n\n// Result<T, E> = Ok(T) | Err(E)\nlet ok_result: Result<i32, &str> = Ok(100);\nlet err_result: Result<i32, &str> = Err(\"something went wrong\");\n\nprintln!(\"Option: {:?}, {:?}\", some_int, none_val);\nprintln!(\"Result: {:?}, {:?}\", ok_result, err_result);"
     }
    ]
   },
   {
    "heading": "Generic impl Blocks",
    "blocks": [
     {
      "type": "markdown",
      "content": "You can implement methods for generic structs. The impl block declares the same type parameters."
     },
     {
      "type": "code",
      "content": "impl<T> Point<T> {\n    fn x(&self) -> &T {\n        &self.x\n    }\n}\n\n// impl only for Point<f32>\nimpl Point<f32> {\n    fn distance_from_origin(&self) -> f32 {\n        (self.x * self.x + self.y * self.y).sqrt()\n    }\n}\n\nlet p = Point { x: 3.0, y: 4.0 };\nprintln!(\"distance: {}\", p.distance_from_origin());"
     }
    ]
   },
   {
    "heading": "Trait Bounds on Generics",
    "blocks": [
     {
      "type": "markdown",
      "content": "Often `T` must support certain operations. Use trait bounds: `T: Trait`. This tells the compiler \"T must implement Trait\"."
     },
     {
      "type": "code",
      "content": "use std::fmt::Display;\n\nfn print_pair<T: Display, U: Display>(first: T, second: U) {\n    println!(\"{} and {}\", first, second);\n}\n\nprint_pair(1, \"two\");\nprint_pair(3.14, 42);"
     }
    ]
   },
   {
    "heading": "Multiple Bounds with +",
    "blocks": [
     {
      "type": "markdown",
      "content": "When a type must implement multiple traits, use `+` to combine them."
     },
     {
      "type": "code",
      "content": "fn compare_and_print<T: PartialOrd + Display>(a: T, b: T) {\n    if a >= b {\n        println!(\"{} >= {}\", a, b);\n    } else {\n        println!(\"{} < {}\", a, b);\n    }\n}\n\ncompare_and_print(10, 20);"
     }
    ]
   },
   {
    "heading": "Where Clauses",
    "blocks": [
     {
      "type": "markdown",
      "content": "When bounds get long, move them to a `where` clause for readability."
     },
     {
      "type": "code",
      "content": "fn complex_generic<T, U>(t: T, u: U)\nwhere\n    T: Display + Clone,\n    U: Display + PartialOrd,\n{\n    println!(\"t: {}, u: {}\", t, u);\n}\n\ncomplex_generic(\"hello\", 42);"
     }
    ]
   },
   {
    "heading": "Generic Return Types",
    "blocks": [
     {
      "type": "markdown",
      "content": "Functions can return generic types. The compiler infers the concrete type from how the result is used."
     },
     {
      "type": "code",
      "content": "fn first<T>(list: &[T]) -> Option<&T> {\n    list.first()\n}\n\nlet v = vec![1, 2, 3];\nlet f: Option<&i32> = first(&v);\nprintln!(\"first: {:?}\", f);"
     }
    ]
   },
   {
    "heading": "Monomorphization — Zero-Cost Abstractions",
    "blocks": [
     {
      "type": "markdown",
      "content": "Rust compiles generics by **monomorphization**: the compiler generates a separate copy of the code for each concrete type used. So `largest::<i32>` and `largest::<char>` become two distinct functions. No runtime dispatch, no performance penalty."
     }
    ]
   },
   {
    "heading": "Turbofish Syntax ::&lt;&gt;",
    "blocks": [
     {
      "type": "markdown",
      "content": "When the compiler can't infer the type, use the **turbofish** to specify it explicitly: `function::<Type>(args)`."
     },
     {
      "type": "code",
      "content": "let v: Vec<i32> = vec![1, 2, 3];\nlet parsed: i32 = \"42\".parse().unwrap();\n// parse() returns Result<T, E> — need to specify T:\nlet also_parsed = \"99\".parse::<i32>().unwrap();\nprintln!(\"parsed: {}, also_parsed: {}\", parsed, also_parsed);"
     }
    ]
   },
   {
    "heading": "Const Generics",
    "blocks": [
     {
      "type": "markdown",
      "content": "Rust also supports **const generics**: type-level constants. Useful for fixed-size arrays and similar patterns."
     },
     {
      "type": "code",
      "content": "struct ArrayWrapper<T, const N: usize> {\n    data: [T; N],\n}\n\nlet w: ArrayWrapper<i32, 3> = ArrayWrapper { data: [1, 2, 3] };\nprintln!(\"ArrayWrapper<3>: {:?}\", w.data);"
     }
    ]
   },
   {
    "heading": "PhantomData (Brief Mention)",
    "blocks": [
     {
      "type": "markdown",
      "content": "`PhantomData<T>` is a zero-sized type used to \"mark\" that a struct logically owns or uses `T` even if it doesn't store a value of type `T`. Useful for unsafe code and variance. We'll skip the details here — just know it exists."
     }
    ]
   },
   {
    "heading": "Standard Generic Types",
    "blocks": [
     {
      "type": "markdown",
      "content": "You've already seen many: `Vec<T>`, `Option<T>`, `Result<T,E>`. Others include `Box<T>` (heap allocation), `Rc<T>` (reference counting), `RefCell<T>` (interior mutability)."
     },
     {
      "type": "code",
      "content": "use std::rc::Rc;\n\nlet boxed: Box<i32> = Box::new(42);\nlet rc: Rc<String> = Rc::new(String::from(\"shared\"));\nprintln!(\"boxed: {}, rc: {}\", boxed, rc);"
     }
    ]
   },
   {
    "heading": "Common Mistakes Beginners Make",
    "blocks": [
     {
      "type": "markdown",
      "content": "1. **Forgetting trait bounds** — e.g. using `>` on `T` without `T: PartialOrd`\n2. **Over-specifying bounds** — only add bounds you actually need\n3. **Confusing `impl Trait` and generics** — `fn f<T: Display>(x: T)` vs `fn f(x: impl Display)`\n4. **Turbofish in wrong place** — it's `f::<T>(args)`, not `f(args::<T>)`"
     }
    ]
   },
   {
    "heading": "Key Rules to Remember",
    "blocks": [
     {
      "type": "markdown",
      "content": "- Generics = type parameters; write once, use with many types\n- Trait bounds (`T: Trait`) restrict what `T` can do\n- `where` clauses keep signatures readable\n- Monomorphization = zero-cost, no runtime overhead\n- Turbofish `::<T>` when the compiler needs a type hint\n- `Option<T>`, `Result<T,E>`, `Vec<T>` are all generic"
     }
    ]
   }
  ],
  "sectionCount": 16
 },
 {
  "order": 11,
  "slug": "closures-and-iterators",
  "emoji": "🔗",
  "title": "Closures & Iterators",
  "sections": [
   {
    "heading": "What Are Closures and Why Do They Matter?",
    "blocks": [
     {
      "type": "markdown",
      "content": "Closures are like \"mini functions\" you can define inline. They can capture variables from the surrounding scope — something regular functions cannot do. Use them for callbacks, sorting, filtering, and any place you need flexible, one-off logic."
     }
    ]
   },
   {
    "heading": "Closure Syntax",
    "blocks": [
     {
      "type": "markdown",
      "content": "The basic form is `|parameters| body`. Parameters go between pipes; the body can be an expression (no braces) or a block."
     },
     {
      "type": "code",
      "content": "let add_one = |x| x + 1;\nprintln!(\"add_one(5) = {}\", add_one(5));\n\nlet add = |a, b| a + b;\nprintln!(\"add(3, 4) = {}\", add(3, 4));\n\nlet greet = |name: &str| {\n    let msg = format!(\"Hello, {}!\", name);\n    msg\n};\nprintln!(\"{}\", greet(\"Rust\"));"
     }
    ]
   },
   {
    "heading": "Capturing Variables: By Ref, By Mut Ref, By Value",
    "blocks": [
     {
      "type": "markdown",
      "content": "Closures capture variables from the environment. They can capture by **reference** (borrow), **mutable reference** (borrow mutably), or **value** (move ownership). The compiler infers the capture mode from how you use the variable."
     },
     {
      "type": "code",
      "content": "let x = 10;\nlet by_ref = || println!(\"x = {}\", x);  // borrows x immutably\nby_ref();\nprintln!(\"x still available: {}\", x);"
     },
     {
      "type": "code",
      "content": "let mut count = 0;\nlet mut inc = || {\n    count += 1;  // borrows count mutably\n    count\n};\nprintln!(\"inc: {}, inc: {}\", inc(), inc());"
     },
     {
      "type": "code",
      "content": "let s = String::from(\"hello\");\nlet by_move = || println!(\"{}\", s);  // moves s into closure\nby_move();\n// by_move();  // would error: s was moved"
     }
    ]
   },
   {
    "heading": "Fn, FnMut, FnOnce Traits",
    "blocks": [
     {
      "type": "markdown",
      "content": "Closures implement one or more of these traits:\n- **FnOnce**: can be called once (may consume captured values)\n- **FnMut**: can be called multiple times, may mutate captured values\n- **Fn**: can be called multiple times, doesn't mutate (immutable borrow)"
     },
     {
      "type": "code",
      "content": "// Fn: immutable borrow\nlet x = 5;\nlet f = || x + 1;\nprintln!(\"{}, {}\", f(), f());\n\n// FnOnce: consumes\nlet s = String::from(\"hi\");\nlet g = || s;  // moves s\nlet _ = g();   // can only call once"
     }
    ]
   },
   {
    "heading": "Closures as Function Parameters",
    "blocks": [
     {
      "type": "markdown",
      "content": "Pass closures to functions using generics with trait bounds: `F: Fn(T) -> U` or `impl Fn(T) -> U`."
     },
     {
      "type": "code",
      "content": "fn apply_twice<F>(f: F, x: i32) -> i32\nwhere\n    F: Fn(i32) -> i32,\n{\n    f(f(x))\n}\n\nlet result = apply_twice(|x| x * 2, 5);\nprintln!(\"apply_twice (x*2) on 5: {}\", result);  // 5 -> 10 -> 20"
     }
    ]
   },
   {
    "heading": "Returning Closures (impl Fn)",
    "blocks": [
     {
      "type": "markdown",
      "content": "To return a closure, use `impl Fn(...) -> ...`. The closure must be boxed or returned in a way the compiler can handle."
     },
     {
      "type": "code",
      "content": "fn make_adder(n: i32) -> impl Fn(i32) -> i32 {\n    move |x| x + n  // move captures n by value\n}\n\nlet add_10 = make_adder(10);\nprintln!(\"add_10(3) = {}\", add_10(3));"
     }
    ]
   },
   {
    "heading": "The Iterator Trait and next()",
    "blocks": [
     {
      "type": "markdown",
      "content": "An iterator produces a sequence of values. The `Iterator` trait requires implementing `next()` which returns `Option<Item>`. When `None` is returned, iteration stops."
     },
     {
      "type": "code",
      "content": "let v = vec![1, 2, 3];\nlet mut iter = v.iter();\nprintln!(\"next: {:?}\", iter.next());\nprintln!(\"next: {:?}\", iter.next());\nprintln!(\"next: {:?}\", iter.next());\nprintln!(\"next: {:?}\", iter.next());  // None"
     }
    ]
   },
   {
    "heading": "Iterator Adaptors: map, filter, enumerate, zip, chain",
    "blocks": [
     {
      "type": "markdown",
      "content": "**Adaptors** transform one iterator into another. They're lazy — nothing runs until you consume the iterator."
     },
     {
      "type": "code",
      "content": "let v = vec![1, 2, 3, 4, 5];\nlet doubled: Vec<i32> = v.iter().map(|x| x * 2).collect();\nprintln!(\"map: {:?}\", doubled);"
     },
     {
      "type": "code",
      "content": "let evens: Vec<&i32> = v.iter().filter(|x| **x % 2 == 0).collect();\nprintln!(\"filter: {:?}\", evens);"
     },
     {
      "type": "code",
      "content": "for (i, val) in v.iter().enumerate() {\n    println!(\"  {}: {}\", i, val);\n}"
     },
     {
      "type": "code",
      "content": "let a = [1, 2, 3];\nlet b = [10, 20, 30];\nlet zipped: Vec<_> = a.iter().zip(b.iter()).collect();\nprintln!(\"zip: {:?}\", zipped);"
     }
    ]
   },
   {
    "heading": "Consuming Adaptors: collect, sum, fold, any, all",
    "blocks": [
     {
      "type": "markdown",
      "content": "**Consumers** drive the iterator and produce a final value. They \"use up\" the iterator."
     },
     {
      "type": "code",
      "content": "let nums = vec![1, 2, 3, 4, 5];\nlet sum: i32 = nums.iter().sum();\nlet product: i32 = nums.iter().fold(1, |acc, x| acc * x);\nlet any_gt_4 = nums.iter().any(|x| *x > 4);\nlet all_positive = nums.iter().all(|x| *x > 0);\nprintln!(\"sum: {}, product: {}, any>4: {}, all>0: {}\", sum, product, any_gt_4, all_positive);"
     }
    ]
   },
   {
    "heading": "Lazy Evaluation",
    "blocks": [
     {
      "type": "markdown",
      "content": "Iterators are **lazy**: adaptors don't run until a consumer pulls values. This means you can build long chains without allocating intermediate collections."
     },
     {
      "type": "code",
      "content": "let result = (1..100)\n    .filter(|n| n % 2 == 0)\n    .map(|n| n * n)\n    .take(5)\n    .sum::<i32>();\nprintln!(\"sum of first 5 even squares (1..100): {}\", result);"
     }
    ]
   },
   {
    "heading": "Creating Custom Iterators",
    "blocks": [
     {
      "type": "markdown",
      "content": "Implement the `Iterator` trait for your type. You only need to implement `next()`; other methods come for free."
     },
     {
      "type": "code",
      "content": "struct Counter {\n    count: u32,\n    max: u32,\n}\n\nimpl Counter {\n    fn new(max: u32) -> Self {\n        Counter { count: 0, max }\n    }\n}\n\nimpl Iterator for Counter {\n    type Item = u32;\n    fn next(&mut self) -> Option<Self::Item> {\n        if self.count < self.max {\n            self.count += 1;\n            Some(self.count)\n        } else {\n            None\n        }\n    }\n}\n\nlet c: Vec<u32> = Counter::new(5).collect();\nprintln!(\"Counter: {:?}\", c);"
     }
    ]
   },
   {
    "heading": "for Loops as Iterator Sugar",
    "blocks": [
     {
      "type": "markdown",
      "content": "A `for` loop is syntactic sugar for consuming an iterator. `for x in iter` desugars to using `into_iter()` and calling `next()` in a loop."
     },
     {
      "type": "code",
      "content": "let v = vec![\"a\", \"b\", \"c\"];\nfor s in &v {\n    println!(\"{}\", s);\n}\n// Equivalent to: for s in v.iter() { ... }"
     }
    ]
   },
   {
    "heading": "Common Mistakes Beginners Make",
    "blocks": [
     {
      "type": "markdown",
      "content": "1. **Forgetting `move`** when returning a closure that captures by value\n2. **Double dereference in filter** — `filter(|x| **x % 2 == 0)` for `&i32`\n3. **Assuming iterators run immediately** — they're lazy until consumed\n4. **Calling a closure that moved values more than once** — FnOnce!\n5. **Using `iter()` when you need `into_iter()`** — ownership matters"
     }
    ]
   },
   {
    "heading": "Key Rules to Remember",
    "blocks": [
     {
      "type": "markdown",
      "content": "- Closures: `|params| body`, capture by ref/mut ref/value\n- Fn / FnMut / FnOnce describe how often and how a closure can be called\n- Iterators: `next()` returns `Option<Item>`, lazy by default\n- Adaptors (map, filter) transform; consumers (collect, sum) drive\n- `for` loops consume iterators; prefer iterators over manual loops"
     }
    ]
   }
  ],
  "sectionCount": 14
 },
 {
  "order": 12,
  "slug": "modules-and-crates",
  "emoji": "📁",
  "title": "Modules & Crates",
  "sections": [
   {
    "heading": "What Are Modules and Crates?",
    "blocks": [
     {
      "type": "markdown",
      "content": "Think of a **crate** as a package (like a box). A **module** is a compartment inside that box. The crate root (e.g. `main.rs` or `lib.rs`) is the entry point. Modules let you split code into logical units and hide implementation details."
     }
    ]
   },
   {
    "heading": "The mod Keyword",
    "blocks": [
     {
      "type": "markdown",
      "content": "Use `mod` to declare a module. Modules can be declared inline (with curly braces) or in a separate file."
     },
     {
      "type": "code",
      "content": "mod math {\n    pub fn add(a: i32, b: i32) -> i32 {\n        a + b\n    }\n    fn private_helper() -> i32 {\n        42\n    }\n}\n\n// add is public, we can use it\nprintln!(\"math::add(1, 2) = {}\", math::add(1, 2));\n// math::private_helper();  // error: private"
     }
    ]
   },
   {
    "heading": "Nested Modules",
    "blocks": [
     {
      "type": "markdown",
      "content": "Modules can contain other modules. Use `::` to navigate the hierarchy."
     },
     {
      "type": "code",
      "content": "mod outer {\n    pub mod inner {\n        pub fn greet() {\n            println!(\"Hello from inner!\");\n        }\n    }\n}\n\nouter::inner::greet();"
     }
    ]
   },
   {
    "heading": "pub Visibility",
    "blocks": [
     {
      "type": "markdown",
      "content": "By default, items are **private** to their module. Use `pub` to make them visible to parent modules and beyond. `pub(crate)` limits visibility to the current crate."
     },
     {
      "type": "code",
      "content": "mod visibility {\n    pub fn public_fn() {}\n    fn private_fn() {}\n    pub struct PublicStruct {\n        pub field: i32,   // field also needs pub to be accessible\n    }\n}\n\nlet s = visibility::PublicStruct { field: 10 };\nprintln!(\"field: {}\", s.field);"
     }
    ]
   },
   {
    "heading": "use Keyword and Paths",
    "blocks": [
     {
      "type": "markdown",
      "content": "The `use` keyword brings items into scope so you don't have to type the full path every time."
     },
     {
      "type": "code",
      "content": "use std::collections::HashMap;\nlet mut map = HashMap::new();\nmap.insert(\"key\", 1);\nprintln!(\"map: {:?}\", map);"
     }
    ]
   },
   {
    "heading": "Path Prefixes: crate::, super::, self::",
    "blocks": [
     {
      "type": "markdown",
      "content": "- `crate::` — from the crate root\n- `super::` — from the parent module\n- `self::` — from the current module (usually omitted)"
     },
     {
      "type": "code",
      "content": "mod a {\n    pub fn from_a() { println!(\"from_a\"); }\n    pub mod b {\n        pub fn from_b() {\n            super::from_a();  // access parent\n        }\n    }\n}\n\na::b::from_b();"
     }
    ]
   },
   {
    "heading": "Re-exporting with pub use",
    "blocks": [
     {
      "type": "markdown",
      "content": "`pub use` re-exports an item, making it part of your module's public API. Useful for creating a clean facade."
     },
     {
      "type": "code",
      "content": "mod backend {\n    pub fn internal() { println!(\"internal\"); }\n}\n\nmod api {\n    pub use crate::backend::internal as do_work;  // re-export with new name\n}\n\napi::do_work();"
     }
    ]
   },
   {
    "heading": "Separating Modules into Files",
    "blocks": [
     {
      "type": "markdown",
      "content": "In a real project: `mod foo;` tells the compiler to look for `foo.rs` or `foo/mod.rs`. The file's contents become the module body. No need to wrap in `mod foo { ... }` — the file itself is the module."
     },
     {
      "type": "markdown",
      "content": "Example structure:\n```\nsrc/\n  main.rs      // mod utils;\n  utils.rs     // pub fn helper() { ... }\n  utils/\n    mod.rs     // pub mod sub;\n    sub.rs     // pub fn sub_helper() { ... }\n```"
     }
    ]
   },
   {
    "heading": "External Crates (Cargo.toml Dependencies)",
    "blocks": [
     {
      "type": "markdown",
      "content": "Add dependencies in `Cargo.toml` under `[dependencies]`. Then `use` them in your code. Cargo downloads and compiles them."
     },
     {
      "type": "markdown",
      "content": "```toml\n[dependencies]\nserde = { version = \"1.0\", features = [\"derive\"] }\ntokio = { version = \"1\", features = [\"full\"] }\nrand = \"0.8\"\n```"
     }
    ]
   },
   {
    "heading": "The Prelude",
    "blocks": [
     {
      "type": "markdown",
      "content": "Rust automatically brings common items into scope via the **prelude** (`std::prelude::v1`). That's why you can use `Vec`, `Option`, `Result`, `println!`, etc. without `use`."
     }
    ]
   },
   {
    "heading": "Commonly Used Crates",
    "blocks": [
     {
      "type": "markdown",
      "content": "| Crate | Purpose |\n|-------|--------|\n| **serde** | Serialization/deserialization (JSON, etc.) |\n| **tokio** | Async runtime |\n| **clap** | Command-line argument parsing |\n| **rand** | Random number generation |\n| **reqwest** | HTTP client |\n| **thiserror / anyhow** | Error handling |"
     },
     {
      "type": "code",
      "content": "// Example: rand (if added to Cargo.toml)\n// use rand::Rng;\n// let n: u32 = rand::thread_rng().gen_range(1..=100);\n// In a notebook, external crates may need to be available in the environment"
     }
    ]
   },
   {
    "heading": "Cargo Basics",
    "blocks": [
     {
      "type": "markdown",
      "content": "| Command | Purpose |\n|---------|--------|\n| `cargo new project_name` | Create a new binary project |\n| `cargo new --lib lib_name` | Create a library |\n| `cargo build` | Compile (debug) |\n| `cargo build --release` | Optimized build |\n| `cargo run` | Build and run |\n| `cargo test` | Run tests |\n| `cargo doc --open` | Generate and open docs |"
     }
    ]
   },
   {
    "heading": "Workspaces",
    "blocks": [
     {
      "type": "markdown",
      "content": "A **workspace** is a set of crates that share a `Cargo.lock` and output directory. Define in the root `Cargo.toml`:\n\n```toml\n[workspace]\nmembers = [\"crate_a\", \"crate_b\"]\n```"
     }
    ]
   },
   {
    "heading": "Feature Flags",
    "blocks": [
     {
      "type": "markdown",
      "content": "Features let you enable optional functionality. In `Cargo.toml`:\n\n```toml\n[features]\ndefault = [\"std\"]\nstd = []\nserde = [\"dep:serde\"]\n```\n\nUse with `cargo build --features serde` or in dependencies: `mylib = { path = \".\", features = [\"serde\"] }`."
     }
    ]
   },
   {
    "heading": "Common Mistakes Beginners Make",
    "blocks": [
     {
      "type": "markdown",
      "content": "1. **Forgetting `pub`** on items you want to use from outside the module\n2. **Confusing `mod` and `use`** — `mod` declares/loads; `use` brings into scope\n3. **Wrong path** — `crate::` vs `super::` vs relative paths\n4. **Circular dependencies** — avoid modules depending on each other in a cycle\n5. **Not running `cargo build`** after adding dependencies"
     }
    ]
   },
   {
    "heading": "Key Rules to Remember",
    "blocks": [
     {
      "type": "markdown",
      "content": "- `mod` declares a module; `pub` makes items visible\n- `use` brings items into scope; `pub use` re-exports\n- Paths: `crate::` (root), `super::` (parent), `self::` (current)\n- `mod foo;` loads `foo.rs` or `foo/mod.rs`\n- Dependencies go in `Cargo.toml`; `cargo build` fetches them\n- Workspaces group multiple crates; features enable optional code"
     }
    ]
   }
  ],
  "sectionCount": 16
 },
 {
  "order": 13,
  "slug": "lifetimes",
  "emoji": "⏳",
  "title": "Lifetimes",
  "sections": [
   {
    "heading": "What Are Lifetimes and Why Do They Matter?",
    "blocks": [
     {
      "type": "markdown",
      "content": "A **lifetime** is how long a reference remains valid. When you borrow data (with `&` or `&mut`), that reference must not outlive the original data. If it did, you'd have a **dangling reference** — a pointer to memory that's been freed. In C or C++, this causes undefined behavior. Rust's borrow checker uses lifetimes to prevent this at compile time.\n\n**Analogy:** Imagine lending a book to a friend. The \"lifetime\" of that loan is until your friend returns it. You can't sell the book while it's still loaned out — and Rust enforces similar rules for references."
     }
    ]
   },
   {
    "heading": "The Problem: Dangling References",
    "blocks": [
     {
      "type": "markdown",
      "content": "Without lifetimes, this would be possible (and dangerous):\n\n```rust\n// This would NOT compile in Rust!\nfn dangling() -> &str {\n    let s = String::from(\"hello\");\n    &s  // s is dropped here; returning &s would be a dangling reference!\n}\n```\n\nRust rejects this because `s` is dropped at the end of the function, so returning `&s` would point to freed memory. Lifetimes make this relationship explicit."
     }
    ]
   },
   {
    "heading": "Basic Lifetime Annotations: `'a`",
    "blocks": [
     {
      "type": "markdown",
      "content": "Lifetime parameters use apostrophes and lowercase names, like `'a`, `'b`, or `'static`. They describe *how long* references live relative to each other, not *how long* in absolute time.\n\nA function that takes two references and returns one needs to tell the compiler: \"the returned reference will be valid as long as the shorter of the two input lifetimes.\""
     },
     {
      "type": "code",
      "content": "// Without explicit lifetimes, the compiler infers them.\n// Here we add them explicitly to show the relationship.\nfn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\n    if x.len() > y.len() { x } else { y }\n}\n\nlet s1 = \"short\";\nlet s2 = \"longer string\";\nlet result = longest(s1, s2);\nprintln!(\"Longer: {}\", result);"
     }
    ]
   },
   {
    "heading": "Lifetime Elision: The Three Rules",
    "blocks": [
     {
      "type": "markdown",
      "content": "Often you don't need to write lifetimes at all! The compiler applies **lifetime elision rules** to infer them:\n\n1. **Rule 1:** Each reference parameter gets its own lifetime. `fn foo(x: &str, y: &str)` becomes `fn foo<'a, 'b>(x: &'a str, y: &'b str)`.\n\n2. **Rule 2:** If there's exactly one input lifetime, it's assigned to all output lifetimes. `fn foo(x: &str) -> &str` becomes `fn foo<'a>(x: &'a str) -> &'a str`.\n\n3. **Rule 3:** If there are multiple input lifetimes but one is `&self` or `&mut self`, that lifetime is assigned to all output lifetimes.\n\nIf the compiler can't figure it out after these rules, it will ask you to add explicit annotations."
     },
     {
      "type": "code",
      "content": "// Elision in action: no explicit lifetimes needed!\nfn first_word(s: &str) -> &str {\n    s.split_whitespace().next().unwrap_or(\"\")\n}\n\nlet text = \"hello world\";\nlet word = first_word(text);\nprintln!(\"First word: {}\", word);"
     }
    ]
   },
   {
    "heading": "Lifetimes in Function Signatures",
    "blocks": [
     {
      "type": "markdown",
      "content": "When you have multiple references and a return type that's a reference, you must tie them together. The returned reference's lifetime must not exceed any of the input lifetimes."
     },
     {
      "type": "code",
      "content": "fn choose_longer<'a>(a: &'a str, b: &'a str) -> &'a str {\n    if a.len() >= b.len() { a } else { b }\n}\n\nlet a = \"apple\";\nlet b = \"banana\";\nlet longer = choose_longer(a, b);\nprintln!(\"Longer: {}\", longer);"
     }
    ]
   },
   {
    "heading": "Lifetimes in Structs",
    "blocks": [
     {
      "type": "markdown",
      "content": "When a struct holds a reference, it must specify how long that reference lives. The struct cannot outlive the data it borrows."
     },
     {
      "type": "code",
      "content": "struct Excerpt<'a> {\n    text: &'a str,\n}\n\nlet novel = String::from(\"Call me Ishmael. Some years ago...\");\nlet first_sentence = novel.split('.').next().unwrap_or(\"\");\nlet excerpt = Excerpt { text: first_sentence };\nprintln!(\"Excerpt: {}\", excerpt.text);"
     }
    ]
   },
   {
    "heading": "The `'static` Lifetime",
    "blocks": [
     {
      "type": "markdown",
      "content": "The special lifetime `'static` means \"lives for the entire program.\" String literals have type `&'static str` because they're baked into the binary. Use `'static` when you need a reference that never goes away."
     },
     {
      "type": "code",
      "content": "// String literals are &'static str\nlet greeting: &'static str = \"Hello, world!\";\n\n// Sometimes you need to constrain a generic to 'static\nfn print_static<T: std::fmt::Display + 'static>(x: T) {\n    println!(\"{}\", x);\n}\n\nprint_static(greeting);\nprint_static(42);  // i32 is 'static (no references)"
     }
    ]
   },
   {
    "heading": "Lifetime Bounds on Generics",
    "blocks": [
     {
      "type": "markdown",
      "content": "When combining lifetimes with generics, you can add lifetime bounds. For example, `T: 'a` means \"all references in T must outlive `'a`.\""
     },
     {
      "type": "code",
      "content": "use std::fmt::Display;\n\nfn longest_with_ann<'a, T>(x: &'a str, y: &'a str, ann: T) -> &'a str\nwhere\n    T: Display,\n{\n    println!(\"Announcement: {}\", ann);\n    if x.len() > y.len() { x } else { y }\n}\n\nlet s1 = \"hi\";\nlet s2 = \"hello\";\nlet result = longest_with_ann(s1, s2, \"Comparing strings\");\nprintln!(\"Result: {}\", result);"
     }
    ]
   },
   {
    "heading": "Common Lifetime Patterns",
    "blocks": [
     {
      "type": "markdown",
      "content": "**Pattern 1:** Returning a slice from a function — the output lifetime is tied to the input.\n\n**Pattern 2:** Structs that borrow — the struct's lifetime parameter ties it to the borrowed data.\n\n**Pattern 3:** Methods on structs with references — `&self` or `&mut self` often determines the output lifetime."
     },
     {
      "type": "code",
      "content": "// Pattern: string processing that returns slices\nfn get_until_space(s: &str) -> &str {\n    match s.find(' ') {\n        Some(i) => &s[..i],\n        None => s,\n    }\n}\n\nlet input = \"hello world\";\nlet first = get_until_space(input);\nprintln!(\"First word: {}\", first);"
     }
    ]
   },
   {
    "heading": "Why the Borrow Checker Needs Lifetimes",
    "blocks": [
     {
      "type": "markdown",
      "content": "The borrow checker tracks:\n- **Who** owns data\n- **Who** borrows it (and whether mutably)\n- **How long** each borrow lasts\n\nLifetimes answer \"how long.\" Without them, the compiler couldn't verify that your references are always valid. They're the glue that makes Rust's memory safety guarantees work."
     }
    ]
   },
   {
    "heading": "Lifetime Subtyping",
    "blocks": [
     {
      "type": "markdown",
      "content": "Lifetime subtyping: if `'a` outlives `'b` (written `'a: 'b`), then `'a` is a subtype of `'b`. A reference with lifetime `'a` can be used where `'b` is expected, because it lives at least as long.\n\nThis is useful when a struct holds a reference with a shorter lifetime than the struct's own lifetime parameter."
     },
     {
      "type": "code",
      "content": "struct Wrapper<'a> {\n    inner: &'a str,\n}\n\nimpl<'a> Wrapper<'a> {\n    fn get(&self) -> &'a str {\n        self.inner\n    }\n}\n\nlet s = String::from(\"wrapped\");\nlet w = Wrapper { inner: &s };\nprintln!(\"Got: {}\", w.get());"
     }
    ]
   },
   {
    "heading": "Practical Example: Multiple String Slices",
    "blocks": [
     {
      "type": "markdown",
      "content": "Here's a more realistic example: a function that finds a substring and returns a slice into the original string."
     },
     {
      "type": "code",
      "content": "fn find_substring<'a>(haystack: &'a str, needle: &str) -> Option<&'a str> {\n    haystack.find(needle).map(|i| &haystack[i..i + needle.len()])\n}\n\nlet text = \"The quick brown fox jumps over the lazy dog\";\nlet sub = find_substring(text, \"brown\");\nprintln!(\"Found: {:?}\", sub);"
     }
    ]
   },
   {
    "heading": "Common Mistakes Beginners Make",
    "blocks": [
     {
      "type": "markdown",
      "content": "1. **Over-annotating** — Try without explicit lifetimes first; elision often works.\n2. **Using the same lifetime for everything** — Sometimes you need `'a` and `'b` to express different relationships.\n3. **Confusing lifetime with scope** — A variable's scope is where it's valid; lifetime is about references.\n4. **Returning references to local data** — Always invalid; the compiler will catch it.\n5. **Forgetting `'static` for string literals** — They're special; they live forever."
     }
    ]
   },
   {
    "heading": "Key Rules to Remember",
    "blocks": [
     {
      "type": "markdown",
      "content": "- Lifetimes prevent dangling references by tying reference validity to the borrowed data.\n- Use `'a`, `'b`, etc. to name lifetimes; `'static` means \"lives for the whole program.\"\n- Lifetime elision has three rules; add explicit annotations when the compiler asks.\n- Structs holding references need a lifetime parameter.\n- The returned reference's lifetime cannot exceed any input reference's lifetime.\n- When in doubt, let the compiler guide you — it will suggest fixes!"
     }
    ]
   }
  ],
  "sectionCount": 14
 },
 {
  "order": 14,
  "slug": "smart-pointers",
  "emoji": "🧠",
  "title": "Smart Pointers",
  "sections": [
   {
    "heading": "What Are Smart Pointers?",
    "blocks": [
     {
      "type": "markdown",
      "content": "A **smart pointer** is a pointer-like type that manages a resource (usually heap-allocated memory) and provides additional behavior. In Rust:\n\n- **References** (`&T`) borrow data; they don't own it.\n- **Smart pointers** own data and may allow shared or mutable access with extra guarantees.\n\n**Analogy:** A reference is like looking at a book on someone's shelf. A smart pointer is like having your own copy in a box — you own it, and the \"box\" might add features (like reference counting or interior mutability)."
     }
    ]
   },
   {
    "heading": "Box<T>: Heap Allocation",
    "blocks": [
     {
      "type": "markdown",
      "content": "`Box<T>` stores data on the heap. Use it when:\n- You have a type whose size isn't known at compile time (e.g., recursive types)\n- You want to transfer ownership of large data without copying\n- You need to store a trait object (dyn Trait)"
     },
     {
      "type": "code",
      "content": "// Simple heap allocation\nlet b = Box::new(42);\nprintln!(\"Box holds: {}\", b);\n\n// Box dereferences automatically\nlet x = *b;\nprintln!(\"Dereferenced: {}\", x);"
     }
    ]
   },
   {
    "heading": "Box for Recursive Types",
    "blocks": [
     {
      "type": "markdown",
      "content": "Rust needs to know the size of every type at compile time. A recursive type like a linked list would be infinitely large — unless we put the \"next\" node in a `Box`, which has a fixed size (pointer)."
     },
     {
      "type": "code",
      "content": "// Without Box, this would be infinite size!\nfn cons_list_demo() {\n    enum List {\n        Cons(i32, Box<List>),\n        Nil,\n    }\n    let list = List::Cons(1, Box::new(List::Cons(2, Box::new(List::Cons(3, Box::new(List::Nil))))));\n    // In a real impl you'd traverse it; here we just show it compiles\n}\ncons_list_demo();\nprintln!(\"Recursive List type works!\");"
     }
    ]
   },
   {
    "heading": "Deref and DerefMut Traits",
    "blocks": [
     {
      "type": "markdown",
      "content": "The `Deref` trait lets you use `*` to get the inner value. **Deref coercion** automatically converts `&Box<T>` to `&T` when passing to functions — so you can pass a `&Box<String>` where `&str` is expected."
     },
     {
      "type": "code",
      "content": "fn print_len(s: &str) {\n    println!(\"Length: {}\", s.len());\n}\n\nlet boxed = Box::new(String::from(\"hello\"));\n// Deref coercion: &Box<String> -> &String -> &str\nprint_len(&boxed);"
     }
    ]
   },
   {
    "heading": "Drop Trait",
    "blocks": [
     {
      "type": "markdown",
      "content": "The `Drop` trait lets you run code when a value goes out of scope. `Box` implements `Drop` to free the heap memory. You can implement `Drop` for your own types to clean up resources."
     },
     {
      "type": "code",
      "content": "struct Droppable(i32);\n\nimpl Drop for Droppable {\n    fn drop(&mut self) {\n        println!(\"Dropping value {}\", self.0);\n    }\n}\n\n{\n    let d = Droppable(42);\n    println!(\"Inside scope\");\n}\nprintln!(\"Left scope - Drop was called\");"
     }
    ]
   },
   {
    "heading": "Rc<T>: Reference Counting (Shared Ownership)",
    "blocks": [
     {
      "type": "markdown",
      "content": "`Rc<T>` (Reference Counted) lets multiple owners share the same data. The data is dropped when the last `Rc` is dropped. Use it for **single-threaded** shared ownership. It's not thread-safe."
     },
     {
      "type": "code",
      "content": "use std::rc::Rc;\n\nlet shared = Rc::new(String::from(\"shared data\"));\nlet clone1 = Rc::clone(&shared);\nlet clone2 = Rc::clone(&shared);\n\nprintln!(\"Strong count: {}\", Rc::strong_count(&shared));\nprintln!(\"All point to: {}\", shared);"
     }
    ]
   },
   {
    "heading": "Arc<T>: Atomic Reference Counting (Thread-Safe)",
    "blocks": [
     {
      "type": "markdown",
      "content": "`Arc<T>` is like `Rc` but uses atomic operations, so it's safe to share across threads. Use `Arc` when you need shared ownership in concurrent code."
     },
     {
      "type": "code",
      "content": "use std::sync::Arc;\n\nlet shared = Arc::new(42);\nlet clone1 = Arc::clone(&shared);\nlet clone2 = Arc::clone(&shared);\n\nprintln!(\"Arc value: {}\", shared);\n// In real code you'd pass clone1/clone2 to threads"
     }
    ]
   },
   {
    "heading": "RefCell<T>: Interior Mutability",
    "blocks": [
     {
      "type": "markdown",
      "content": "`RefCell<T>` allows mutable borrows checked at **runtime** instead of compile time. You can have an immutable reference to a `RefCell` but still mutate the inner value via `borrow_mut()`. Use when you need mutability through an immutable interface."
     },
     {
      "type": "code",
      "content": "use std::cell::RefCell;\n\nlet data = RefCell::new(0);\n{\n    let mut borrow = data.borrow_mut();\n    *borrow += 1;\n}\nprintln!(\"Value: {}\", data.borrow());"
     }
    ]
   },
   {
    "heading": "Rc<RefCell<T>>: Shared Mutable Data",
    "blocks": [
     {
      "type": "markdown",
      "content": "Combine `Rc` and `RefCell` when you need **multiple owners** that can **mutate** the data. `Rc` gives shared ownership; `RefCell` gives interior mutability."
     },
     {
      "type": "code",
      "content": "use std::rc::Rc;\nuse std::cell::RefCell;\n\nlet shared_mut = Rc::new(RefCell::new(0));\nlet c1 = Rc::clone(&shared_mut);\nlet c2 = Rc::clone(&shared_mut);\n\n*c1.borrow_mut() += 10;\n*c2.borrow_mut() += 5;\nprintln!(\"Final value: {}\", *shared_mut.borrow());"
     }
    ]
   },
   {
    "heading": "Weak<T>: Breaking Reference Cycles",
    "blocks": [
     {
      "type": "markdown",
      "content": "`Rc` can create cycles (A points to B, B points to A) so nothing is ever dropped. `Weak<T>` is a non-owning reference that doesn't keep the data alive. Use it for back-references in graphs or trees."
     },
     {
      "type": "code",
      "content": "use std::rc::{Rc, Weak};\n\nlet strong = Rc::new(42);\nlet weak: Weak<i32> = Rc::downgrade(&strong);\n\n// Upgrade gives Option<Rc<T>>\nif let Some(rc) = weak.upgrade() {\n    println!(\"Weak upgraded: {}\", rc);\n}\n\ndrop(strong);\nassert!(weak.upgrade().is_none());\nprintln!(\"After dropping strong, weak.upgrade() is None\");"
     }
    ]
   },
   {
    "heading": "Cow<T>: Clone-on-Write",
    "blocks": [
     {
      "type": "markdown",
      "content": "`Cow` (Clone on Write) can hold either borrowed or owned data. When you need to mutate, it clones the data. Useful for avoiding unnecessary allocations when you might not need to modify."
     },
     {
      "type": "code",
      "content": "use std::borrow::Cow;\n\nfn add_prefix(s: &str) -> Cow<str> {\n    if s.starts_with(\"Hello\") {\n        Cow::Borrowed(s)\n    } else {\n        Cow::Owned(format!(\"Hello, {}\", s))\n    }\n}\n\nlet s1 = \"Hello world\";\nlet s2 = \"Rust\";\nprintln!(\"{}\", add_prefix(s1));\nprintln!(\"{}\", add_prefix(s2));"
     }
    ]
   },
   {
    "heading": "When to Use Which Smart Pointer",
    "blocks": [
     {
      "type": "markdown",
      "content": "| Need | Use |\n|------|-----|\n| Heap allocation, recursive types, trait objects | `Box<T>` |\n| Single-threaded shared ownership | `Rc<T>` |\n| Thread-safe shared ownership | `Arc<T>` |\n| Mutate through immutable reference (single-threaded) | `RefCell<T>` |\n| Shared + mutable (single-threaded) | `Rc<RefCell<T>>` |\n| Break reference cycles | `Weak<T>` |\n| Avoid cloning when maybe not needed | `Cow<T>` |"
     }
    ]
   },
   {
    "heading": "Common Mistakes Beginners Make",
    "blocks": [
     {
      "type": "markdown",
      "content": "1. **Using `Rc` when `Box` would do** — If you have single ownership, prefer `Box`.\n2. **Using `Rc` across threads** — Use `Arc` for concurrency.\n3. **Panicking with RefCell** — `borrow_mut()` panics if already borrowed; use `try_borrow_mut()` for fallible access.\n4. **Creating cycles with Rc** — Use `Weak` for back-references.\n5. **Overusing RefCell** — Prefer the borrow checker when possible; RefCell moves checks to runtime."
     }
    ]
   },
   {
    "heading": "Key Rules to Remember",
    "blocks": [
     {
      "type": "markdown",
      "content": "- `Box<T>` owns heap data; use for recursion, large data, trait objects.\n- `Deref` enables `*` and deref coercion; `Drop` runs cleanup on scope exit.\n- `Rc` = shared ownership, single-threaded; `Arc` = shared ownership, thread-safe.\n- `RefCell` = interior mutability with runtime borrow checking.\n- `Rc<RefCell<T>>` = shared mutable data in single-threaded code.\n- `Weak` breaks cycles; `Cow` avoids unnecessary clones."
     }
    ]
   }
  ],
  "sectionCount": 14
 },
 {
  "order": 15,
  "slug": "concurrency",
  "emoji": "⚡",
  "title": "Concurrency",
  "sections": [
   {
    "heading": "Threads: `std::thread::spawn`",
    "blocks": [
     {
      "type": "markdown",
      "content": "A **thread** is a separate execution path. Use `std::thread::spawn` to create a new thread. The closure you pass runs in that thread. Use `join()` to wait for the thread to finish and get its result."
     },
     {
      "type": "code",
      "content": "use std::thread;\nuse std::time::Duration;\n\nlet handle = thread::spawn(|| {\n    println!(\"Hello from the spawned thread!\");\n    thread::sleep(Duration::from_millis(100));\n    42\n});\n\nprintln!(\"Hello from the main thread!\");\nlet result = handle.join().unwrap();\nprintln!(\"Spawned thread returned: {}\", result);"
     }
    ]
   },
   {
    "heading": "Move Closures",
    "blocks": [
     {
      "type": "markdown",
      "content": "Closures passed to `spawn` must own their data. Use `move` to transfer ownership of variables into the closure. Without `move`, the closure would borrow — but the thread might outlive the main thread's stack, causing a dangling reference."
     },
     {
      "type": "code",
      "content": "use std::thread;\n\nlet v = vec![1, 2, 3];\nlet handle = thread::spawn(move || {\n    println!(\"Here's a vector: {:?}\", v);\n});\n\nhandle.join().unwrap();\n// v is now moved; we can't use it here"
     }
    ]
   },
   {
    "heading": "Message Passing: mpsc Channels",
    "blocks": [
     {
      "type": "markdown",
      "content": "Rust's standard approach: \"Do not communicate by sharing memory; instead, share memory by communicating.\" The `mpsc` module (multiple producer, single consumer) provides channels. One thread sends; another receives."
     },
     {
      "type": "code",
      "content": "use std::sync::mpsc;\nuse std::thread;\n\nlet (tx, rx) = mpsc::channel();\n\nthread::spawn(move || {\n    tx.send(\"Hello from the thread!\").unwrap();\n});\n\nlet received = rx.recv().unwrap();\nprintln!(\"Got: {}\", received);"
     }
    ]
   },
   {
    "heading": "Multiple Producers",
    "blocks": [
     {
      "type": "markdown",
      "content": "You can clone the `Sender` to have multiple threads send to the same channel. Use `Sender::clone(&tx)` to create additional senders."
     },
     {
      "type": "code",
      "content": "use std::sync::mpsc;\nuse std::thread;\n\nlet (tx, rx) = mpsc::channel();\nlet tx2 = tx.clone();\n\nthread::spawn(move || { tx.send(1).unwrap(); });\nthread::spawn(move || { tx2.send(2).unwrap(); });\n\nprintln!(\"Received: {}\", rx.recv().unwrap());\nprintln!(\"Received: {}\", rx.recv().unwrap());"
     }
    ]
   },
   {
    "heading": "Shared State: Mutex<T>",
    "blocks": [
     {
      "type": "markdown",
      "content": "A **mutex** (mutual exclusion) ensures only one thread can access the data at a time. To access the data, you acquire the lock; when done, you release it. The lock is released automatically when the `MutexGuard` goes out of scope."
     },
     {
      "type": "code",
      "content": "use std::sync::Mutex;\n\nlet m = Mutex::new(0);\n{\n    let mut guard = m.lock().unwrap();\n    *guard += 1;\n}\nprintln!(\"Value: {}\", *m.lock().unwrap());"
     }
    ]
   },
   {
    "heading": "Arc<Mutex<T>>: Shared Mutable State Across Threads",
    "blocks": [
     {
      "type": "markdown",
      "content": "`Mutex` alone can't be shared across threads — you need to wrap it in `Arc` for shared ownership. `Arc<Mutex<T>>` is the classic pattern for \"multiple threads, one mutable value.\""
     },
     {
      "type": "code",
      "content": "use std::sync::{Arc, Mutex};\nuse std::thread;\n\nlet counter = Arc::new(Mutex::new(0));\nlet mut handles = vec![];\n\nfor _ in 0..4 {\n    let c = Arc::clone(&counter);\n    let h = thread::spawn(move || {\n        let mut num = c.lock().unwrap();\n        *num += 1;\n    });\n    handles.push(h);\n}\n\nfor h in handles {\n    h.join().unwrap();\n}\nprintln!(\"Result: {}\", *counter.lock().unwrap());"
     }
    ]
   },
   {
    "heading": "RwLock<T>: Multiple Readers or One Writer",
    "blocks": [
     {
      "type": "markdown",
      "content": "`RwLock` (Read-Write Lock) allows multiple readers *or* one writer. Use it when reads are common and writes are rare — it can be more efficient than `Mutex` in that case."
     },
     {
      "type": "code",
      "content": "use std::sync::RwLock;\n\nlet lock = RwLock::new(5);\n{\n    let r1 = lock.read().unwrap();\n    let r2 = lock.read().unwrap();\n    println!(\"Readers see: {} and {}\", *r1, *r2);\n}\n{\n    let mut w = lock.write().unwrap();\n    *w += 1;\n}\nprintln!(\"After write: {}\", *lock.read().unwrap());"
     }
    ]
   },
   {
    "heading": "Send and Sync Traits",
    "blocks": [
     {
      "type": "markdown",
      "content": "**Send:** Types that can be transferred across thread boundaries. Most types are `Send`; exceptions include `Rc` (use `Arc` for threads).\n\n**Sync:** Types whose references can be shared across threads (`&T` is `Send` when `T: Sync`). `Mutex<T>` is `Sync` when `T: Send`.\n\nThe compiler enforces these automatically. If you try to use a non-`Send` type in a thread, you'll get a compile error."
     }
    ]
   },
   {
    "heading": "Atomic Types",
    "blocks": [
     {
      "type": "markdown",
      "content": "**Atomics** are lock-free primitives for simple shared state. `AtomicBool`, `AtomicUsize`, `AtomicIsize`, etc. Use `Ordering` to specify memory ordering (e.g., `Ordering::SeqCst` for sequential consistency)."
     },
     {
      "type": "code",
      "content": "use std::sync::atomic::{AtomicUsize, Ordering};\n\nlet counter = AtomicUsize::new(0);\ncounter.fetch_add(1, Ordering::SeqCst);\ncounter.fetch_add(1, Ordering::SeqCst);\nprintln!(\"Counter: {}\", counter.load(Ordering::SeqCst));"
     }
    ]
   },
   {
    "heading": "Common Concurrency Patterns",
    "blocks": [
     {
      "type": "markdown",
      "content": "1. **Pipeline:** Thread A sends to B, B sends to C — use multiple channels.\n2. **Worker pool:** A channel of tasks; worker threads receive and process.\n3. **Shared counter:** `Arc<Mutex<usize>>` or `Arc<AtomicUsize>`.\n4. **Broadcast:** Multiple receivers (use crates like `crossbeam` or `tokio` for fan-out)."
     },
     {
      "type": "code",
      "content": "// Worker pattern: channel + threads\nuse std::sync::mpsc;\nuse std::thread;\n\nlet (tx, rx) = mpsc::channel();\ntx.send(10).unwrap();\ntx.send(20).unwrap();\ndrop(tx);  // Signal no more sends\n\nlet handle = thread::spawn(move || {\n    for msg in rx {\n        println!(\"Worker received: {}\", msg);\n    }\n});\nhandle.join().unwrap();"
     }
    ]
   },
   {
    "heading": "Deadlock Prevention",
    "blocks": [
     {
      "type": "markdown",
      "content": "**Deadlock** occurs when two or more threads wait for each other forever. To reduce risk:\n\n- **Lock in a consistent order** — if thread A locks X then Y, thread B should also lock X then Y, never Y then X.\n- **Avoid holding locks while doing I/O** — release the lock before blocking.\n- **Use timeouts** — `try_lock()` or `lock_timeout()` instead of blocking forever.\n- **Prefer channels** — message passing often avoids lock ordering issues."
     }
    ]
   },
   {
    "heading": "Rayon: Parallel Iterators (Brief Overview)",
    "blocks": [
     {
      "type": "markdown",
      "content": "**Rayon** is a popular crate for data parallelism. It turns regular iterators into parallel ones with minimal code change. Add `rayon` to `Cargo.toml` and use `.par_iter()` instead of `.iter()`."
     },
     {
      "type": "code",
      "content": "// Rayon example (requires: rayon = \"1.x\" in Cargo.toml)\n// Uncomment and run in a project with rayon:\n// use rayon::prelude::*;\n// let v: Vec<i32> = (0..1000).collect();\n// let sum: i32 = v.par_iter().map(|x| x * 2).sum();\n// println!(\"Parallel sum: {}\", sum);\n\n// Without Rayon, sequential version:\nlet v: Vec<i32> = (0..10).collect();\nlet sum: i32 = v.iter().map(|x| x * 2).sum();\nprintln!(\"Sequential sum (concept): {}\", sum);"
     }
    ]
   },
   {
    "heading": "Common Mistakes Beginners Make",
    "blocks": [
     {
      "type": "markdown",
      "content": "1. **Forgetting `move`** in thread closures — leads to borrow checker errors.\n2. **Using `Rc` instead of `Arc`** for shared data across threads — `Rc` is not `Send`.\n3. **Holding a lock too long** — can cause contention or deadlock.\n4. **Ignoring `Ordering` in atomics** — `SeqCst` is safe but may be slower; understand the tradeoffs.\n5. **Blocking in async code** — if using async runtimes, avoid blocking the executor."
     }
    ]
   },
   {
    "heading": "Key Rules to Remember",
    "blocks": [
     {
      "type": "markdown",
      "content": "- Use `thread::spawn` for threads; `move` closures to transfer ownership.\n- Prefer **message passing** (channels) over shared state when possible.\n- For shared mutable state: `Arc<Mutex<T>>` or `Arc<RwLock<T>>`.\n- `Send` = safe to transfer across threads; `Sync` = safe to share via `&T`.\n- Use atomics for simple counters/flags; use `Ordering::SeqCst` when unsure.\n- Lock in a consistent order to avoid deadlocks; prefer channels when you can."
     }
    ]
   }
  ],
  "sectionCount": 14
 }
];
