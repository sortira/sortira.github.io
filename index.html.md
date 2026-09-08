# Aritro Shome (sortira)

Hi, I am Aritro, a CS/IT undergrad at IIEST Shibpur, and go by *sortira* on most of the internet. I work across machine learning research and engineering, and what I enjoy is taking systems apart to see how they actually work, whether that is a model or the infrastructure under it. Lately I am reading my way into distributed systems, database internals and concurrency.

## At a glance

- **Now**: research intern, AI4Bharat, IIT Madras. Circuit tracing in reasoning models, across Indic languages and model scales.
- **Before**: AI engineer intern, Sarvam AI. Evaluation frameworks and the production dubbing pipeline.
- **Interests**: AI research (interpretability, RL, model internals) and core systems — distributed systems, database internals, concurrency.
- **School**: B.Tech in Information Technology, IIEST Shibpur. CGPA 9.15/10.

Links: [résumé](https://aritro.is-a.dev/resume.pdf) · [blog](https://silicognition.is-a.dev/) · [github](https://github.com/sortira) · [linkedin](https://www.linkedin.com/in/aritroshome/) · [x](https://x.com/silicognition) · [youtube](https://www.youtube.com/@thearitroshomefromtech) · [email](mailto:aritro.shome.official@gmail.com)

## Experience

### Research Intern, [AI4Bharat](https://ai4bharat.iitm.ac.in/), IIT Madras (7 months, mar 2026 to sep 2026)

- Investigating mechanistic interpretability and circuit tracing of SoTA open models (Gemma, Qwen) on reasoning tasks posed across modalities, languages and model scales, with a focus on vision-language models over Indic inputs.
- Ran 40,000+ instrumented forward passes for activation capture on multi-billion-parameter models under a hard 24 GB VRAM ceiling, with component-attribution scripts to isolate critical circuits before committing to full runs.
- Engineered a memory-efficient activation-patching framework: disabled fused and attention-kernel optimisations to expose per-layer activations, then managed the non-linear VRAM growth that followed.

*Stack: Python, PyTorch, Hugging Face, CUDA, mixed precision, Linux.*

### AI Engineer Intern, [Sarvam AI](https://www.sarvam.ai/), media & dubbing (4 months, aug 2025 to dec 2025)

- Built an automated evaluation framework for an NVIDIA lip-sync model; the pipeline caught and resolved a bug causing ~500% variance in output video file sizes.
- Redesigned the production dubbing pipeline, replacing brittle hard-coded prompt harnesses with modular YAML instruction blocks that let the model's chain-of-thought infer context. Translation quality went up, and I picked the final configuration by A/B test.
- [Pipeline in production (video)](https://www.youtube.com/watch?v=KNEJcCtoE4M)

*Stack: Python, YAML, data pipelines, LLM APIs, A/B testing, Git.*

## Selected work

### ForgeFormer (2026)

Hand-designed an interpretable 2-layer transformer that does two-digit addition with manually-set weights and no gradient descent, building attention and MLP computation from first principles to show exactly what each component contributes.

*Stack: Python, PyTorch, NumPy.* [Writeup](https://silicognition.is-a.dev/post2.html) · [interactive demo](https://aritro.is-a.dev/forgeformer/)

### Seven Deadly Sins of Gemma (2026)

Replicated Anthropic's persona / emotion-vector methodology to extract a steering vector for each of the seven deadly sins in Gemma, on a single consumer GPU. Verified vector correctness through targeted steering and activation patching rather than eyeballing generations.

*Stack: Python, PyTorch, Hugging Face, Gemma.* [Writeup](https://silicognition.is-a.dev/post3.html)

### AlponaGen (oct 2025)

Built a modular Python engine that generates alpona (Bengali folk art) through fractal-based layering, with an extensible OOP style-registration system. Published a 13,000-image synthetic dataset at 1024×1024 on Kaggle for generative-AI research.

*Stack: Python, NumPy, OOP design.* [GitHub](https://github.com/sortira/alpona-gen) · [dataset on Kaggle](https://www.kaggle.com/datasets/ar1tr0/alpona-gen)

*Some work with partner orgs is unpublished. More builds on the [other page](https://aritro.is-a.dev/other.html.md).*

## Writing

[silicognition.is-a.dev](https://silicognition.is-a.dev/): longer writeups on solo projects, and notes from taking things apart.

## Education, awards & teaching

**Education**

- B.Tech in Information Technology, IIEST Shibpur (2024 to 2028), CGPA 9.15/10
- INSPIRE Scholarship, Government of India, awarded to the top 1% of the higher-secondary cohort

**Selected awards**

- 1st at TensorQuest ML Hackathon, Instruo 2025 (100+ teams across India)
- 1st at Brain Dead ML Hackathon, Revelation 2025 (~200 teams)
- 1st at the Prof. Brahma Prakash Memorial Paper Presentation, IGCAR Kalpakkam, 2023 (500+ applicants; paper on AI/ML in materials research)

**Teaching**

- AI/ML Co-Lead, Google Developer Groups on Campus, IIEST Shibpur. Ran sessions on deep learning and transformer architecture; mentored a junior into an internship.

***

If you are building ML systems, research tooling, or infrastructure that has to hold up in production, I would like to hear from you: aritro.shome.official@gmail.com. I am in Calcutta and happy to meet for a walk.

Last updated: 8 September 2026.
