# 🦀 Learn Rust from Scratch — 6-Month Mastery Plan

> **Start Date:** March 8, 2026  
> **End Date:** August 31, 2026  
> **Commitment:** Daily commits to GitHub  
> **Goal:** Go from zero to confident, production-ready Rust developer

---

## 📋 Table of Contents

- [Philosophy](#-philosophy)
- [How to Use This Plan](#-how-to-use-this-plan)
- [Month 1 — Foundations](#-month-1--foundations-march-8--april-7)
- [Month 2 — Ownership & Core Concepts](#-month-2--ownership--core-concepts-april-8--may-7)
- [Month 3 — Intermediate Rust](#-month-3--intermediate-rust-may-8--june-7)
- [Month 4 — Async, Networking & Web](#-month-4--async-networking--web-june-8--july-7)
- [Month 5 — Systems Programming & Advanced Topics](#-month-5--systems-programming--advanced-topics-july-8--august-7)
- [Month 6 — Capstone & Mastery](#-month-6--capstone--mastery-august-8--august-31)
- [Daily Commit Strategy](#-daily-commit-strategy)
- [Recommended Resources](#-recommended-resources)
- [Progress Tracker](#-progress-tracker)

---

## 🧠 Philosophy

1. **Learn by building.** Every concept is paired with a hands-on project.
2. **Commit daily.** Even a single-line comment or docs update counts — consistency beats intensity.
3. **Fail loudly.** Embrace compiler errors. Rust's compiler is your best teacher.
4. **Review and refactor.** Revisiting old code with new knowledge is one of the most powerful learning tools.

---

## 🗂 How to Use This Plan

Each week has:
- **Topics** to study
- **Exercises** to practice (commit these!)
- **A mini-project** to solidify learning
- **Stretch goals** for when you're ahead of schedule

### Repository Structure

```
learn-rust-from-scratch/
├── README.md                  # This file (your roadmap)
├── month-01-foundations/
│   ├── week-01/
│   │   ├── day-01-hello-world/
│   │   ├── day-02-variables/
│   │   ├── ...
│   │   └── mini-project/
│   ├── week-02/
│   ├── week-03/
│   └── week-04/
├── month-02-ownership/
├── month-03-intermediate/
├── month-04-async-web/
├── month-05-systems/
├── month-06-capstone/
└── resources/
    └── notes.md
```

Each day folder is a Cargo project:
```bash
cargo new day-01-hello-world
```

---

## 🟢 Month 1 — Foundations (March 8 – April 7)

> **Goal:** Get comfortable with Rust syntax, tooling, and basic programming concepts.

### Week 1: Hello, Rust! (Mar 8 – Mar 14)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 1 | Install Rust (`rustup`), VS Code + rust-analyzer, first `cargo new` | Create `hello-world` project, print your name |
| 2 | Variables, mutability, constants, shadowing | Write programs demonstrating `let`, `let mut`, `const`, shadowing |
| 3 | Data types: integers, floats, booleans, characters | Type annotation exercises, overflow experiments |
| 4 | Strings: `String` vs `&str`, basic string operations | Build a string formatter that takes a name and outputs a greeting |
| 5 | Tuples and arrays | Write a program that stores RGB colors as tuples and does basic operations |
| 6 | Functions: parameters, return values, expressions vs statements | Build a temperature converter (Celsius ↔ Fahrenheit ↔ Kelvin) |
| 7 | **Mini-project:** Simple calculator (add, subtract, multiply, divide) | CLI calculator using `std::io` for user input |

### Week 2: Control Flow & Collections (Mar 15 – Mar 21)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 8 | `if`/`else`, `if` in `let` statements | FizzBuzz implementation |
| 9 | Loops: `loop`, `while`, `for`, loop labels, `break`/`continue` | 99 bottles of beer, multiplication table generator |
| 10 | `match` expressions & patterns | Day of the week matcher, grade classifier |
| 11 | Vectors: creating, reading, updating, iterating | Build a dynamic to-do list (in-memory) |
| 12 | HashMaps: insert, access, update, iteration | Word frequency counter from a text |
| 13 | Iterators basics: `.iter()`, `.map()`, `.filter()`, `.collect()` | Transform a list of numbers using iterator chains |
| 14 | **Mini-project:** Contact book — store names, phones, emails in a HashMap | Full CRUD operations via CLI |

### Week 3: Structs, Enums & Pattern Matching (Mar 22 – Mar 28)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 15 | Structs: defining, instantiating, field init shorthand | Model a `Book` struct with title, author, pages, rating |
| 16 | Methods & associated functions (`impl` blocks) | Add methods: `summary()`, `is_long()`, `rate()` |
| 17 | Tuple structs, unit structs, struct update syntax | Model 2D/3D points, implement distance calculations |
| 18 | Enums: defining, variants with data | Model traffic lights, playing cards |
| 19 | `Option<T>` — Rust's null safety | Write functions that safely handle missing values |
| 20 | `Result<T, E>` — Error handling basics | File reading with proper error handling |
| 21 | **Mini-project:** Student grade management system | Structs + enums + pattern matching + collections |

### Week 4: Modules, Crates & Cargo (Mar 29 – Apr 4)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 22 | Modules: `mod`, `pub`, `use`, module tree | Reorganize the grade system into modules |
| 23 | Separating modules into files | Split code across `lib.rs` and multiple files |
| 24 | External crates: `Cargo.toml`, dependencies, `crates.io` | Use `rand` and `colored` crates |
| 25 | Cargo features: `cargo build`, `cargo test`, `cargo doc`, workspaces | Write documentation comments, generate docs |
| 26 | Input/Output: reading files, writing files, `std::fs` | Build a file-based note-taking app |
| 27 | Command-line arguments with `std::env` and `clap` | Build a CLI tool that processes text files |
| 28 | **Mini-project:** CLI word counter tool (like `wc`) | Counts lines, words, chars, bytes from files |

### 🏆 Month 1 Checkpoint
- [ ] Comfortable with basic syntax
- [ ] Can create and manage Cargo projects
- [ ] Understand structs, enums, and pattern matching
- [ ] Can read/write files and handle basic CLI input

---

## 🟡 Month 2 — Ownership & Core Concepts (April 8 – May 7)

> **Goal:** Master Rust's unique ownership system, lifetimes, and error handling patterns.

### Week 5: Ownership Deep Dive (Apr 5 – Apr 11)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 29 | Ownership rules: each value has one owner, one owner at a time, drop | Annotated examples showing ownership transfers |
| 30 | Move semantics: what moves, what copies, `Copy` vs `Clone` | Exercises that intentionally trigger move errors, then fix them |
| 31 | References & borrowing: `&T` (immutable) and `&mut T` (mutable) | Refactor previous projects to use references properly |
| 32 | Borrowing rules: multiple `&T` OR one `&mut T`, no dangling refs | Write code that violates rules, understand compiler errors |
| 33 | Slices: `&str`, `&[T]`, string slices vs string ownership | Build a word splitter and substring finder |
| 34 | Ownership in functions: passing and returning ownership | Function signature exercises with various ownership patterns |
| 35 | **Mini-project:** Text analyzer — refactored to use zero unnecessary clones | Analyze text stats (most common words, sentence length, etc.) |

### Week 6: Lifetimes & Generics (Apr 12 – Apr 18)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 36 | Lifetime annotations: `'a`, why they exist, the borrow checker | Annotate functions that return references |
| 37 | Lifetime elision rules | Identify where Rust infers lifetimes automatically |
| 38 | Lifetimes in structs | Build structs that hold references |
| 39 | `'static` lifetime, lifetime bounds | Understand when and why to use `'static` |
| 40 | Generics: generic functions | Write a `largest()` function for any comparable type |
| 41 | Generic structs and enums | Build a generic `Wrapper<T>` and `Pair<T, U>` |
| 42 | **Mini-project:** Generic data structure — `Stack<T>` with push, pop, peek | Fully generic, tested implementation |

### Week 7: Traits & Polymorphism (Apr 19 – Apr 25)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 43 | Defining and implementing traits | Create `Describable`, `Printable` traits |
| 44 | Default implementations, trait inheritance | Extend traits with defaults |
| 45 | Trait bounds: `fn foo<T: Display + Clone>(x: T)` | Write bounded generic functions |
| 46 | `impl Trait` syntax (argument & return position) | Simplify function signatures |
| 47 | Common std traits: `Display`, `Debug`, `Clone`, `PartialEq`, `From`/`Into` | Implement standard traits for your types |
| 48 | Deriving traits: `#[derive()]` | Add derives to all previous structs |
| 49 | **Mini-project:** Shape calculator — trait-based polymorphism | `Shape` trait with `area()` and `perimeter()` for Circle, Rectangle, Triangle |

### Week 8: Error Handling Mastery (Apr 26 – May 2)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 50 | `Result<T, E>` deep dive, `unwrap()`, `expect()` | Convert panicking code to proper error handling |
| 51 | The `?` operator, error propagation | Chain operations that may fail |
| 52 | Custom error types | Define domain-specific error enums |
| 53 | `thiserror` and `anyhow` crates | Refactor errors using community crates |
| 54 | `panic!` vs recoverable errors, when to use each | Decision flowchart for error strategies |
| 55 | Error handling in `main()`, exit codes | Build a robust CLI with proper exit codes |
| 56 | **Mini-project:** CSV parser with comprehensive error handling | Parse CSV files, handle malformed data gracefully |

### 🏆 Month 2 Checkpoint
- [ ] Can explain ownership, borrowing, and lifetimes clearly
- [ ] Comfortable writing generic code with trait bounds
- [ ] Proper error handling is second nature
- [ ] Understand when to clone vs borrow

---

## 🔵 Month 3 — Intermediate Rust (May 8 – June 7)

> **Goal:** Level up with closures, iterators, smart pointers, testing, and idiomatic Rust.

### Week 9: Closures & Iterators (May 3 – May 9)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 57 | Closures: syntax, capturing environment, `Fn`, `FnMut`, `FnOnce` | Write closures that capture by reference and by value |
| 58 | Closures as function parameters and return values | Build a configurable sorter using closures |
| 59 | Iterator trait: `next()`, consuming adaptors, iterator adaptors | Implement `Iterator` for a custom `Fibonacci` struct |
| 60 | Advanced iterator methods: `zip`, `enumerate`, `flat_map`, `fold`, `scan` | Solve data processing challenges with iterators |
| 61 | Chaining iterators, lazy evaluation, performance | Benchmark iterator chains vs manual loops |
| 62 | Creating custom iterators | Build a `Range` iterator with step |
| 63 | **Mini-project:** Data pipeline processor | Process JSON/CSV data using iterator chains |

### Week 10: Smart Pointers & Memory (May 10 – May 16)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 64 | `Box<T>`: heap allocation, recursive types | Implement a cons list and binary tree with `Box` |
| 65 | `Deref` trait, deref coercion, `Drop` trait | Custom smart pointer implementation |
| 66 | `Rc<T>`: reference counting, shared ownership | Model a graph with shared nodes |
| 67 | `RefCell<T>`: interior mutability, runtime borrow checking | Build a mock object for testing |
| 68 | `Rc<RefCell<T>>` pattern | Mutable shared state examples |
| 69 | `Cow<T>`: clone-on-write, avoiding unnecessary allocations | Optimize string processing with `Cow` |
| 70 | **Mini-project:** Simple linked list implementation | Singly linked list with insert, delete, search, display |

### Week 11: Testing & Documentation (May 17 – May 23)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 71 | Unit tests: `#[test]`, `assert!`, `assert_eq!`, `assert_ne!` | Add tests to ALL previous projects |
| 72 | Testing panics: `#[should_panic]`, testing `Result` | Test error paths |
| 73 | Integration tests: `tests/` directory, test organization | Write integration tests for the CSV parser |
| 74 | Test-driven development (TDD) workflow | Build a new module using TDD |
| 75 | Documentation: `///`, `//!`, doc tests, `cargo doc` | Fully document the linked list project |
| 76 | Benchmarking basics with `criterion` crate | Benchmark your data structures |
| 77 | **Mini-project:** A fully tested & documented math library | Covers basic arithmetic, statistics, and linear algebra operations |

### Week 12: Idiomatic Rust & Design Patterns (May 24 – May 30)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 78 | The newtype pattern | Wrap primitives for type safety |
| 79 | Builder pattern | Implement a builder for a complex config struct |
| 80 | Type state pattern | Model a state machine with compile-time guarantees |
| 81 | Using `From`/`Into` for conversions | Ergonomic type conversions across your codebase |
| 82 | Operator overloading: `Add`, `Mul`, `Index`, etc. | Build a `Vector2D` with full operator support |
| 83 | `PhantomData`, zero-cost abstractions | Explore advanced type-level programming |
| 84 | **Mini-project:** Expression evaluator | Parse and evaluate mathematical expressions using Rust patterns |

### 🏆 Month 3 Checkpoint
- [ ] Closures and iterators feel natural
- [ ] Understand when to use `Box`, `Rc`, `RefCell`
- [ ] Write thorough tests for all code
- [ ] Code is idiomatic and well-documented

---

## 🟣 Month 4 — Async, Networking & Web (June 8 – July 7)

> **Goal:** Build networked and web applications with async Rust.

### Week 13: Concurrency (Jun 1 – Jun 7)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 85 | Threads: `std::thread::spawn`, `join`, move closures | Parallel number crunching |
| 86 | Message passing: `mpsc` channels | Producer-consumer pattern |
| 87 | Shared state: `Mutex<T>`, `Arc<T>` | Thread-safe counter, shared data |
| 88 | `Arc<Mutex<T>>` pattern, deadlock prevention | Multi-threaded bank account simulation |
| 89 | `Rayon` crate: parallel iterators | Parallelize data processing from Month 3 |
| 90 | Atomic types: `AtomicBool`, `AtomicUsize`, `Ordering` | Lock-free shared counter |
| 91 | **Mini-project:** Multi-threaded web scraper skeleton | Concurrent URL fetcher using threads + channels |

### Week 14: Async/Await (Jun 8 – Jun 14)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 92 | Async concepts: futures, `.await`, `async fn` | Simple async functions with `tokio` |
| 93 | Tokio runtime: `#[tokio::main]`, spawning tasks | Run concurrent async tasks |
| 94 | Async I/O: reading/writing files asynchronously | Async file processor |
| 95 | `tokio::select!`, `tokio::join!`, timeouts | Handle multiple async operations |
| 96 | Async channels: `tokio::sync::mpsc`, `broadcast`, `watch` | Async message passing patterns |
| 97 | Streams: `tokio_stream`, async iterators | Process streaming data |
| 98 | **Mini-project:** Async chat server (TCP) | Multi-client chat using `tokio` |

### Week 15: HTTP & Web (Jun 15 – Jun 21)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 99 | HTTP client: `reqwest` crate, GET/POST requests | Fetch data from public APIs |
| 100 | JSON: `serde` and `serde_json`, serializing/deserializing | Parse API responses into structs |
| 101 | Intro to `Actix-web` or `Axum`: hello world, routing | First web server |
| 102 | Request handling: path params, query params, JSON bodies | CRUD endpoint handlers |
| 103 | Middleware, extractors, shared state in web frameworks | Add logging middleware and shared state |
| 104 | Serving static files, HTML templates with `askama` or `tera` | Render dynamic HTML pages |
| 105 | **Mini-project:** REST API — bookmark manager | Full CRUD API with JSON persistence |

### Week 16: Databases & Deployment (Jun 22 – Jun 28)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 106 | SQLite with `rusqlite`, database setup | Create tables, basic queries |
| 107 | ORMs: `Diesel` or `SeaORM` introduction | Model-based database operations |
| 108 | Migrations, connection pooling (`r2d2` or `deadpool`) | Production-ready database setup |
| 109 | Authentication: password hashing (`argon2`), JWT (`jsonwebtoken`) | User signup/login endpoints |
| 110 | Environment config: `dotenv`, `config` crate | 12-factor app configuration |
| 111 | Docker: containerizing a Rust web app | Write a multi-stage `Dockerfile` |
| 112 | **Mini-project:** Full-stack URL shortener | Web API + database + Docker |

### 🏆 Month 4 Checkpoint
- [ ] Can build async applications with `tokio`
- [ ] Comfortable building REST APIs
- [ ] Can work with databases in Rust
- [ ] Understand concurrency primitives

---

## 🟠 Month 5 — Systems Programming & Advanced Topics (July 8 – August 7)

> **Goal:** Dive into systems-level Rust — CLI tools, FFI, macros, and unsafe Rust.

### Week 17: Advanced CLI & Tools (Jul 1 – Jul 7)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 113 | `clap` v4 deep dive: subcommands, args, validators | Build a multi-command CLI tool |
| 114 | Terminal UI: `crossterm`, `ratatui` | Interactive terminal dashboard |
| 115 | Process management: `std::process::Command`, piping | Build a task runner |
| 116 | File system operations: walking directories, `walkdir` crate | Recursive file finder (like `find`) |
| 117 | Regular expressions: `regex` crate | Build a `grep`-like tool |
| 118 | Serialization: `serde` with TOML, YAML, RON formats | Config file parser supporting multiple formats |
| 119 | **Mini-project:** A personal `dev-tools` CLI | Swiss-army knife CLI with multiple subcommands |

### Week 18: Macros (Jul 8 – Jul 14)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 120 | Declarative macros: `macro_rules!` basics | Write `vec!`-like macros |
| 121 | Advanced `macro_rules!`: repetition, nested macros, TT munchers | Build a `hashmap!` macro |
| 122 | Debugging macros: `cargo expand`, tracing macro expansion | Debug and understand existing macros |
| 123 | Procedural macros: intro, types (derive, attribute, function-like) | Setup a proc-macro crate |
| 124 | Derive macros with `syn` and `quote` | Auto-derive a custom trait |
| 125 | Attribute macros | Build a `#[route]` macro for your web framework |
| 126 | **Mini-project:** Testing framework macro | `#[my_test]` macro that adds setup/teardown |

### Week 19: Unsafe Rust & FFI (Jul 15 – Jul 21)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 127 | Unsafe Rust: raw pointers, `unsafe` blocks, when to use | Explore what unsafe allows |
| 128 | Unsafe functions, unsafe traits | Write safe wrappers around unsafe code |
| 129 | FFI basics: calling C from Rust (`extern "C"`) | Link to a C library |
| 130 | FFI: exposing Rust to C, `#[no_mangle]`, `cbindgen` | Create a Rust library callable from C |
| 131 | `bindgen`: auto-generating Rust bindings from C headers | Bind to a real C library |
| 132 | Memory layout: `repr(C)`, alignment, `size_of`, `align_of` | Understand and control memory layout |
| 133 | **Mini-project:** Safe wrapper around a C library | Ergonomic Rust API over a C dependency |

### Week 20: Performance & Optimization (Jul 22 – Jul 28)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 134 | Profiling: `perf`, `flamegraph`, `cargo-flamegraph` | Profile a previous project |
| 135 | Benchmarking: `criterion` deep dive, statistical benchmarks | Benchmark critical paths |
| 136 | Memory optimization: reducing allocations, `SmallVec`, `ArrayVec` | Optimize hot paths |
| 137 | SIMD: `std::simd` (nightly) or `packed_simd` | Vectorize a computation |
| 138 | Compile-time optimization: `const fn`, `const` generics | Move computation to compile-time |
| 139 | Link-time optimization (LTO), `codegen-units`, binary size | Shrink and speed up release builds |
| 140 | **Mini-project:** High-performance log parser | Parse gigabytes of logs efficiently |

### 🏆 Month 5 Checkpoint
- [ ] Can write and debug macros
- [ ] Understand unsafe Rust and when to use it
- [ ] Can interface Rust with C code
- [ ] Know how to profile and optimize Rust programs

---

## 🔴 Month 6 — Capstone & Mastery (August 8 – August 31)

> **Goal:** Build a capstone project that ties everything together. Contribute to open source. Solidify mastery.

### Week 21: Capstone Planning & Architecture (Aug 1 – Aug 7)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 141 | Choose your capstone project (see ideas below) | Write a design document in `DESIGN.md` |
| 142 | Architecture: modules, crate structure, dependency planning | Create project skeleton with module stubs |
| 143 | Set up CI/CD: GitHub Actions for Rust (test, lint, format) | `.github/workflows/rust.yml` |
| 144 | Set up `clippy` lints, `rustfmt` config | Add `clippy.toml`, `rustfmt.toml` |
| 145 | Core data models and traits | Implement foundation types |
| 146 | Core logic — part 1 | Start implementing main functionality |
| 147 | Core logic — part 2 | Continue implementation |

### Week 22: Capstone — Build Phase (Aug 8 – Aug 14)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 148 | Feature development | Implement major feature 1 |
| 149 | Feature development | Implement major feature 2 |
| 150 | Feature development | Implement major feature 3 |
| 151 | Error handling & edge cases | Robust error handling throughout |
| 152 | Testing: unit + integration tests | Achieve >80% code coverage |
| 153 | CLI or API interface | User-facing interface |
| 154 | Performance tuning | Profile and optimize |

### Week 23: Capstone — Polish & Open Source (Aug 15 – Aug 21)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 155 | Documentation: README, API docs, examples | Comprehensive documentation |
| 156 | Publishing to `crates.io` (optional) | `cargo publish` workflow |
| 157 | Open source contribution: find a Rust project, read issues | Identify a good first issue |
| 158 | Open source: fork, fix, submit PR | Make your first Rust open source contribution |
| 159 | Code review: review your own Month 1 code with fresh eyes | Refactor early code using everything you've learned |
| 160 | Write a blog post or tutorial about your Rust journey | Share your knowledge |
| 161 | **Capstone v1.0 release** | Tag a release on GitHub |

### Week 24: Advanced Topics & Beyond (Aug 22 – Aug 31)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 162 | Explore WebAssembly (WASM) with Rust | Compile a Rust module to WASM |
| 163 | Embedded Rust: `no_std`, `embedded-hal` concepts | Explore bare-metal Rust (simulator if no hardware) |
| 164 | Advanced type system: GATs, higher-kinded types, type-level programming | Mind-bending type exercises |
| 165 | Async traits, `Tower` service abstraction | Build composable middleware |
| 166 | Review and organize your entire repository | Clean up, tag, document everything |
| 167 | Create a "What I Learned" summary document | `LEARNINGS.md` — your Rust knowledge base |
| 168 | **Celebrate! 🎉** | Reflect on 6 months of growth |

---

## 🎯 Capstone Project Ideas

Choose one (or combine ideas):

| Project | Skills Used |
|---------|-------------|
| **🗄️ Key-Value Database** | File I/O, serialization, networking, data structures |
| **🌐 Static Site Generator** | File system, templating, Markdown parsing, CLI |
| **📡 HTTP Proxy Server** | Networking, async, concurrency, security |
| **🐚 Shell (like bash-lite)** | Process management, parsing, system calls |
| **📊 Log Aggregator & Dashboard** | Parsing, async streams, TUI or web dashboard |
| **🔍 Full-Text Search Engine** | Indexing, data structures, file I/O, performance |
| **🎮 Roguelike Game** | Game loop, TUI, state management, ECS pattern |
| **📦 Package Manager (mini)** | Dependency resolution, networking, file system, TOML |

---

## 📅 Daily Commit Strategy

### What Counts as a Commit

- ✅ Writing new code (exercises, projects)
- ✅ Writing tests
- ✅ Adding documentation or comments
- ✅ Refactoring old code
- ✅ Adding notes or learnings to `resources/notes.md`
- ✅ Fixing bugs or compiler errors
- ✅ Reviewing and annotating examples

### Commit Message Convention

```
<type>(<scope>): <description>

Examples:
feat(week-03): implement Student struct with methods
test(week-07): add unit tests for linked list
docs(week-01): add notes on variable shadowing
refactor(week-05): optimize text analyzer to avoid cloning
fix(week-09): resolve lifetime issue in data pipeline
```

### Keeping the Streak

- If you're short on time, at minimum:
  - Add a note to `resources/notes.md`
  - Write one test for existing code
  - Add a doc comment to a function
  - Fix a `clippy` warning
- **Pre-commit on weekends:** batch-prepare small commits for busy weekdays

---

## 📚 Recommended Resources

### Books (Free Online)
- 📖 [The Rust Programming Language (The Book)](https://doc.rust-lang.org/book/) — Primary resource
- 📖 [Rust by Example](https://doc.rust-lang.org/rust-by-example/) — Learn by example
- 📖 [Rustlings](https://github.com/rust-lang/rustlings) — Small exercises (great for Weeks 1-4)

### Books (Paid / Advanced)
- 📕 *Programming Rust* by Jim Blandy — Deep dive into ownership and systems programming
- 📗 *Rust in Action* by Tim McNamara — Project-based learning
- 📘 *Zero to Production in Rust* by Luca Palmieri — Web development focus (Month 4)

### Interactive
- 🧩 [Exercism Rust Track](https://exercism.org/tracks/rust) — Mentored exercises
- 🎮 [Advent of Code](https://adventofcode.com/) — Solve puzzles in Rust
- 🏋️ [LeetCode](https://leetcode.com/) — Algorithm practice in Rust

### Video
- 🎥 [Jon Gjengset (YouTube)](https://www.youtube.com/@jonhoo) — Advanced Rust concepts
- 🎥 [Let's Get Rusty (YouTube)](https://www.youtube.com/@letsgetrusty) — Beginner-friendly
- 🎥 [No Boilerplate (YouTube)](https://www.youtube.com/@NoBoilerplate) — Motivational Rust content

### Community
- 💬 [Rust Users Forum](https://users.rust-lang.org/)
- 💬 [r/rust](https://www.reddit.com/r/rust/) — Reddit community
- 💬 [Rust Discord](https://discord.gg/rust-lang)

---

## 📊 Progress Tracker

### Month 1 — Foundations
- [ ] Week 1: Hello, Rust!
- [ ] Week 2: Control Flow & Collections
- [ ] Week 3: Structs, Enums & Pattern Matching
- [ ] Week 4: Modules, Crates & Cargo

### Month 2 — Ownership & Core Concepts
- [ ] Week 5: Ownership Deep Dive
- [ ] Week 6: Lifetimes & Generics
- [ ] Week 7: Traits & Polymorphism
- [ ] Week 8: Error Handling Mastery

### Month 3 — Intermediate Rust
- [ ] Week 9: Closures & Iterators
- [ ] Week 10: Smart Pointers & Memory
- [ ] Week 11: Testing & Documentation
- [ ] Week 12: Idiomatic Rust & Design Patterns

### Month 4 — Async, Networking & Web
- [ ] Week 13: Concurrency
- [ ] Week 14: Async/Await
- [ ] Week 15: HTTP & Web
- [ ] Week 16: Databases & Deployment

### Month 5 — Systems Programming & Advanced Topics
- [ ] Week 17: Advanced CLI & Tools
- [ ] Week 18: Macros
- [ ] Week 19: Unsafe Rust & FFI
- [ ] Week 20: Performance & Optimization

### Month 6 — Capstone & Mastery
- [ ] Week 21: Capstone Planning
- [ ] Week 22: Capstone Build Phase
- [ ] Week 23: Polish & Open Source
- [ ] Week 24: Advanced Topics & Beyond

---

## 💡 Tips for Success

1. **Don't skip the boring stuff.** Ownership and lifetimes feel hard at first — that's normal. They're what make Rust special.
2. **Read compiler errors carefully.** Rust has the best error messages of any compiler. They literally tell you how to fix your code.
3. **Use `clippy` religiously.** Run `cargo clippy` before every commit. It teaches you idiomatic Rust.
4. **Join the community.** Ask questions on the Rust Discord or Users Forum. The Rust community is famously welcoming.
5. **Compare with what you know.** Coming from another language? The Rust Book has great comparisons.
6. **It's okay to struggle.** If a concept doesn't click, move on and come back. The "aha!" moment will come.

---

<div align="center">

**Built with 🦀 and determination**

*"The only way to learn a new programming language is by writing programs in it."* — Dennis Ritchie

</div>
