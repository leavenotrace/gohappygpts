# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

from llama_index.core import VectorStoreIndex, SimpleDirectoryReader, Settings
from llama_index.core.embeddings import resolve_embed_model
from llama_index.llms.ollama import Ollama

documents = SimpleDirectoryReader("data").load_data()

# bge embedding model
Settings.embed_model = resolve_embed_model("local:manikeerthi/reim-embedding-model")

# ollama
Settings.llm = Ollama(model="THUDM/chatglm3-6b-128k", request_timeout=30.0)

index = VectorStoreIndex.from_documents(
    documents,
)

query_engine = index.as_query_engine()
response = query_engine.query("咖喱牛腩饭多少钱?")
print(response)