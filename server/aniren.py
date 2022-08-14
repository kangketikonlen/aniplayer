import sys, os
from os import walk

if (len(sys.argv) != 2):
    print("Usage: python rename.py <anime_title>")
    sys.exit(1)

ANIME_TITLE = sys.argv[1]
ANIME_PATH = "videos/" + ANIME_TITLE
ANIME_EPISODE = 1

animes = []
for (dirpath, dirnames, filenames) in walk(ANIME_PATH):
    if (filenames != ".gitignore"):
        animes.extend(filenames)
        break

for anime in animes:
    ANIME_EPISODE += 1
    old_name = "{}/{}".format(ANIME_PATH, anime)
    new_name = "{}/{}-{}".format(ANIME_PATH, ANIME_TITLE, str(ANIME_EPISODE).zfill(2))
    os.rename(old_name, new_name)