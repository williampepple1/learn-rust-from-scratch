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
│   │   ├── day-01-hello-world.ipynb
│   │   ├── day-02-variables.ipynb
│   │   ├── ...
│   │   └── day-07-mini-project-calculator.ipynb
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

Each day is a Jupyter Notebook (`.ipynb`) using the EvCxR Rust kernel.

### Environment Setup (EvCxR Kernel)
To run the `.ipynb` files, you need to install the **EvCxR Jupyter Kernel**:

1. **Install CMake:** EvCxR requires CMake. If you don't have it on Windows, install it via winget:
   ```cmd
   winget install -e --id Kitware.CMake
   ```
2. **Install the Kernel:** Open your terminal and install via Cargo:
   ```cmd
   cargo install evcxr_jupyter
   ```
3. **Register with Jupyter:** Register the Rust kernel so Jupyter can find it:
   ```cmd
   evcxr_jupyter --install
   ```
*(Note: If you use VS Code, make sure you have the official "Jupyter" extension installed).*
For standalone projects, create a Cargo project:
```bash
cargo new day-07-mini-project
```

---

## 🟢 Month 1 — Foundations (March 8 – April 7)

> **Goal:** Get comfortable with Rust syntax, tooling, and basic programming concepts.

### Week 1: Hello, Rust! (Mar 8 – Mar 14)

| Day | File | Topic | Exercise / Commit |
|-----|------|-------|-------------------|
| 1 | `day-01-hello-world.ipynb` | Install Rust (`rustup`), VS Code + rust-analyzer, first `cargo new` | Create `hello-world` project, print your name |
| 2 | `day-02-variables.ipynb` | Variables, mutability, constants, shadowing | Write programs demonstrating `let`, `let mut`, `const`, shadowing |
| 3 | `day-03-data-types.ipynb` | Data types: integers, floats, booleans, characters | Type annotation exercises, overflow experiments |
| 4 | `day-04-strings.ipynb` | Strings: `String` vs `&str`, basic string operations | Build a string formatter that takes a name and outputs a greeting |
| 5 | `day-05-tuples-and-arrays.ipynb` | Tuples and arrays | Write a program that stores RGB colors as tuples and does basic operations |
| 6 | `day-06-functions.ipynb` | Functions: parameters, return values, expressions vs statements | Build a temperature converter (Celsius ↔ Fahrenheit ↔ Kelvin) |
| 7 | `day-07-mini-project-calculator.ipynb` | **Mini-project:** Simple calculator (add, subtract, multiply, divide) | CLI calculator using `std::io` for user input |

### Week 2: Control Flow & Collections (Mar 15 – Mar 21)

| Day | File | Topic | Exercise / Commit |
|-----|------|-------|-------------------|
| 1 | `day-01-if-else.ipynb` | `if`/`else`, `if` in `let` statements | FizzBuzz implementation |
| 2 | `day-02-loops.ipynb` | Loops: `loop`, `while`, `for`, loop labels, `break`/`continue` | 99 bottles of beer, multiplication table generator |
| 3 | `day-03-match.ipynb` | `match` expressions & patterns | Day of the week matcher, grade classifier |
| 4 | `day-04-vectors.ipynb` | Vectors: creating, reading, updating, iterating | Build a dynamic to-do list (in-memory) |
| 5 | `day-05-hashmaps.ipynb` | HashMaps: insert, access, update, iteration | Word frequency counter from a text |
| 6 | `day-06-iterators.ipynb` | Iterators basics: `.iter()`, `.map()`, `.filter()`, `.collect()` | Transform a list of numbers using iterator chains |
| 7 | `day-07-mini-project-contact-book.ipynb` | **Mini-project:** Contact book — store names, phones, emails in a HashMap | Full CRUD operations via CLI |

### Week 3: Structs, Enums & Pattern Matching (Mar 22 – Mar 28)

| Day | File | Topic | Exercise / Commit |
|-----|------|-------|-------------------|
| 1 | `day-01-structs.ipynb` | Structs: defining, instantiating, field init shorthand | Model a `Book` struct with title, author, pages, rating |
| 2 | `day-02-methods.ipynb` | Methods & associated functions (`impl` blocks) | Add methods: `summary()`, `is_long()`, `rate()` |
| 3 | `day-03-tuple-structs.ipynb` | Tuple structs, unit structs, struct update syntax | Model 2D/3D points, implement distance calculations |
| 4 | `day-04-enums.ipynb` | Enums: defining, variants with data | Model traffic lights, playing cards |
| 5 | `day-05-option.ipynb` | `Option<T>` — Rust's null safety | Write functions that safely handle missing values |
| 6 | `day-06-result.ipynb` | `Result<T, E>` — Error handling basics | File reading with proper error handling |
| 7 | `day-07-mini-project-grade-system.ipynb` | **Mini-project:** Student grade management system | Structs + enums + pattern matching + collections |

### Week 4: Modules, Crates & Cargo (Mar 29 – Apr 4)

| Day | File | Topic | Exercise / Commit |
|-----|------|-------|-------------------|
| 1 | `day-01-modules.ipynb` | Modules: `mod`, `pub`, `use`, module tree | Reorganize the grade system into modules |
| 2 | `day-02-modules-in-files.ipynb` | Separating modules into files | Split code across `lib.rs` and multiple files |
| 3 | `day-03-external-crates.ipynb` | External crates: `Cargo.toml`, dependencies, `crates.io` | Use `rand` and `colored` crates |
| 4 | `day-04-cargo-features.ipynb` | Cargo features: `cargo build`, `cargo test`, `cargo doc`, workspaces | Write documentation comments, generate docs |
| 5 | `day-05-file-io.ipynb` | Input/Output: reading files, writing files, `std::fs` | Build a file-based note-taking app |
| 6 | `day-06-cli-arguments.ipynb` | Command-line arguments with `std::env` and `clap` | Build a CLI tool that processes text files |
| 7 | `day-07-mini-project-word-counter.ipynb` | **Mini-project:** CLI word counter tool (like `wc`) | Counts lines, words, chars, bytes from files |

### 🏆 Month 1 Checkpoint
- [ ] Comfortable with basic syntax
- [ ] Can create and manage Cargo projects
- [ ] Understand structs, enums, and pattern matching
- [ ] Can read/write files and handle basic CLI input

---

## 🟡 Month 2 — Ownership & Core Concepts (April 8 – May 7)

> **Goal:** Master Rust's unique ownership system, lifetimes, and error handling patterns.

### Week 5: Ownership Deep Dive (Apr 5 – Apr 11)

| Day | Topic | File | Exercise / Commit |
|-----|-------|------|-------------------|
| 1 | Ownership rules: each value has one owner, one owner at a time, drop | `day-01-ownership-rules.ipynb` | Annotated examples showing ownership transfers |
| 2 | Move semantics: what moves, what copies, `Copy` vs `Clone` | `day-02-move-semantics.ipynb` | Exercises that intentionally trigger move errors, then fix them |
| 3 | References & borrowing: `&T` (immutable) and `&mut T` (mutable) | `day-03-references-borrowing.ipynb` | Refactor previous projects to use references properly |
| 4 | Borrowing rules: multiple `&T` OR one `&mut T`, no dangling refs | `day-04-borrowing-rules.ipynb` | Write code that violates rules, understand compiler errors |
| 5 | Slices: `&str`, `&[T]`, string slices vs string ownership | `day-05-slices.ipynb` | Build a word splitter and substring finder |
| 6 | Ownership in functions: passing and returning ownership | `day-06-ownership-in-functions.ipynb` | Function signature exercises with various ownership patterns |
| 7 | **Mini-project:** Text analyzer — refactored to use zero unnecessary clones | `day-07-mini-project-text-analyzer.ipynb` | Analyze text stats (most common words, sentence length, etc.) |

### Week 6: Lifetimes & Generics (Apr 12 – Apr 18)

| Day | Topic | File | Exercise / Commit |
|-----|-------|------|-------------------|
| 1 | Lifetime annotations: `'a`, why they exist, the borrow checker | `day-01-lifetime-annotations.ipynb` | Annotate functions that return references |
| 2 | Lifetime elision rules | `day-02-lifetime-elision.ipynb` | Identify where Rust infers lifetimes automatically |
| 3 | Lifetimes in structs | `day-03-lifetimes-in-structs.ipynb` | Build structs that hold references |
| 4 | `'static` lifetime, lifetime bounds | `day-04-static-lifetime.ipynb` | Understand when and why to use `'static` |
| 5 | Generics: generic functions | `day-05-generics.ipynb` | Write a `largest()` function for any comparable type |
| 6 | Generic structs and enums | `day-06-generic-structs-enums.ipynb` | Build a generic `Wrapper<T>` and `Pair<T, U>` |
| 7 | **Mini-project:** Generic data structure — `Stack<T>` with push, pop, peek | `day-07-mini-project-generic-stack.ipynb` | Fully generic, tested implementation |

### Week 7: Traits & Polymorphism (Apr 19 – Apr 25)

| Day | Topic | File | Exercise / Commit |
|-----|-------|------|-------------------|
| 1 | Defining and implementing traits | `day-01-traits.ipynb` | Create `Describable`, `Printable` traits |
| 2 | Default implementations, trait inheritance | `day-02-default-impls-inheritance.ipynb` | Extend traits with defaults |
| 3 | Trait bounds: `fn foo<T: Display + Clone>(x: T)` | `day-03-trait-bounds.ipynb` | Write bounded generic functions |
| 4 | `impl Trait` syntax (argument & return position) | `day-04-impl-trait.ipynb` | Simplify function signatures |
| 5 | Common std traits: `Display`, `Debug`, `Clone`, `PartialEq`, `From`/`Into` | `day-05-common-traits.ipynb` | Implement standard traits for your types |
| 6 | Deriving traits: `#[derive()]` | `day-06-deriving-traits.ipynb` | Add derives to all previous structs |
| 7 | **Mini-project:** Shape calculator — trait-based polymorphism | `day-07-mini-project-shape-calculator.ipynb` | `Shape` trait with `area()` and `perimeter()` for Circle, Rectangle, Triangle |

### Week 8: Error Handling Mastery (Apr 26 – May 2)

| Day | Topic | File | Exercise / Commit |
|-----|-------|------|-------------------|
| 1 | `Result<T, E>` deep dive, `unwrap()`, `expect()` | `day-01-result-deep-dive.ipynb` | Convert panicking code to proper error handling |
| 2 | The `?` operator, error propagation | `day-02-question-mark-operator.ipynb` | Chain operations that may fail |
| 3 | Custom error types | `day-03-custom-error-types.ipynb` | Define domain-specific error enums |
| 4 | `thiserror` and `anyhow` crates | `day-04-thiserror-anyhow.ipynb` | Refactor errors using community crates |
| 5 | `panic!` vs recoverable errors, when to use each | `day-05-panic-vs-result.ipynb` | Decision flowchart for error strategies |
| 6 | Error handling in `main()`, exit codes | `day-06-error-handling-in-main.ipynb` | Build a robust CLI with proper exit codes |
| 7 | **Mini-project:** CSV parser with comprehensive error handling | `day-07-mini-project-csv-parser.ipynb` | Parse CSV files, handle malformed data gracefully |

### 🏆 Month 2 Checkpoint
- [ ] Can explain ownership, borrowing, and lifetimes clearly
- [ ] Comfortable writing generic code with trait bounds
- [ ] Proper error handling is second nature
- [ ] Understand when to clone vs borrow

---

## 🔵 Month 3 — Intermediate Rust (May 8 – June 7)

> **Goal:** Level up with closures, iterators, smart pointers, testing, and idiomatic Rust.

### Week 9: Closures & Iterators (May 3 – May 9)

| Day | Topic | File | Exercise / Commit |
|-----|-------|------|-------------------|
| 1 | Closures: syntax, capturing environment, `Fn`, `FnMut`, `FnOnce` | `day-01-closures.ipynb` | Write closures that capture by reference and by value |
| 2 | Closures as function parameters and return values | `day-02-closures-advanced.ipynb` | Build a configurable sorter using closures |
| 3 | Iterator trait: `next()`, consuming adaptors, iterator adaptors | `day-03-iterator-trait.ipynb` | Implement `Iterator` for a custom `Fibonacci` struct |
| 4 | Advanced iterator methods: `zip`, `enumerate`, `flat_map`, `fold`, `scan` | `day-04-advanced-iterators.ipynb` | Solve data processing challenges with iterators |
| 5 | Chaining iterators, lazy evaluation, performance | `day-05-chaining-performance.ipynb` | Benchmark iterator chains vs manual loops |
| 6 | Creating custom iterators | `day-06-custom-iterators.ipynb` | Build a `Range` iterator with step |
| 7 | **Mini-project:** Data pipeline processor | `day-07-mini-project-data-pipeline.ipynb` | Process JSON/CSV data using iterator chains |

### Week 10: Smart Pointers & Memory (May 10 – May 16)

| Day | Topic | File | Exercise / Commit |
|-----|-------|------|-------------------|
| 1 | `Box<T>`: heap allocation, recursive types | `day-01-box.ipynb` | Implement a cons list and binary tree with `Box` |
| 2 | `Deref` trait, deref coercion, `Drop` trait | `day-02-deref-drop.ipynb` | Custom smart pointer implementation |
| 3 | `Rc<T>`: reference counting, shared ownership | `day-03-rc.ipynb` | Model a graph with shared nodes |
| 4 | `RefCell<T>`: interior mutability, runtime borrow checking | `day-04-refcell.ipynb` | Build a mock object for testing |
| 5 | `Rc<RefCell<T>>` pattern | `day-05-rc-refcell.ipynb` | Mutable shared state examples |
| 6 | `Cow<T>`: clone-on-write, avoiding unnecessary allocations | `day-06-cow.ipynb` | Optimize string processing with `Cow` |
| 7 | **Mini-project:** Simple linked list implementation | `day-07-mini-project-linked-list.ipynb` | Singly linked list with insert, delete, search, display |

### Week 11: Testing & Documentation (May 17 – May 23)

| Day | Topic | File | Exercise / Commit |
|-----|-------|------|-------------------|
| 1 | Unit tests: `#[test]`, `assert!`, `assert_eq!`, `assert_ne!` | `day-01-unit-tests.ipynb` | Add tests to ALL previous projects |
| 2 | Testing panics: `#[should_panic]`, testing `Result` | `day-02-testing-panics.ipynb` | Test error paths |
| 3 | Integration tests: `tests/` directory, test organization | `day-03-integration-tests.ipynb` | Write integration tests for the CSV parser |
| 4 | Test-driven development (TDD) workflow | `day-04-tdd.ipynb` | Build a new module using TDD |
| 5 | Documentation: `///`, `//!`, doc tests, `cargo doc` | `day-05-documentation.ipynb` | Fully document the linked list project |
| 6 | Benchmarking basics with `criterion` crate | `day-06-benchmarking.ipynb` | Benchmark your data structures |
| 7 | **Mini-project:** A fully tested & documented math library | `day-07-mini-project-math-library.ipynb` | Covers basic arithmetic, statistics, and linear algebra operations |

### Week 12: Idiomatic Rust & Design Patterns (May 24 – May 30)

| Day | Topic | File | Exercise / Commit |
|-----|-------|------|-------------------|
| 1 | The newtype pattern | `day-01-newtype-pattern.ipynb` | Wrap primitives for type safety |
| 2 | Builder pattern | `day-02-builder-pattern.ipynb` | Implement a builder for a complex config struct |
| 3 | Type state pattern | `day-03-typestate-pattern.ipynb` | Model a state machine with compile-time guarantees |
| 4 | Using `From`/`Into` for conversions | `day-04-from-into.ipynb` | Ergonomic type conversions across your codebase |
| 5 | Operator overloading: `Add`, `Mul`, `Index`, etc. | `day-05-operator-overloading.ipynb` | Build a `Vector2D` with full operator support |
| 6 | `PhantomData`, zero-cost abstractions | `day-06-phantom-data.ipynb` | Explore advanced type-level programming |
| 7 | **Mini-project:** Expression evaluator | `day-07-mini-project-expression-evaluator.ipynb` | Parse and evaluate mathematical expressions using Rust patterns |

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
| 1 | Threads: `std::thread::spawn`, `join`, move closures | Parallel number crunching |
| 2 | Message passing: `mpsc` channels | Producer-consumer pattern |
| 3 | Shared state: `Mutex<T>`, `Arc<T>` | Thread-safe counter, shared data |
| 4 | `Arc<Mutex<T>>` pattern, deadlock prevention | Multi-threaded bank account simulation |
| 5 | `Rayon` crate: parallel iterators | Parallelize data processing from Month 3 |
| 6 | Atomic types: `AtomicBool`, `AtomicUsize`, `Ordering` | Lock-free shared counter |
| 7 | **Mini-project:** Multi-threaded web scraper skeleton | Concurrent URL fetcher using threads + channels |

### Week 14: Async/Await (Jun 8 – Jun 14)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 1 | Async concepts: futures, `.await`, `async fn` | Simple async functions with `tokio` |
| 2 | Tokio runtime: `#[tokio::main]`, spawning tasks | Run concurrent async tasks |
| 3 | Async I/O: reading/writing files asynchronously | Async file processor |
| 4 | `tokio::select!`, `tokio::join!`, timeouts | Handle multiple async operations |
| 5 | Async channels: `tokio::sync::mpsc`, `broadcast`, `watch` | Async message passing patterns |
| 6 | Streams: `tokio_stream`, async iterators | Process streaming data |
| 7 | **Mini-project:** Async chat server (TCP) | Multi-client chat using `tokio` |

### Week 15: HTTP & Web (Jun 15 – Jun 21)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 1 | HTTP client: `reqwest` crate, GET/POST requests | Fetch data from public APIs |
| 2 | JSON: `serde` and `serde_json`, serializing/deserializing | Parse API responses into structs |
| 3 | Intro to `Actix-web` or `Axum`: hello world, routing | First web server |
| 4 | Request handling: path params, query params, JSON bodies | CRUD endpoint handlers |
| 5 | Middleware, extractors, shared state in web frameworks | Add logging middleware and shared state |
| 6 | Serving static files, HTML templates with `askama` or `tera` | Render dynamic HTML pages |
| 7 | **Mini-project:** REST API — bookmark manager | Full CRUD API with JSON persistence |

### Week 16: Databases & Deployment (Jun 22 – Jun 28)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 1 | SQLite with `rusqlite`, database setup | Create tables, basic queries |
| 2 | ORMs: `Diesel` or `SeaORM` introduction | Model-based database operations |
| 3 | Migrations, connection pooling (`r2d2` or `deadpool`) | Production-ready database setup |
| 4 | Authentication: password hashing (`argon2`), JWT (`jsonwebtoken`) | User signup/login endpoints |
| 5 | Environment config: `dotenv`, `config` crate | 12-factor app configuration |
| 6 | Docker: containerizing a Rust web app | Write a multi-stage `Dockerfile` |
| 7 | **Mini-project:** Full-stack URL shortener | Web API + database + Docker |

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
| 1 | `clap` v4 deep dive: subcommands, args, validators | Build a multi-command CLI tool |
| 2 | Terminal UI: `crossterm`, `ratatui` | Interactive terminal dashboard |
| 3 | Process management: `std::process::Command`, piping | Build a task runner |
| 4 | File system operations: walking directories, `walkdir` crate | Recursive file finder (like `find`) |
| 5 | Regular expressions: `regex` crate | Build a `grep`-like tool |
| 6 | Serialization: `serde` with TOML, YAML, RON formats | Config file parser supporting multiple formats |
| 7 | **Mini-project:** A personal `dev-tools` CLI | Swiss-army knife CLI with multiple subcommands |

### Week 18: Macros (Jul 8 – Jul 14)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 1 | Declarative macros: `macro_rules!` basics | Write `vec!`-like macros |
| 2 | Advanced `macro_rules!`: repetition, nested macros, TT munchers | Build a `hashmap!` macro |
| 3 | Debugging macros: `cargo expand`, tracing macro expansion | Debug and understand existing macros |
| 4 | Procedural macros: intro, types (derive, attribute, function-like) | Setup a proc-macro crate |
| 5 | Derive macros with `syn` and `quote` | Auto-derive a custom trait |
| 6 | Attribute macros | Build a `#[route]` macro for your web framework |
| 7 | **Mini-project:** Testing framework macro | `#[my_test]` macro that adds setup/teardown |

### Week 19: Unsafe Rust & FFI (Jul 15 – Jul 21)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 1 | Unsafe Rust: raw pointers, `unsafe` blocks, when to use | Explore what unsafe allows |
| 2 | Unsafe functions, unsafe traits | Write safe wrappers around unsafe code |
| 3 | FFI basics: calling C from Rust (`extern "C"`) | Link to a C library |
| 4 | FFI: exposing Rust to C, `#[no_mangle]`, `cbindgen` | Create a Rust library callable from C |
| 5 | `bindgen`: auto-generating Rust bindings from C headers | Bind to a real C library |
| 6 | Memory layout: `repr(C)`, alignment, `size_of`, `align_of` | Understand and control memory layout |
| 7 | **Mini-project:** Safe wrapper around a C library | Ergonomic Rust API over a C dependency |

### Week 20: Performance & Optimization (Jul 22 – Jul 28)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 1 | Profiling: `perf`, `flamegraph`, `cargo-flamegraph` | Profile a previous project |
| 2 | Benchmarking: `criterion` deep dive, statistical benchmarks | Benchmark critical paths |
| 3 | Memory optimization: reducing allocations, `SmallVec`, `ArrayVec` | Optimize hot paths |
| 4 | SIMD: `std::simd` (nightly) or `packed_simd` | Vectorize a computation |
| 5 | Compile-time optimization: `const fn`, `const` generics | Move computation to compile-time |
| 6 | Link-time optimization (LTO), `codegen-units`, binary size | Shrink and speed up release builds |
| 7 | **Mini-project:** High-performance log parser | Parse gigabytes of logs efficiently |

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
| 1 | Choose your capstone project (see ideas below) | Write a design document in `DESIGN.md` |
| 2 | Architecture: modules, crate structure, dependency planning | Create project skeleton with module stubs |
| 3 | Set up CI/CD: GitHub Actions for Rust (test, lint, format) | `.github/workflows/rust.yml` |
| 4 | Set up `clippy` lints, `rustfmt` config | Add `clippy.toml`, `rustfmt.toml` |
| 5 | Core data models and traits | Implement foundation types |
| 6 | Core logic — part 1 | Start implementing main functionality |
| 7 | Core logic — part 2 | Continue implementation |

### Week 22: Capstone — Build Phase (Aug 8 – Aug 14)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 1 | Feature development | Implement major feature 1 |
| 2 | Feature development | Implement major feature 2 |
| 3 | Feature development | Implement major feature 3 |
| 4 | Error handling & edge cases | Robust error handling throughout |
| 5 | Testing: unit + integration tests | Achieve >80% code coverage |
| 6 | CLI or API interface | User-facing interface |
| 7 | Performance tuning | Profile and optimize |

### Week 23: Capstone — Polish & Open Source (Aug 15 – Aug 21)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 1 | Documentation: README, API docs, examples | Comprehensive documentation |
| 2 | Publishing to `crates.io` (optional) | `cargo publish` workflow |
| 3 | Open source contribution: find a Rust project, read issues | Identify a good first issue |
| 4 | Open source: fork, fix, submit PR | Make your first Rust open source contribution |
| 5 | Code review: review your own Month 1 code with fresh eyes | Refactor early code using everything you've learned |
| 6 | Write a blog post or tutorial about your Rust journey | Share your knowledge |
| 7 | **Capstone v1.0 release** | Tag a release on GitHub |

### Week 24: Advanced Topics & Beyond (Aug 22 – Aug 31)

| Day | Topic | Exercise / Commit |
|-----|-------|-------------------|
| 1 | Explore WebAssembly (WASM) with Rust | Compile a Rust module to WASM |
| 2 | Embedded Rust: `no_std`, `embedded-hal` concepts | Explore bare-metal Rust (simulator if no hardware) |
| 3 | Advanced type system: GATs, higher-kinded types, type-level programming | Mind-bending type exercises |
| 4 | Async traits, `Tower` service abstraction | Build composable middleware |
| 5 | Review and organize your entire repository | Clean up, tag, document everything |
| 6 | Create a "What I Learned" summary document | `LEARNINGS.md` — your Rust knowledge base |
| 7 | **Celebrate! 🎉** | Reflect on 6 months of growth |

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
