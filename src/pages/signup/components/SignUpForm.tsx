import { useForm } from 'react-hook-form';

import AuthModal from '@gdsc/components/auth/AuthModal';
import CompleteBtn from '@gdsc/components/button/CompleteBtn';
import SignupInput from '@gdsc/components/form/SignupInput';

import { SignupQuery } from '@gdsc/hooks/queries/post/SignupQuery';

import { SignUpSchema, SignUpSchemaType } from '@gdsc/utils/SignUpSchema.util';

import styled from '@emotion/styled';
import { signUpUserInterface } from '@gdsc/types/UserInterface';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';

const SignFormWrapper = styled.form`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
`;

const Error = styled.small`
  color: var(--color-cinarbar);
  font-size: var(--font-size-xs);
  margin: 0px 0px 12px 12px;
`;

const ButtonItem = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;

  margin: 50px 0px;
`;

const SignUpForm = () => {
  const { mutate, isPending, isError, error } = SignupQuery();
  //모달 창 나왔을때 isError랑 error 모달창 집어넣어야함.

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = (data: signUpUserInterface) => {
    const isConfirmed = window.confirm('회원가입을 완료하시겠습니까?');
    if (isConfirmed) {
      mutate(data);
    }
    console.log(data);
  };

  return (
    <AuthModal
      title='GDSC 계정 만들기'
      text={`Google 계정을 이용하여\n GDSC KNU 계정을 만들어보세요.`}
    >
      <SignFormWrapper onSubmit={handleSubmit(onSubmit)}>
        <SignupInput
          id='name'
          title='이름'
          placeholder='이름을 입력해주세요'
          type='text'
          register={register('name')}
        />
        <ErrorMessage
          errors={errors}
          name='name'
          render={({ message }) => <Error role='alert'>{message}</Error>}
        />
        <SignupInput
          id='age'
          title='나이'
          placeholder='나이를 입력해주세요.'
          type='text'
          register={register('age', { valueAsNumber: true })}
        />
        <ErrorMessage
          errors={errors}
          name='age'
          render={({ message }) => <Error role='alert'>{message}</Error>}
        />
        <SignupInput
          id='studentNumber'
          title='학번'
          placeholder='학번을 입력해주세요.'
          type='text'
          register={register('studentNumber')}
        />
        <ErrorMessage
          errors={errors}
          name='studentNumber'
          render={({ message }) => <Error role='alert'>{message}</Error>}
        />
        <SignupInput
          id='major'
          title='전공'
          placeholder='전공을 입력해주세요.'
          type='string'
          register={register('major')}
        />
        <ErrorMessage
          errors={errors}
          name='major'
          render={({ message }) => <Error role='alert'>{message}</Error>}
        />
        <ButtonItem>
          {isPending && (
            <CompleteBtn
              backgroundColor='blue'
              color='white'
              hoverColor='none '
              type='submit'
            >
              Submitting...
            </CompleteBtn>
          )}
          {!isPending && (
            <CompleteBtn
              backgroundColor='blue'
              color='white'
              hoverColor='none'
              type='submit'
            >
              회원가입
            </CompleteBtn>
          )}
        </ButtonItem>
      </SignFormWrapper>
    </AuthModal>
  );
};

export default SignUpForm;
