# Aritro Shome (sortira)

**ml · systems · research**

I like taking systems apart to see how they actually work — which circuits a multilingual vision-language model really uses, or why a production pipeline falls over under load. Research and engineering feel like *the same instinct* pointed at different layers.

Currently digging into: distributed systems, database internals, concurrency, algorithms & theory. Early days — mostly reading and small experiments.

Links: [résumé](https://aritro.is-a.dev/resume.pdf) · [blog](https://silicognition.is-a.dev/) · [github](https://github.com/sortira) · [linkedin](https://www.linkedin.com/in/aritroshome/) · [twitter](https://x.com/silicognition) · [email](mailto:aritro.shome.official@gmail.com)

## Now

- **aug 2026** — tracing reasoning circuits in Gemma and Qwen across Indic languages and model scales at AI4Bharat.
- **mar 2026** — joined AI4Bharat, IIT Madras as a research intern.
- **2026** — wrote up ForgeFormer and Seven Deadly Sins of Gemma, two solo interpretability projects.
- **dec 2025** — finished an AI engineering internship at Sarvam AI on the media & dubbing team.

## Experience

### Research Intern — [AI4Bharat](https://ai4bharat.iitm.ac.in/), IIT Madras (mar 2026 – present)

- Investigating mechanistic interpretability and circuit tracing of SoTA open models (Gemma, Qwen) on reasoning tasks posed across modalities, languages and model scales — focused on vision-language models over Indic inputs.
- Ran 40,000+ instrumented forward passes for activation capture on multi-billion-parameter models under a hard 24 GB VRAM ceiling, and built pre-experiment component-attribution scripts to isolate critical circuits before committing to full runs.
- Engineered a memory-efficient activation-patching framework: disabled fused and attention-kernel optimisations to expose per-layer activations, then managed the resulting non-linear VRAM growth to keep large models inside budget.

*Stack: Python, PyTorch, Hugging Face, CUDA, mixed precision, Linux.*

### AI Engineer Intern — [Sarvam AI](https://www.sarvam.ai/), media & dubbing (aug 2025 – dec 2025)

- Built an automated evaluation framework for an NVIDIA lip-sync model; the quantitative pipeline caught and resolved a bug causing ~500% variance in output video file sizes.
- Redesigned the production dubbing pipeline — replaced brittle hard-coded prompt harnesses with modular YAML instruction blocks that let the model's chain-of-thought infer context, raising translation quality; picked the final configuration by A/B test.
- [Pipeline in production (video)](https://www.youtube.com/watch?v=KNEJcCtoE4M)

*Stack: Python, YAML, data pipelines, LLM APIs, A/B testing, Git.*

## Selected work

### ForgeFormer (2026)

Hand-designed an interpretable 2-layer transformer that performs two-digit addition with manually-set weights and no gradient descent — building attention and MLP computation from first principles to show exactly what each component contributes.

*Stack: Python, PyTorch, NumPy.* — [Writeup](https://silicognition.is-a.dev/post2.html) · [interactive demo](https://aritro.is-a.dev/forgeformer/)

### Seven Deadly Sins of Gemma (2026)

Replicated Anthropic's persona / emotion-vector methodology to extract a steering vector for each of the seven deadly sins in Gemma, on a single consumer GPU. Verified vector correctness through targeted steering and activation-patching experiments rather than eyeballing generations.

*Stack: Python, PyTorch, Hugging Face, Gemma.* — [Writeup](https://silicognition.is-a.dev/post3.html)

### AlponaGen (oct 2025)

Built a modular Python engine that generates alpona (Bengali folk art) through fractal-based layering, with an extensible OOP style-registration system. Published a 13,000-image synthetic dataset at 1024×1024 on Kaggle for generative-AI research.

*Stack: Python, NumPy, OOP design.* — [GitHub](https://github.com/sortira/alpona-gen) · [dataset on Kaggle](https://www.kaggle.com/datasets/ar1tr0/alpona-gen)

*Some work with partner orgs is unpublished. More builds on the [other page](https://aritro.is-a.dev/other.html.md).*

## Writing

[silicognition.is-a.dev](https://silicognition.is-a.dev/) — longer writeups on solo projects, and notes from taking things apart.

## Education, awards & teaching

**Education**

- B.Tech, Information Technology — IIEST Shibpur (2024 – 2028), CGPA 9.15/10
- INSPIRE Scholarship — Government of India, awarded to the top 1% of the higher-secondary cohort

**Selected awards**

- 1st — TensorQuest ML Hackathon, Instruo 2025 (100+ teams across India)
- 1st — Brain Dead ML Hackathon, Revelation 2025 (~200 teams)
- 1st — Prof. Brahma Prakash Memorial Paper Presentation, IGCAR Kalpakkam, 2023 (500+ applicants; paper on AI/ML in materials research)

**Teaching**

- AI/ML Co-Lead — Google Developer Groups on Campus, IIEST Shibpur. Ran sessions on deep learning and transformer architecture; mentored a junior into an internship.

---

If you're building ML systems, research tooling, or infrastructure that has to hold up in production — I'd like to hear from you: aritro.shome.official@gmail.com. I'm in Calcutta; happy to meet for a walk.

Last updated: 2 August 2026.
