use serde::{Deserialize, Serialize};
use thiserror::Error;

#[derive(Error, Debug, Serialize, Deserialize)]
pub enum CommandError {
    #[error("Docker API error: {0}")]
    DockerError(String),
    #[error("Unexpected Error: {0}")]
    UnexpectedError(String),
}