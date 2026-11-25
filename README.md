# Sum up 25 November's world news in one image

[![make.fun](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/qyhchy999-jpg/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/qyhchy999-jpg/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125)

A newspaper front page summing up the world news of Wednesday 25 November 2026 in one image: China investigates Shanghai party chief Chen Jining, the CIA and the Director of National Intelligence's office are hit by a cyber breach, Shenzhou-24 launches with the first Pakistani national aboard, gunmen hold 25 hostage in a Colombian supermarket, and Trump awards Rudy Giuliani the Medal of Freedom — plus Boeing's $7.4bn China order, the WHO evacuation in DR Congo's Ebola zone, and US tariff plans. All six stories were first reported on 25 November 2026.

## Entry

`main.ts` (Node 22, standard library only) copies `entry.png` to `/output/entry.png`. The image is drawn from the day's reporting and baked into the repository, so the program runs with no network and writes identical bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
