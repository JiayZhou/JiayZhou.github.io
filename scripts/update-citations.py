#!/usr/bin/env python3
"""Fetch publication citation counts from Semantic Scholar for the static site."""

import json
from datetime import datetime, timezone
from pathlib import Path
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
CITATIONS_FILE = ROOT / "assets" / "data" / "citations.json"
PAPERS = {
    "optimuse": "DOI:10.1145/3613904.3642812",
}
API_URL = "https://api.semanticscholar.org/graph/v1/paper/{paper}?fields=citationCount,url"


def fetch_paper(paper_id):
    request = Request(API_URL.format(paper=paper_id), headers={"User-Agent": "JiayiZhou.github.io citation updater"})
    with urlopen(request, timeout=30) as response:
        return json.load(response)


def main():
    data = {"papers": {}}
    if CITATIONS_FILE.exists():
        data = json.loads(CITATIONS_FILE.read_text())

    for key, paper_id in PAPERS.items():
        paper = fetch_paper(paper_id)
        data["papers"][key] = {
            "citationCount": paper["citationCount"],
            "source": "Semantic Scholar",
            "url": paper["url"],
        }

    data["updatedAt"] = datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")
    CITATIONS_FILE.write_text(json.dumps(data, indent=2) + "\n")


if __name__ == "__main__":
    main()
