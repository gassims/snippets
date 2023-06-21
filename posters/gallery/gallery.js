const images = [
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/461cd362d45cb444dae497867741f3dd/_L5A4615.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYoR820vWL1l7nb4A2rfpvf02GkdIifIVSkjOGlp2Go1fEFEJVsLbxVKqR2vC4ItN6222MX9cLMNU4lbZ3KtH6xOBXFD4QGyI_Wy-pk0WO7Kt5pRw0-LXvfW0smBjb6KG6",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/dd05fcd51f95352880c62cfed3064b38/_L5A4786.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYAJelVgwU5iDUhjfSBlS3VIUdPMtttHqEp7xAKID5KwoZjLoz9cshvzSXnIBkDWdYXMF_6cvsrp5qJjao6S6PsEp_m9PkS5llwdhHDbNJXx9WkFkQ_ikrkWx8C8PAq8SC",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/a29bfbf61035b803b4b9121471f9439e/_L5A4772.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYSP5Bbm3hux2Mz-dQSt4U42sPVHefFPdwqNIg4RhQp5HqU1tcwDyM8eZQhTtq3Xky12I0d7Zo6gHgWq6OUT-osfOR0-WjftVKMbZUXWyoqEvjauVuFaL4dO4hoIzYXdDg",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/77fa7d28763208eeeb0be1b1be83e942/_L5A4769.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYPO4g6OG554m802Mxxr1Q6iBgcU2eNrJs7erfw8fYmJiUYcqiiV5T2KcmXkuRqWihWTy-sy36_BQ0BfrQz4DZ0IKSs14zbwzseMg0TV6r8ikIPHLeJNYM6wxRn7M7WWy_",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/c969eaefb9fa785672dc8052aec45e90/_L5A4765.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYIfCbCVZvv-5jO1kWyp-TmHQosuFajf1qx1T1_G5NcV7Yl2Vg_KDXTT2auINa2jIRHT6KSWRkno2tp7L-cW2XgdosJFq9zltRBLCVFH9XxxsGloOWlIDUE5Qd-alJEKeF",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/f281eae942ed1ef7e638307eae55edce/_L5A4730.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYitwB0YbqP_GN9zPcOn0R0F6UiggVSMvccLAeINfq1OXMEj2piRoH9A_tP8cQ1vt_MvLiHOXBp3A0uI70_AzVHFN-fn3AYNwMRiZDdc6p2z8cNeoETUGzHQkdu0Zhowii",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/a7c8e97ac7d088a9faa1ff714d93562c/_L5A4725.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYNTlF39F18F39tVKq33iwd8kj3ShernBHvvnUwEah-i9a3dU4aXl4VJeF2eLcaZq_c1dZ_0TDgX-Dnmk1mMTMAJqM1Zyb02M5OQWbZe_91zpmuXqpLmYr4wVveLSs13Q8",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/9795b58833cfee00e7d0389466f5162d/_L5A4722.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYNefXSfPs996Src1XP0E-k7hAo08_-VdrewXYjm0ZDCnW4pLTfdjQsZVxMeBX-qzDR2TBeJ8gowq2WQpBw5CtTwr0TSfph5MC1XtjnUdwi7nA4ngWGdb_ijTSRvujkph-",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/f3465b536f4ef18952d92548bbcfda14/_L5A4718.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYlXEmyANtODSHDOKD1AhPu_MPb65f8qqPxHcVgrSMm1TbRoCTd1r5QFryza_bSWPROKbEFTXFrcZlam2Io4ChEulKQnqQVoUELnPRHiACvVlG0qjXtSSFHywNWmFybk13",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/660ecb4c7769de26d49e849933e625ee/_L5A4716.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYo-mEnYzbxyce9xyK7oAI9XjACfFY65GX-cL6EUGWHYLjYZvCdQ8iKx-jMHXRts6681BJ5JgkmVmOA-yR9GnQBwLvY3JeIakYaDC8C2NRosPwyC_R7NyqKxXty4JU6paZ",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/c85350281a56ab53d749ea2c204c74e1/_L5A4704.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYLSqHUTpgxhxVN5Asj4azQfsP8PZQY2mvprqXBLu-5JGWk1uK0kOdYYZIsEDtSCfbnwj71sTwdupbreWsSNyjv3NpkO_UNbLP8_3l4kvYpDzdrcON7VzXcREtddLAN6k8",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/b22507c2c7a1429f00a0ed52c1e10f93/_L5A4702.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYos3M-uNBOOIghMarQwAEaJUaklg4QXuqqoURsx7vFdlG-YZhCzlcV4ThXdCRiD7c9SdWQsRnkwO6NreEtxMIrGa7oL6tYQrkBguSOkYKDkzNraqiZN8F8Ab-TlSEXsZW",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/561c9c5179e238c7fc0b1afde72a1beb/_L5A4698.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mY_mqWKgxsZ2ud7ByIedPMOHC1lo3LUJVFwuL2BvafUrukPc4uWOreaez5rlJ0CMVhTUkGNbMcmhc0cuG0dIq8R2t4zEeSimAZJRhEfk8eRlP7Nt1Zan_-pyXkADqFzxUn",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/7716ac218264947df1afac7936069616/_L5A4694.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYaLLbciK_qI07fNuprGVfbOKmqmpVmBT_r9VGRAc9ZbUP7xgQtVpZKRsg9eDT4Ofkxl2t7oDksQURmSmdC4O3_2OLbVbuFb3R_EU5QQ33b1eBTAs5wWdnymS7cw_ElGz8",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/6748d32358577879a809054c5e2aa243/_L5A4692.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYonY2CM20fmqqLicRhuplMi9DuHFVsiCKvJHv1F1WV4MDqvT3JkpjUxomR9dU_XwAgJYbiDA1n01PYfeZF_seYWp-1BE-VamJ0lY-5aBsMVW2rgBmeuB37MUbbyh93YvX",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/3592fe4d6b18ff1c80e08e623b15da55/_L5A4689.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYcHcIUZ_7UspA4xArEanchblS5zq65AhfQyZD_me2A1i4eS5CL3IuiL0r-n5jIl-hkGhVcuEQ2nctU-vji9TC_tgWVosqV720fymMvLTdBFXrIWnHNi-vTeq4HioN1gYW",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/d08f59a7acbe1e8dd901bb2e67352304/_L5A4686.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYCIsPBie-_LwTnHB-icZ8pr1MluFMrv5ZTauOifoEVtizIx6d9qsRB_RzAkx1HsQNv-F7JE-2QIcqUauBbo-fh9uUzbLJ7tlKLlOc3E8mzlH7D6I574ERVhWwZaLgg4Gv",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/33b9b800aec71061018e9de42329f0c5/_L5A4678.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYUki_5qUpYtKv8HtWRbUqEnmE7-iDf8uIg-_Tml9MJJIeRBwSCzDFSI1Ij2wXiCv4sqlskZo08rzEiJ1xJoMpRAJl6P3dZrpkmTPsaG13JXdnGcoydXdcqwaazLaZmYxS",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/ec700f2d0c8f3b88c927017c1522f121/_L5A4673.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYVMZvcGYJ_yPz9eAzZogryZFmNoW9yOUiz3a4mgkkxxPOtsOApxjr1XctMYuU6gyJAdxh59ewUJUWO18jqn8_WIK-QblCUP1jE009bDX0XWXr_xnlbPrkj1TkDwA-LJyw",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/72d7d048982732c4fe6060d8c7f69336/_L5A4672.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mY3UIo4ZmtwdPLQZ10MDoyKCM4f7_LnNpUMuwgCY5LRjFqhnbqaXKEmmoteYErX8UghKqB0pbk4Yo8vkla6suGc0bIGwSfTzy-3ev2RxuMKwgRI71PDpbNjZqcFuq6FNQM",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/4e443fbdda86c61f0e2b3751b1cc5de2/_L5A4552.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYCOnNbPvxTj4g98mMp-3tH8t_1DDyBqbp6tzNdkfEiWm0pCnkJd9li9kytrh7KnqmBgSDgoX4gCMyLQ_S8gRHwdpHGnewQ9SYOS_EI9eHyWAinrytMKisHJf0_CLLWDQN",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/3f0e17c2eac1e62a39f1751716b6040b/_L5A4550.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mY696M2oUpvss9meMIslPiu4fURQ8qDL49DeQu58GuybcfENJ-AFYOkUg-xTQDDiTq444R4IChulYCLM6v2hPGFz-pFHgy4sJDfNwtwa7BRO5I6oM2jRIEAHrse-vwahU7",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/c302dfdf8eeda6c9a3ced1144a59f7ab/_L5A4547.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYvSR1ddKTgvLasnT1bB9v0DbxY3UaD51ZpmNP5DQARAiIKnej5ksb50KEWYlPL1N3u2vrdCDBZuXXeDMu92UVWjZtPDu3uW6WSEeR2iDTYKddYZI_9uGvQxGUi2oA5Jrf",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/d8568debf42709d107b922342a28251e/_L5A4545.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mY3cFUkSZYN5Z-Y-Tp_zaPn2Sl_pM9-0B-ZbPexlnhOaDYOW3TKAK7IOGZ-MKyYCiJPSdalpoNX5pAFmoHRzhDIqBhlFtIl8q7OHk8LNswf53dJoo9W0YYhBAEiu2GIhSN",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/b6e2c3f53953d2f45e9f6626ad00c011/_L5A4537.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYmqEJshSGQf_dh1Dyw8SSeiTWK7qYnA2nGIjPoVgY8mUBy0CQSJZLH0UT0nP74byIBQp4op7-6WZqbdAP8dFP-nxOUGoDC0PlS0gyGGmRGujpICMR6Q4iq6Dxn24oXMAo",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/fc34644e2d031b4f19d46c16bbbb1fbf/_L5A4533.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYuYTSYoEwqHCmXbIIde8UUKWzKY0eKOFGrgyvl5t0gLKyiHSQhbR_b8ZK6lKU4yumFBb_lXG5pbRy8Sf3uEqLCf_MwwF3Ah6txUn9aLhHgucuePTie_jJUmMlPDuaCku7",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/770375f67819ac280d08e0ccad8ba161/_L5A4402.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYF64ilMT79YWwgZuW-WNisgqTXm1pG0_dil6bBwJR5WBPVpTAl9-ay3f_X_8ZPRbCxHopY0ht1oukROzK8IfNUXOwzwTtaniMZBrOxu7CKFrXSozQnRMB6tzrNjKMSR1k",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/db648db52ea3847e42db56cfbca453be/_L5A4391.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYfW9Fq6BGficsjGSmjyofZ4YCvbnJD-2ZO5VRqBeJYY5VuXiOtirb_CvTzt1JOt-Q6LWHbq16Xg1Suy0UvkngosHMw-e7t-pEMBBcB4T5_0NkGJswtJ9e1P5JwDGNUFfB",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/8736c7b30c674bcc5652a93457d6344b/_L5A4355.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYQv6lvY3xJPjif-QsBK5zlXvznrVyECSlvSvnrtqD5xWSkk5urIQN3SCpO_sjj4-Vc_ILvObAbdV1QB-v8djFY39pW_swsoaTof9GRaY8Ihh5CSILukSAFz9UzXa5zQki",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/7e3bcf4d455832b2fd663d73de21ebca/_L5A4306.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mY1PEcCYmdEn1hiXsAtz9G5yIuserFXUn9k94sKl7z290uocM06ZjjYfq2i3zxxixdvfztTgHqtVGoid7ERlLVOmFP5172sZyOgp9iPIgPqySg9gSVErBcpkhTfBsxU4Ah",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/17841fb7f81a9cb8cbaa51edd1c2e611/_L5A4268.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYW-iQZwJBrBZLO-0Pd1aFpZI771R_qHhCblef3U_DYGQTzU2MV8gINyllo34iCgTpSw_pDbnBFYWpJlp5L-ztpLynWB2-mhHE5ZGujMoGcUxntIWLoApWXIcHLlGbaeFz",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/c8eaa1a50c8f5981a337408d54c9a42b/_L5A4224.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYfBskVgkXjIq3Pz-DeQ7y3JEP6kpsJWOQacxsUYF2TuKgeB-ZxhFMCoaUIw7Tig3s9ATDFxjaXBEA5H0oceAmL1MHWWCz_j7X_3x6e2uchLRqsiDgbosXoEAEfgozoXsO",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/b0b7434ae3d317325b590775dacbf2e5/_L5A4197.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYDJRuFwp1PFYNjuW9f3LIYTN_ga5Mm8Luk4Ihaym75D6S-pcicIShMDgbUnyqTPv5prac6zgBxBhmHcFr-UVAT8t6HiuIStdGi9_vd7ulpwL-vQBmfrfmzzcgx3DAxh_u",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/3f8dbabc475f39289736bf6fb3f65845/_L5A4185.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYWvTOsujP0EFaZOjvb3ZLWw3CCzIny2G0hjVZKxzHUDsG-jgpYgpCn1IaHT-46LR_pahBxJgUk0KBpScMMnqWWxdKMs7zrtvKOsfIZS_je6rOSkfa-WWp6jgBsuVdZ4Sx",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/f1389604c27ce2f3d52048736b90290e/_L5A4180.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYdnvLNpfk5PB2DevTw6PTFksB5LQNn_u7sGdQ2gPLEbVpM71cVpoOg4icpI7mzliZXNbI-b3kYpDCXnQxbfKnhBufQgqz3Q3OqIB3NlOq15Jq4lpcpclliJNul95H2OU3",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/8e79f96223cda90466fab57ad607903d/_L5A4176.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYw3dSby3iQ2EL5pUTT6SX3MAiVsGLJoj0bWMXA-65U18_ZZYvU2HpY22AjsQxUFBDUf7aVx---GR3kWeajdRhfI9klnOj2HGgct__OEwcm8HvOv7yDA8XeNSAQcrz3vjK",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/233096a9f62ebedb1dabd52cf7c88858/_L5A4170.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYWLGWw39nILSEn67FbP65_r8k3yRU8cDhry4yEBKPiptFjw06gsz7rgXfxPSBBVonOl0Stz6V86miWnut7wXfexwgZqnPLciTVfqjIQLm43vl9-fNx9xpHxTIc8FSdVd6",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/74bd0872366a0eefc2dfcb45d6952f03/_L5A4165.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mY3Obu4wM02avavoZ0T9pMqH3I2_zWOBMVLai7fSWxr-9O9c4H9EjTRfkV7M4gZ1lY1MIXLmJ7C4W0G9a5icGJD2JzTALLNHZnmH8LkHtPiTuBfUUZ41LzWxKW1NwCY1Wa",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/83cd557a140b2ba82fe6b3c4edd3febb/_L5A4140.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYgf7n9qbOUcVrUX2QZ8Y1LLFkXrgqDciZc2Q-7UqcOcYCpaA7xKRzvgxIBC1aZ0l5djqYwhEnoPvNkQZd1Eq0nE0yFbwll_StoktfwkmILiBrXBZnO5Hgl7m79UBUjAMF",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/519c98bd506f367fcf436d6fbdbff86d/_L5A4137.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYQWQ8c2MnIxnIZi24c2usEy6_Fa6bUXw-mscbMTA1rPO0uHMg_z9EgTbq-6Q9V-WFs26SomfjPTDYEHMaN4IIOoQLaBGpHyFRGApDTx7CdHRlh28qPAZmKw-ZT6_Re9sg",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/75503c726bf49d31911c0de682697efc/_L5A4107.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYBazdNBmTjKn_Y5Wh0F61HI04F6UinNk29eEul9rAKqMB_s_nYLalJSXziktur1fIQ1qx5DlRKcpLf4eosmSR_7Cy-6X-ohSJ-7t9t3cFv8l7lfl8lgavUVuleyUHL1bT",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/562b55275cffbec7e0e0d745c81b8ab1/_L5A4105.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mY5kYiC7KPhV132KOoqmgizC2ALVb4u4__SouQN0gYAJA1HgzC96NXouLy1VOk2DuM4DmWxQxba3btyLVZ4RBmLo5B0dqv-3FdGDexf1opkw7kSORcAMvEjsm9RwxzmFLT",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/b963b43a28106f10cf5fa1f04b5c6ae3/_L5A4082___BIS.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYk8ydVnyN1woSCaJi4myzUoAgemo891E48OC1gcBOnOmLez6ENE7SGwkdgu0J96hwxhF3UIEijB1pe-2Flv4fWAJjndC-q3pKRnR0vREc_E8eh8G4lcS16PEO8ZrxP8D8",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/3029322e9ca856f38b6d3f35e7114ff5/1A5A9131.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mY_KDc8YID73RM6qh3fI3fQu7RPj12zkFWc1DKTng52VEgcBC2zKytrk60NAAfA4JaX76hSutqeZm-TxUrwCQwtCHjOHNDenMU98CYUKbo5VMdI7S9xPT3wfN5CBBlCk9_",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/e8932a8097a110915d87f72534788bc6/1A5A9130.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYPbRWSlbSTOz_eyOl20e3KAU1yKmJXExEw7aBqBALEk7lz8GAz3111XFQkDggaPrumbK1sVP7SGUThBZaaTbD_smpk_brlXZYWvOWb2L-Kg4uTrFTwWr2veXDMF7YB2qC",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/bf6228d077656cabbf491a5869cde990/1A5A9120.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYcNrTRpf4Ru0p28n93ijn08mfPdhO3Lhuq1jgW-3kjAdn2qPx7CD2FkEhJwlAwNYFVgrLWZTSBtQM1vjBLcNtfZPXMPnAPB8rCZHGfQpoMnG9Dqu-oYum8VJjjsFXVY86",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/586ce74070144d6d9a425d4d13f27570/1A5A9105.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mY8Zafr8czjdtp4lt8jn-q5iWFF3b0_-Ty4kuCyufh992X_CLG4BoCGYmCUqt6tF55bMwgcg35Y-JY9qT3OC9W8cS11CX2M5A_QhTlQ2-Ro8qL4Iim_GJyz7PEIv_5u2DT",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/4279d607a62abbb512b524ccd43b2645/1A5A9102.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYY3vHFtrbdU-JONtj06U-nVCOQxpbFIBgh47xVZCaWJJqLJFxLFbdXHLnk-oNU2IuK7mqcAI-8FM39dYV1INUzPIv9susC-C-LHwtP9EKxeObIpkKRxwaY0ALGB0I3F4y",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/e35120ed5f2256194d336497502cbdfa/1A5A9050.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYwSNM2A520z6AeEn1d2kISFi5XNKHlDbKWB1PRWrSqAIHyiSjrJjsE6ick45Uit5Vxy4f05w-0YaKskZdD54-u3mJwYYT337GgAhGHFL2IWHcI9S8Ey5lruLwoGEfQlSv",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/a6318795bd152c4bcff5abec80c93254/1A5A9010.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYDk0GPgcWvma7bxjPiiE9bMvpaAkH5dh9vo_RTy94LTDcZHsyVa40tJwhTUOA2dAL_XtbBFO5KCIqzaR2SMuv7r8Jnehb_BpVPVD7_9O6fIBir9n5CeUJea1A6gCItC1d",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/a6ad30d7955cbad71b3506beee54fc2b/1A5A9007.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYrTtNsVhXtgag1o84C_QxuIr0SZ_tf23Xq04ryJqpVdn5QeSrC3rJQZznawESGI7BgfTPysdrm_P9A5CPHWWfzoGSHLu21r7xNjKolOgisPtkFBYKfuQv5gn5q-lCEeNF",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/0559a00300930ac879ee8e1cdc8995cb/_L5A4811.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYarac7qp3Ak8tudaDzAlX31IHfrfwsKLXbBgxZJqK_3JUTkmuPx8YOUQv21HQ65jKHDoEIibC8Hkl88sbtO0XTEinhQdzgMafQGW56K0C8MDgo47VXZOaLqdMJEf1Ep_f",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/7f2ba891e4639311446b7fbb5c1f7e8e/_L5A4806.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYHrpoC61PzMUIBjnE6FOuN22ovAl59n1b5G-8J57Dt0FBkMQ-yhibH5sJuq1NIebuohCoinCRHntjVOwMgfFloo1IlFTDM5oIvAkH1Xh-x7mcK8RQCLTaB-Pq8p5ecMA7",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/3dc76ad8b362c7d715541ed44cf13d92/_L5A4800.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYm13yeJG-30IkrKYyH18J7qVK8bzq_KED97DWQEvzhheXJnIu5jz3TLiaWOACmyj3dRkQDdaoCpYuuRJuYv59QIzpYEn8s5z3z5KNQ-ctyIMFYUyAf01DxrLK2-xumi-s",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/d15032c0bdde3fd16cca4da1e39ee2c1/_L5A4797.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYoEsfM3h6gbubzSHD8WHy1GgwfzVowefmfq9nSr1UIAYgEGuqSDWptjOlJzQcW3j8vT64cjGvmy2slgHm0IkJsI3jfhfAubqfw1KWMyW0EQMa4fm-46rjwP8hqeYaOB8o",
    "https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/eeb34da8b72b2c00e066f17c82146e3e/_L5A4791.jpg?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYyp2XS5ZZUpPJNxyVTKSmfWjUerjwEE1CGzdJNdvnKmU-Rn-7FX_HErIuUMl03QfP-u-dgfPqVzskIe_sJIKe1vWJJSZdryeFkTBu-MZrqdGJfTHjGjuam9ci7zZvHUxe"
];

function createGallery(images) {
    const container = document.querySelector('.container'); 
    const columns = container.querySelectorAll('.column');
    columns.forEach(column => column.remove());
    const mySlides = container.querySelectorAll('.mySlides');
    mySlides.forEach(mySlide => mySlide.remove());

    images.forEach((image, i) => {
        const column = document.createElement('div');
        column.className = 'column';
        const img = document.createElement('img');
        img.className = 'demo cursor';
        img.src = image;
        img.style.width = '100%';
        img.onclick = () => currentSlide(i + 1);
        column.appendChild(img);
        container.appendChild(column);
    });

  
    images.forEach((image, index) => {
        const mySlide = document.createElement('div');
        mySlide.className = 'mySlides';
        const numberText = document.createElement('div');
        numberText.className = 'numbertext';
        numberText.textContent = `${index + 1} / ${images.length}`;
        const img = document.createElement('img');
        img.src = image;
        img.style.width = '100%';
        mySlide.appendChild(numberText);
        mySlide.appendChild(img);
        container.appendChild(mySlide);
    });
}
    createGallery(images);

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) { 
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '0';
    popup.style.left = '0';
    popup.style.width = '100%';
    popup.style.height = '100%';
    popup.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    popup.style.display = 'flex';
    popup.style.alignItems = 'center';
    popup.style.justifyContent = 'center';   
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.onclick = () => {
        img.classList.add('fadeOut');
        iconContainer.style.display='block';    
        setTimeout(() => {popup.remove(), iconContainer.style.display='none';}, 500);
    };
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px';
    closeButton.style.right = '20px';  
    const nextButton = document.createElement('button');
    nextButton.textContent = '❯';
    nextButton.onclick = () => {
        let nextSlideIndex = n + 1;
        if (nextSlideIndex > images.length) {
            nextSlideIndex = 1;
        }
        img.classList.add('fadeOut');
        setTimeout(() => {
            popup.remove();
            currentSlide(nextSlideIndex);
        }, 500);
    };
    nextButton.style.position = 'absolute';
    nextButton.style.top = '50%';
    nextButton.style.right = '20px';  
    const prevButton = document.createElement('button');
    prevButton.textContent = '❮';
    prevButton.onclick = () => {
        let prevSlideIndex = n - 1;
        if (prevSlideIndex < 1) {
            prevSlideIndex = images.length;
        }
        img.classList.add('fadeOut');
        setTimeout(() => {
            popup.remove();
            currentSlide(prevSlideIndex);
        }, 500);
    };
    prevButton.style.position = 'absolute';
    prevButton.style.top = '50%';
    prevButton.style.left = '20px';    
    const img = document.createElement('img');
    img.src = images[n - 1];
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
     const iconUrl = 'https://ugc.padletcdn.com/uploads/padlet-uploads/1227681803/7b8f830038d20f106598e9253ae75a5d/logo__1_.png?token=ZVIgB0nBlvXUZ5xB94h9X2LN_y0Z16SEeoDReR6kmVleP0bwALRAC6ZyClXNkOAHlqgCJuh_4pD_eqRZQ9ZYcEljkK4__Ny3yc8nUYIu64ggVzJWDUdjt0ZyNnxD97mYSNNcslyjRatZeFFrhJMZtOkEHefm-rCTD-O67Hp6ftsbRnrYkTZkwalIc7NZ5zru8aEL3F_5ClAc82tHEg5ACh1gdY6gLY5Tv5eIL98uBfthsF75xhJ4Mb23AXQGoOGX'; // add your icon URL here
     const iconOpacity = 0.5;
     const iconImg = document.createElement('img');
     iconImg.src = iconUrl;
     iconImg.style.opacity = iconOpacity;
     const iconContainer = document.createElement('div');
     iconContainer.appendChild(iconImg);
     iconContainer.style.display='none';    
     popup.appendChild(closeButton);
     popup.appendChild(nextButton);
     popup.appendChild(prevButton);
     popup.appendChild(img);
     popup.appendChild(iconContainer);
     document.body.appendChild(popup);
}