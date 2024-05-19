use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize, Serialize)]
pub struct Category {
    name: String,
    icon: String,
}

#[derive(Debug, Deserialize, Serialize)]
pub struct CategoryCal {
    total: usize,
    amount: f64,
}

impl CategoryCal {
    pub fn new(amount: f64, total: usize) -> Self {
        Self { total, amount }
    }
}