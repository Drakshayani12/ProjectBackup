#!/bin/bash

TMP_DIR=$(mktemp -d -t ci-XXXXXXXXXX)

# Script Varibles
SCRIPT_DIR="$(
    cd -P "$(dirname "${BASH_SOURCE[0]}")"
    pwd
)"
SKIP=$(awk '/^__TARFILE_FOLLOWS__/ { print NR + 1; exit 0; }' $0)

# Extract
tail -n +$SKIP $0 | tar zxf - -C $TMP_DIR >/dev/null 2>&1
cd $TMP_DIR
npm install axios xml-js
node $TMP_DIR/solution.js $SCRIPT_DIR # bash $TMP_DIR/solution.sh
exit 0
# NOTE: Don't place any newline characters after the last line below.
__TARFILE_FOLLOWS__
�      �ko�F2��+�BPQ�D=�$6� ����M�8���2E�$�|�KZr]����]r�)N���`Y;�ٙ�y.�B/M�00?�� �g3�?>� ��������h4�O�n<y<�< ��M"R�X1!�E$��/��O����tW��ҡ����O��sB.`�pBga1
���~��t���3�B�B�B��|��3�ZQ&�!ߜ#�菘! ������uj�C�s�.|7I�`B;�cG'���<L�(M�K��b�C'���~7��'abys����$2�Y�O�>�[�*��x�����d�ɺ��b�ӹ�>{1�ٜn0��G�{��u�]���yւz��8j�<��>�C�Ø�л)��m��ck�y�2d,w42ؒ�Cs�&�o��[ >5�C'�(+!A�(��}:jG`���6�*�ƃ�Z4�X>��mD�B�ũ��.4�ƥ��o��N�	t�+�:td%k�ʏ�������^�-I����1�{6X��#�$�^Q�0ƀ�B2ע+�x��5�9��p��pC�}M���7 c{u���{��率N�[n0?A!q�Oᄘk�2��]��+��Avzp �0(d�~Nݘ~�=�\2�]�n�Tb�Z�O�a|�',�6�t>�bsڔ�N���&:[H��Okk놥}��%�
��`#���T��,Sx�Ș���#g��D��	���0�|��p[H�����2�N*eB��\L.�C�N����P���T\z���Zã�trt<z<|�t2y�d*�:�����H�{�h'�q;^\��L�"vW�by�/�r�|m���84fv�5+�xnp����)�
�������� _~��|�����i!���{��c��CL��D!��2���¼��B��L��b���u�P/o-�ɱZ���M�ǺX�m��tT�����L���l��K��&
Q�o6U]��:��~�#�������~���G\�,��8αT��
�ϐy�O���/.!�!+�b���<FyL?�i��	膼�C�8j�.�> �Fi�2�1#��ly�(o݇����	��EI�1�3�(D~�@���J,`��V�4�5��_��<�00��v���ϊ�9�-�B����I=��;-i"=:#��]CڱW��%��p�ƶ�?+���QU	4�+U��'TB���J�pcT��Ӡ�UM6�K���F�9��[7�]� 7l��y�9;#�&#�`0�kT@(�8;�kJd@�A�q�ƅ�l��]�.���~�!k�y^���}x'�e����)tA+��e]���;p%�ܡ�)��Y�֕dW�;g]����a`��^XN��G�O=�=��P���Q,v�����<�� �R��Zr�&�5M��N�����>cV&=�(���N���%J�RXAhm,����+�:!�}2��p<R��GЍ^QmJB�AUx��Ȃ�(r
pzM�ոp�,vK�ۊ���vH�4����",%Ȯ������<1HL�i�$���M-�ڶ<�ڄB��z�:� ���|c6����]:IN���$e'���Ɂ��0����bK��$���Į�(�kB�Smwn
0�+��
�!����51_�жm�����PhV!7Sf�t_E�;R�̊K�T��@�'��ޫ�7u�Z&'ļ_yBV6i�]�ha��t	�n]��NԨ<ԫ&W��g?lK�S�� hz�O�i�<�VK>�@ߋ���oL�͐�	���J����G���ք�<�O�Se���͗�ޜ�
���Q/R05\2sm��� �R"�]�)dY��3Iu�/_^t�S���ԩjD��v��M��kE�1@xF�&�w3ڣ�n՚��[�Y���nW�RNv1�1���D_��KL�})�\�]�5Mt��JC'ŭS�qN�#��X�|%���9z��� ��B��S2��D�\俍d���3��֫!@@������92����`�L��?������VER�k���G����@�N�.�|kp.#�5���F���HD�}�h�u	l�k�b>k)pM�k���l;��o�'��se�$�8�Y�8����]�A�SVk���ڿ���Hk[�0�QA�e��P���U��)rq%.��fN�3�P)��Yg�1C|Ŏϊ]��=��6:g�8���;�[F��3rQ|AO/��d��#���	kV��e�f��&x1��6�\n"��>GLI'�غ�2�Bȃ�;��,{�"�9�����J[�Ԑ�Q�ֆi�5����5�BKd�hl�X�O�;6m(�|'.����ط<�7Z�ފ~�"Ǝ���0ؐ��u� N�Cסu?̠CU���0Kd��C�Т�>�.M����!��En���U�I*ypVn�Ĩp�l���Sdy�-M�x�0�{�g,��]u>\Ue>;+k.�9��ȳn�e����D(�b��%���}��dcM��Uo ��\�v��ż���΢y�R��S�� �1(��������l2��
���?& �G������Շ7��T忐jb���jTI����E���Z��}��G�����fr��L��`����0�Wq5_g�k���|�6�UD�����]a��(�c�]�{͏��W�x�j���=���u�:�^5_��;qR���}6^�	4$]���؆J�ɯ�N�glD2�/�M�.�o��>>~jN�f���͒��6�;�a�f�b�4q��?��@��|�ș��Eُ�j�O��E<�.��%��j���PF-^.t9q��M�ݜ�g��_�4�WꐖL\�W$%�����W ��V��ޗK�^mK,�A��Z�<U��#�<O�y�E�*�58+���j�r�'v�\"��K�&�϶\��c��U����W|x�WĽa�;�ilD!���'���e�F�{وטUN���g�J�5^��� ����7T��>��ǣ#"�'�+hE�01 �m���E����⁑��5���^����Y������i��8�>�)�=8LM
�,xϏan� ��ej0�tu�u��/J���,��7�zʌB�W�o��57ԆI<�0q/<�3�S�=kEy\M4r2?/2����>ϋ��{��/O\�+�*X%P�/����������# �(W%K�а
M�+�����L�?uɄ�P�77����W9�?W�!��~��IU�-M�����\�ą4~������-�B-��B-��B-��B-��B-��B-��B-��B-��B-����l%� P  